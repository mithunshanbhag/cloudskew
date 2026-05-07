# Create `future-ui-changes.md`

## Summary
- This is a read-only assessment report capturing the Angular upgrade and backend-removal findings.
- Incorporate the locked decisions: use IndexedDB, keep obsolete files for now, remove public share/viewer behavior, keep external CDN/docs assets, retain anonymous rendering API for print/export.

## Report Content
- **Current State**
  - Angular `13.1.x`; current npm latest observed: Angular `21.2.x`.
  - Major upgrade targets: Angular Material/CDK, Syncfusion, FontAwesome, TypeScript, ESLint, Karma tooling, Bootstrap.
  - Existing backend/auth/payment dependencies: Auth0, Azure Functions API, Cosmos/blob-backed persistence paths, Stripe, App Insights.
- **Angular Upgrade Findings**
  - Expected compatibility edits still include MDC CSS selector adjustments, builder/test config modernization, and Protractor removal or replacement.
  - Angular 21 also changes the preferred build story. Plan for eventual migration away from the legacy browser builder to the newer application/static build pipeline, but do not combine that with unrelated architectural cleanup.
  - The current global stylesheet overrides internal Material selectors such as `.mat-tab-label`, `.mat-button-toggle-label-content`, and `.mat-simple-snackbar-action`; these should be treated as likely regression points during the Angular Material MDC migration.
  - For hosting on Azure Static Web Apps, add a future task to create `staticwebapp.config.json` for SPA deep-link fallback (`/editor/:id`, `/viewer/:id`).
- **Anonymous Local-First App Findings**
  - Remove Auth0 requirements from routing, bootstrap, interceptors, editor initialization, callback/logout flows, and status bar.
  - Keep obsolete Auth0-related files/components in place but unused for now.
  - Replace cloud diagram/template/user persistence with IndexedDB-backed local persistence behind existing service/type names where practical.
  - Preserve DTO names and app-level call patterns where possible, returning the same observable-style `APIResponse<T>` shapes.
- **Backend Removal Findings**
  - Remove user profile, diagram CRUD, template CRUD, sharing, Stripe checkout/customer-portal, thumbnail-upload-to-cloud, and public shared diagram API behavior.
  - Remove public share/viewer feature behavior entirely; routes/components may remain unused until later cleanup.
  - Keep the rendering helper API only for anonymous JPG/PNG/PDF/SVG print/export operations.
  - Static CDN/docs URLs remain external and unchanged.
- **IndexedDB Storage Direction**
  - Store diagrams, templates, preferences, document details, thumbnails/custom images, and last-opened diagram metadata locally.
  - Use `localStorage` only for tiny compatibility/session values if needed; primary persistence is IndexedDB.
  - Define local IDs client-side and preserve existing DTO fields such as `id`, `name`, `diagramDetails`, `documentDetails`, `thumbnailUrl`, `lastUpdatedUTC`, and `visibility`.
- **Known Product/Technical Follow-ups**
  - Decide whether JSON export/import should represent raw Syncfusion diagram JSON or full app-level `DiagramDTO`.
  - Decide whether local custom images should be embedded as data URLs or stored as IndexedDB blobs referenced by local object IDs.
  - Decide later cleanup timing for obsolete Auth0/Stripe/share/viewer files.
  - Verify Syncfusion 33.x API compatibility for diagram serialization, export, uploader, grid, and rich text editor.
  - Decide whether Protractor will be replaced with another E2E runner or intentionally removed during the Angular upgrade.
  - Add Azure Static Web Apps routing/fallback requirements (`staticwebapp.config.json`) to the eventual deployment work for the upgraded SPA.

## Test Plan
- After implementation, run `npm install`, Angular migrations, `npm run build`, and `npm run lint`.
- Smoke-test anonymous app launch, create/open/rename/delete diagram, save/reload from IndexedDB, create template, import/export JSON, custom image insertion, print/export via anonymous rendering API, and absence of login/payment/share flows.
- Inspect production build for no Auth0 or Stripe runtime script usage and no calls to old user/storage/payment APIs.
- Under static hosting, verify deep-link refresh behavior for SPA routes such as `/editor/:id` and `/viewer/:id`.

## Assumptions
- The report file should be created in the repo root.
- No source code or package files should be changed while creating the report.
- External CloudSkew asset/docs CDN endpoints are intentionally retained.
