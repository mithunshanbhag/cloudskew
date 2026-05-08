# CloudSkew UI Specification

This file captures the checked-in UI details for the two CloudSkew web apps:
`src/CloudSkew.Landing` and `src/CloudSkew.Ui`.

## Landing Page App: `src/CloudSkew.Landing`

### UI Role

| Area                | Details                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| App purpose         | Public marketing and SEO landing site for CloudSkew.                                                        |
| Primary route shape | `/` plus prerendered `/solutions/:solutionId` aliases.                                                      |
| Page composition    | Header, hero, features, samples, testimonials, pricing, footer.                                             |
| UX character        | Spacious marketing page, section-based, centered content, white and light-gray surfaces, teal CTA emphasis. |

### Component Libraries

| Library          | Usage                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Angular          | Main app framework. Current checked-in package line is Angular `21.x`.                                                   |
| Angular Material | Used for the mobile navigation surface via `MatSidenavModule`; `indigo-pink.css` is included globally in `angular.json`. |
| Material Icons   | Loaded in `src/index.html` from Google Fonts for icon font availability.                                                 |
| `ityped`         | Used for animated hero title text; `#cs-section-title-cursor` is reserved for it.                                        |

### Global Styles And Theme Sources

| Source           | Details                                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `src/styles.css` | Defines global fonts, CSS variables, section widths, reusable typography classes, background helpers, and responsive breakpoints. |
| `src/index.html` | Loads Open Sans and Material Icons from Google Fonts, sets SEO title/description/OG image.                                        |
| `angular.json`   | Loads Angular Material `indigo-pink.css` before `src/styles.css`.                                                                 |
| `public/assets`  | Mirrors legacy landing assets for fonts, branding, icons, hero images, thumbnails, and social images.                             |

### Fonts

| Font           | Source                                                                 | Usage                                              |
| -------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| Open Sans      | Google Fonts and `--font-family-open-sans`                             | Default body and most content text.                |
| Gotham         | `@font-face` in `src/styles.css`, sourced from `assets/fonts/gotham/*` | Section titles, large headings, and quote text.    |
| Helvetica Neue | CSS fallback                                                           | Body fallback after Open Sans.                     |
| Material Icons | Google Fonts stylesheet                                                | Icon font support where Material icons are needed. |

### Color Palette

| Token                        | Value     | Usage                                              |
| ---------------------------- | --------- | -------------------------------------------------- |
| `--color-primary`            | `white`   | Main page background and card background.          |
| `--color-primary-dark`       | `#F9F9F9` | Light section background and gallery cards.        |
| `--color-secondary`          | `black`   | Default high-contrast text.                        |
| `--color-secondary-light`    | `#002927` | Primary heading, branding, and content text.       |
| `--color-secondary-lighter`  | `#647E7D` | Quote text, title cursor, subdued heading text.    |
| `--color-secondary-lightest` | `#DEDDDD` | Borders, grid lines, sample image borders/shadows. |
| `--color-accent`             | `#00BBB0` | CTA buttons and accent borders.                    |
| `--color-accent-light`       | `#00C8BE` | CTA hover/focus and testimonial hover border.      |

### Typography

| Class or element             | Font                                  | Size            | Weight | Notes                                                      |
| ---------------------------- | ------------------------------------- | --------------- | ------ | ---------------------------------------------------------- |
| `body`                       | Open Sans, Helvetica Neue, sans-serif | Browser default | Normal | Body margin is reset to `0`.                               |
| `.cs-font-branding`          | Open Sans                             | `30px`          | `700`  | Used for `CloudSkew` brand text in header/footer contexts. |
| `.cs-section-title`          | Gotham                                | `40px`          | `400`  | Block title with `35px` bottom margin.                     |
| `.cs-section-title-larger`   | Gotham                                | `45px`          | `600`  | Larger hero/major section title.                           |
| `.cs-font-primary-content`   | Open Sans                             | `20px`          | `600`  | Primary content line.                                      |
| `.cs-font-secondary-content` | Open Sans                             | `18px`          | `300`  | Nav links, descriptions, supporting text.                  |
| `.cs-font-contextual-info`   | Open Sans                             | `12px`          | `300`  | Small contextual text.                                     |
| `.cs-font-quote`             | Gotham                                | `20px`          | `200`  | Testimonial quote text with `1.2` line height.             |

### Layout

| Surface         | Layout details                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| Global sections | `.cs-section` and `.cs-section-smaller` are centered, text-aligned center, and use `80vw` width by default.         |
| Wide monitors   | At `min-width: 1921px`, sections cap at `0.8 * 1920px`.                                                             |
| Tablet          | At `max-width: 1200px`, sections use `90vw`.                                                                        |
| Mobile          | At `max-width: 980px`, sections use `100vw`.                                                                        |
| Header          | Flex row with branding on the left and nav/CTA on the right.                                                        |
| Hero            | Centered white card-like hero panel inside the section, `80%` parent width, `15px` radius, thin border, and shadow. |
| Features        | Flexbox cards with wrapping; desktop target is around three cards per row, mobile becomes single column.            |
| Samples         | Flex-wrapped gallery cards; mobile hides the "See Live" link and small phones use `80%` card basis.                 |
| Testimonials    | Flex-wrapped cards; artwork is hidden under `1200px`, cards become single column under `980px`.                     |
| Pricing         | Flex-wrapped pricing tables over a light grid-backed section.                                                       |
| Footer          | Flex-wrapped columns with brand, product/resource links, and social links.                                          |

