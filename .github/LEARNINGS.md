# Learnings

- The Angular landing app lives in `src\CloudSkew.Landing\` and is the workspace used for the CloudSkew landing page rebuild.
- Legacy landing assets are now mirrored into `src\CloudSkew.Landing\public\assets\` so the Angular app can reference the original icons, fonts, thumbnails, and branding locally.
- The landing page preserves the legacy SEO route aliases under `/solutions/:solutionId` and prerenders those routes during the Angular build.
