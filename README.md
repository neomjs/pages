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

3. **Review, commit and push.** Run `git status`, then commit and push to `main`.

**Dry run before a release tag exists:** `node buildScripts/updateNeoVersion.mjs --force --engine-ref=<full engine commit SHA>`. `--engine-ref` reads the release notes from that commit instead of the tag. `--force` proceeds when npm has no newer `neo.mjs` than the one installed.