### Backgrounds And Surfaces

| Class                                             | Details                                                                                                 |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `.cs-background-primary`                          | Solid white.                                                                                            |
| `.cs-background-primary-dark`                     | Solid `#F9F9F9`.                                                                                        |
| `.cs-background-gradient-primary-to-primary-dark` | Vertical gradient from white to `#F9F9F9`.                                                              |
| `.cs-background-grid-primary-dark`                | Light gray background with repeating `#DEDDDD` 25px grid lines.                                         |
| Cards                                             | Feature, sample, testimonial, and pricing blocks use `5px` border radius.                               |
| CTAs                                              | Header, hero, pricing, and mobile menu CTAs use teal fill, `15px 25px` padding, and `35px` pill radius. |

### Navigation And Interaction

| Pattern                 | Details                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| Desktop nav             | Header links for Samples, Testimonials, Pricing, Docs, Blog, Status, and Go To App.                            |
| Fragment navigation     | Router fragments target `#samples`, `#testimonials`, and `#pricing`; spec README also lists `#features`.       |
| Mobile nav              | Desktop nav is hidden at `max-width: 980px`; hamburger image opens an end-positioned Angular Material sidenav. |
| Hover/focus             | Text links underline; CTA buttons switch from `--color-accent` to `--color-accent-light`.                      |
| Route-specific variants | `/solutions/:solutionId` keeps the same page shell but changes page title and hero image.                      |

### Iconography And Visual Assets

| Asset type      | Source and usage                                                      |
| --------------- | --------------------------------------------------------------------- |
| Brand logo      | Legacy local asset rendered at `50px` in header and `30px` in footer. |
| Hamburger icon  | `assets/hamburger-icon.svg`, shown only on mobile/tablet breakpoints. |
| Feature artwork | Legacy SVG artwork in `public/assets`.                                |
| Samples         | Legacy diagram thumbnail images in `public/assets`.                   |
| Social links    | Legacy social icons in `public/assets`.                               |
| Hero images     | Legacy hero variants selected by route customization.                 |
| Fonts           | Gotham font files copied under `assets/fonts/gotham`.                 |

## Main Diagram Editor App: `src/CloudSkew.Ui`

### UI Role

| Area                | Details                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| App purpose         | Browser-based diagram editor for cloud architecture diagrams, generic diagrams, text, shapes, connectors, images, export, and print. |
| Primary route shape | `/` renders `DiagramEditorComponent`; unknown routes redirect to `/`.                                                                |
| Page composition    | Toolbar/navbar, left palette sidebar, central Syncfusion diagram canvas, right properties bar, status bar.                           |
| UX character        | Dense, tool-like editor UI optimized for repeated actions and canvas work rather than marketing content.                             |

### Component Libraries

| Library                | Usage                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Angular                | Main app framework. Current checked-in package line is Angular `21.x`.                                                                              |
| Angular Material       | Toolbars, icon buttons, mini FABs, menus, dividers, dialogs, sliders, selects, checkboxes, button toggles, tabs, tooltips, snackbars, and spinners. |
| Angular CDK            | Clipboard support.                                                                                                                                  |
| Syncfusion EJ2 Angular | Core diagram canvas, diagram services, grids, text boxes, uploaders, checkboxes, print/export, snapping, undo/redo, grouping, sorting, and search.  |
| Bootstrap              | Utility and button classes such as `btn`, `btn-link`, and `btn-sm`; global Bootstrap CSS is loaded in `angular.json`.                               |
| Font Awesome           | Angular FontAwesome module and solid icons for property-editor status/action glyphs.                                                                |
| Web Font Loader        | Loads Open Sans, Material Icons Outlined, Roboto, and Roboto Mono during app startup to reduce font flash in diagram text/annotations.              |

### Global Styles And Theme Sources

| Source                                                       | Details                                                                                                                                                  |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/custom-theme.scss`                                      | Angular Material theme. Uses Material 2 gray `700` as primary, teal `A200/A100/A400` as accent, and red as warn.                                         |
| `src/styles.css`                                             | Global layout helpers, property-window styles, sidebar/propertiesbar overrides, Syncfusion grid overrides, snackbar classes, and typography.             |
| `angular.json`                                               | Loads custom Material theme, Syncfusion Material CSS files, Bootstrap CSS, customized Syncfusion Material CSS, then `src/styles.css` last for overrides. |
| `src/themes/syncfusion-material-customized/material.min.css` | Local customized Syncfusion Material theme loaded after stock Syncfusion styles.                                                                         |
| `src/app/app.component.ts`                                   | Loads Google font families with `webfontloader`.                                                                                                         |
| `src/app/constants/ui-constants.ts`                          | Holds canvas, symbol, thumbnail, spinner, and dialog sizing constants.                                                                                   |
| `src/app/constants/color-hex-codes-constants.ts`             | Holds named diagram/editor color constants.                                                                                                              |
| `src/app/constants/diagram-constants.ts`                     | Holds default Syncfusion connector, node, port, and annotation styling.                                                                                  |
| Local asset server                                           | `src/CloudSkew.Assets/run-local.ps1` serves `src/CloudSkew.Assets` at `http://localhost:7001` so local stencil SVG URLs continue to use the local CDN prefix. |

### Fonts

