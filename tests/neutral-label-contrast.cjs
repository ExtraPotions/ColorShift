const fs=require('fs'),{chromium}=require('playwright'),assert=require('node:assert/strict');
const luminance=c=>c.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
(async()=>{const browser=await chromium.launch();try{
  for(const site of ['anywhere','manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius']){
    const page=await browser.newPage();await page.route('https://example.org/**',r=>r.fulfill({contentType:'text/html',body:`<style>sample-sidebar{display:block;background:rgb(14,17,19)}.annotation{color:rgb(217,57,0)!important}</style><sample-sidebar><div id="annotation" class="annotation">BETA</div><div id="protected" class="annotation" data-colorshift-preserve>Protected label</div></sample-sidebar>`}));
    await page.addInitScript({content:fs.readFileSync(require('./edition-path.cjs')('colorshift-'+site+'.user.js'),'utf8')});await page.goto('https://example.org');
    if(!await page.getByRole('dialog').isVisible())await page.locator('#colorshift-fab').click();
    if(site==='anywhere')await page.getByRole('switch',{name:'Enable on this site',exact:true}).click();
    await page.getByRole('button',{name:'Appearance',exact:true}).click();const theme=page.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
    for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold','pride']){
      await theme.selectOption(palette,{force:true});const fg=await page.locator('#annotation').evaluate(e=>getComputedStyle(e).color),bg=await page.locator('sample-sidebar').evaluate(e=>getComputedStyle(e).backgroundColor);
      const a=luminance(fg),b=luminance(bg);assert((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,site+'/'+palette);
      const rgb=fg.match(/\d+/g).map(Number);assert(rgb[0]>rgb[1]&&rgb[1]>rgb[2],'Orange hue retained');
      assert.equal(await page.locator('#protected').evaluate(e=>getComputedStyle(e).color),'rgb(217, 57, 0)');
    }
    await theme.selectOption('original',{force:true});assert.equal(await page.locator('#annotation').evaluate(e=>getComputedStyle(e).color),'rgb(217, 57, 0)');await page.close();
  }console.log('Semantic labels on native neutral backgrounds reach 4.5:1 across all adapters and palettes; hue, protected labels and Original preserved');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
