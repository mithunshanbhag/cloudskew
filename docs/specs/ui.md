# CloudSkew Landing UI Notes

## Visual structure

The landing page reproduces the legacy CloudSkew marketing layout:

1. Sticky-looking top header on a white background
2. Gradient hero area with animated title text and a large preview image
3. Grid-backed features section
4. Samples gallery cards
5. Testimonials cards on a light gray background
6. Pricing section on a grid-backed light gray background
7. Footer with product/resources links and social icons

## Responsive behavior

- Desktop:
  - full header navigation visible
  - cards wrap across multiple columns
- Mobile/tablet:
  - desktop nav hidden
  - hamburger button opens a right-side mobile navigation panel
  - samples gallery hides the "See Live" action at smaller widths
  - feature/testimonial cards collapse to single-column layout

## Route-specific UI variants

The `/solutions/:solutionId` pages use the same layout as the homepage, with the following differences:

- page title changes per solution alias
- hero image changes per solution alias
- all lower sections remain unchanged

## Assets

The migrated UI uses the legacy public assets copied into `src\CloudSkew.Landing\public\assets\`, including:

- Gotham fonts
- feature SVGs
- social icons
- thumbnails
- branding logo
- hamburger/menu icons
