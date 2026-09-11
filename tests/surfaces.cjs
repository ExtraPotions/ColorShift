const {chromium}=require('playwright'),fs=require('fs'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch();try{
for(const site of ['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius']){
 const context=await browser.newContext();
 await context.route(`https://${site}.com/**`,r=>r.fulfill({contentType:'text/html',body:'<style>.missed{width:300px;height:60px;background:white;color:#333}.chip{background:#fca;color:#234}.art{background-image:linear-gradient(red,blue)}</style><main><div class="missed" id="surface">Feed text</div><div class="missed chip" id="chip">Badge</div><div class="missed art" id="art">Art</div></main>'}));
 await context.addInitScript({content:fs.readFileSync(`colorshift-${site}.user.js`,'utf8')});
 const page=await context.newPage();await page.goto(`https://${site}.com`);await page.locator('#colorshift-fab').click();
 await page.evaluate(()=>document.getElementById('colorshift-root').shadowRoot.querySelectorAll('details').forEach(e=>e.open=true));
 const theme=page.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
 for(const palette of ['navy','leafGreen']){
  await theme.selectOption(palette,{force:true});
  assert.equal(await page.locator('#surface').getAttribute('data-colorshift-surface'),'surface');
  assert.equal(await page.locator('#surface').getAttribute('data-colorshift-text'),'light');
  assert.equal(await page.locator('#chip').getAttribute('data-colorshift-surface'),null);
  assert.equal(await page.locator('#art').getAttribute('data-colorshift-surface'),null);
 }
 await page.evaluate(()=>document.querySelector('main').insertAdjacentHTML('beforeend','<div class="missed" id="late">Late feed</div>'));
 await page.waitForFunction(()=>document.getElementById('late').dataset.colorshiftSurface==='surface');
 await page.evaluate(()=>document.getElementById('late').style.background='rgb(10, 150, 60)');
 await page.waitForFunction(()=>!document.getElementById('late').hasAttribute('data-colorshift-surface'));
 await theme.selectOption('original',{force:true});
 assert.equal(await page.locator('#surface').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(255, 255, 255)');
 assert.equal(await page.locator('#surface').evaluate(e=>getComputedStyle(e).color),'rgb(51, 51, 51)');
 await context.close();
}
console.log('Shared surface repair: seven sites, palette changes, dynamic content, semantic colours, artwork and Original restoration passed');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
