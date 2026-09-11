const {chromium}=require('playwright'),fs=require('fs'),assert=require('node:assert/strict');
const lum=color=>{const c=color.match(/[\d.]+/g).slice(0,3).map(v=>{v=Number(v)/255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
(async()=>{const browser=await chromium.launch();try{
 const page=await browser.newPage();
 await page.route('https://www.steamgifts.com/**',r=>r.fulfill({contentType:'text/html',body:'<style>.pinned-giveaways-tab{background:linear-gradient(white,#ddd);color:#888}.fanatical_new{background:#f80;color:white}.homepage_table_column_heading{color:#333}</style><div class="page__inner-wrap"><div class="pinned-giveaways-tab">Featured</div><span class="fanatical_new">New</span><span class="homepage_table_column_heading">Discussion</span></div>'}));
 await page.addInitScript({content:fs.readFileSync(require("./edition-path.cjs")('colorshift-steamgifts.user.js'),'utf8')});
 await page.goto('https://www.steamgifts.com/');await page.locator('#colorshift-fab').click();
 await page.evaluate(()=>document.getElementById('colorshift-root').shadowRoot.querySelectorAll('details').forEach(e=>e.open=true));
 const theme=page.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true}),accent=page.getByRole('combobox',{includeHidden:true,name:'Accent',exact:true});
 for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold']){
  await theme.selectOption(palette,{force:true});
  for(const choice of ['site','blue','green','amber','violet','rose']){
   await accent.selectOption(choice,{force:true});
   for(const selector of ['.pinned-giveaways-tab','.fanatical_new','.homepage_table_column_heading']){
    const [fg,bg]=await page.locator(selector).evaluate(e=>{const s=getComputedStyle(e);return [s.color,s.backgroundColor==='rgba(0, 0, 0, 0)'?getComputedStyle(e.parentElement).backgroundColor:s.backgroundColor];});
    const a=lum(fg),b=lum(bg);assert((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,palette+' '+choice+' '+selector);
   }
  }
 }
 await theme.selectOption('original',{force:true});
 assert.equal(await page.locator('.fanatical_new').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(255, 136, 0)');
 assert.equal(await page.locator('.homepage_table_column_heading').evaluate(e=>getComputedStyle(e).color),'rgb(51, 51, 51)');
 assert.match(await page.locator('.pinned-giveaways-tab').evaluate(e=>getComputedStyle(e).backgroundImage),/linear-gradient/);
 console.log('SteamGifts coverage: three reported elements pass contrast across seven palettes and six accents; Original restored');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
