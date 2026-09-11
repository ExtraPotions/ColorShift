const assert = require('node:assert/strict');
const fs = require('node:fs');
const version = require('../package.json').version;
const repo = 'https://github.com/ExtraPotions/ColorShift';
const sites = ['anywhere'];
assert.equal(fs.readdirSync('.').filter(f => f.endsWith('.user.js')).length, sites.length);
for (const site of sites) {
  const script = fs.readFileSync('colorshift-' + site + '.user.js','utf8');
  new (require('node:vm').Script)(script);
  const metadata = Object.fromEntries([...script.matchAll(/^\/\/ @(\w+)\s+(.+)$/gm)].map(m => [m[1], m[2].trim()]));
  assert.equal(metadata.version, version);
  assert.equal(metadata.namespace, repo);
  for (const key of ['downloadURL','updateURL']) assert.equal(metadata[key], repo + '/releases/latest/download/colorshift-' + site + '.user.js');
  assert.equal(metadata.require, undefined);
  assert(script.includes(fs.readFileSync('src/common.js','utf8').replaceAll('\r\n','\n')));
  assert.match(metadata.icon, /^data:image\/png;base64,/);
  assert(script.includes('ColorShift.start(site)'));
}
console.log('ColorShift distribution and bundled code verified');
