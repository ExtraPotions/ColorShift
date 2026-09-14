# Support and maintenance policy

ColorShift is a best-effort theme layer. Site markup changes frequently, so support is organized by maintenance cost.

## Support tiers

- **Core:** shared menu, palettes, accents, contrast handling, positioning, diagnostics, storage, and recovery. These receive the highest priority.
- **Profile:** a small selector and option set inside Anywhere for a high-value site. Profiles should use stable landmarks and shared rules.
- **Best effort:** ordinary sites covered by the generic pipeline. Visual differences are expected on custom widgets, embedded frames, artwork, and restricted pages.

## Maintenance budget

Keep the supported profile set intentionally small. A profile should be added only when it has broad value, a stable DOM, and a focused test fixture. Prefer one shared rule that fixes a family of controls over a page-specific selector.

When a profile repeatedly breaks because of upstream redesigns, move it to best effort rather than expanding a permanent selector list.

## Compatibility

ColorShift supports modern Chromium and Firefox userscript managers with ES2020 JavaScript and standard DOM APIs. Browser settings pages, extension pages, cross-origin frames, and pages blocked by the browser remain outside the supported surface.
