const {chromium}=require('playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
const sites={manapool:'body:has(h2)',scryfall:'#main,main',steamgifts:'.page__outer-wrap',tcgplayer:'main,.marketplace',cardkingdom:'#landing-wrapper',goodreads:'main,.mainContent',genius:'main'};
const folder='test-results/live';fs.mkdirSync(folder,{recursive:true});
(async()=>{const browser=await chromium.launch({headless:true});const results=[];
try{await Promise.all(Object.entries(sites).filter(([site])=>!process.env.COLORSHIFT_LIVE_SITE||site===process.env.COLORSHIFT_LIVE_SITE).map(async([site,selector])=>{
 const context=await browser.newContext({viewport:{width:1280,height:900}});const page=await context.newPage();
 const result={site,url:'https://'+site+'.com/',status:'failed',checks:[],scope:'Public homepage; authenticated feeds are not covered.'};
 try{
  await context.addInitScript({content:fs.readFileSync(require("./edition-path.cjs")('colorshift-'+site+'.user.js'),'utf8')});
  let response;try{response=await page.goto(result.url,{waitUntil:'domcontentloaded',timeout:30000});}catch(e){result.status='blocked';throw e;}
  const title=await page.title();
  if(!response?.ok()||/just a moment|access denied|captcha|robot|attention required/i.test(title)){result.status='blocked';throw Error('HTTP '+response?.status()+': '+title);}
  await page.locator(selector).first().waitFor({timeout:12000});
  await page.waitForFunction(selector=>[...document.querySelectorAll(selector)].some(e=>e.innerText.trim().length>80),selector,{timeout:15000});
  await page.locator('#colorshift-fab').click({timeout:10000});
  const panel=page.getByRole('dialog');await panel.locator(':scope > details > summary').first().click();
  const theme=panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
  for(const palette of ['navy','leafGreen']){
   await theme.selectOption(palette,{force:true});
   assert.equal(await panel.getByRole('button',{name:'Close settings',exact:true}).count(),1);
   assert.notEqual(await page.locator('body').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(255, 255, 255)');
   result.checks.push(palette+': mounted menu and themed body');
  }
  await panel.getByRole('button',{name:'Close settings',exact:true}).click();
  if(site==='manapool'){
   const sets=page.getByRole('button',{name:'Sets',exact:true});await sets.click();if(await sets.getAttribute('aria-expanded')!=='true')await sets.press('Enter');
   const menu=page.locator('[data-popover-content]');
   const label=menu.locator('.link-class').first();
   await label.waitFor({timeout:5000});
   assert.notEqual(await label.evaluate(e=>getComputedStyle(e).color),'rgb(30, 63, 174)');
   assert.equal(await menu.locator('img[alt$="set icon"]').first().evaluate(e=>getComputedStyle(e).filter),'brightness(0) invert(1)');
   await page.screenshot({path:folder+'/manapool-sets.png'});
   await page.keyboard.press('Escape');result.checks.push('Sets menu: readable labels and icons');
  }
  for(const width of [1280,390]){
   await page.setViewportSize({width,height:900});
   await page.screenshot({path:folder+'/'+site+'-'+width+'.png'});
   await page.locator('#colorshift-fab').click();const box=await panel.boundingBox();
   assert(box.x>=0&&box.x+box.width<=width+1,'Menu fits viewport');
   await panel.getByRole('button',{name:'Close settings',exact:true}).click();result.checks.push(width+'px: menu bounds and screenshot');
  }
  result.status='passed';
 }catch(e){result.error=e.message;
 if(site==='manapool'&&result.checks.length>0){
  const baseline=await browser.newContext();try{
   const plain=await baseline.newPage();await plain.goto(result.url,{waitUntil:'load',timeout:30000});
   await plain.getByRole('button',{name:'Sets',exact:true}).click();
   await plain.locator('[data-popover-content]').waitFor({timeout:5000});
   result.baseline='Unmodified Sets menu opens; investigate themed menu.';
  }catch(baselineError){result.status='blocked';result.baseline='Sets menu also unavailable without ColorShift.';}finally{await baseline.close();}
 }
 if(result.status==='failed'&&result.checks.length===0){
  const baseline=await browser.newContext();try{
   const plain=await baseline.newPage();await plain.goto(result.url,{waitUntil:'domcontentloaded',timeout:30000});
   await plain.waitForFunction(selector=>[...document.querySelectorAll(selector)].some(e=>e.innerText.trim().length>80),selector,{timeout:12000});
   result.baseline='Unmodified page loaded; themed-page failure requires investigation.';
  }catch(baselineError){result.status='blocked';result.baseline='Unmodified page also unavailable: '+baselineError.message.split('\n')[0];}finally{await baseline.close();}
 }await page.screenshot({path:folder+'/'+site+'-failure.png',timeout:5000}).catch(()=>{});}
 finally{results.push(result);console.log(site+': '+result.status+(result.error?' — '+result.error.split('\n')[0]:''));await context.close();}
}));}finally{await browser.close();}
fs.writeFileSync(folder+'/report.json',JSON.stringify({generatedAt:new Date().toISOString(),results},null,2));
process.exitCode=results.some(r=>r.status==='failed')?1:results.some(r=>r.status==='blocked')?2:0;
})().catch(e=>{console.error(e);process.exitCode=1;});
