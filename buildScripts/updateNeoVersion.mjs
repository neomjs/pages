import { spawnSync } from 'child_process';
import { cp, mkdir, readFile, rm, symlink, unlink, writeFile } from 'fs/promises';
import os from 'os';
import { resolve } from 'path';

const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

console.log('Starting neo.mjs version update process...');

// 1. Get latest neo.mjs version
console.log('Step 1: Getting latest neo.mjs version...');
const outdatedProcess = spawnSync(npmCmd, ['outdated', '--json']);

// npm outdated exits with 1 if there are outdated packages, which is not an error for us.
if (outdatedProcess.status !== 0 && outdatedProcess.status !== 1) {
    console.error('Failed to check for outdated packages.');
    if (outdatedProcess.stderr) {
        console.error(outdatedProcess.stderr.toString());
    }
    process.exit(1);
}

const outdatedJson = outdatedProcess.stdout.toString();
let outdated;

try {
    outdated = JSON.parse(outdatedJson);
} catch (e) {
    console.error('Failed to parse JSON from "npm outdated".');
    console.error('Received:', outdatedJson);
    process.exit(1);
}

const isForce   = process.argv.includes('--force');
const newVersion = outdated['neo.mjs']?.latest;

if (!newVersion && !isForce) {
    console.log('neo.mjs is up to date. Nothing to do.');
    process.exit(0);
}

if (!newVersion && isForce) {
    console.log('neo.mjs is up to date, but --force is used. Proceeding...');
    const packageJsonPath = resolve('package.json');
    const packageJson     = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
    const currentVersion  = packageJson.dependencies['neo.mjs'];
    console.log(`Using current version: ${currentVersion}`);
} else {
    console.log(`Found new neo.mjs version: ${newVersion}`);

    // 2. package.json: adjust the neo.mjs package version
    console.log(`Step 2: Updating neo.mjs version in package.json to ${newVersion}...`);
    const packageJsonPath = resolve('package.json');
    let packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
    packageJson.dependencies['neo.mjs'] = newVersion;
    await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4) + '\n');
    console.log('Step 2: Completed');
}


