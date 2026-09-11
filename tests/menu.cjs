const {chromium}=require('playwright');const fs=require('fs'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true});try{
for(const site of ['manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius']){
const context=await browser.newContext({viewport:{width:360,height:640}});await context.route(`https://${site}.com/**`,r=>r.fulfill({contentType:'text/html',body:'<main><h1>Page content</h1></main>'}));await context.addInitScript({content:fs.readFileSync(`colorshift-${site}.user.js`,'utf8')});
const page=await context.newPage();await page.goto(`https://${site}.com/`);const fab=page.locator('#colorshift-fab');await fab.click();const panel=page.getByRole('dialog');
assert.equal(await panel.locator(':scope > .settings-group').count(),4);assert.equal(await panel.locator(':scope > .settings-group[open]').count(),0);assert((await panel.boundingBox()).height<360);
assert.equal(await panel.getByRole('button',{name:/close/i}).count(),0);assert.equal(await panel.getByRole('textbox',{name:/shortcut/i}).count(),0);
const search=panel.getByRole('searchbox',{name:'Find in settings'});await search.fill('brighter');await panel.getByRole('switch',{name:'Brighter links',exact:true}).click();assert.equal(await panel.getByRole('switch',{name:'Brighter links',exact:true}).getAttribute('aria-checked'),'true');
await search.fill('no-such-setting');assert.equal(await panel.getByText('No matching settings.').isVisible(),true);await search.fill('');assert.equal(await panel.locator(':scope > .settings-group[open]').count(),0);
await panel.locator(':scope > .settings-group > summary').first().click();assert.equal(await panel.getByRole('combobox',{name:'Theme',exact:true}).isVisible(),true);await panel.locator(':scope > .settings-group > summary').first().click();
await fab.click();assert.equal(await panel.isVisible(),false);await page.keyboard.press('Alt+g');assert.equal(await panel.isVisible(),false);await fab.click();await page.keyboard.press('Escape');assert.equal(await panel.isVisible(),false);await fab.click();await page.mouse.click(3,3);assert.equal(await panel.isVisible(),false);await fab.click();
fs.mkdirSync('test-results/menu',{recursive:true});await panel.screenshot({path:`test-results/menu/${site}.png`});await context.close();
}
console.log('Compact menus: collapsed sections, search, controls, closing, and mobile bounds passed on all seven sites');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
