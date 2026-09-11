const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const version=require('../package.json').version;
const repo='https://github.com/ExtraPotions/ColorShift';

const sites=[['anywhere','Anywhere'],['manapool','ManaPool'],['scryfall','Scryfall'],['steamgifts','SteamGifts'],['tcgplayer','TCGPlayer'],['cardkingdom','Card Kingdom'],['goodreads','Goodreads'],['genius','Genius']];
const icons={};
for(const [site]of sites){
  icons[site]='data:image/png;base64,'+fs.readFileSync(path.join(root,`assets/${site}-colorshift-64.png`)).toString('base64');
}
const common=fs.readFileSync(path.join(root,'src/common.js'),'utf8').replaceAll('\r\n','\n');
if(!common.includes("const version = '"+version+"'"))throw new Error('Common and package versions must match');

const adapter=fs.readFileSync(path.join(root,'src/sites.js'),'utf8').replaceAll('\r\n','\n');
for(const [site,name]of sites){
  if(site!=='anywhere'&&!process.argv.includes('--fixtures'))continue;
  const destination=site==='anywhere'?root:path.join(root,'test-results','editions');fs.mkdirSync(destination,{recursive:true});
  const canonical=`colorshift-${site}.user.js`;
  const metadata=[['name','ColorShift for '+name],['namespace',repo],['version',version],['description','Theme palettes, accessible settings and site enhancements.'],['author','ExtraPotions'],['license','CC-BY-NC-4.0'],['icon',icons[site]],['match',`*://${site}.com/*`],['match',`*://www.${site}.com/*`],['run-at','document-start'],['downloadURL',`${repo}/releases/latest/download/${canonical}`],['updateURL',`${repo}/releases/latest/download/${canonical}`],['grant','GM_getValue'],['grant','GM_setValue'],['grant','GM_registerMenuCommand']];
  if(site==='steamgifts')for(const host of ['steamtrades.com','www.steamtrades.com','sgtools.info','www.sgtools.info'])metadata.push(['match','*://'+host+'/*']);
  if(site==='anywhere'){
    metadata[0][1]='ColorShift Anywhere';
    for(let i=metadata.length-1;i>=0;i--)if(metadata[i][0]==='match')metadata.splice(i,1);
    metadata.push(['match','http://*/*'],['match','https://*/*'],['noframes','']);
  }
  const moduleFactory=adapter.replace('(() => {','function colorShiftSiteModule(siteId) {').replace("  const siteId = '__SITE__';",'').replace('  const icons = __ICONS__;','  const icons = {};').replace('  ColorShift.start(site);','  return site;').trimEnd().slice(0,-5)+'}';
  const siteCode=site==='anywhere'?moduleFactory+'\n'+fs.readFileSync(path.join(root,'src/anywhere.js'),'utf8').replaceAll('\r\n','\n').replace('__ICON__',JSON.stringify(icons.anywhere)):adapter.replace('__SITE__',site).replace('__ICONS__',JSON.stringify({[site]:icons[site]}));
  const output='// ==UserScript==\n'+metadata.map(([k,v])=>'// @'+k.padEnd(15)+v).join('\n')+'\n// ==/UserScript==\n'+'(function(){\n'+common+'\n'+siteCode+'\n})();\n';
  if(process.argv.includes('--check')){if(fs.readFileSync(path.join(destination,canonical),'utf8').replaceAll('\r\n','\n')!==output)throw Error(canonical+' is stale; run npm run build');}
  else fs.writeFileSync(path.join(destination,canonical),output);
}

console.log((process.argv.includes('--check')?'Verified ':'Built ')+(process.argv.includes('--fixtures')?'1 release file and 7 test fixtures':'1 release file')+' for '+version);