| Font                    | Source                                          | Usage                                                                                    |
| ----------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Roboto                  | Web Font Loader and Angular Material typography | Body default and Material component typography.                                          |
| Roboto Mono             | Web Font Loader                                 | Tool chrome, buttons, property window labels/headlines, status bar, diagram annotations. |
| Open Sans               | Web Font Loader                                 | Dialog content, property item text, sidebar grid cells, checkbox labels.                 |
| Material Icons Outlined | Web Font Loader                                 | Angular Material `mat-icon` glyphs using `fontSet="material-icons-outlined"`.            |
| Helvetica Neue          | CSS fallback                                    | Body fallback after Roboto.                                                              |

### Color Palette And State Colors

| Source                                       | Value                                                    | Usage                                                                     |
| -------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- |
| Material primary                             | Material gray `700`                                      | Primary Angular Material controls.                                        |
| Material accent                              | Material teal `A200`, `A100`, `A400`                     | Accent Angular Material controls.                                         |
| Material warn                                | Material red                                             | Warning/error Angular Material controls.                                  |
| `ColorHexCodeConstants.azureBlue`            | `#59b4d9`                                                | Azure-themed diagram color.                                               |
| `ColorHexCodeConstants.black`                | `#000000`                                                | Connector strokes and default annotation text.                            |
| `ColorHexCodeConstants.defaultBlueForShapes` | `#b3e5fc`                                                | Default shape fill.                                                       |
| `ColorHexCodeConstants.lightBlack`           | `#242424`                                                | Darker neutral.                                                           |
| `ColorHexCodeConstants.lightBlue`            | `#add8e6`                                                | Light blue neutral.                                                       |
| `ColorHexCodeConstants.white`                | `#ffffff`                                                | White fill/background.                                                    |
| Editor chrome                                | `white`, `whitesmoke`, `lightgrey`, `rgb(224, 224, 224)` | Sidebars, toolbar buttons, hover fills, status bar, and splitter borders. |
| Toolbar state                                | `green`, `orange`, `red`                                 | Locked, unlocked, and delete button emphasis.                             |
| Sidebar info glyph                           | `lightslategray`                                         | Documentation/info glyph color.                                           |
| Snackbar warning                             | `rgb(139, 122, 91)`                                      | Warning snackbar panel.                                                   |
| Snackbar error                               | `rgb(226, 139, 139)`                                     | Error snackbar panel.                                                     |
| Snackbar success                             | `rgb(58, 129, 58)`                                       | Success snackbar panel.                                                   |

### Layout

| Surface         | Size and behavior                                                                            |
| --------------- | -------------------------------------------------------------------------------------------- |
| Root editor     | Full viewport `100vw` by `100vh`, horizontal flex layout, overflow auto.                     |
| Main content    | Width `100vw`, height `100vh`, vertical flex layout.                                         |
| Toolbar/navbar  | Fixed `50px` height, width `100vw`, horizontal flex layout.                                  |
| Main editor row | Height `calc(100vh - 75px)`, width `100vw`, horizontal flex layout.                          |
| Left sidebar    | Fixed `240px` width, height `calc(100vh - 75px)`, contains the symbol palette.               |
| Canvas region   | Width `calc(100vw - 460px)`, height `calc(100vh - 75px)`, scrollable.                        |
| Properties bar  | Fixed `220px` width, height `calc(100vh - 75px)`, scrollable.                                |
| Status bar      | Fixed `25px` height, width `100vw`.                                                          |
| Loading block   | Full viewport-height loading surface, centered content.                                      |

### Canvas And Diagram Defaults

| Constant or setting     | Value                                                   | Usage                                            |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------ |
| Diagram page width      | `1112`                                                  | Syncfusion page width, A4-oriented value.        |
| Diagram page height     | `793`                                                   | Syncfusion page height, A4-oriented value.       |
| Symbol default width    | `50`                                                    | Initial node width.                              |
| Symbol default height   | `50`                                                    | Initial node height.                             |
| Symbol default offset   | `50`, `50`                                              | Initial node offset X/Y.                         |
| Spinner diameter        | `24`                                                    | Toolbar action progress spinners.                |
| Thumbnail preview       | `200` by `140`                                          | Thumbnail preview image dimensions.              |
| Default zoom factor     | `1.2`                                                   | Diagram zoom increment controlled by Syncfusion. |
| Connector style         | `#000000`, width `1`, opacity `0.5`                     | Default connector stroke.                        |
| Connector corner radius | `10`                                                    | Orthogonal connector corner radius.              |
| Connector annotation    | Roboto Mono, `12px`, black, no wrap                     | Default connector text.                          |
| Shape annotation        | Roboto Mono, `14px`, black, no wrap                     | Default node annotation.                         |
| Ports                   | Four X-shaped ports at left, top, right, bottom centers | Visible on connect/hover.                        |

### Sidebar And Palette

| Surface                 | Details                                                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sidebar modes           | Palette only.                                                                                                                                             |
| Palette search          | Syncfusion `ejs-textbox`, `40px` tall, clear button enabled by component settings.                                                                       |
| Palette grid            | Syncfusion `ejs-grid`, grouped and sorted, header hidden, scrollable height `calc(100vh - 155px)`.                                                       |
| Palette symbols         | `30px` symbol image column and `30px` info glyph column.                                                                                                 |
| Symbol labels           | Bootstrap link buttons with Material tooltips.                                                                                                           |
| Documentation glyph     | Font Awesome ellipsis icon displayed only when symbol documentation exists.                                                                              |
| Palette actions         | Angular Material stroked button for Add Image. Add/Remove Symbols lives in the toolbar.                                                                   |
| Preferences grid        | Syncfusion grid with Syncfusion checkboxes and grouped rows.                                                                                             |
| Symbol families         | General, AWS, Azure, GCP, IBM, Oracle, DigitalOcean, Alibaba Cloud, Kubernetes/CNCF ecosystem, Elastic, VMWare, Font Awesome, HashiCorp, and Cloudflare. |
| Default symbol families | General + AWS + Azure.                                                                                                                                   |

