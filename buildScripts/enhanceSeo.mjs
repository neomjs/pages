/**
 * @module buildScripts.enhanceSeo
 * @summary Copies production Portal entry, sitemap (`sitemap.xml`, `sitemap-core.xml`, `sitemap-discussions.xml`,
 * `sitemap-archive.xml`), and LLM context (`llms.txt`, `llms-full.txt`, `llms-all.txt`) artifacts to the site root,
 * injects the root-anchored `<base href="/dist/production/apps/portal/">` tag, hash-link fix, and pre-boot Service
 * Worker cache-upgrade guard into root `index.html`, and enables `routerMode: 'pathname'` in the production Portal
 * `neo-config.json` (`#154`, `neomjs/middleware-v2#21`).
 */
import { spawnSync } from 'child_process';
import { existsSync } from 'fs';
import { copyFile, readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

console.log('Starting SEO enhancement process...');

const sourceDir = resolve('node_modules/neo.mjs/dist/production/apps/portal');
const destDir = resolve('.');

const requiredFilesToCopy = [
    'index.html',
    'llms.txt',
    'robots.txt',
    'sitemap.xml'
];

const optionalFilesToCopy = [
    'llms-full.txt',
    'llms-all.txt',
    'sitemap-core.xml',
    'sitemap-discussions.xml',
    'sitemap-archive.xml'
];

const copiedFiles = [];

// 1. Copy files
console.log('Step 1: Copying files to root...');
for (const file of requiredFilesToCopy) {
    const sourceFile = resolve(sourceDir, file);
    const destFile = resolve(destDir, file);
    console.log(`  Copying ${sourceFile} to ${destFile}`);
    await copyFile(sourceFile, destFile);
    copiedFiles.push(file);
}

for (const file of optionalFilesToCopy) {
    const sourceFile = resolve(sourceDir, file);
    if (!existsSync(sourceFile)) {
        continue;
    }
    const destFile = resolve(destDir, file);
    console.log(`  Copying ${sourceFile} to ${destFile}`);
    await copyFile(sourceFile, destFile);
    copiedFiles.push(file);
}
console.log('Step 1: Completed');

// 2. Inject <base> tag, pre-boot SW cache-upgrade guard, and navigation fix script into index.html
console.log('Step 2: Injecting <base> tag, pre-boot SW upgrade guard, and navigation fix script into index.html...');
const indexPath = resolve(destDir, 'index.html');
let indexContent = await readFile(indexPath, 'utf-8');

const defaultConfig = await readFile(resolve('node_modules/neo.mjs/src/DefaultConfig.mjs'), 'utf-8');
const neoVersion = defaultConfig.match(/version\s*:\s*'([^']+)'/)?.[1];
if (!neoVersion) {
    console.error('  Error: Neo.config.version not found in node_modules/neo.mjs/src/DefaultConfig.mjs.');
    process.exit(1);
}

const microLoaderTag = '<script src="../../src/MicroLoader.mjs" type="module"></script>';
if (!indexContent.includes(microLoaderTag)) {
    console.error('  Error: MicroLoader.mjs script tag not found in index.html.');
    process.exit(1);
}

// The loader's address is absolute against <base>: WebKit resolves an inline module's import() against the
// document's own address instead, which loaded /src/MicroLoader.mjs and left the page blank (#101)
const swBootGuardScript = `<script type="module">
const expectedCache = ${JSON.stringify(`neo-runtime-${neoVersion}`)};
if ('serviceWorker' in navigator && 'caches' in window) {
    try {
        const keys = await caches.keys();
        if (keys.some(k => k.startsWith('neo-runtime-') && k !== expectedCache)) {
            const reg = await navigator.serviceWorker.getRegistration(new URL('../../', document.baseURI).href);
            if (reg) {
                await reg.update();
                const sw = reg.installing || reg.waiting;
                if (sw && sw.state !== 'activated' && sw.state !== 'redundant') {
                    await new Promise(resolve => {
                        const timer = setTimeout(resolve, 5000);
                        sw.addEventListener('statechange', () => {
                            if (sw.state === 'activated' || sw.state === 'redundant') {
                                clearTimeout(timer);
                                resolve();
                            }
                        });
                    });
                }
            }
            for (const k of await caches.keys()) {
                if (k.startsWith('neo-runtime-') && k !== expectedCache) {
                    await caches.delete(k);
                }
            }
        }
    } catch {}
}
await import(new URL('../../src/MicroLoader.mjs', document.baseURI).href);
</script>`;

indexContent = indexContent.replace(microLoaderTag, swBootGuardScript);

const baseTag = '<base href="/dist/production/apps/portal/">';
const navFixScript = `
<script>
document.addEventListener('click', function(event) {
    let {target} = event;
    while (target && target.tagName !== 'A') target = target.parentElement;
    if (target?.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        window.location.hash = target.getAttribute('href');
    }
});
</script>
`;

if (indexContent.includes('<head>')) {
    indexContent = indexContent.replace('<head>', `<head>\n    ${baseTag}`);
    console.log('  <base> tag injected successfully.');
} else {
    console.error('  Error: <head> tag not found in index.html. Could not inject <base> tag.');
    process.exit(1);
}

if (indexContent.includes('</body>')) {
    indexContent = indexContent.replace('</body>', `${navFixScript}\n</body>`);
    console.log('  Navigation fix script injected successfully.');
} else {
    console.error('  Error: </body> tag not found in index.html. Could not inject navigation fix script.');
    process.exit(1);
}

await writeFile(indexPath, indexContent);

const portalConfigRelPath = 'node_modules/neo.mjs/dist/production/apps/portal/neo-config.json';
const portalConfigPath    = resolve(destDir, portalConfigRelPath);
const portalConfig        = JSON.parse(await readFile(portalConfigPath, 'utf-8'));
portalConfig.routerMode   = 'pathname';
await writeFile(portalConfigPath, JSON.stringify(portalConfig));
console.log('  Production Portal neo-config.json updated with routerMode: "pathname".');
console.log('Step 2: Completed');

// 3. Stage the root files and production Portal config, which the deploy commits. --sparse stages them in a sparse clone too.
console.log('Step 3: Staging the root files and Portal config...');
const gitAddProcess = spawnSync('git', ['add', '--sparse', ...copiedFiles, portalConfigRelPath]);
if (gitAddProcess.status !== 0) {
    console.error(`'git add' failed with exit code ${gitAddProcess.status}`);
    if (gitAddProcess.stderr) {
        console.error(gitAddProcess.stderr.toString());
    }
    process.exit(1);
}
console.log('Step 3: Completed');

console.log('SEO enhancement process completed.');
