# Theme Picker 3.0

A new implementation for ManaPool, Scryfall and SteamGifts: a compact Prism-style menu, accessible switches, persistent settings and site themes.

| Site | Icon | Install |
| --- | --- | --- |
| ManaPool | <img src="assets/manapool-favicon.svg" width="32" height="32" alt="ManaPool"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/manapool-theme-picker.user.js) |
| Scryfall | <img src="assets/scryfall-favicon.ico" width="32" height="32" alt="Scryfall"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/scryfall-theme-picker.user.js) |
| SteamGifts | <img src="assets/steamgifts-favicon.ico" width="32" height="32" alt="SteamGifts"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/steamgifts-theme-picker.user.js) |

All scripts and the common helper are version **3.0.1**. Install using Tampermonkey or Violentmonkey; update existing Theme Picker entries to retain stored settings. Disable older Grey Edition copies to avoid competing themes.

### 3.0.1 contrast fixes

SteamGifts/ESGST filter bars, navigation, statistics and badges now use readable themed surfaces instead of leftover bright gradients. ManaPool and Scryfall controls receive matching palette-aware backgrounds, readable text and placeholders, and visible keyboard focus outlines. Original mode restores native control styling. SteamGifts was verified with ESGST in a signed-in browser and approved by the user; ManaPool and Scryfall receive public-site checks and automated contrast regression tests.

Click the rounded-square favicon or press **Alt+G** to open settings; **Esc** closes them. Drag the launcher vertically to save its location. Theme Picker stays anchored and displaces overlapping known Prism/ADPB launchers. It does not reposition unrelated website controls.

## Features

| Shared | ManaPool | Scryfall | SteamGifts |
| --- | --- | --- | --- |
| Original, light gray, dark gray, navy and black palettes | Persistent homepage shelf collapse | Sitewide surfaces and card/gallery theming | Giveaway, comment, navigation and popup theming |
| Site default, blue, green, amber, violet and rose accents | Collapse all / expand all | Content-warning dimming with hover/focus reveal | Hide entered / ended giveaways |
| Brighter links; hide ads/promos | Dense grid; hide sold out | Toolbox settings shortcut | Soft-hide featured/pinned giveaways |
| Export, validated import, reset | Compact prices; always-visible chips | Automatic toolbox discovery | High-contrast Enter button |
| Reduced motion and high contrast, including system preferences | Automatic discovery of dynamic shelves/cards | Keyboard-accessible menu | Selectors for common ESGST surfaces |

Existing GM settings and `ge-` local-storage keys are read. Legacy ManaPool collapse preferences are migrated when shelves are discovered. Original removes theme colours while leaving enabled feature options available.

## Development

- `src/common.js`: rewritten settings engine and isolated menu. Constructed stylesheets work with Scryfall's restrictive inline-style policy.
- `src/sites.js`: rewritten site selectors, palette styles and feature behaviours.
- `scripts/build.cjs`: generates all four scripts with matching pinned dependency URLs. Runtime icons are embedded from `assets/`.
- `tests/browser.cjs`: Chromium tests cover document-start initialization, restrictive style policy, menu layout, toggles, persistence, themes, import, keyboard interaction, mobile fit, DOM replacement and missing-helper warnings.
- `tests/live.cjs`: public-site spot checks. Isolated SteamGifts requests may encounter an anti-bot challenge; this is reported as a blocked check, not a pass.

Run `npm install`, `npx playwright install chromium`, `npm run build`, then `npm test`. See [release procedure](RELEASE.md).

This is newly written code, including site styles. It preserves the settings feature set; the old 8,000-line SteamGifts third-party stylesheet is not bundled. Styling for every optional third-party extension combination has not been verified.

Author: [ExtraPotions](https://github.com/ExtraPotions). Code: [CC BY-NC 4.0](LICENSE). Original site favicon ownership remains with the respective sites.