#### Intended Design Refresh

The next pass should keep the same palette scope, search behavior, group ordering, documentation affordance, and Add Image action, but restyle the left rail into a cleaner stencil browser. The direction should feel aligned with the refreshed command bar and property rail: quieter surfaces, clearer group structure, lighter typography, more deliberate icon treatment, and better spacing around each symbol row.

##### Sidebar Shell

| Area | Intended design change |
| ---- | ---------------------- |
| Surface | Evolve the left palette from a plain `240px` strip into a more deliberate browser rail. Target a `272px` desktop width with `12px` outer padding, a `#f8fafc` background, a `1px` right border `#dbe4ee`, and a subtle inset shadow so the rail feels part of the editor chrome without overpowering the canvas. |
| Layout | Treat the sidebar as three stacked zones: compact header/search, scrollable symbol browser, and a pinned footer action. Keep the rail full height, but use consistent `12px` rhythm between these zones so the palette feels composed instead of improvised. |
| Palette header | Keep the header simple: `Symbol palette`, the Add/Remove Symbols filter icon immediately after the title, the existing symbol count bubble, and a clickable libraries summary line that opens the Add/Remove Symbols dialog. The `libraries enabled` summary remains left-aligned under the title row. Do not add an eyebrow label such as `Editor surface`, and do not introduce extra family chips below the title. |
| Search shell | Restyle the palette search control as a clean `40px` rounded input with white background, `1px` neutral border, balanced horizontal padding, and a teal focus ring. Preserve the clear button behavior, but remove any extra leading icon treatment that competes with or overlaps the input text. |
| Scroll container | Let the symbol list fill the remaining vertical space between the search band and footer. The scroll surface should use rounded corners, a white background, a light inner border, and enough inset padding that group headers and rows do not crash into the rail edges. |
| Footer action | Keep Add Image as the only palette footer action, but pin it to a lightly separated footer zone with a subtle top border. The button should be full width, `36px` high, use icon + label treatment, and match the same secondary-button language used by the dialog and property rail refresh. |

##### Symbol Browser And Row Treatment

| Area | Intended design change |
| ---- | ---------------------- |
| Group headers | Replace the current plain grouped-header feel with compact sticky section labels that read like stencil categories. Use `12px` uppercase or small-caps labels in bold (`#1f2937`), and reserve a dedicated gutter for the collapse/expand chevron so the arrow never overlaps the group label. |
| Rows | Increase symbol rows to a `44px` minimum touch target with `10px` to `12px` horizontal padding, `10px` gap between icon and copy, and an `8px` to `10px` row radius. Rows should feel scannable and clickable without becoming card-heavy. Symbol name text is `13px` medium (not semibold) for a lighter feel. |
| Icon tile | Place each symbol preview inside a compact `32px` square or rounded-rectangle tile with white background, a thin neutral border, and centered artwork. The tile should frame the SVG stencil cleanly so mixed icon sets feel visually consistent even when their source artwork varies. |
| Labels | Use a UI sans-serif (`Inter`, `Open Sans`, or equivalent) for symbol names at `13px` semibold with tighter line height than the current mono presentation. Reserve `Roboto Mono` for compact metadata only, such as counts or future keyboard hints, not for every row label. |
| Secondary metadata | When a symbol benefits from synonyms or category context during search, show that as muted `11px` supporting text beneath the main label instead of forcing every row to remain single-line. Default rows may remain visually single-line when no extra context is needed. |
| Documentation action | Use a quiet vertical-ellipsis documentation affordance at the row end rather than a heavier question-mark icon. The action should stay compact, low-contrast by default, and use sentence-case tooltip copy so it feels available without visually dominating the row. |
| Hover, press, and focus | Use soft teal-tinted row hover (`rgba(20, 184, 166, 0.12)`), slightly stronger pressed state (`rgba(20, 184, 166, 0.18)`), and a visible teal focus ring. The palette should feel responsive, but rows should avoid heavy filled selection states because clicking primarily inserts a symbol into the canvas rather than toggling a persistent selection. |
| Empty and filtered states | When search returns no matches, show the empty state inside the same list surface using a compact icon, a short muted message, and a subtle suggestion to adjust the search term. Keep it lightweight and centered; do not introduce a large illustration or extra actions beyond the existing clear/search flow. |

##### Visual Language

| Area | Intended design change |
| ---- | ---------------------- |
| Typography | Standardize visible palette labels, headers, chips, and buttons on `Inter`, `Open Sans`, or equivalent UI sans-serif. Use medium to semibold weights, and reserve `Roboto Mono` for technical microcopy only. |
| Color | Keep the rail predominantly light with white surfaces, slate text (`#0f172a` / `#475569`), teal accents (`#14b8a6`) for focus and hover states, and restrained amber only for attention states if needed. Avoid legacy mixed grays and raw Bootstrap link blue in this surface. |
| Iconography | Prefer Material Symbols Outlined for search, clear, add-image, and documentation-supporting chrome. Provider/resource artwork remains SVG-based, but it should sit inside the shared tile treatment so AWS, Azure, Kubernetes, and generic symbols feel like part of one palette system. |
| Spacing rhythm | Use `12px` rail padding, `10px` row insets, `8px` to `12px` internal gaps, and modest `12px` to `14px` spacing between groups. The palette should read as dense and efficient, but not cramped. |
| Accessibility | Maintain `44px` minimum row targets, keep all icon-only affordances keyboard focusable with visible rings, and ensure muted labels still meet contrast expectations against the light panel surfaces. |

