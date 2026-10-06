# How to update the gh-pages:

A deploy serves one `neo.mjs` release and one revision of the conversation corpus. `package.json` pins the release; `buildScripts/contentPins.json` pins the conversations.

1. **Move the corpus pin** to the content this deploy should serve, usually the corpus head:

   ```bash
   git ls-remote https://github.com/neomjs/github-content-sync.git HEAD
   ```

   Put that SHA into `corpus.commit`. The deploy commit then records which conversations the site serves.

2. **Build and stage:**

   ```bash
   npm run update-neo-version
   ```

   The script installs the latest `neo.mjs`, reads the release notes from that version's engine tag and the conversations from the pin, builds `neo.mjs` for GitHub Pages, stages `node_modules/neo.mjs` and prepares the root SEO files. Step 4.1 prints the pin's date, and the corpus head when the pin trails it.

   When the installed `neo.mjs` is already the latest release, the script stops at step 1 ("neo.mjs is up to date") and never reads the pin. To redeploy with only a moved pin, run `node buildScripts/updateNeoVersion.mjs --force`.

3. **Review, commit and push.** Run `git status`, then commit and push to `main`.

**Rehearsal before a release tag exists:** install the candidate first. For example, run `npm pack` in an engine checkout and point the `neo.mjs` dependency in `package.json` at the tarball with `file:<path>.tgz`. Then run `node buildScripts/updateNeoVersion.mjs --force --engine-ref=<full engine commit SHA>`. `--engine-ref` only chooses where the release notes and the lockfile come from; the engine code that builds is the installed package, so pack the candidate from that same commit. Commit nothing from a rehearsal.
