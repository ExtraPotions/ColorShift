# Theme Pickers

Personalize ManaPool, Scryfall, SteamGifts and TCGPlayer with readable colour palettes, compact settings menus and site-specific enhancements.

| Site | Icon | Install |
| --- | --- | --- |
| ManaPool | <img src="assets/manapool-favicon.svg" width="32" height="32" alt="ManaPool"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/manapool-theme-picker.user.js) |
| Scryfall | <img src="assets/scryfall-favicon.ico" width="32" height="32" alt="Scryfall"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/scryfall-theme-picker.user.js) |
| SteamGifts | <img src="assets/steamgifts-favicon.ico" width="32" height="32" alt="SteamGifts"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/steamgifts-theme-picker.user.js) |
| TCGPlayer | <img src="assets/tcgplayer-favicon.ico" width="32" height="32" alt="TCGPlayer"> | [Userscript](https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/tcgplayer-theme-picker.user.js) |

**Version 3.1.1** · By [ExtraPotions](https://github.com/ExtraPotions)

## Features

- Original, light gray, dark gray, navy and black palettes.
- Site-default, blue, green, amber, violet and rose accents.
- Readable controls, brighter links, and optional ad/promo hiding.
- Compact 312px menus with keyboard-accessible toggle switches.
- Reduced-motion and high-contrast options that respect system preferences.
- Export, import and reset settings; existing preferences are retained when updating.
- Versioned settings automatically migrate when the script is updated; incompatible backup files are rejected safely.
- Collapsible diagnostics show the installed version, current page, active options, processing time and captured errors, with one-click copy.
- A launcher coordination protocol publishes ownership, priority, preferred placement and occupied space so companion controls arrange predictably.
- The menu keyboard shortcut can be changed or disabled, with warnings when another declared launcher uses the same shortcut.
- Optional quiet update checks use release metadata only and never download executable code.

| ManaPool | Scryfall | SteamGifts | TCGPlayer |
| --- | --- | --- | --- |
| Collapse individual homepage shelves, or expand/collapse all | Card, gallery and search themes | Giveaway, comment, navigation and popup themes | Search, product, listing, filter and modal themes |
| Denser card grids | Content-warning dimming with hover/focus reveal | Hide entered or ended giveaways | Denser product grids |
| Hide sold-out cards | Settings shortcut in the card toolbox | Soft-hide featured and pinned giveaways | Hide out-of-stock results |
| Compact prices and always-visible chips | Readable store and search controls | High-contrast Enter buttons and readable ESGST controls | Compact listing rows and hide merchandising carousels |

Original mode restores native site colours while keeping enabled feature options available.

## Controls and companion plugins

Click the 48px rounded-square favicon or press **Alt+G** to open settings. **Escape** or an outside click closes the menu. Tab moves through its visible controls. Drag the launcher vertically to save its position.

Scripts recognize other plugins made by ExtraPotions and respect their positioning. **Theme Pickers and Amazon Dark Pattern Blocker always take primary position.** Overlapping secondary launchers make room without moving either primary or unrelated website controls.

## Install

Install a userscript manager such as Tampermonkey or Violentmonkey, then open the appropriate userscript link above. Update existing Theme Picker entries to retain settings, disable older Grey Edition duplicates, and reload the website.

## License

[CC BY-NC 4.0](LICENSE). Original site favicons belong to their respective owners.
