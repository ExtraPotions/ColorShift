const assert = require('node:assert/strict');
const fs = require('node:fs');
const version = require('../package.json').version;
const repo = 'https://github.com/ExtraPotions/ColorShift';
const raw = 'https://raw.githubusercontent.com/ExtraPotions/ColorShift/colorshift-' + version;
const sites = ['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius'];
assert.equal(fs.readFileSync('colorshift-common.js','utf8'), fs.readFileSync('src/common.js','utf8'));
assert.equal(fs.readdirSync('.').filter(f => f.endsWith('.user.js')).length, sites.length);
for (const site of sites) {
  const script = fs.readFileSync('colorshift-' + site + '.user.js','utf8');
  const metadata = Object.fromEntries([...script.matchAll(/^\/\/ @(\w+)\s+(.+)$/gm)].map(m => [m[1], m[2].trim()]));
  assert.equal(metadata.version, version);
  assert.equal(metadata.namespace, repo);
  for (const key of ['downloadURL','updateURL']) assert.equal(metadata[key], repo + '/releases/latest/download/colorshift-' + site + '.user.js');
  assert.equal(metadata.require, raw + '/colorshift-common.js');
  assert.equal(metadata.icon, raw + '/assets/' + site + '-colorshift-128.png');
  assert(script.includes('ColorShift.start(site)'));
}
console.log('ColorShift distribution and versioned dependencies verified');
