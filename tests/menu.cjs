const {chromium}=require('playwright');const fs=require('fs'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true});try{
for(const site of ['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius']){
const context=await browser.newContext({viewport:{width:360,height:640}});await context.route(`https://${site}.com/**`,r=>r.fulfill({contentType:'text/html',body:'<main><h1>Page content</h1></main>'}));await context.addInitScript({content:fs.readFileSync(require("./edition-path.cjs")(`colorshift-${site}.user.js`),'utf8')});
const page=await context.newPage();await page.goto(`https://${site}.com/`);const fab=page.locator('#colorshift-fab');await fab.click();const panel=page.getByRole('dialog');
assert.equal(await panel.locator(':scope > .settings-group').count(),5);assert.equal(await panel.locator(':scope > .settings-group[open]').count(),5);assert((await panel.boundingBox()).height<=640);
assert.equal(await panel.getByRole('button',{name:'Close settings',exact:true}).count(),1);assert.equal(await panel.getByRole('textbox',{name:/shortcut/i}).count(),0);
assert.equal(await panel.getByRole('searchbox').count(),0);assert.equal(await panel.getByText('Changes save automatically').count(),0);
await panel.locator(':scope > .menu-tabs > button').first().click();
const theme=panel.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
for(const [palette,background] of Object.entries({lightGray:'rgb(63, 63, 60)',darkGray:'rgb(37, 37, 34)',navy:'rgb(26, 35, 50)',black:'rgb(10, 10, 10)',fireRed:'rgb(33, 21, 22)',leafGreen:'rgb(19, 29, 23)',heartGold:'rgb(33, 29, 19)'})){
 await theme.selectOption(palette,{force:true});assert.equal(await panel.evaluate(el=>getComputedStyle(el).backgroundColor),background,palette+' menu follows theme');
}
await theme.selectOption('original',{force:true});await page.emulateMedia({colorScheme:'light'});await page.waitForFunction(()=>getComputedStyle(document.getElementById('colorshift-root').shadowRoot.querySelector('.panel')).backgroundColor==='rgb(244, 244, 242)');
await theme.selectOption('system',{force:true});await page.emulateMedia({colorScheme:'dark'});await page.waitForFunction(()=>getComputedStyle(document.getElementById('colorshift-root').shadowRoot.querySelector('.panel')).backgroundColor==='rgb(37, 37, 34)');
await theme.selectOption('darkGray',{force:true});await panel.locator(':scope > .menu-tabs > button').first().click();
await panel.getByRole('button',{name:'Close settings',exact:true}).click();assert.equal(await panel.isVisible(),false);await fab.click();
await panel.getByRole('button',{name:'Close settings',exact:true}).click();assert.equal(await panel.isVisible(),false);await page.keyboard.press('Alt+g');assert.equal(await panel.isVisible(),false);await fab.click();await page.keyboard.press('Escape');assert.equal(await panel.isVisible(),false);await fab.click();await page.mouse.click(3,3);assert.equal(await panel.isVisible(),false);await fab.click();
fs.mkdirSync('test-results/menu',{recursive:true});await panel.screenshot({path:`test-results/menu/${site}.png`});await context.close();
}
console.log('Compact menus: theme colours, header close, no search/banner, and mobile bounds passed on all seven sites');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
