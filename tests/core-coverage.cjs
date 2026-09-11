// Run without a site adapter: these selectors deliberately resemble no supported site.
const {chromium}=require('playwright'),fs=require('fs'),assert=require('node:assert/strict');
const fixture=`<style>
.box{width:320px;min-height:50px;background:#fff;color:#333}
.gradient{background:linear-gradient(white,#ccc)}
.brand{background:#ffa500;color:#123456}
.chip{background:#5eb2a1;color:#123456}
.art{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E")}
</style><nav><div class="box" id="header">Header</div></nav><main>
<section class="box" id="section">Section<div class="box" id="feed">Feed</div></section>
<div class="box" id="square">Square tile</div><form class="box" id="pill" style="border-radius:99px">Autocomplete wrapper</form>
<div class="box gradient" id="gradient">Gradient wrapper</div>
<div class="box brand" id="callout">Branded callout</div>
<div class="box chip" id="chip">Semantic chip</div><div class="box art" id="art">Artwork</div>
<div class="box" id="changing">Dynamic semantic content</div>
</main><footer><div class="box" id="footer">Footer</div></footer>`;
const adapter=`ColorShift.start({name:'Future site',accent:'#7ec8f0',options:[],css(state,colors){return state.palette==='original'?'':'html,body{background:'+colors[1]+';color:#eee}';}});`;
(async()=>{const browser=await chromium.launch();try{
const context=await browser.newContext();await context.route('https://future.example/**',r=>r.fulfill({contentType:'text/html',body:fixture}));
await context.addInitScript({content:fs.readFileSync('src/common.js','utf8')+'\n'+adapter});
const page=await context.newPage();await page.goto('https://future.example');await page.locator('#colorshift-fab').click();
await page.evaluate(()=>document.getElementById('colorshift-root').shadowRoot.querySelectorAll('details').forEach(e=>e.open=true));
const theme=page.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold']){
 await theme.selectOption(palette,{force:true});
 for(const id of ['header','section','feed','square','pill','footer']){
  const result=await page.locator('#'+id).evaluate(e=>({repair:e.dataset.colorshiftSurface,bg:getComputedStyle(e).backgroundColor,fg:getComputedStyle(e).color}));
  assert(result.repair,`${palette}: ${id} needs no adapter`);assert.notEqual(result.bg,'rgb(255, 255, 255)');
  const lum=c=>c.match(/\d+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
  assert((lum(result.fg)+.05)/(lum(result.bg)+.05)>=4.5,`${palette}: ${id} contrast`);
 }
 for(const id of ['gradient','callout','chip','art'])assert.equal(await page.locator('#'+id).getAttribute('data-colorshift-surface'),null,`${id} requires explicit site intent`);
}
await page.evaluate(()=>document.getElementById('changing').classList.add('chip'));
await page.waitForFunction(()=>!document.getElementById('changing').hasAttribute('data-colorshift-surface'));
assert.equal(await page.locator('#changing').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(94, 178, 161)');
await theme.selectOption('original',{force:true});assert.equal(await page.locator('[data-colorshift-surface],[data-colorshift-text]').count(),0);
await context.close();console.log('Adapter-free core: six surface patterns × seven palettes pass contrast; gradients, branding, chips and artwork preserved; semantic class changes and Original restoration passed');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
