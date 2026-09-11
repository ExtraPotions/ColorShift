# Changelog

## 0.1.2

- Compact tab navigation and distinct Theme and Accent cards in every edition.
- Descriptions move to info buttons with desktop hover/focus and mobile tap support.
- Larger recognizable header icon, concise subtitle, and status footer with release notes. Anywhere’s enable toggle now lives in the footer.
- Enabled toggles follow the accent; disabled toggles remain gray.


## 0.1.1

- Added Pride theme and accent with rainbow details. Color choices run lightest to darkest, with Pride last; System, Original, and Site default remain at the top.
- Compact shared menus across all eight editions, with side-by-side theme and accent popups, live previews, smaller desktop spacing, and touch-friendly mobile controls.
- Improved neutral gradient backgrounds, product-detail separation, and text contrast while preserving semantic hues.
- Prevented product images from darkening through multiply blending on repaired surfaces, including picture-wrapped images.
- Improved floating-button docking, enabled-state indicators, and startup behavior on new sites.
- Improved coverage checks for visually hidden text and general heading and button surfaces.


## 0.1.0

- Introduced ColorShift Anywhere as the primary offering: best-effort theming, enabled separately per website, with origin-scoped settings and immediate restoration when disabled.
- Shared core now separates repaired page, section, and nested-card surfaces across all editions, with subtle card outlines and accent contrast checks for raised surfaces. Existing tailored styling and protected artwork remain intact.
- Added amber-and-coral globe/facet branding. Seven tailored editions remain available.
- Responsive menus choose the roomier side on desktop and use a bottom sheet on mobile. One section opens at a time, with section-only scrolling and a persistent header; extremely small viewports retain a whole-menu scrolling fallback.
- Simplified theme names, expanded to eight accents plus Site default, and added color previews.
- ManaPool: improved menu-icon and preorder contrast and reduced + Add button size.


## 0.0.4

- Card Kingdom: improved homepage slider-price contrast.
- SteamGifts: readable Featured tabs, New badges, and homepage table headings while preserving ESGST chip colours.
- Scryfall: corrected skip links, blue New pills, selected language, and purchase-price contrast.
- TCGPlayer: corrected the search selector, Sign In link, and Shop Now buttons.
- Genius: expanded readable accent labels beyond community rankings.
- Added regression checks across all seven palettes and six accents, including Original-mode restoration.

## 0.0.3

- Shared repair for missed neutral backgrounds and low-contrast text, including dynamically loaded content. Artwork and semantic colours are protected.
- Added an on-demand theme coverage report and regression checks for palettes, accents, hover, keyboard focus, disabled controls, and future site layouts.
- Added a manually triggered live-site check with screenshots and explicit blocked/failure reporting. Public-page checks do not cover authenticated feeds.
- ManaPool: improved product-card separation, Sets menu labels and icons, logo lettering, sales-graph accents, profile-button rounding, and breadcrumb colours.
- Card Kingdom: themed landing sections, desktop menus, square-tile backgrounds, footer, autocomplete, and selling callouts.
- Goodreads: polished feed cards, navigation, dropdowns, search, shelf controls, comments, and footer while preserving icon-button artwork.
- Genius: themed nested page layers and ranking labels; added individual switches for News, Charts, Videos, Latest, and Community.
- SteamGifts: themed featured wrappers and ESGST chance/ratio controls; expanded accent coverage while preserving category-chip colours.
- TCGPlayer: added an optional Hide support chat switch, off by default.
- Corrected palette-name capitalization. Original mode retains native site colours.
- Compact theme-coloured menu with four collapsed sections and a header × button. No menu search, shortcut controls, or autosave banner.
- Updated site icons with slightly smaller facets and larger names.
- Simplified the README for users.

- Each install file includes its runtime and icon; no shared-code download is required.
- Update checks now handle failed requests, malformed releases, timeouts, and repeated requests quietly.
- Settings upgrades and export/import are covered by release-to-release browser tests.
- Improved accent contrast, keyboard focus, touch targets, reduced motion, and high-contrast page controls.
- Page updates scan changed areas in batches and reuse unchanged styles.
- Added System theme selection, control descriptions, and separate section resets.
- Added desktop/mobile visual checks, a large-page performance test, previews, and version validation before publishing.

System theme uses native site colours in light mode and ColorShift dark gray in dark mode. Existing explicitly selected themes remain unchanged.

## 0.0.2

Simplified distribution, removed old compatibility files, and refreshed build and release checks.

## 0.0.1

Initial ColorShift release for ManaPool, Scryfall, SteamGifts, TCGPlayer, Card Kingdom, Goodreads, and Genius.
