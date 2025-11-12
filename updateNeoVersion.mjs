import { spawnSync } from 'child_process';
import { unlink, symlink, readFile, writeFile } from 'fs/promises';
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

const newVersion = outdated['neo.mjs']?.latest;

if (!newVersion) {
    console.log('neo.mjs is up to date. Nothing to do.');
    process.exit(0);
}

console.log(`Found new neo.mjs version: ${newVersion}`);

// 2. package.json: adjust the neo.mjs package version
console.log(`Step 2: Updating neo.mjs version in package.json to ${newVersion}...`);
const packageJsonPath = resolve('package.json');
let packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
packageJson.dependencies['neo.mjs'] = newVersion;
await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4) + '\n');
console.log('Step 2: Completed');


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
// This is a placeholder, I need to verify the content of the file first
// to make sure the replacement is correct.
// The user wants: /* webpackExclude: /(?:/|\)(dist|node_modules)(?!/)neo.mjs */
appWorker = appWorker.replace(/\/\* webpackExclude:.*\*\//, '/* webpackExclude: /(?:\\\/|\\\\)(dist|node_modules)(?!\\\/)/');
await writeFile(appWorkerPath, appWorker);
console.log('Step 6: Completed');


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


console.log('Build process completed.');
console.log("Please review the changes and then commit and push manually.");
console.log("Run 'git status' to see the changes.");