// 3. Delete the 4 symlinks
console.log('Step 3: Deleting old symlinks...');
try { await unlink('node_modules/@fortawesome'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
try { await unlink('node_modules/highlightjs-line-numbers.js'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
try { await unlink('node_modules/marked'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
try { await unlink('node_modules/monaco-editor'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
console.log('Step 3: Completed');

// 4. npm install
console.log('Step 4: Running npm install...');
const installProcess = spawnSync(npmCmd, ['install'], { stdio: 'inherit' });
if (installProcess.status !== 0) {
    console.error(`'npm install' failed with exit code ${installProcess.status}`);
    process.exit(1);
}
console.log('Step 4: Completed');

// 4.1 Fetch Release Notes from source repo
console.log('Step 4.1: Fetching Release Notes from source repo...');
const tempClonePath = resolve('temp_neo_clone');
const releaseNotesDest = resolve('node_modules/neo.mjs/resources/content');

// Clean up any previous run artifacts
await rm(tempClonePath, { recursive: true, force: true });

console.log('Cloning neomjs/neo (depth 1)...');
// We need to use git for cloning
const gitClone = spawnSync('git', ['clone', '--depth', '1', 'https://github.com/neomjs/neo.git', tempClonePath], { stdio: 'inherit' });

if (gitClone.status !== 0) {
    console.error('Failed to clone neo repository for release notes.');
    process.exit(1);
}

console.log('Copying resources/content/release-notes...');
await mkdir(releaseNotesDest, { recursive: true });
await cp(resolve(tempClonePath, 'resources/content/release-notes'), resolve(releaseNotesDest, 'release-notes'), { recursive: true });

console.log('Copying resources/content/issues...');
await cp(resolve(tempClonePath, 'resources/content/issues'), resolve(releaseNotesDest, 'issues'), { recursive: true });

console.log('Copying resources/content/issue-archive...');
await cp(resolve(tempClonePath, 'resources/content/issue-archive'), resolve(releaseNotesDest, 'issue-archive'), { recursive: true });

// Cleanup
await rm(tempClonePath, { recursive: true, force: true });
console.log('Step 4.1: Completed');

// 5. Modify neo.mjs/src/DefaultConfig.mjs
console.log('Step 5: Configuring DefaultConfig.mjs for GitHub Pages...');
const defaultConfigPath = resolve('node_modules/neo.mjs/src/DefaultConfig.mjs');
let defaultConfig = await readFile(defaultConfigPath, 'utf-8');
defaultConfig = defaultConfig.replace(/isGitHubPages\s*:\s*false/, 'isGitHubPages: true');
await writeFile(defaultConfigPath, defaultConfig);
console.log('Step 5: Completed');

// 6. Modify neo.mjs/src/worker/App.mjs
console.log('Step 6: Configuring App.mjs for GitHub Pages...');
const appWorkerPath = resolve('node_modules/neo.mjs/src/worker/App.mjs');
let appWorker = await readFile(appWorkerPath, 'utf-8');

// Fix potentially broken comment from previous runs (missing closing */)
const brokenComment = '/* webpackExclude: /(?:\\/|\\\\)(dist|node_modules)(?!\\/)/';
if (appWorker.includes(brokenComment) && !appWorker.includes(brokenComment + ' */')) {
    console.log('Fixing broken webpackExclude comment...');
    appWorker = appWorker.replace(brokenComment, brokenComment + ' */');
}

// Update to the correct regex
appWorker = appWorker.replace(/\/\* webpackExclude:.*\*\//, '/* webpackExclude: /(?:\\/|\\\\)(dist|node_modules)\\/(?!neo.mjs)/ */');

await writeFile(appWorkerPath, appWorker);
console.log('Step 6: Completed');

// 6.1 Modify neo.mjs/src/worker/Canvas.mjs
console.log('Step 6.1: Configuring Canvas.mjs for GitHub Pages...');
const canvasWorkerPath = resolve('node_modules/neo.mjs/src/worker/Canvas.mjs');
let canvasWorker = await readFile(canvasWorkerPath, 'utf-8');

if (canvasWorker.includes(brokenComment) && !canvasWorker.includes(brokenComment + ' */')) {
    console.log('Fixing broken webpackExclude comment in Canvas.mjs...');
    canvasWorker = canvasWorker.replace(brokenComment, brokenComment + ' */');
}

// Update to the correct regex
canvasWorker = canvasWorker.replace(/\/\* webpackExclude:.*\*\//, '/* webpackExclude: /(?:\\/|\\\\)(dist|node_modules)\\/(?!neo.mjs)/ */');

await writeFile(canvasWorkerPath, canvasWorker);
console.log('Step 6.1: Completed');


// 7. Build neo.mjs
console.log('Step 7: Building neo.mjs...');
const neoPath = resolve('node_modules/neo.mjs');

console.log(`Running 'npm i' inside ${neoPath}...`);
const neoInstallProcess = spawnSync(npmCmd, ['i'], { cwd: neoPath, stdio: 'inherit' });
if (neoInstallProcess.status !== 0) {
    console.error(`'npm i' inside neo.mjs failed with exit code ${neoInstallProcess.status}`);
    process.exit(1);
}

console.log(`Running 'npm run build-all' inside ${neoPath}...`);
const neoBuildProcess = spawnSync(npmCmd, ['run', 'build-all'], { cwd: neoPath, stdio: 'inherit' });
if (neoBuildProcess.status !== 0) {
    console.error(`'npm run build-all' inside neo.mjs failed with exit code ${neoBuildProcess.status}`);
    process.exit(1);
}
console.log('Step 7: Completed');

// 8. Create symlinks
console.log('Step 8: Creating new symlinks...');
const nmPath = resolve('node_modules');
await symlink('./neo.mjs/node_modules/@fortawesome', resolve(nmPath, '@fortawesome'), 'dir');
await symlink('./neo.mjs/node_modules/highlightjs-line-numbers.js', resolve(nmPath, 'highlightjs-line-numbers.js'), 'file');
await symlink('./neo.mjs/node_modules/marked', resolve(nmPath, 'marked'), 'dir');
await symlink('./neo.mjs/node_modules/monaco-editor', resolve(nmPath, 'monaco-editor'), 'dir');
console.log('Step 8: Completed');

// 9. git add on the neo.mjs node_module
console.log('Step 9: Staging neo.mjs module...');
const gitAddProcess = spawnSync('git', ['add', 'node_modules/neo.mjs']);
if (gitAddProcess.status !== 0) {
    console.error(`'git add' failed with exit code ${gitAddProcess.status}`);
    if (gitAddProcess.stderr) {
        console.error(gitAddProcess.stderr.toString());
    }
    process.exit(1);
}
console.log('Step 9: Completed');

// 10. Enhance SEO
console.log('Step 10: Enhancing SEO...');
const seoProcess = spawnSync(npmCmd, ['run', 'enhance-seo'], { stdio: 'inherit' });
if (seoProcess.status !== 0) {
    console.error(`'npm run enhance-seo' failed with exit code ${seoProcess.status}`);
    process.exit(1);
}
console.log('Step 10: Completed');


console.log('Build process completed.');
console.log("Please review the changes and then commit and push manually.");
console.log("Run 'git status' to see the changes.");
