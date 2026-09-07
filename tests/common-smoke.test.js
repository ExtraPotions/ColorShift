const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync(require('path').join(__dirname, '..', 'theme-picker-common.js'), 'utf8');
const storage = new Map();
const context = {
  console,
  globalThis: {},
  window: {},
  localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) },
  document: { documentElement: { setAttribute() {}, getAttribute() { return ''; } } }
};
context.window = context;
context.globalThis = context;
vm.runInNewContext(source, context, { filename: 'theme-picker-common.js' });
const api = context.ThemePicker;
for (const method of ['registerMenus', 'mountSettingsFab', 'rootCss', 'get', 'set']) {
  if (typeof api[method] !== 'function') throw new Error(`Missing ThemePicker API: ${method}`);
}
if (api.version !== '1.26.0') throw new Error(`Unexpected helper version: ${api.version}`);
console.log(`ThemePicker common smoke test passed (${api.version})`);
