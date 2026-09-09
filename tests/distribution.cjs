const assert=require('node:assert/strict');
const fs=require('node:fs');

const sites=['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius'];
assert.equal(fs.readFileSync('colorshift-common.js','utf8'),fs.readFileSync('theme-picker-common.js','utf8'));
for(const site of sites){
  const canonical=fs.readFileSync(`colorshift-${site}.user.js`,'utf8');
  const legacy=fs.readFileSync(`${site}-theme-picker.user.js`,'utf8');
  assert.equal(legacy,canonical,`${site} compatibility alias differs from canonical output`);
  assert.match(canonical,new RegExp(`@(?:downloadURL|updateURL)\\s+https://github\\.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-${site}\\.user\\.js`));
  assert.match(canonical,/\/colorshift-common\.js/);
}
console.log('ColorShift canonical files and compatibility aliases match');
