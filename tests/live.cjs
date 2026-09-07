const {chromium}=require('playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true});
 try {for(const site of ['manapool','scryfall','steamgifts']){
  const context=await browser.newContext({viewport:{width:1280,height:900}});
  await context.addInitScript({content:fs.readFileSync('theme-picker-common.js','utf8')+'\n'+fs.readFileSync(site+'-theme-picker.user.js','utf8')});
  const page=await context.newPage();
  try {
   const response=await page.goto('https://'+site+'.com/',{waitUntil:'domcontentloaded',timeout:30000});
   if(response.status()>=400||/just a moment/i.test(await page.title())){console.log(JSON.stringify({site,status:response.status(),result:'BLOCKED: site challenge; not a successful check'}));continue;}
   await page.locator('#theme-picker-fab').click({timeout:10000});
   console.log(JSON.stringify({site,status:response.status(),title:await page.title(),switches:await page.getByRole('switch').count(),sections:await page.locator('.tp-section-button').count()}));
   await page.screenshot({path:'test-results/live-'+site+'.png'});
  }catch(e){console.log(site+': '+e.message);}
  await context.close();
 }}finally{await browser.close();}
})();
