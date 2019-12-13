# How to update the gh-pages:

### Be careful to only push the required node_modules

1. package.json: adjust the neo.mjs package version
2. npm install
3. github/pages/node_modules/neo.mjs/src/Neo.mjs
4. set useGoogleAnalytics to true
5. terminal: cd node_modules/neo.mjs/
6. npm install
7. npm run dev-css-structure
8. npm run dev-theme-dark
9. npm run dev-theme-light
10. npm run prod-css-structure
11. npm run prod-theme-dark
12. npm run prod-theme-light
13. npm run build-development
14. npm run build-production
15. npm run create-app (default values)
16. npm run dev-build-my-apps
17. npm run prod-build-my-apps
18. npm run generate-docs-json
19. github/pages/node_modules/neo.mjs/dist/development/apps/realworld/index.html => adjust the content (see non dist index)
20. github/pages/node_modules/neo.mjs/dist/production/apps/realworld/index.html => adjust the content
21. git add on the neo.mjs node_module
22. ensure to NOT push the node_modules inside the neo.mjs node_module. except (if the version changed):
    1. @ fortawesome
    2. highlightjs-line-numbers.js
    3. siesta-lite (ONLY siesta-all.js & resources/*)
23. git push