##### Reference Mockups

| Mockup | Path | Purpose |
| ------ | ---- | ------- |
| Sidebar palette shell | `docs/ui-mockups/CloudSkewUiSidebarPaletteShell/` | Shows the intended left-rail shell, header/search treatment, grouped symbol list, and pinned Add Image footer. |
| Sidebar palette variants | `docs/ui-mockups/CloudSkewUiSidebarPaletteVariants/` | Shows row states, documentation affordances, empty search treatment, and compact family-summary/search patterns that support the refreshed palette design language. |

### Toolbar And Status Bar

| Surface           | Details                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Toolbar           | Horizontal Angular Material icon-button row with dividers.                                                                          |
| Toolbar branding  | CloudSkew brand logo appears as the first left-aligned toolbar item.                                                                |
| Toolbar actions   | Lock/unlock, delete, import JSON, quick insert, select/edit, pan/swipe, undo, redo, zoom out, center view, zoom in, export image, print. Add/Remove Symbols is no longer a top-bar action and now lives in the palette header filter icon. |
| Help menu         | Right-most toolbar `?` icon opens an Angular Material menu with keyboard shortcuts, FAQs, release notes, and GitHub issue link.      |
| Quick insert menu | Angular Material menu for line/elbow/curved connectors, two-way variants, circle/ellipse, rectangle/square, text, and custom image. |
| Progress state    | Delete/export/print buttons swap icon content for a `mat-spinner` while in progress.                                                |
| Status bar        | Light gray, Roboto Mono `11px`; shows current mode and zoom percentage.                                                             |

#### Intended Design Refresh

The next pass should keep the same functional controls and menu destinations, but restyle the top control bar and bottom status bar as a more cohesive command surface. The reference direction is a cleaner, MudBlazor-inspired command bar: grouped actions, calmer separators, stronger visual hierarchy, and consistent icon/menu treatment.

##### Top Control Bar

| Area | Intended design change |
| ---- | ---------------------- |
| Surface | Use a `56px` tall command bar with `12px 16px` padding, a dark slate background (`#111827`), a subtle `1px` bottom border (`#1f2937`), and a soft shadow so the editor chrome reads as a distinct app frame. |
| Layout | Replace the divider-after-every-button treatment with grouped action clusters separated by `12px` gaps. Within each group, keep `4px` gaps between controls so related actions read as a single command set. |
| Branding | Keep the CloudSkew logo first, but place it in a `40px` rounded square tile with a matching wordmark label beside it. The branding block should anchor the bar visually without consuming excessive width. |
| Action grouping | Present actions in this order: Branding, Insert, Tool Mode, History, View, Output, Danger Zone (delete/import), Diagram State (lock with state label), Help. The danger-zone pair must sit between the left command clusters and the lock/help endcap, isolated with an amber/yellow outline so delete/import read as cautionary controls without using destructive red on both buttons. Lock icon sits immediately left of "Locked"/"Unlocked" text label. |
| Group separation accents | Add a clearly visible visual break before the Insert group (after branding) and before the Danger Zone group (after Output) so both clusters read as intentionally separated from neighboring controls. Target an extra `24px` left offset on desktop and reduce this to `12px` on narrower widths. |
| Icon buttons | Standardize command buttons to `36px` square with `10px` radius and `20px` icons. Default state should be transparent with `#e5e7eb` icons, hover/focus should use `#1f2937`, and active mode buttons should use a teal fill (`#14b8a6`) with white icon contrast. |
| State colors | Avoid using unrelated greens/oranges for most controls. Reserve teal for active or selected states, amber (`#f59e0b`) for cautionary unlocked attention states when needed, and red (`#ef4444`) only for destructive delete affordances. |
| Typography | Use a clean UI sans-serif for visible labels and menus (`Inter`, `Open Sans`, or equivalent) at `13px` to `14px`, medium to semibold. Keep `Roboto Mono` only for technical readouts such as zoom or keyboard hints. |
| Progress affordances | Keep spinner replacement behavior for delete/export/print, but show the spinner inside the same `36px` button frame so the layout does not shift while an action is running. |
| Focus and accessibility | All actionable controls should preserve a visible focus ring in teal (`2px` outer ring), keep tooltip copy in sentence case, and maintain a minimum `44px` touch target via outer padding even when the visible button is `36px`. |

##### Menu Item Treatment

| Area | Intended design change |
| ---- | ---------------------- |
| Menu surface | Render quick-insert and help menus as rounded panels with `12px` radius, white background, `1px` border `#dbe4ee`, and a soft elevated shadow so menus feel lighter than the dark command bar. |
| Menu rows | Use `36px` minimum row height with `10px 12px` padding, `8px` row radius, and a three-part structure: leading icon, primary label, optional trailing shortcut or hint. |
| Menu icons | Keep leading icons at `18px`, use the same outlined icon family as the toolbar where possible, and align connector/shape items with lightweight directional glyphs rather than plain text-only rows. |
| Labels | Keep labels in sentence case, semibold `13px`, with optional secondary metadata or shortcut hints in `11px` `Roboto Mono` and muted slate (`#64748b`). |
| Interaction states | Hover/focus rows should use a soft teal tint (`rgba(20, 184, 166, 0.12)`), selected rows a stronger teal tint (`rgba(20, 184, 166, 0.18)`), and destructive/help escalation items should never use a fully saturated fill by default. |
| Sectioning | Separate logical groups with `8px` vertical rhythm and muted uppercase section labels when a menu has more than one conceptual cluster. The quick-insert menu should visually separate connectors, shapes, text, and image actions. |

