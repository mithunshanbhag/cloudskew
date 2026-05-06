# CloudSkew Landing

This Angular 21 app recreates the legacy CloudSkew marketing site, including the original landing-page sections, SEO solution routes, and fully prerendered static output.

## Development server

```bash
npm start
```

Open `http://localhost:4200/` after the dev server starts.

## Build

```bash
npm run build
```

The build outputs the Angular browser bundle plus prerendered public routes under `dist\CloudSkew.Landing\`.

## Preview the static build

```bash
npm run preview
```

Run `npm run build` first, then open `http://localhost:4000/`.

The generated static site is served from `dist\CloudSkew.Landing\browser\`.

## Unit tests

```bash
npm test
```

## Route coverage

The app preserves:

- `/`
- `/solutions/:solutionId` for the legacy CloudSkew SEO aliases

## Assets

Legacy public assets are mirrored into `public\assets\` so the recreated Angular app can use the original fonts, thumbnails, icons, and branding locally.
