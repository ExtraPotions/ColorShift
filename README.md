# ColorShift Anywhere

<img src="assets/anywhere-banner.svg" width="720" alt="ColorShift Anywhere">

Your palette, across the web. Best-effort website theming, with nine complementary accents and a menu that stays in view.

**0.2.3** · [Download ColorShift Anywhere](https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-anywhere.user.js)

## Get started

1. Install a userscript manager such as Tampermonkey or Violentmonkey.
2. Install ColorShift Anywhere, then reload a website.
3. Open the ColorShift button and turn on **Enable on this site**.

Each website starts unchanged. Your palette, accent, and options are saved separately for each website. Turn the switch off to restore the site's appearance.

Choose Graphite, Charcoal, Navy, Black, Ember, Forest, Antique Gold, or Pride. System follows your device preference, and Original keeps native site colours. Hover or focus a theme or accent to preview it, then select it to save. Compact picker popups keep the menu short. Use the info buttons for explanations—hover on desktop or tap on mobile. On desktop, the menu opens above or below its button and repositions as needed. On mobile, it opens as a bottom sheet. Tabs open one section at a time; long sections scroll while the title and close button stay visible.

## Best-effort coverage

Anywhere works on ordinary HTTP and HTTPS pages where your userscript manager can run. Some page components, embedded frames, images, charts, and custom controls may retain their original appearance. Browser settings pages and other restricted pages are outside its reach.

If something looks wrong, switch Anywhere off for that site. **Settings → About & diagnostics → Scan theme coverage** can help identify contrast problems; a clean scan does not guarantee every part of a page is correct.

## Built-in site tweaks

Anywhere includes the tailored controls for ManaPool, Scryfall, SteamGifts, TCGPlayer, Card Kingdom, Goodreads, and Genius. SteamTrades and SGTools use the SteamGifts module. The Site tweaks tab appears automatically on supported domains. Enable Anywhere on the site to activate its fixes and saved options. Other websites keep best-effort theming.

### Moving from a separate edition

1. On each site, open the old script’s Settings and select Export. Save the copied settings.
2. Disable that standalone script in your userscript manager, enable Anywhere, and reload the site.
3. In Anywhere, use Settings → Import, paste the saved settings, then enable it on the site.

Theme, accent, and supported setting switches transfer. Manually positioned launchers and options are imported too; custom collapsed-section history is not included in the settings export. Your userscript manager keeps each script’s private storage separate, so migration requires this explicit transfer.

Keep only Anywhere enabled on each site to avoid competing styles. Anywhere is the only distributed script. Site modules are built in.

## Settings

Use the × button or tap outside to close the menu. Drag the ColorShift button to reposition it. Export/import transfers settings for the current website. Reduced motion, high contrast, and optional update notices are available.

## Releases

Read the [changelog](CHANGELOG.md) and browse [releases](https://github.com/ExtraPotions/ColorShift/releases).

## License

[CC BY-NC 4.0](LICENSE) · By [ExtraPotions](https://github.com/ExtraPotions).
