const fs=require('fs'),{chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch();try{
  for(const site of ['anywhere','manapool','scryfall','steamgifts','tcgplayer','cardkingdom','goodreads','genius']){
    const page=await browser.newPage();
    await page.route('https://example.org/**',route=>route.fulfill({contentType:'text/html',body:`<style>
      .box{display:flex;width:240px;min-height:36px;background:#f0f0f0;color:#333}
      #semantic{background:#cc0c39;color:white}#transparent{background:transparent}
      #small{width:16px;min-height:16px}#plain{background:#f0f0f0}
      </style><span id="search" class="box">Go to file <input aria-label="File name"></span>
      <a id="link" class="box" href="#">Action</a><label id="label" class="box">Search label</label><span id="semantic" class="box">Sale badge</span>
      <span id="transparent" class="box">Transparent layout</span><span id="small" class="box">.</span>
      <span id="plain">Ordinary inline text</span>`}));
    await page.addInitScript({content:fs.readFileSync(require('./edition-path.cjs')('colorshift-'+site+'.user.js'),'utf8')});
    await page.goto('https://example.org');
    if(!await page.getByRole('dialog').isVisible())await page.locator('#colorshift-fab').click();
    if(site==='anywhere')await page.getByRole('switch',{name:'Enable on this site',exact:true}).click();
    await page.getByRole('button',{name:'Appearance',exact:true}).click();
    const theme=page.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
    for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold','pride']){
      await theme.selectOption(palette,{force:true});
      for(const id of ['search','label','link'])assert.equal(await page.locator('#'+id).getAttribute('data-colorshift-surface'),'surface',site+'/'+palette+'/'+id);
      assert.notEqual(await page.locator('#search').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(240, 240, 240)');
      for(const id of ['semantic','transparent','small','plain'])assert.equal(await page.locator('#'+id).getAttribute('data-colorshift-surface'),null,site+'/'+palette+'/'+id);
    }
    await theme.selectOption('original',{force:true});
    assert.equal(await page.locator('#search').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(240, 240, 240)');
    await page.close();
  }
  console.log('Layout spans and labels follow all palettes across core adapters; semantic, transparent, small and inline content preserved; Original restores surface');
}finally{await browser.close()}})().catch(error=>{console.error(error);process.exitCode=1});