##### Bottom Status Bar

| Area | Intended design change |
| ---- | ---------------------- |
| Surface | Increase the status bar to `32px` height with `8px 16px` padding, a light neutral background (`#f8fafc`), and a thin top border (`#dbe4ee`) so it feels intentional rather than a leftover footer strip. |
| Layout | Keep the content minimal and stable: left-aligned mode indicator, right-aligned zoom indicator, with a flexible center gap reserved for future editor feedback without forcing a redesign later. |
| Readouts | Present mode and zoom as compact chips instead of plain text. Each chip should use a `24px` height, `999px` radius, `6px` horizontal gap between icon and text, and subtle neutral fill. |
| Typography | Use `11px` uppercase/label text for chip captions and `12px` `Roboto Mono` for values such as `select`, `pan`, or `125%`. This keeps the bar readable while still feeling technical and tool-oriented. |
| Color | Use cool neutral text (`#334155`) on light chips (`#e2e8f0`), with a teal accent dot or icon for the active mode chip. Avoid heavy borders or saturated backgrounds so the status bar remains secondary to the canvas. |
| Spacing | Keep `12px` spacing between chips and ensure the zoom chip sits flush to the right edge rhythm rather than floating away from the bar edge. |
| Responsiveness | Preserve the same visual structure when horizontal space tightens: chips may compress their interior gap, but the bar should not wrap or increase in height. |

### Properties Bar And Editing Controls

| Pattern                | Details                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| Properties container   | Right-side `220px` properties bar, white background, scrollable.                                           |
| Active editor dispatch | Visual properties editor selects specialized property editor based on selected diagram object type.        |
| Editor variants        | Basic shape, native symbol, connector, text, image, group, multi-selection, and diagram/canvas properties. |
| Property headers       | Roboto Mono, bold, `14px`; pane headers use Open Sans, bold, `12px`.                                       |
| Property rows          | Flex rows, min-height `40px`, item text Open Sans `11px`, control wrapper `120px`.                         |
| Controls               | Material sliders, checkboxes, selects, button toggles, icon buttons, and native color inputs.              |
| Text controls          | Material icons for bold, italic, underline, strikethrough, overline, no decoration, and alignment.         |
| Lock indicators        | Font Awesome lock/unlock icons; green means locked, orange means unlocked.                                 |
| Group/canvas glyphs    | Font Awesome object-group and border-all icons.                                                            |

#### Intended Design Refresh

The next pass should keep the same editor variants, data fields, and control behavior, but restyle the right-side inspector into a cleaner, calmer property rail. The design direction should feel closer to a compact MudBlazor-style inspector: better spacing, clearer grouping, more deliberate icon usage, lighter typography, and less visual noise from borders and legacy success/warning colors.

##### Shared Properties Rail

| Area | Intended design change |
| ---- | ---------------------- |
| Surface | Evolve the property bar from a plain `220px` strip into a more intentional inspector rail: target `280px` desktop width, `16px` inner padding, `#f8fafc` background, `1px` left border `#dbe4ee`, and a subtle inset shadow so it reads as a separate editing surface without competing with the canvas. |
| Scroll behavior | Keep the rail vertically scrollable, but make the editor header and tab strip feel pinned to the top of the selected editor card so the current editing context stays visible as the user moves through longer forms. |
| Editor shell | Each active editor should sit inside a rounded `14px` card with a white background, `1px` border `#e2e8f0`, and restrained shadow. Avoid the current hard splitter box treatment around every block. |
| Editor header | Replace the dense uppercase header row with a calmer inspector header: left-aligned type label plus optional secondary subtitle, right-aligned state/action affordance, `14px` to `15px` semibold title text, and `12px` muted metadata copy. The header should use `16px` top/bottom padding and establish the editor identity before the controls begin. |
| Lock state treatment | Keep lock/unlock behavior unchanged, but replace green/orange-only icon emphasis with a compact state pill or icon button inside the header. Locked should read as neutral/teal, unlocked may use soft amber when attention is needed, and destructive emphasis should remain reserved for delete-only actions elsewhere in the app. |
| Tabs | Restyle `STYLE` / `TEXT` and similar tabs as a segmented control with `32px` height, `10px` radius, subtle neutral background, and a filled active segment. Tab labels should use sentence case or short uppercase labels at `12px` to `13px` semibold, not large mono labels. |
| Section grouping | Replace heavy divider-driven sections with spaced content groups. Each group should use `12px` to `14px` vertical rhythm, a compact section title, and optional soft container treatment for controls that belong together. |
| Typography | Use `Inter`, `Open Sans`, or equivalent UI sans-serif for visible labels, section titles, helper text, and button labels. Reserve `Roboto Mono` for technical readouts such as ids, dimensions, z-index values, numeric slider values, and similar metadata. |
| Spacing rhythm | Increase row breathing room to a consistent `44px` minimum for interactive rows, with tighter `8px` gaps inside compound controls. The inspector should feel dense but not cramped. |
| Accessibility | Preserve clear focus indication, keep visible controls at least `32px` tall with `44px` touch targets through padding, and ensure muted text still maintains adequate contrast against the light panel surfaces. |

