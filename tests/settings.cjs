const {chromium}=require('playwright');
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
const assert=require('node:assert/strict');
const sites=['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius'];
const code=site=>fs.readFileSync(require("./edition-path.cjs")(`colorshift-${site}.user.js`),'utf8');
async function setup(browser,site='manapool',values={},source=code(site)) {
  const context=await browser.newContext();
  await context.route(`https://${site}.com/**`,r=>r.fulfill({contentType:'text/html',body:'<main><h1>Settings test</h1></main>'}));
  await context.addInitScript(values=>{
    for(const [k,v] of Object.entries(values))if(localStorage.getItem('gm-'+k)===null)localStorage.setItem('gm-'+k,JSON.stringify(v));
    window.GM_getValue=(k,d)=>JSON.parse(localStorage.getItem('gm-'+k)??JSON.stringify(d));
    window.GM_setValue=(k,v)=>localStorage.setItem('gm-'+k,JSON.stringify(v));
    window.GM_registerMenuCommand=()=>{};
    Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>{window.exportedSettings=text;}}});
  },values);
  await context.addInitScript({content:source});
  const page=await context.newPage();
  await page.goto(`https://${site}.com/`);await page.locator('#colorshift-fab').click();await page.evaluate(()=>document.getElementById('colorshift-root')?.shadowRoot.querySelectorAll('details').forEach(el=>el.open=true));
  return {context,page,panel:page.getByRole('dialog')};
}
(async()=>{
 const browser=await chromium.launch({headless:true});
 try {
  // Execute the actual previous release, then replace it with the new bundle on reload.
  for(const site of sites){
    const old=execFileSync('git',['show',`colorshift-0.0.2:colorshift-common.js`],{encoding:'utf8'})+'\n'+execFileSync('git',['show',`colorshift-0.0.2:colorshift-${site}.user.js`],{encoding:'utf8'});
    const source=`if(!localStorage.getItem('upgrade-now')){${old}}else{${code(site)}}`;
    const {context,page,panel}=await setup(browser,site,{},source);
    await panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true}).selectOption('navy',{force:true});
    await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).selectOption('rose',{force:true});
    await panel.getByRole('switch',{name:'Brighter links',exact:true}).click();
    await page.evaluate(()=>localStorage.setItem('upgrade-now','true'));await page.reload();await page.locator('#colorshift-fab').click();await page.evaluate(()=>document.getElementById('colorshift-root')?.shadowRoot.querySelectorAll('details').forEach(el=>el.open=true));
    assert.equal(await panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true}).inputValue(),'system');
    assert.equal(await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).inputValue(),'site');
    assert.equal(await panel.getByRole('switch',{name:'Brighter links',exact:true}).getAttribute('aria-checked'),'false');
    await panel.getByRole('button',{name:'Export',exact:true}).click();
    const exported=await page.evaluate(()=>window.exportedSettings);assert.equal(JSON.parse(exported).colorShift,true);
    await panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true}).selectOption('black',{force:true});
    page.once('dialog',d=>d.accept(exported));await panel.getByRole('button',{name:'Import',exact:true}).click();
    assert.equal(await panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true}).inputValue(),'system');
    for(const invalid of [{colorShift:true,palette:'black',accent:'invalid'},{colorShift:true,schemaVersion:999,palette:'black'}]){
      page.once('dialog',d=>d.accept(JSON.stringify(invalid)));await panel.getByRole('button',{name:'Import',exact:true}).click();
      assert.equal(await panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true}).inputValue(),'system');
    }
    await context.close();
  }
  for(const scenario of ['new','current','malformed','rate-limit','offline','disabled']){
    const {context,page,panel}=await setup(browser);let requests=0;
    await context.route('https://api.github.com/**',async route=>{
      requests++;if(scenario==='offline')return route.abort();
      await route.fulfill({status:scenario==='rate-limit'?403:200,contentType:'application/json',body:JSON.stringify({tag_name:scenario==='malformed'?'oops':scenario==='current'?'colorshift-'+require('../package.json').version:'colorshift-9.0.0'})});
    });
    const updateToggle=panel.getByRole('switch',{name:'Quiet update notifications',exact:true});if(scenario==='disabled'){if((await updateToggle.getAttribute('aria-checked'))==='true')await updateToggle.click();}else if((await updateToggle.getAttribute('aria-checked'))!=='true')await updateToggle.click();
    await page.waitForTimeout(150);
    for(let i=0;i<3;i++)await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).selectOption(i%2?'rose':'blue',{force:true});
    assert(requests<=1,scenario+' update checks are throttled');
    if(scenario==='new'){await page.waitForTimeout(250);const marker=await page.locator('#colorshift-root').getAttribute('data-update-available');assert(marker===null||marker==='9.0.0');}else assert.equal(await page.locator('#colorshift-root').getAttribute('data-update-available'),null);
    if(scenario==='new'){
      await panel.getByRole('switch',{name:'Quiet update notifications',exact:true}).click();
      assert.equal(await page.locator('#colorshift-root').getAttribute('data-update-available'),null);
    }
    await context.close();
  }
  for(const timeout of [false,true]){
    const {context,page,panel}=await setup(browser);
    await page.evaluate(timeout=>{
      window.updateFetches=0;
      const originalTimeout=window.setTimeout;
      if(timeout)window.setTimeout=(fn,delay,...args)=>originalTimeout(fn,delay===8000?20:delay,...args);
      window.fetch=(_,options)=>{window.updateFetches++;return new Promise((resolve,reject)=>{window.resolveUpdate=()=>resolve({ok:true,json:async()=>({tag_name:'colorshift-9.0.0'})});options.signal.addEventListener('abort',()=>reject(new Error('aborted')));});};
    },timeout);
    await panel.getByRole('switch',{name:'Quiet update notifications',exact:true}).click();
    await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).selectOption('blue',{force:true});
    await panel.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true}).selectOption('rose',{force:true});
    assert(await page.evaluate(()=>window.updateFetches)<=1);
    if(timeout)await page.waitForTimeout(80);
    else {await panel.getByRole('switch',{name:'Quiet update notifications',exact:true}).click();await page.evaluate(()=>window.resolveUpdate?.());}
    assert.equal(await page.locator('#colorshift-root').getAttribute('data-update-available'),null);
    await context.close();
  }
  console.log('Previous-release upgrades, settings round trips, atomic imports, and update failures passed');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});







