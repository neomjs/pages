import { copyFile, readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

console.log('Starting SEO enhancement process...');

const sourceDir = resolve('node_modules/neo.mjs/dist/production/apps/portal');
const destDir = resolve('.');

const filesToCopy = [
    'index.html',
    'llms.txt',
    'robots.txt',
    'sitemap.xml'
];

// 1. Copy files
console.log('Step 1: Copying files to root...');
for (const file of filesToCopy) {
    const sourceFile = resolve(sourceDir, file);
    const destFile = resolve(destDir, file);
    console.log(`  Copying ${sourceFile} to ${destFile}`);
    await copyFile(sourceFile, destFile);
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
    while (target?.tagName !== 'A') target = target.parentElement;
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

console.log('SEO enhancement process completed.');
