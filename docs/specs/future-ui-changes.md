# Future UI Changes

## Summary
- Prep the upgraded `CloudSkew.Ui` app for anonymous, local-only usage.
- Locked decisions: use IndexedDB, keep obsolete Auth0/share/viewer files unused for now, keep external CDN/docs assets, and retain the anonymous rendering API for print/export.

## Remaining Work
- **Angular Cleanup**
  - Modernize builder/test config after the local-first work settles: migrate away from the legacy browser builder, and remove or replace Protractor.
  - Check global stylesheet overrides for Angular Material MDC regressions, especially selectors such as `.mat-tab-label`, `.mat-button-toggle-label-content`, and `.mat-simple-snackbar-action`.
  - For hosting on Azure Static Web Apps, create `staticwebapp.config.json` for SPA deep-link fallback routes such as `/editor/:id`.
- **Anonymous Local-First App**
  - Remove Auth0 requirements from routing, bootstrap, interceptors, editor initialization, callback/logout flows, and status bar.
  - Keep obsolete Auth0-related files/components in place but unused for now.
  - Replace cloud diagram/template/user persistence with IndexedDB-backed local persistence behind existing service/type names where practical.
  - Preserve DTO names and app-level call patterns where possible, returning the same observable-style `APIResponse<T>` shapes.
- **Backend Removal**
  - Remove user profile, diagram CRUD, template CRUD, sharing, thumbnail-upload-to-cloud, and public shared diagram API behavior.
  - Remove public share/viewer feature behavior entirely; routes/components may remain unused until later cleanup.
  - Keep the rendering helper API only for anonymous JPG/PNG/PDF/SVG print/export operations.
  - Static CDN/docs URLs remain external and unchanged.
- **IndexedDB Storage Direction**
  - Store diagrams, templates, preferences, document details, thumbnails/custom images, and last-opened diagram metadata locally.
  - Use `localStorage` only for tiny compatibility/session values if needed; primary persistence is IndexedDB.
  - Define local IDs client-side and preserve existing DTO fields such as `id`, `name`, `diagramDetails`, `documentDetails`, `thumbnailUrl`, `lastUpdatedUTC`, and `visibility`.

## Known Product/Technical Follow-ups
  - Decide whether JSON export/import should represent raw Syncfusion diagram JSON or full app-level `DiagramDTO`.
  - Decide whether local custom images should be embedded as data URLs or stored as IndexedDB blobs referenced by local object IDs.
  - Decide later cleanup timing for obsolete Auth0/share/viewer files.
  - Verify Syncfusion 33.x API compatibility for diagram serialization, export, uploader, grid, and rich text editor.
  - Decide whether Protractor will be replaced with another E2E runner or intentionally removed.
  - Add Azure Static Web Apps routing/fallback requirements (`staticwebapp.config.json`) to the eventual deployment work for the upgraded SPA.

## Test Plan
- After implementation, run `npm install` if dependencies changed, then `npm run build` and `npm run lint`.
- Smoke-test anonymous app launch, create/open/rename/delete diagram, save/reload from IndexedDB, create template, import/export JSON, custom image insertion, print/export via anonymous rendering API, and absence of login/share flows.
- Inspect production build for no Auth0 runtime script usage and no calls to old user/storage APIs.
- Under static hosting, verify deep-link refresh behavior for SPA routes such as `/editor/:id`.

## Assumptions
- External CloudSkew asset/docs CDN endpoints are intentionally retained.
