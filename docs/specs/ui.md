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

### Toolbar And Status Bar

| Surface           | Details                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Toolbar           | Horizontal Angular Material icon-button row with dividers.                                                                          |
| Toolbar branding  | CloudSkew brand logo appears as the first left-aligned toolbar item.                                                                |
| Toolbar actions   | Lock/unlock, delete, import JSON, add/remove symbols, quick insert, select/edit, pan/swipe, undo, redo, zoom out, center view, zoom in, export image, print. |
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
| Action grouping | Present actions in this order: Branding, Diagram State (lock/delete/import/symbols), Insert, Tool Mode, History, View, Output, Help. Functional scope stays unchanged; only grouping and emphasis change. |
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

### Dialogs, Notifications, And Feedback

| Surface                       | Width or style                     | Details                                                                                                                   |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Delete confirmation dialog    | `300px`                            | Confirms active diagram deletion.                                                                                         |
| Replace confirmation dialog   | `350px`                            | Confirms replacing the current diagram.                                                                                   |
| Export options dialog         | `250px`                            | Export image options.                                                                                                     |
| Print options dialog          | `300px`                            | Print options.                                                                                                            |
| Import options dialog         | `600px`                            | Diagram import flow.                                                                                                      |
| Symbol preferences dialog     | `360px`                            | Add/remove symbol family checkbox flow for AWS, Azure, GCP, and other symbol sets.                                        |
| Image upload dialog           | `600px`                            | Local JPG/PNG image upload flow.                                                                                          |
| Resource documentation dialog | `350px`                            | Shows documentation details for palette/native resources.                                                                 |
| Dialog title                  | Roboto Mono, `18px`                | `.windowHeaderText`.                                                                                                      |
| Dialog content                | Open Sans, `12px`, centered        | `.windowContent`.                                                                                                         |
| Snackbars                     | 30-second duration, Dismiss action | Warning, error, and success panel classes are defined in `src/styles.css`; info uses the default Material snackbar panel. |

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
