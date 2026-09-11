const {chromium}=require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const {PNG}=require('pngjs');
const sites=['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius'];
function difference(a,b){const x=PNG.sync.read(a),y=PNG.sync.read(b);assert.equal(x.width,y.width);assert.equal(x.height,y.height);let changed=0;for(let i=0;i<x.data.length;i+=4)if([0,1,2].some(c=>Math.abs(x.data[i+c]-y.data[i+c])>12))changed++;return changed/(x.width*x.height);}
const fixture=`<html><head><style>body{margin:0;font:16px/1.5 Arial}header{padding:20px 28px}main{padding:24px;max-width:850px}article,.ReviewCard,.search-result,.productItemWrapper{padding:20px;margin:12px 0;border:1px solid #aaa;border-radius:12px}h1{font-size:28px}input,select,button{padding:10px}a{display:inline-block;margin:8px 0}nav{display:flex;gap:18px}label{display:block;margin:12px 0}</style></head><body><header><strong>ColorShift preview</strong><nav><a href="#">Discover</a><a href="#">Browse</a></nav></header><main class="mainContent Page__Container"><h1>Make the page yours</h1><p>Readable colours. Familiar controls.</p><article class="search-result productItemWrapper ReviewCard"><h2>Featured collection</h2><p>A representative page fixture for checking text, links and controls.</p><a id="sample-link" href="#">Explore this collection</a><label>Search <input placeholder="Search the collection"></label><label>Sort <select><option>Most recent</option></select></label><button class="btn button-n">View details</button></article><article><h2>More to discover</h2><p>Change the theme using the ColorShift menu.</p></article></main></body></html>`;
(async()=>{const browser=await chromium.launch({headless:true});try{
 fs.mkdirSync('test-results/visual',{recursive:true});
 for(const site of sites){
  const context=await browser.newContext({viewport:{width:1100,height:850},reducedMotion:'reduce'});
  await context.route(`https://${site}.com/**`,r=>r.fulfill({contentType:'text/html',body:fixture}));
  await context.addInitScript({content:fs.readFileSync(`colorshift-${site}.user.js`,'utf8')});
  const page=await context.newPage();await page.goto(`https://${site}.com/`);await page.locator('#colorshift-fab').click();await page.evaluate(()=>document.getElementById('colorshift-root')?.shadowRoot.querySelectorAll('details').forEach(el=>el.open=true));
  const panel=page.getByRole('dialog'),theme=panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
  for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold']){
   await theme.selectOption(palette,{force:true});
   for(const accent of ['site','blue','green','amber','violet','rose','teal','coral','silver']){
    await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).selectOption(accent,{force:true});
    const ratio=await page.locator('#sample-link').evaluate(el=>{
      const lum=color=>color.match(/\d+/g).slice(0,3).map(Number).map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
      let node=el,bg='rgba(0, 0, 0, 0)';while(node&&bg==='rgba(0, 0, 0, 0)'){bg=getComputedStyle(node).backgroundColor;node=node.parentElement;}
      const a=lum(getComputedStyle(el).color),b=lum(bg);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);
    });assert(ratio>=4.5,`${site} ${palette} ${accent}: ${ratio}`);
   }
  }
  await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).selectOption('site',{force:true});
  for(const width of [1100,360]){
   await page.setViewportSize({width,height:850});await theme.selectOption('navy',{force:true});await panel.evaluate(el=>el.scrollTop=0);await page.mouse.move(0,0);
   const first=await page.screenshot({animations:'disabled',path:`test-results/visual/${site}-${width}.png`});
   await theme.selectOption('original',{force:true});await theme.selectOption('navy',{force:true});await page.mouse.move(0,0);
   const restored=await page.screenshot({animations:'disabled'});
   assert(difference(first,restored)<.001,`${site} ${width} theme restoration screenshot mismatch`);
   const box=await panel.boundingBox();assert(box.x>=0&&box.x+box.width<=width&&box.y>=0&&box.y+box.height<=850);
   await theme.focus();await page.keyboard.press('Tab');
   assert(await panel.evaluate(el=>el.contains(el.getRootNode().activeElement)),'Tab remains inside dialog');
  }
  await context.close();
 }
 console.log('All palettes and accents pass link contrast; desktop/mobile screenshot restoration and keyboard checks passed');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
