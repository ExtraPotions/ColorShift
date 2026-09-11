const {chromium}=require('playwright'),fs=require('fs'),assert=require('node:assert/strict');
const lum=color=>{const c=color.match(/[\d.]+/g).slice(0,3).map(v=>{v=Number(v)/255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
(async()=>{const browser=await chromium.launch();try{
 const page=await browser.newPage();
 const selectors=['.skip-links a','.pill.blue','.print-langs-item.current','a.currency-usd','a.currency-eur','a.currency-tix','a.card-kingdom','span.price.currency-usd'];
 const body='<style>a,span.price{background:#fffae3;color:#333}.pill.blue{background:#3497be;color:white}</style><div class="skip-links"><a href="#main">Skip to main content</a></div><main id="main"><span class="pill blue">New</span><a class="print-langs-item current" href="#">en</a><a class="currency-usd" href="#">$4.90</a><a class="currency-eur" href="#">€4.00</a><a class="currency-tix" href="#">1.00</a><a class="card-kingdom" href="#">$5.00</a><span class="price currency-usd">$5.00</span></main>';
 await page.route('https://scryfall.com/**',r=>r.fulfill({contentType:'text/html',body}));
 await page.addInitScript({content:fs.readFileSync('colorshift-scryfall.user.js','utf8')});
 await page.goto('https://scryfall.com/');await page.locator('#colorshift-fab').click();
 await page.evaluate(()=>document.getElementById('colorshift-root').shadowRoot.querySelectorAll('details').forEach(e=>e.open=true));
 const theme=page.getByRole('combobox',{name:'Theme',exact:true}),accent=page.getByRole('combobox',{name:'Accent',exact:true});
 for(const palette of ['lightGray','darkGray','navy','black','fireRed','leafGreen','heartGold']){
  await theme.selectOption(palette);
  for(const choice of ['site','blue','green','amber','violet','rose']){
   await accent.selectOption(choice);
   for(const selector of selectors){
    await page.locator(selector).focus();
    const [fg,bg]=await page.locator(selector).evaluate(e=>[getComputedStyle(e).color,getComputedStyle(e).backgroundColor]);
    const a=lum(fg),b=lum(bg);assert((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,palette+' '+choice+' '+selector);
   }
  }
 }
 await theme.selectOption('original');
 for(const selector of selectors){assert.equal(await page.locator(selector).evaluate(e=>getComputedStyle(e).backgroundColor),selector==='.pill.blue'?'rgb(52, 151, 190)':'rgb(255, 250, 227)');}
 console.log('Scryfall skip links, pills, language and purchase links: contrast passes seven palettes and six accents; Original restored');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
