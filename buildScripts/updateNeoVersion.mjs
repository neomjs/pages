import {spawnSync}                                           from 'child_process';
import {existsSync}                                          from 'fs';
import {cp, mkdir, readFile, rm, symlink, unlink, writeFile} from 'fs/promises';
import os                                                    from 'os';
import {resolve}                                             from 'path';

const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

/**
 * Fetches one revision of a repository, one commit deep, optionally narrowed to sparse paths.
 * `ref` may be a tag, a branch or a commit SHA.
 * @param {String}   url
 * @param {String}   ref
 * @param {String}   dir
 * @param {String[]} [sparse]
 * @returns {String|null} The checked-out commit, or null when the ref does not resolve
 */
function fetchRevision(url, ref, dir, sparse) {
    const git = (...args) => spawnSync('git', args, { stdio: 'inherit' }).status === 0;

    const fetched = git('init', '-q', dir) &&
        git('-C', dir, 'remote', 'add', 'origin', url) &&
        (!sparse || git('-C', dir, 'sparse-checkout', 'set', ...sparse)) &&
        git('-C', dir, 'fetch', '-q', '--depth', '1', '--filter=blob:none', 'origin', ref) &&
        git('-C', dir, 'checkout', '-q', 'FETCH_HEAD');

    return fetched ? spawnSync('git', ['-C', dir, 'rev-parse', 'HEAD']).stdout.toString().trim() : null;
}

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


