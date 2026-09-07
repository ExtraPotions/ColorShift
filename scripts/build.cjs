const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const version=require('../package.json').version;
const repo='https://github.com/ExtraPotions/super-octo-parakeet';
const raw=`https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-${version}`;
const icons={};
for(const [site,extension,type]of [['manapool','svg','image/svg+xml'],['scryfall','ico','image/x-icon'],['steamgifts','ico','image/x-icon']]){
  icons[site]=`data:${type};base64,`+fs.readFileSync(path.join(root,`assets/${site}-favicon.${extension}`)).toString('base64');
}
const common=fs.readFileSync(path.join(root,'src/common.js'),'utf8');
if(!common.includes("const version = '"+version+"'"))throw new Error('Common and package versions must match');
fs.writeFileSync(path.join(root,'theme-picker-common.js'),common);
const adapter=fs.readFileSync(path.join(root,'src/sites.js'),'utf8');
for(const [site,name,extension]of [['manapool','ManaPool','svg'],['scryfall','Scryfall','ico'],['steamgifts','SteamGifts','ico']]){
  const metadata=[['name',name+' Theme Picker'],['namespace',repo],['version',version],['description','Theme palettes, accessible settings and site enhancements.'],['author','ExtraPotions'],['license','CC-BY-NC-4.0'],['icon',`${raw}/assets/${site}-favicon.${extension}`],['match',`*://${site}.com/*`],['match',`*://www.${site}.com/*`],['run-at','document-start'],['downloadURL',`${repo}/releases/latest/download/${site}-theme-picker.user.js`],['updateURL',`${repo}/releases/latest/download/${site}-theme-picker.user.js`],['require',`${raw}/theme-picker-common.js`],['grant','GM_getValue'],['grant','GM_setValue'],['grant','GM_registerMenuCommand']];
  const warning=`if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='Theme Picker could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{\n`;
  fs.writeFileSync(path.join(root,site+'-theme-picker.user.js'),'// ==UserScript==\n'+metadata.map(([k,v])=>'// @'+k.padEnd(15)+v).join('\n')+'\n// ==/UserScript==\n'+warning+adapter.replace('__SITE__',site).replace('__ICONS__',JSON.stringify({[site]:icons[site]}))+'\n}\n');
}
console.log('Built four synchronized release files for '+version);
