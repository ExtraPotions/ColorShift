const {chromium}=require('playwright');const fs=require('fs'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true});try{
const context=await browser.newContext({colorScheme:'dark'});await context.route('https://manapool.com/**',r=>r.fulfill({contentType:'text/html',body:'<main><article>A card</article></main>'}));
await context.addInitScript({content:fs.readFileSync('colorshift-manapool.user.js','utf8')});const page=await context.newPage();await page.goto('https://manapool.com/');await page.locator('#colorshift-fab').click();const panel=page.getByRole('dialog'),theme=panel.getByRole('combobox',{name:'Theme',exact:true});
await theme.selectOption('system');assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(37, 37, 34)');
await page.emulateMedia({colorScheme:'light'});await page.waitForFunction(()=>getComputedStyle(document.body).backgroundColor==='rgba(0, 0, 0, 0)');assert.equal(await theme.inputValue(),'system');
await page.emulateMedia({colorScheme:'dark'});await page.waitForFunction(()=>getComputedStyle(document.body).backgroundColor==='rgb(37, 37, 34)');
await panel.getByRole('switch',{name:'Brighter links',exact:true}).click();await panel.getByRole('switch',{name:'Denser card grid',exact:true}).click();
await panel.getByRole('button',{name:'Reset appearance',exact:true}).click();assert.equal(await theme.inputValue(),'darkGray');assert.equal(await panel.getByRole('switch',{name:'Brighter links',exact:true}).getAttribute('aria-checked'),'true');
await panel.getByRole('button',{name:'Reset page settings',exact:true}).click();assert.equal(await panel.getByRole('switch',{name:'Brighter links',exact:true}).getAttribute('aria-checked'),'false');assert.equal(await panel.getByRole('switch',{name:'Denser card grid',exact:true}).getAttribute('aria-checked'),'true');
await panel.getByRole('button',{name:'Reset ManaPool options',exact:true}).click();assert.equal(await panel.getByRole('switch',{name:'Denser card grid',exact:true}).getAttribute('aria-checked'),'false');
const shortcut=panel.getByRole('textbox',{name:'Open menu shortcut',exact:true});await shortcut.fill('Alt+P');await shortcut.press('Tab');page.once('dialog',d=>d.accept());await panel.getByRole('button',{name:'Reset defaults',exact:true}).click();assert.equal(await shortcut.inputValue(),'Alt+G');
await page.reload();await page.locator('#colorshift-fab').click();assert.equal(await theme.inputValue(),'darkGray');
console.log('System theme changes, isolated section resets, reset display, and persistence passed');await context.close();
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