// 3. Delete the 5 symlinks
console.log('Step 3: Deleting old symlinks...');
try { await unlink('node_modules/@fortawesome'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
try { await unlink('node_modules/highlightjs-line-numbers.js'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
try { await unlink('node_modules/marked'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
try { await unlink('node_modules/mermaid'); } catch (e) { if (e.code !== 'ENOENT') throw e; }
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

// 4.1 Fetch the portal's content at pinned revisions
// Release notes and the lockfile come from the engine at the release this site installs: the tag equal to the installed
// neo.mjs version, or --engine-ref=<tag|sha> for a dry run before that tag exists. The conversations come from
// github-content-sync at the commit contentPins.json pins. Nothing is read at a branch head, so a deploy serves content of
// known revisions, and a missing family ends the build instead of shipping a portal without it.
console.log('Step 4.1: Fetching the portal content at pinned revisions...');
const contentDest      = resolve('node_modules/neo.mjs/resources/content');
const engineClonePath  = resolve('temp_neo_clone');
const corpusClonePath  = resolve('temp_corpus_clone');
const contentPins      = JSON.parse(await readFile(resolve('buildScripts/contentPins.json'), 'utf-8'));
const installedVersion = JSON.parse(await readFile(resolve('node_modules/neo.mjs/package.json'), 'utf-8')).version;
const engineRef        = process.argv.find(arg => arg.startsWith('--engine-ref='))?.split('=')[1] || installedVersion;

const removeClones = async () => {
    await rm(engineClonePath, { recursive: true, force: true });
    await rm(corpusClonePath, { recursive: true, force: true });
};

// Every failure here ends the build, and takes both temporary clones with it
const failContent = async message => {
    console.error(message);
    await removeClones();
    process.exit(1);
};

await removeClones();

const engineUrl    = 'https://github.com/neomjs/neo.git';
const engineCommit = fetchRevision(engineUrl, engineRef, engineClonePath, ['resources/content/release-notes']) ||
    await failContent(`Failed to fetch ${engineUrl} at ${engineRef}.`);
console.log(`Engine content: ${engineRef} at ${engineCommit}`);

const { repository: corpusRepository, commit: corpusPin } = contentPins.corpus;
const corpusCommit = fetchRevision(corpusRepository, corpusPin, corpusClonePath, ['neo']) ||
    await failContent(`Failed to fetch ${corpusRepository} at ${corpusPin}.`);

if (corpusCommit !== corpusPin) {
    await failContent(`contentPins.json must name a full commit SHA: ${corpusPin} resolved to ${corpusCommit}.`);
}
console.log(`Corpus content: ${corpusCommit}`);

// Step 7 checks the built ticket index against this, so a stale copy cannot pass for the pinned one
const corpusIndex        = JSON.parse(await readFile(resolve(corpusClonePath, '_index.json'), 'utf-8'));
const manifestMaxIssueId = corpusIndex.reduce((max, entry) => entry.repoSlug === 'neo' && entry.type === 'issues' ? Math.max(max, entry.id) : max, 0);

// Legacy layouts (issue-archive, pr-archive) are deleted, never copied — npm install
// only wipes node_modules/neo.mjs on a version change, so --force re-runs need the rm.
const contentFamilies = [
    ['release-notes', resolve(engineClonePath, 'resources/content/release-notes')],
    ...['issues', 'pulls', 'discussions', 'archive'].map(dir => [dir, resolve(corpusClonePath, 'neo', dir)])
];

await mkdir(contentDest, { recursive: true });

for (const dir of ['issue-archive', 'pr-archive', ...contentFamilies.map(([dir]) => dir)]) {
    await rm(resolve(contentDest, dir), { recursive: true, force: true });
}

for (const [dir, source] of contentFamilies) {
    if (!existsSync(source)) {
        await failContent(`Content family '${dir}' is missing: ${source}`);
    }

    console.log(`Copying ${dir}...`);
    await cp(source, resolve(contentDest, dir), { recursive: true });
}

// The npm tarball ships no lockfile, so a fresh `npm i` inside node_modules/neo.mjs
// re-resolves floating (dev)dependencies and can hit peer conflicts the release never
// saw (e.g. pinned postcss vs cssnano@^7 peer ranges). The tagged engine's lockfile is
// the resolution the release was actually built and tested with. Gitignored in pages.
console.log('Copying package-lock.json...');
await cp(resolve(engineClonePath, 'package-lock.json'), resolve('node_modules/neo.mjs/package-lock.json'));

await removeClones();
console.log('Step 4.1: Completed');

// 5. Modify neo.mjs/src/DefaultConfig.mjs
console.log('Step 5: Configuring DefaultConfig.mjs for GitHub Pages...');
const defaultConfigPath = resolve('node_modules/neo.mjs/src/DefaultConfig.mjs');
let defaultConfig = await readFile(defaultConfigPath, 'utf-8');
defaultConfig = defaultConfig.replace(/isGitHubPages\s*:\s*false/, 'isGitHubPages: true');
await writeFile(defaultConfigPath, defaultConfig);
console.log('Step 5: Completed');



// 7. Build neo.mjs
console.log('Step 7: Building neo.mjs...');
const neoPath = resolve('node_modules/neo.mjs');

console.log(`Running 'npm i' inside ${neoPath}...`);
const neoInstallProcess = spawnSync(npmCmd, ['i'], { cwd: neoPath, stdio: 'inherit' });
if (neoInstallProcess.status !== 0) {
    console.error(`'npm i' inside neo.mjs failed with exit code ${neoInstallProcess.status}`);
    process.exit(1);
}

// Regenerate the portal's content indexes and SEO files from the content step 4.1 copied.
// The npm package ships neither sitemap.xml nor llms.txt, and build-all only copies what
// exists, so without this the site serves a stale index and step 10 finds no llms.txt.
console.log(`Regenerating content indexes and SEO files inside ${neoPath}...`);
const rebuildProcess = spawnSync(process.execPath, ['buildScripts/docs/rebuildContentIndexesAndSeo.mjs'], { cwd: neoPath, stdio: 'inherit' });
if (rebuildProcess.status !== 0) {
    console.error(`Regenerating content indexes and SEO files failed with exit code ${rebuildProcess.status}`);
    process.exit(1);
}

// A generator that read anything but the pinned content builds green too. The ticket index's highest id tells them
// apart: it must reach the pinned manifest's.
const ticketIdMap     = JSON.parse(await readFile(resolve(neoPath, 'apps/portal/resources/data/tickets/idMap.json'), 'utf-8'));
const builtMaxIssueId = Object.keys(ticketIdMap).reduce((max, id) => Math.max(max, Number(id)), 0);

if (builtMaxIssueId < manifestMaxIssueId) {
    console.error(`The built ticket index stops at ${builtMaxIssueId}, below the pinned corpus manifest's ${manifestMaxIssueId}.`);
    process.exit(1);
}
console.log(`Ticket index reaches ${builtMaxIssueId} (pinned manifest: ${manifestMaxIssueId}).`);

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
await symlink('./neo.mjs/node_modules/mermaid', resolve(nmPath, 'mermaid'), 'dir');
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