##### Shared Control Treatment

| Area | Intended design change |
| ---- | ---------------------- |
| Row layout | Standardize rows into a two-column inspector pattern: label/value content on the left and the primary control on the right. Rows with sliders or longer tool groups may stack into a label row above the control while still maintaining the same spacing language. |
| Labels and values | Present row labels in `12px` to `13px` semibold UI text with muted secondary values beneath or beside them when helpful. Hex values, ids, sizes, and counts should use `11px` to `12px` `Roboto Mono` badges or inline value pills. |
| Color inputs | Keep native color input behavior, but wrap the swatch in a `32px` rounded shell with a thin border and pair it with a visible hex value so the control reads as deliberate rather than browser-default. |
| Sliders | Pair each slider with a trailing numeric badge and use more consistent spacing between the label, track, and value. The current functionality and ranges stay the same; only the shell, spacing, and value presentation change. |
| Toggle groups | Restyle icon toggle groups for border styles, text styling, decoration, alignment, and distribution as `32px` high segmented controls with `8px` radius, `18px` icons, light neutral background, and teal-tinted active states. |
| Selects and dropdowns | Use the same rounded input shell for connector source/target selects and any future dropdowns: `36px` height, white background, `1px` border `#dbe4ee`, left-aligned text, and a quieter caret treatment. |
| Checkboxes | Keep current checkbox behavior but align labels and controls more cleanly, with the checkbox aligned to the row baseline and enough spacing that binary settings do not feel squeezed. |
| Read-only metadata | Treat id, dimensions, z-index, zoom, viewport size, and element counts as read-only metadata rows using subdued surface chips instead of plain text pairs. These rows should scan quickly and feel secondary to editable controls. |
| Secondary actions | Actions such as Resource Documentation should use a compact secondary button with icon + label, matching the dialog and menu refresh language rather than raw Bootstrap button styling. |
| Icons | Prefer Material Symbols Outlined for active editor controls and row-leading glyphs. Keep Font Awesome only where there is already a strong semantic dependency, such as group/canvas identity or resource-doc info affordances. |

##### Editor Family Mapping

| Editor family | Intended treatment |
| ------------- | ------------------ |
| Basic shape / image / native symbol | Use the same shared shell and section rhythm for Fill, Border, Style, and Miscellaneous rows. Shape-like editors should look like siblings, with the only visual differences being the sections that are present and whether a documentation action row is shown. |
| Connector | Keep connector editors visually closest to shape editors, but give Source and Target select rows equal visual weight with the line-style controls. Text annotation controls should feel identical to text-editor controls so the connector label experience does not look like a separate design system. |
| Text | Make the text editor the reference treatment for typography controls: color rows, style toggles, decoration, alignment, and font-size slider should feel especially polished because these controls are repeated across other editors. |
| Group / multi-selection | Present alignment and distribution commands as wider tool clusters with consistent icon sizing and more balanced button spacing. These editors should feel action-oriented rather than form-oriented, with read-only counts and dimensions clearly separated below the action groups. |
| Diagram canvas | Treat the canvas inspector as a settings panel: page toggles first, page metrics second, viewport/export metadata last. Read-only metrics should use quieter metadata chips so the editable toggles remain the primary focus. |
| Empty and disabled states | Disabled tabs and controls should stay visible but muted, using lighter foreground and reduced contrast rather than disappearing. This keeps the available editor structure understandable even when a specific section is temporarily inactive. |

##### Reference Mockups

| Mockup | Path | Purpose |
| ------ | ---- | ------- |
| Property editor shell | `docs/ui-mockups/CloudSkewUiPropertyEditorShell/` | Shows the intended right-rail shell, header, tabs, grouped rows, sliders, toggles, color input treatment, and metadata chips for the main shape-style editing flow. |
| Property editor variants | `docs/ui-mockups/CloudSkewUiPropertyEditorVariants/` | Shows the intended treatment for connector, text, group/multi-selection, and diagram-canvas editors so the shared design language stays consistent across the different editor families. |

### Dialogs, Notifications, And Feedback

| Surface                       | Width or style                     | Details                                                                                                                   |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Delete confirmation dialog    | `300px`                            | Confirms active diagram deletion.                                                                                         |
| Replace confirmation dialog   | `350px`                            | Confirms replacing the current diagram.                                                                                   |
| Export options dialog         | `250px`                            | Export image options.                                                                                                     |
| Print options dialog          | `300px`                            | Print options.                                                                                                            |
| Import options dialog         | `600px`                            | Diagram import flow.                                                                                                      |
| Symbol preferences dialog     | `360px`                            | Add/remove symbol family flow for AWS, Azure, GCP, and other symbol sets using grouped Angular Material checkboxes.       |
| Image upload dialog           | `600px`                            | Local JPG/PNG image upload flow.                                                                                          |
| Resource documentation dialog | `350px`                            | Shows documentation details for palette/native resources.                                                                 |
| Dialog title                  | Roboto Mono, `18px`                | `.windowHeaderText`.                                                                                                      |
| Dialog content                | Open Sans, `12px`, centered        | `.windowContent`.                                                                                                         |
| Snackbars                     | 30-second duration, Dismiss action | Warning, error, and success panel classes are defined in `src/styles.css`; info uses the default Material snackbar panel. |

#### Intended Design Refresh

Dialogs should keep their existing titles, messages, action labels, and control content exactly as they are today. The refresh is visual only: simpler spacing, calmer color, lighter typography, and a more minimal modal shell.

##### Shared Dialog Shell

