# Contributing

Keep changes in the shared core whenever a behavior applies to more than one site. Add a profile only when the site is high value, stable enough to test, and the fix cannot be expressed by the generic pipeline.

## Profile shape

Profiles belong in `src/sites.js` and should provide:

- a display name and one accent;
- a short list of user-facing options;
- selectors limited to stable landmarks;
- a small update hook for dynamic content;
- a fixture or focused test for every non-trivial behavior.

Use the existing profile modules as examples. Do not add personal names, profile identities, or unrelated project references to code, assets, or documentation.

## Before a release

Run `npm test`, `npm run build:check`, and `npm run release:check`. Update the changelog and version together. Keep the README focused on installation and user-visible behavior; put technical detail in `docs/`.
