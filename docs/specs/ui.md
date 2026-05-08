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
| Page composition    | Activity bar, toolbar/navbar, left sidebar, central Syncfusion diagram canvas, right properties bar, status bar.                     |
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
| Activity bar                                 | `black`, `gray`, `white`                                 | Black rail, gray inactive icons, white active/focus/hover icons.          |
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
| Activity bar    | Fixed `50px` width, `100vh` height, black vertical rail.                                     |
| Main content    | Width `calc(100vw - 50px)`, height `100vh`, vertical flex layout.                            |
| Toolbar/navbar  | Fixed `50px` height, width `calc(100vw - 50px)`, horizontal flex layout.                     |
| Main editor row | Height `calc(100vh - 75px)`, width `calc(100vw - 50px)`, horizontal flex layout.             |
| Left sidebar    | Fixed `240px` width, height `calc(100vh - 75px)`, contains palette/create/preferences panes. |
| Canvas region   | Width `calc(100vw - 510px)`, height `calc(100vh - 75px)`, scrollable.                        |
| Properties bar  | Fixed `220px` width, height `calc(100vh - 75px)`, scrollable.                                |
| Status bar      | Fixed `25px` height, width `calc(100vw - 50px)`.                                             |
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
| Sidebar modes           | Palette, Add/Remove Symbols preferences, and Create New Diagram.                                                                                         |
| Palette search          | Syncfusion `ejs-textbox`, `40px` tall, clear button enabled by component settings.                                                                       |
| Palette grid            | Syncfusion `ejs-grid`, grouped and sorted, header hidden, scrollable height `calc(100vh - 195px)`.                                                       |
| Palette symbols         | `30px` symbol image column and `30px` info glyph column.                                                                                                 |
| Symbol labels           | Bootstrap link buttons with Material tooltips.                                                                                                           |
| Documentation glyph     | Font Awesome ellipsis icon displayed only when symbol documentation exists.                                                                              |
| Palette actions         | Angular Material stroked buttons for Add Image and Add/Remove Symbols.                                                                                   |
| Preferences grid        | Syncfusion grid with Syncfusion checkboxes and grouped rows.                                                                                             |
| Symbol families         | General, AWS, Azure, GCP, IBM, Oracle, DigitalOcean, Alibaba Cloud, Kubernetes/CNCF ecosystem, Elastic, VMWare, Font Awesome, HashiCorp, and Cloudflare. |
| Default symbol families | General + AWS + Azure.                                                                                                                                   |

### Activity Bar, Toolbar, And Status Bar

| Surface           | Details                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Activity bar      | Black vertical rail with logo at top, main mode buttons in the middle, help/support menu at bottom.                                 |
| Activity buttons  | Angular Material mini FABs with Material Icons Outlined; inactive gray, active/focus/hover white.                                   |
| Activity modes    | Palette, add/remove symbols, create new diagram.                                                                                    |
| Help menu         | Angular Material menu with keyboard shortcuts, FAQs, release notes, GitHub issue link, and email support.                           |
| Toolbar           | Horizontal Angular Material icon-button row with dividers.                                                                          |
| Toolbar actions   | Lock/unlock, delete, quick insert, select/edit, pan/swipe, undo, redo, zoom out, center view, zoom in, export image, print.         |
| Quick insert menu | Angular Material menu for line/elbow/curved connectors, two-way variants, circle/ellipse, rectangle/square, text, and custom image. |
| Progress state    | Delete/export/print buttons swap icon content for a `mat-spinner` while in progress.                                                |
| Status bar        | Light gray, Roboto Mono `11px`; shows current mode and zoom percentage.                                                             |

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
| Image upload dialog           | `600px`                            | Local JPG/PNG image upload flow.                                                                                          |
| Resource documentation dialog | `350px`                            | Shows documentation details for palette/native resources.                                                                 |
| Dialog title                  | Roboto Mono, `18px`                | `.windowHeaderText`.                                                                                                      |
| Dialog content                | Open Sans, `12px`, centered        | `.windowContent`.                                                                                                         |
| Snackbars                     | 30-second duration, Dismiss action | Warning, error, and success panel classes are defined in `src/styles.css`; info uses the default Material snackbar panel. |

### Iconography

| Icon system              | Usage                                                                                                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Material Icons Outlined  | Primary app chrome and toolbar icons: palette, filter, add, more, keyboard, help, description, feedback, email, lock, delete, select, pan, undo, redo, zoom, center, export, print, text formatting, alignment. |
| Font Awesome solid icons | Property editor glyphs: lock, unlock, ellipsis/info, object group, and canvas/border.                                                                                                                           |
| SVG stencil icons        | Cloud/provider/resource symbols in the palette and diagram nodes, loaded from the CDN URL prefix.                                                                                                               |
| Brand logo               | Activity bar header logo from app constants.                                                                                                                                                                    |

### Responsive Behavior

| Area               | Current behavior                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Editor shell       | Fixed viewport-based desktop layout with fixed-width side rails and scrollable canvas/properties areas. |
| Mobile breakpoints | No explicit mobile/tablet CSS breakpoints were found in the editor app styles.                          |
| Overflow           | Root, canvas, sidebar grids, and properties bar use scrollable overflow where needed.                   |
