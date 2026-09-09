# Release procedure

1. Set the version in `package.json` and `src/common.js`.
2. Run `npm install`, `npx playwright install chromium`, `npm run build`, and `npm test`.
3. Inspect screenshots; run `node tests/live.cjs` for public-site checks. A challenge page is not a successful site check.
4. Commit source, tests, documentation and generated files. Never manually edit generated scripts.
5. Push the commit and a new `theme-picker-X.Y.Z` tag. Never move a released tag.
6. Create a draft release, upload all five generated JavaScript files and eight ColorShift icon assets, and verify SHA-256 hashes against the build.
7. Verify versioned raw dependency and icon URLs exist, then publish the draft after every upload succeeds.

The helper owns storage, lifecycle, menus and accessibility. Adapters own site behaviour. The build embeds the 64px ColorShift launcher icons and pins 128px metadata icons to the release tag.

If the manager aborts execution because a dependency cannot download, only the manager can show that error. The visible fallback covers an absent or incompatible helper when the script is allowed to execute.