| Area | Intended design change |
| ---- | ---------------------- |
| Placement | Center dialogs in the viewport with a soft dark backdrop (`rgba(15, 23, 42, 0.42)`) and comfortable inset spacing. The dialog itself should remain the focal point. |
| Container | Use a plain white surface with `12px` to `14px` radius, a subtle neutral border (`#e2e8f0`), and a restrained shadow so the dialog feels clean rather than dramatic. |
| Header | Keep the title simple and unadorned. Use a UI sans-serif (`Inter`, `Open Sans`, or equivalent) at `16px` to `18px`, semibold, with no eyebrow label, badge, or decorative copy. |
| Body | Use left-aligned content with `13px` body text, normal weight, muted slate foreground (`#475569`), and modest spacing. Do not add any new helper paragraphs, summary cards, or metadata blocks. |
| Footer | Keep actions on a quiet footer row with `12px` gaps, a subtle top divider only when needed, and stable button sizing so progress states do not shift layout. |
| Scrolling | Cap taller dialogs around `80vh` and keep overflow inside the content area only. |
| Motion | If motion is used, keep it subtle and fast; the dialog should feel immediate and lightweight. |

##### Dialog Controls And Content Patterns

| Area | Intended design change |
| ---- | ---------------------- |
| Buttons | Standardize actions to `34px` to `36px` height with `8px` to `10px` radius. Default buttons should be neutral; destructive actions may use a restrained red emphasis, but only on the primary destructive action itself. |
| Icons | Optional dialog icons should be small, quiet, and single-purpose. Avoid icon tiles, alert cards, or any extra decorative treatment that adds weight. |
| Radios and checkboxes | Style selection controls with cleaner spacing, clearer label alignment, and subtle selected states, but keep the structure simple and compact. |
| Symbol-family checklist rows | For Add/Remove Symbols, prefer Angular Material `mat-checkbox` rows over Syncfusion checkbox controls: one checkbox + one label per row, grouped with quiet section headers and subtle dividers. Keep the interaction model unchanged (toggle families on/off). |
| File input and upload | Keep the file picker minimal: a bordered control row, neutral background, and consistent typography. Do not introduce dropzones, chips, badges, or extra instructional labels beyond the copy already present in the implementation. |
| Links and reference lists | Keep links and grouped rows visually tidy with subtle spacing and muted dividers, without adding extra labels or explanatory text. |
| Helper and validation text | Retain only the existing helper or validation copy. Improve clarity through font size, weight, color, and spacing rather than by adding new wording. |
| Progress treatment | Keep export, print, and destructive action spinners inside the same button frame so the action bar stays stable while work is in progress. |

##### Dialog Family Mapping

| Dialog family | Intended treatment |
| ------------- | ------------------ |
| Compact destructive | Delete and replace/reset flows should stay compact and visually quiet, using only the existing title, message, and two actions. Recommended width: `360px` to `400px`. |
| Compact choice | Export and print flows should keep their current option content, but use cleaner vertical rhythm and lighter selection styling. Recommended width: `320px` to `360px`. |
| Extended file input | Import JSON and image upload flows should remain wider (`560px` to `600px`) but visually sparse: title, existing helper text, input control, and footer only. |
| Selection/reference | Symbol preferences and resource documentation dialogs should keep their existing content model and use spacing, typography, and dividers for structure rather than new UI chrome. For Add/Remove Symbols specifically, keep the same family list but render it as grouped Material checkbox rows aligned with the shared dialog shell. |

##### Notification Treatment

| Surface | Intended design change |
| ------- | ---------------------- |
| Snackbars | Keep the existing warning/error/success categories, but use slightly softer surfaces and cleaner typography so they feel related to the dialog refresh without becoming visually busy. |

##### Reference Mockups

| Mockup | Path | Purpose |
| ------ | ---- | ------- |
| Compact confirmation dialog | `docs/ui-mockups/CloudSkewUiDialogConfirmation/` | Shows the intended minimal shell, restrained destructive styling, and unchanged reset/replace confirmation copy. |
| Extended file-input dialog | `docs/ui-mockups/CloudSkewUiDialogImport/` | Shows the intended minimal shell, unchanged import copy, and a simplified file-input treatment for import/upload workflows. |
| Symbol preferences dialog | `docs/ui-mockups/CloudSkewUiDialogSymbolPreferences/` | Shows the intended Add/Remove Symbols treatment with the shared dialog shell and grouped Material-style checkbox rows. |

### Iconography

| Icon system              | Usage                                                                                                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Material Icons Outlined  | Primary app chrome and toolbar icons: filter, upload, add, keyboard, help, description, feedback, lock, delete, select, pan, undo, redo, zoom, center, export, print, text formatting, alignment. |
| Font Awesome solid icons | Property editor glyphs: lock, unlock, ellipsis/info, object group, and canvas/border.                                                                                                                           |
| SVG stencil icons        | Cloud/provider/resource symbols in the palette and diagram nodes, loaded from the CDN URL prefix.                                                                                                               |
| Brand logo               | Toolbar branding logo served from `src/assets/logos/cloudskew-logo.png`.                                                                                                                                        |

### Responsive Behavior

| Area               | Current behavior                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Editor shell       | Fixed viewport-based desktop layout with fixed-width side rails and scrollable canvas/properties areas. |
| Mobile breakpoints | No explicit mobile/tablet CSS breakpoints were found in the editor app styles.                          |
| Overflow           | Root, canvas, sidebar grids, and properties bar use scrollable overflow where needed.                   |
