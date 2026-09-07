const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const helper=fs.readFileSync(path.join(root,'theme-picker-common.js'),'utf8');
const fixture=`<html><head><style>button{padding:40px;border-radius:0}label{display:inline}div{color:red}</style></head><body>
<main><section><h2>New arrivals</h2><ul class="grid"><li><article>Card one <span>Sold out</span></article></li><li><article>Card two in stock</article></li></ul></section></main>
<ul class="toolbox-links"></ul><div class="card-content-warning">Content warning</div>
<div class="giveaway__row-outer-wrap" id="entered"><div class="giveaway__row-inner-wrap is-faded">Entered</div></div>
<div class="giveaway__row-outer-wrap" id="ended"><span title="Ended">Ended</span></div>
<div class="featured__container">Featured</div><button class="sidebar__entry-insert">Enter giveaway</button>
<button id="pfh-fab" style="position:fixed;right:16px;bottom:16px;width:48px;height:48px;padding:0">P</button></body></html>`;
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.env.TP_BROWSER?{channel:process.env.TP_BROWSER}:{})});
  try {
    for(const site of ['manapool','scryfall','steamgifts']) {
      const context=await browser.newContext({viewport:{width:1000,height:900}});
      await context.route('https://'+site+'.com/**',route=>route.fulfill({contentType:'text/html',headers:site==='scryfall'?{'Content-Security-Policy':"style-src 'self'; img-src 'self' data:"}:{},body:fixture}));
      await context.addInitScript(()=>{
        window.GM_getValue=(k,d)=>JSON.parse(localStorage.getItem('gm-'+k)||JSON.stringify(d));
        window.GM_setValue=(k,v)=>localStorage.setItem('gm-'+k,JSON.stringify(v));
        window.GM_registerMenuCommand=()=>{throw Error('Simulated manager menu failure');};
      });
      const siteCode=fs.readFileSync(path.join(root,site+'-theme-picker.user.js'),'utf8');
      await context.addInitScript({content:helper+'\n'+siteCode});
      const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.goto('https://'+site+'.com/');
      const fab=page.locator('#theme-picker-fab');await fab.waitFor();
      const start=await fab.boundingBox();
      if(site!=='scryfall'){const companion=await page.locator('#pfh-fab').boundingBox();assert(companion.x+companion.width<=start.x-7);}
      await page.mouse.move(start.x+24,start.y+24);await page.mouse.down();await page.mouse.move(start.x+24,420,{steps:6});await page.mouse.up();
      const savedDock=await fab.boundingBox();assert(Math.abs(savedDock.y-396)<2);
      // A drag suppresses the following synthetic click.
      await fab.click();const panel=page.getByRole('dialog');await panel.waitFor();
      assert.equal(await page.getByRole('checkbox').count(),0);
      const rowStyle=await panel.locator('.row').first().evaluate(el=>getComputedStyle(el).display);assert.equal(rowStyle,'flex');
      await panel.locator('summary').click();
      for(const button of await panel.getByRole('switch').all()) {
        const before=await button.getAttribute('aria-checked');await button.click();assert.equal(await button.getAttribute('aria-checked'),String(before!=='true'));
        const size=await button.boundingBox();assert.equal(size.width,36);assert.equal(size.height,20);
      }
      if(site==='manapool'){
        assert.equal(await page.locator('article').first().isVisible(),false);
        await panel.getByRole('button',{name:'Collapse all',exact:true}).click();assert.equal(await page.locator('.grid').isVisible(),false);
        await panel.getByRole('button',{name:'Expand all',exact:true}).click();assert.equal(await page.locator('.grid').isVisible(),true);
      }
      if(site==='scryfall')assert.equal(await page.locator('.card-content-warning').evaluate(el=>getComputedStyle(el).opacity),'0.4');
      if(site==='steamgifts'){assert.equal(await page.locator('#entered').isVisible(),false);assert.equal(await page.locator('#ended').isVisible(),false);}
      await panel.getByRole('combobox',{name:'Theme',exact:true}).selectOption('navy');
      assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(26, 35, 50)');
      await page.reload();await fab.click();assert.equal(await panel.getByRole('combobox',{name:'Theme',exact:true}).inputValue(),'navy');
      assert(Math.abs((await fab.boundingBox()).y-savedDock.y)<2);
      assert.equal(await panel.getByRole('switch',{name:'Brighter links',exact:true}).getAttribute('aria-checked'),'true');
      await panel.getByRole('combobox',{name:'Theme',exact:true}).selectOption('original');
      assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor),'rgba(0, 0, 0, 0)');
      await page.keyboard.press('Escape');assert.equal(await panel.isVisible(),false);
      await page.keyboard.press('Alt+g');assert.equal(await panel.isVisible(),true);
      page.once('dialog',dialog=>dialog.accept('{"themePicker":true,"palette":"black"}'));
      await panel.getByRole('button',{name:'Import',exact:true}).click();assert.equal(await panel.getByRole('combobox',{name:'Theme',exact:true}).inputValue(),'black');
      page.once('dialog',dialog=>dialog.accept('{"themePicker":true,"palette":"not-a-palette"}'));
      await panel.getByRole('button',{name:'Import',exact:true}).click();assert.equal(await panel.getByRole('combobox',{name:'Theme',exact:true}).inputValue(),'black');
      await panel.getByRole('switch',{name:'Brighter links',exact:true}).focus();await page.keyboard.press('Space');assert.equal(await panel.getByRole('switch',{name:'Brighter links',exact:true}).getAttribute('aria-checked'),'false');
      await page.evaluate(()=>document.getElementById('theme-picker-root').remove());await fab.waitFor();assert.equal(await page.locator('#theme-picker-root').count(),1);
      await page.setViewportSize({width:360,height:640});await page.waitForTimeout(100);
      const box=await panel.boundingBox();assert(box.x>=0&&box.x+box.width<=360&&box.y>=0&&box.y+box.height<=640);
      fs.mkdirSync(path.join(root,'test-results'),{recursive:true});await page.screenshot({path:path.join(root,'test-results',site+'.png')});
      assert.deepEqual(errors,[]);console.log(site+': startup, switches, layout, theme, features, persistence, keyboard, recovery and mobile passed');
      await context.close();
      const fallback=await browser.newPage();await fallback.goto('about:blank');await fallback.addScriptTag({content:siteCode});
      assert.match(await fallback.getByRole('alert').textContent(),/could not load/);await fallback.close();
    }
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
