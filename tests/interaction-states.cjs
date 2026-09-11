const {chromium}=require('playwright'),fs=require('fs'),assert=require('node:assert/strict');
const sites=['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius'];
(async()=>{const browser=await chromium.launch();try{for(const site of sites){
 const context=await browser.newContext();await context.route('https://'+site+'.com/**',r=>r.fulfill({contentType:'text/html',body:'<style>button,input{padding:12px;margin:10px}#miss{width:240px;height:60px;background:white!important;color:#ddd!important}</style><main><svg id="Layer_2"><path class="cls-2" style="fill:#202b47" d="M0 0h20v20z"></path><path class="cls-3" style="fill:#15151c" d="M30 0h20v20z"></path></svg><div data-popover-content><button data-popover-close><a href="#"><div class="link-class" style="color:#1e3fae">Set name</div><img alt="Example set icon" style="filter:invert(.2)"></a></button></div><button class="btn nav__button" id="control">Action</button><button class="btn nav__button" id="disabled" disabled>Unavailable</button><input id="search" placeholder="Search"><div id="miss" style="background:white!important;color:#ddd!important">Missed surface</div><div class="chip" style="background:red">Semantic chip</div></main>'}));
 await context.addInitScript({content:fs.readFileSync(require("./edition-path.cjs")('colorshift-'+site+'.user.js'),'utf8')});
 const page=await context.newPage();await page.goto('https://'+site+'.com');await page.locator('#colorshift-fab').click();
 await page.evaluate(()=>document.getElementById('colorshift-root').shadowRoot.querySelectorAll('details').forEach(e=>e.open=true));
 const panel=page.getByRole('dialog'),theme=panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
 for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold']){
  await theme.selectOption(palette,{force:true});await panel.getByRole('button',{name:'Close settings',exact:true}).click();
  if(site==='manapool'){
 assert.notEqual(await page.locator('#Layer_2 .cls-2').evaluate(e=>getComputedStyle(e).fill),'rgb(32, 43, 71)');assert.equal(await page.locator('#Layer_2 .cls-3').evaluate(e=>getComputedStyle(e).fill),'rgb(21, 21, 28)');const label=page.locator('.link-class');
 assert.notEqual(await label.evaluate(e=>getComputedStyle(e).color),'rgb(30, 63, 174)');
 assert.equal(await page.locator('[data-popover-close]').evaluate(e=>getComputedStyle(e).backgroundColor),'rgba(0, 0, 0, 0)');
}
const control=page.locator('#control');
  for(const state of ['normal','hover','focus']){
   await page.mouse.move(0,0);await control.evaluate(e=>e.blur());
   if(state==='hover')await control.hover();if(state==='focus'){await control.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');}
   const result=await control.evaluate(e=>{const s=getComputedStyle(e);return {fg:s.color,bg:s.backgroundColor,outline:s.outlineStyle,width:s.outlineWidth};});
   const lum=c=>c.match(/\d+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
   assert((lum(result.fg)+.05)/(lum(result.bg)+.05)>=4.5,site+' '+palette+' '+state+' contrast');
   if(state==='focus')assert(result.outline!=='none'&&parseFloat(result.width)>0,'Visible focus');
  }
  assert(await page.locator('#disabled').isDisabled());
  await page.locator('#control').focus();await page.keyboard.press('Tab');assert(await page.locator('#search').evaluate(e=>e===document.activeElement),'Disabled control skipped by keyboard');
  await page.locator('#colorshift-fab').click();
 }
 await panel.getByRole('button',{name:'Scan theme coverage',exact:true}).click();
 const report=await panel.locator('.diagnostics-output').textContent();
 assert.match(report,/Surface outside palette: div#miss/);assert.match(report,/Low contrast .*div#miss/);assert(!report.includes('outside palette: div.chip'));
 await theme.selectOption('original',{force:true});await panel.getByRole('button',{name:'Scan theme coverage',exact:true}).click();assert.match(await panel.locator('.diagnostics-output').textContent(),/Original mode/);
 await context.close();
}console.log('Seven sites × seven palettes: normal, hover, focus contrast; focus indicators; disabled keyboard behavior; coverage findings and Original mode passed');}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
