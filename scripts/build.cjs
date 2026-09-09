const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const version=require('../package.json').version;
const repo='https://github.com/ExtraPotions/super-octo-parakeet';
const raw=`https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-${version}`;
const sites=[['manapool','ManaPool'],['scryfall','Scryfall'],['steamgifts','SteamGifts'],['tcgplayer','TCGPlayer'],['cardkingdom','Card Kingdom']];
const icons={};
for(const [site]of sites){
  icons[site]='data:image/png;base64,'+fs.readFileSync(path.join(root,`assets/${site}-colorshift-64.png`)).toString('base64');
}
const common=fs.readFileSync(path.join(root,'src/common.js'),'utf8');
if(!common.includes("const version = '"+version+"'"))throw new Error('Common and package versions must match');
fs.writeFileSync(path.join(root,'colorshift-common.js'),common);
fs.writeFileSync(path.join(root,'theme-picker-common.js'),common);
const adapter=fs.readFileSync(path.join(root,'src/sites.js'),'utf8');
for(const [site,name]of sites){
  const canonical=`colorshift-${site}.user.js`;
  const legacy=`${site}-theme-picker.user.js`;
  const metadata=[['name','ColorShift for '+name],['namespace',repo],['version',version],['description','Theme palettes, accessible settings and site enhancements.'],['author','ExtraPotions'],['license','CC-BY-NC-4.0'],['icon',`${raw}/assets/${site}-colorshift-128.png`],['match',`*://${site}.com/*`],['match',`*://www.${site}.com/*`],['run-at','document-start'],['downloadURL',`${repo}/releases/latest/download/${canonical}`],['updateURL',`${repo}/releases/latest/download/${canonical}`],['require',`${raw}/colorshift-common.js`],['grant','GM_getValue'],['grant','GM_setValue'],['grant','GM_registerMenuCommand']];
  if(site==='steamgifts')for(const host of ['steamtrades.com','www.steamtrades.com','sgtools.info','www.sgtools.info'])metadata.push(['match','*://'+host+'/*']);
  const warning=`if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='ColorShift could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{\n`;
  const output='// ==UserScript==\n'+metadata.map(([k,v])=>'// @'+k.padEnd(15)+v).join('\n')+'\n// ==/UserScript==\n'+warning+adapter.replace('__SITE__',site).replace('__ICONS__',JSON.stringify({[site]:icons[site]}))+'\n}\n';
  fs.writeFileSync(path.join(root,canonical),output);
  fs.writeFileSync(path.join(root,legacy),output);
}
console.log('Built '+(sites.length+1)+' canonical release files and '+(sites.length+1)+' compatibility aliases for '+version);
