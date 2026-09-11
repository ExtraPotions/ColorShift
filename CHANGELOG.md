# Changelog

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
