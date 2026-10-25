/**
 * @module buildScripts.enhanceSeo
 * @summary Copies production Portal entry, sitemap (`sitemap.xml`, `sitemap-core.xml`, `sitemap-archive.xml`),
 * and LLM context (`llms.txt`, `llms-full.txt`, `llms-all.txt`) artifacts to the site root and injects the
 * GitHub Pages `<base>` tag into the root `index.html`.
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

// 2. Inject <base> tag and navigation fix script into index.html
console.log('Step 2: Injecting <base> tag and navigation fix script into index.html...');
const indexPath = resolve(destDir, 'index.html');
let indexContent = await readFile(indexPath, 'utf-8');

const baseTag = '<base href="./dist/production/apps/portal/">';
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
console.log('Step 2: Completed');

// 3. Stage the root files, which the deploy commits. --sparse stages them in a sparse clone too.
console.log('Step 3: Staging the root files...');
const gitAddProcess = spawnSync('git', ['add', '--sparse', ...copiedFiles]);
if (gitAddProcess.status !== 0) {
    console.error(`'git add' failed with exit code ${gitAddProcess.status}`);
    if (gitAddProcess.stderr) {
        console.error(gitAddProcess.stderr.toString());
    }
    process.exit(1);
}
console.log('Step 3: Completed');

console.log('SEO enhancement process completed.');
