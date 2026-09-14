## 0.2.7

- Clarified that update notifications are enabled by default and appear as a quiet in-menu message.
- Updated the setting label, description, user-facing update message, and documentation.

## 0.2.7

- Fixed menu controls staying inside the panel boundary with visible themed borders for tabs, reset actions, and section buttons.
- Refreshed stale browser tests for collapsed menus and Anywhere's enabled-by-default startup state.
- Verification now passes locally and in GitHub Actions.

## 0.2.7

- Added a manual verification workflow trigger so release candidates can be rechecked without a new code change.
- Includes the 0.2.4 menu, toast, migration, and integrated-site fixes.

## 0.2.4

- Fixed menu application after initialization so themes, accents, accessibility controls, update settings, and footer status remain interactive.
- Added a badge-anchored update toast that follows a repositioned launcher.
- Preserved launcher position across migration while resetting legacy appearance options.

## 0.2.3

- Renamed themes and accents for a consistent naming system.
- Normalized accent colors and preserved hover preview with click-to-commit selection.
- Added appearance summaries, accent reset, Compact grids, privacy guidance, support tiers, and diagnostics documentation.
- Enabled update notices by default with concise change summaries.
- Added schema migration that resets upgraded installations to System, Site default, and cleared optional settings.

# Changelog

## 0.2.3

- Anywhere now starts enabled on new sites with Original appearance selected, while the menu stays collapsed.


## 0.2.2

- Improved muted-label contrast on shaded backgrounds, including Bluesky.
- Fixed palette coverage for links styled as layout containers, including X.
- Prevented core text-color adjustments from triggering repeated page updates while continuing to detect website changes.

## 0.2.1

- Fixed palette coverage for layout containers such as GitHub’s file-search box.
- Improved colored-label contrast on neutral backgrounds, including Reddit’s BETA label, while preserving the original hue.
- Shared fixes apply across Anywhere and built-in site modules; Original mode and protected content retain native styling.

## 0.2.0

- Anywhere is now the sole download, with all seven site modules built in. Site tweaks appear only on recognized domains.
- Import exported settings from your old edition, then disable the old script.
- Replaced personal author aliases in current files with ExtraPotions attribution and neutral control identifiers.


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


