# Learnings

- The Angular landing app lives in `src\CloudSkew.Landing\` and is the workspace used for the CloudSkew landing page rebuild.
- Legacy landing assets are now mirrored into `src\CloudSkew.Landing\public\assets\` so the Angular app can reference the original icons, fonts, thumbnails, and branding locally.
- The landing page preserves the legacy SEO route aliases under `/solutions/:solutionId` and prerenders those routes during the Angular build.
- The landing app now builds as a fully static Angular site via `outputMode: "static"`; deployable files live under `src\CloudSkew.Landing\dist\CloudSkew.Landing\browser\`.
- The landing page deployment workflow runs `npm install` and `npm run build` in `src\CloudSkew.Landing\`, then uploads `src\CloudSkew.Landing\dist\CloudSkew.Landing\browser\` to Azure Static Web Apps; place `staticwebapp.config.json` under `src\CloudSkew.Landing\public\` so Angular copies it to that artifact root.
