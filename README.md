# How to update the gh-pages:

To update the `neo.mjs` version and prepare the gh-pages for deployment, simply run the following command:

```bash
npm run update-neo-version
```

This script will automatically perform all the necessary steps, including:
- Fetching the latest `neo.mjs` version.
- Updating `package.json`.
- Installing dependencies.
- Building `neo.mjs`.
- Applying required configurations for the pages environment.
- Staging the new `neo.mjs` module.
- Enhancing SEO by preparing the root `index.html`.

After the script finishes, you can review the changes with `git status`, then commit and push them.
