# CloudSkew Landing Page Specification

## Goal

Recreate the legacy `cloudskew-landing` site inside `src\CloudSkew.Landing\` using the current Angular 21 workspace in this repository.

## Scope

- Match the legacy landing page structure and content as closely as possible.
- Preserve the public route surface:
  - `/`
  - `/solutions/:solutionId` for all legacy SEO aliases
- Keep prerendered static output for the public routes.
- Reuse legacy copy, imagery, icons, fonts, thumbnails, and outbound links.
- Keep analytics disabled in this migration pass.

## Functional requirements

1. Render the legacy landing sections in this order:
   - Header
   - Hero
   - Features
   - Samples
   - Testimonials
   - Pricing
   - Footer
2. Preserve fragment navigation for:
   - `#features`
   - `#samples`
   - `#testimonials`
   - `#pricing`
3. Preserve the legacy CTA destinations:
   - App
   - Docs
   - Blog
   - Status
   - FAQs
   - Privacy Policy
   - Terms of Service
4. Preserve route-specific page titles and hero image variants for the SEO solution aliases.
5. Preserve prerendering for the homepage and all known `/solutions/*` routes.

## Technical requirements

- Use Angular standalone components and modern router configuration.
- Keep component content/data typed and centralized rather than scattering route and URL literals across templates.
- Maintain accessibility basics:
  - semantic headings
  - accessible mobile menu button
  - keyboard-closable mobile overlay
  - decorative images marked decorative where appropriate

## Non-goals

- Content refresh or redesign beyond what is required to reproduce the old landing page.
- Re-enabling Google Analytics during this migration.
