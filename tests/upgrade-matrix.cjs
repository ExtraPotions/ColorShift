const { chromium } = require('playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');

const helper = fs.readFileSync('theme-picker-common.js', 'utf8');
const sites = ['manapool', 'scryfall', 'steamgifts', 'tcgplayer'];
const cases = [
  { from: '2.13.0', stored: { palette: 'navy', accent: 'rose', intensity: 'soft', fabTop: 210 }, expect: { palette: 'navy', accent: 'rose', fabTop: 210, shortcut: 'Alt+G' } },
  { from: '3.0.2', stored: { settingsSchema: 1, palette: 'black', accent: 'amber', intensity: 'strong', fabTop: 340, shortcut: 'Alt+P' }, expect: { palette: 'black', accent: 'amber', fabTop: 340, shortcut: 'Alt+P' } },
  { from: '3.0.7', stored: { settingsSchema: 1, palette: 'lightGray', accent: 'green', intensity: 'normal', fabTop: 120, shortcut: '', updateNotifications: true }, expect: { palette: 'lightGray', accent: 'green', fabTop: 120, shortcut: '', updateNotifications: true } }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const site of sites) {
      const script = fs.readFileSync(`${site}-theme-picker.user.js`, 'utf8');
      for (const test of cases) {
        const context = await browser.newContext({ viewport: { width: 1000, height: 900 } });
        await context.route(`https://${site}.com/**`, route => route.fulfill({ contentType: 'text/html', body: '<main></main>' }));
        await context.route('https://api.github.com/**', route => route.fulfill({ status: 404, body: '' }));
        await context.addInitScript(values => {
          for (const [key, value] of Object.entries(values)) localStorage.setItem(`gm-${key}`, JSON.stringify(value));
          window.GM_getValue = (key, fallback) => JSON.parse(localStorage.getItem(`gm-${key}`) || JSON.stringify(fallback));
          window.GM_setValue = (key, value) => localStorage.setItem(`gm-${key}`, JSON.stringify(value));
          window.GM_registerMenuCommand = () => {};
        }, test.stored);
        await context.addInitScript({ content: `${helper}\n${script}` });
        const page = await context.newPage();
        await page.goto(`https://${site}.com/`);
        const fab = page.locator('#theme-picker-fab');
        await fab.waitFor();
        const result = await page.evaluate(() => ({
          schema: JSON.parse(localStorage.getItem('gm-settingsSchema')),
          palette: JSON.parse(localStorage.getItem('gm-palette')),
          accent: JSON.parse(localStorage.getItem('gm-accent')),
          fabTop: JSON.parse(localStorage.getItem('gm-fabTop')),
          shortcut: JSON.parse(localStorage.getItem('gm-shortcut')),
          updateNotifications: JSON.parse(localStorage.getItem('gm-updateNotifications'))
        }));
        result.top = (await fab.boundingBox()).y;
        assert.equal(result.schema, 1, `${site} ${test.from} schema`);
        for (const [key, value] of Object.entries(test.expect)) assert.equal(result[key], value, `${site} ${test.from} ${key}`);
        assert(Math.abs(result.top - test.expect.fabTop) < 2, `${site} ${test.from} dock position`);
        await context.close();
      }
    }
    console.log('Theme Picker upgrade matrix OK');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
