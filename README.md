# How to update the gh-pages:

### Be careful to only push the required node_modules

1. package.json: adjust the neo.mjs package version
2. npm install
3. github/pages/node_modules/neo.mjs/src/Neo.mjs => set useGoogleAnalytics to true
4. terminal: cd node_modules/neo.mjs/
5. npm install
6. npm run dev-css-structure
7. npm run dev-theme-dark
8. npm run dev-theme-light
9. npm run prod-css-structure
10. npm run prod-theme-dark
11. npm run prod-theme-light
12. npm run build-development
13. npm run build-production
14. npm run create-app (default values)
15. npm run dev-build-my-apps
16. npm run prod-build-my-apps
17. npm run generate-docs-json
18. git add on the neo.mjs node_module
19. ensure to NOT push the node_modules inside the neo.mjs node_module. except (if the version changed):
    1. @ fortawesome
    2. highlightjs-line-numbers.js
    3. siesta-lite (ONLY siesta-all.js & resources/*)
20. git push