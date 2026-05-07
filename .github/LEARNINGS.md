# Learnings

- The Angular landing app lives in `src\CloudSkew.Landing\` and is the workspace used for the CloudSkew landing page rebuild.
- Legacy landing assets are now mirrored into `src\CloudSkew.Landing\public\assets\` so the Angular app can reference the original icons, fonts, thumbnails, and branding locally.
- The landing page preserves the legacy SEO route aliases under `/solutions/:solutionId` and prerenders those routes during the Angular build.
- The landing app now builds as a fully static Angular site via `outputMode: "static"`; deployable files live under `src\CloudSkew.Landing\dist\CloudSkew.Landing\browser\`.
- The landing page deployment workflow runs `npm install` and `npm run build` in `src\CloudSkew.Landing\`, then uploads `src\CloudSkew.Landing\dist\CloudSkew.Landing\browser\` to Azure Static Web Apps; place `staticwebapp.config.json` under `src\CloudSkew.Landing\public\` so Angular copies it to that artifact root.
- The UI app deployment workflow runs `npm install` and `npm run build-testing` in `src\CloudSkew.Ui\`, then uploads `src\CloudSkew.Ui\dist\cloudskew-ui\` to the `cloudskew-ui` Azure Static Web App.
- The UI app now uses an IndexedDB-backed local `APIService` path for anonymous user profiles, diagrams, templates, and thumbnail write no-ops; the anonymous user id remains the MD5 hash `294de3557d9d00b3d2d8a1e6aab028cf`.
- The Angular 21 landing app keeps its legacy NgModule/component file shape by marking declared components with `standalone: false`; prerender route configuration lives in `AppServerModule` via `provideServerRendering(withRoutes(...))`.
- For Angular 21 static output, use `outputMode: "static"` without a separate `prerender` option. Critical CSS inlining is disabled in production because the Angular 21 CSS inliner currently fails in this Node 24 workspace with `document.documentElement?.setAttribute is not a function`.
- The user manual docs app lives in `docs\user-manual\` and uses VuePress 2 RC with npm. CI should run `npm ci` and `npm run docs:build`, then upload `docs\user-manual\.vuepress\dist\` to the `cloudskew-docs` Azure Static Web App; place `staticwebapp.config.json` under `docs\user-manual\.vuepress\public\` so VuePress copies it to the artifact root.
- The blog app lives in `docs\blog\` and uses VuePress 2 RC with npm. CI should run `npm ci` and `npm run docs:build`, then upload `docs\blog\.vuepress\dist\` to the `cloudskew-blog` Azure Static Web App; place `staticwebapp.config.json` under `docs\blog\.vuepress\public\` so VuePress copies it to the artifact root.
