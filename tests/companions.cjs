// Run from this repository with sibling ExtraPotions checkouts available.
const {chromium}=require('playwright');const fs=require('node:fs');const assert=require('node:assert/strict');
const prism=fs.readFileSync('../vivid-prism-heron/pride-flag-highlighter.user.js','utf8');
const amazon=fs.readFileSync('../velvet-crane-orbit/amazon-dark-pattern-blocker.user.js','utf8');
const helper=fs.readFileSync('theme-picker-common.js','utf8');
(async()=>{const browser=await chromium.launch({headless:true});try{
 for(const site of ['manapool','scryfall','steamgifts','tcgplayer','amazon']){
  for(const reverse of [false,true]){
   const context=await browser.newContext({viewport:{width:1000,height:900}});
   await context.route('https://fixture.test/**',r=>r.fulfill({contentType:'text/html',body:'<p>Gay bisexual lesbian</p>'}));
   const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('https://fixture.test/');
   await page.evaluate(()=>{window.GM_getValue=(k,d)=>d;window.GM_setValue=()=>{};window.GM_registerMenuCommand=()=>{};});
   const primary=site==='amazon'?amazon:helper+'\n'+fs.readFileSync(site+'-theme-picker.user.js','utf8');
   for(const content of (reverse?[prism,primary]:[primary,prism]))await page.addScriptTag({content});
   const primaryFab=page.locator(site==='amazon'?'#adpb-settings-fab':'#theme-picker-fab');
   const secondary=page.locator('.pfh-fab');
   const initial=await primaryFab.boundingBox();assert(initial);
   // Deliberately overlap the recognized companion with the primary.
   await secondary.evaluate((el,r)=>{el.style.setProperty('left',r.x+'px','important');el.style.setProperty('top',r.y+'px','important');el.style.setProperty('right','auto','important');el.style.setProperty('bottom','auto','important');},initial);
   await page.waitForTimeout(1750);
   const a=await primaryFab.boundingBox(),b=await secondary.boundingBox();
   assert.deepEqual(a,initial);assert(b.x+b.width<=a.x-8||b.y+b.height<=a.y-8||b.y>=a.y+a.height+8);
   await primaryFab.click();const panel=page.getByRole('dialog').filter({visible:true});assert.equal((await panel.boundingBox()).width,312);
   assert.equal(await panel.evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(40, 40, 38)');
   await page.keyboard.press('Escape');
   await page.locator('.pph-fab').click({timeout:3000});assert.equal((await page.getByRole('dialog').filter({visible:true}).boundingBox()).width,312);
   assert.deepEqual(errors,[]);await context.close();console.log(site+': primary position, companion yielding, matching panels; reversed='+reverse);
  }
 }
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
