const {chromium}=require('playwright'),fs=require('fs'),assert=require('node:assert/strict');
const luminance=color=>{const c=color.match(/[\d.]+/g).slice(0,3).map(v=>{v=Number(v)/255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
(async()=>{const browser=await chromium.launch();try{
 const page=await browser.newPage();
 await page.route('https://www.cardkingdom.com/**',r=>r.fulfill({contentType:'text/html',body:'<style>.slider-item-price{color:#777;background:transparent}</style><main id="landing-wrapper"><div class="section-wrapper"><div class="section-container"><div class="slider-item"><div class="slider-item-price">$19.99</div></div></div></div></main>'}));
 await page.addInitScript({content:fs.readFileSync(require("./edition-path.cjs")('colorshift-cardkingdom.user.js'),'utf8')});
 await page.goto('https://www.cardkingdom.com/');
 await page.locator('#colorshift-fab').click();
 await page.evaluate(()=>document.getElementById('colorshift-root').shadowRoot.querySelectorAll('details').forEach(e=>e.open=true));
 const theme=page.getByRole('combobox',{includeHidden:true,name:'Theme',exact:true});
 for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold']){
  await theme.selectOption(palette,{force:true});
  const foreground=await page.locator('.slider-item-price').evaluate(e=>getComputedStyle(e).color);
  const background=await page.locator('.section-container').evaluate(e=>getComputedStyle(e).backgroundColor);
  const a=luminance(foreground),b=luminance(background);
  assert((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,palette+' slider price contrast');
 }
 await theme.selectOption('original',{force:true});
 assert.equal(await page.locator('.slider-item-price').evaluate(e=>getComputedStyle(e).color),'rgb(119, 119, 119)');
 console.log('Card Kingdom slider prices: readable across all seven palettes; Original restored');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
