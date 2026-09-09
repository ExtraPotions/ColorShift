// ==UserScript==
// @name           ColorShift for Card Kingdom
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.2.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.2.0/assets/cardkingdom-colorshift-128.png
// @match          *://cardkingdom.com/*
// @match          *://www.cardkingdom.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-cardkingdom.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-cardkingdom.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.2.0/colorshift-common.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// ==/UserScript==
if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='ColorShift could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{
/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'cardkingdom';
  const icons = {"cardkingdom":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAARHklEQVR42sVaaZQc1XW+971XXV3V3bP17IskJI1mtCGBEJtwWMwSYhuzBsQWswjncPhBnOQkTk5ykh+JEx+MSSAJh5gDYjEWQSAwOATHxsICs8xhNAJpRhIaaSSNZjSame7ptarrvXfzo3tmunu6Z1pgnPrTVd1dVd+977v33fu9h131rQAAiADAGFNKOam0aVmNbW0tizpqGuqBgABh5sg7LXWU/xmxohux+Ovo+OTI8ImTJ0ZcJ+23LM6F1jr7NwIUMzcxxlzH8ZnmBVdecc4llzQ0NyutM+k0wf/ngQim6WecnTo59tGud3d/0OO6jun3a62zbsWuhjYAYJynE4m2Zcuuv/uexva2gd7evT09o0ePJeJxKvDRHP/gQi7M8z2Vc3K55yMiYiAYbGlvW3P2WSvXrT15YmT7s88fOzJk2QGtdc4Axlg6mVy5YcPN998/Pjr62tatQwcPAqAQAjn/XOiLKIfF6Mv/be7ztVJSKgI4Y/mya2+9OdzY8MKTT+/t+8S2ba01djd1ZByndcmSe7/73cMD+3/y7/+WcVy/bQOAJirzdCx81zzoZ6HTzG04fQU4/Tl9WSZgEBkgOOm0zzQ3b7l7aWfnEw//y/DRYz6/n9dZQW4Ytz/4YDqR2PrwD5RSpmVprXPoF3B8eY8CMETM/R2JqNIRKxHuSEBEZJg+T8q9vXtWrVu7at2ZH3/YQ0TMSaXPuvDCxra2V7dudV3X5zO1UjRPrsAKcg6iYMzROk067elURgnGFkhC5dHPnGmlfT7Tdd0dL2xram0567yNTjrN/Ja94ZJLBnp7hw4csCxb5qP/XMzhiAAw6Xn1hu/vujqfuG5tZ2NgPJlRRIJhJZQrObwEQIBKKcu2jhwa3Nf3ybmbLvD7/ayhrbW+pWVvTw8gm3Nvhehz9GUAHDGmJAHc2dr25Oq1V9XVX9YZ3v6ts7/71WV+wSfTkuH0WOTdWAn6IjCf9PY1NDU2tjSLlkUdpNTo0WNCiM8btYAAHDGtlavpopra+9oXrQkG41LFpDQc5jPZn/zekq+vavzhO0de2zvGGARNoQiI4LTRIxCBEMbo8AmtdEt7m6itr3fSTiKRyGXMElE1v++BI0qiKc87w7bvbe+4oi6sASY9jwFyRM6QACZSXnu1/7HrVl23pumhdw73Dieq/NzHmdR0WuhzQ81ZMh53Hac2HBYEAEA0k3Oo8pwDDBARYlIGOb+rvf225tZawxeTHiByRMhzsGDoSJ3y1GWddectrnmmZ/iJD4+PxTM1loGIqnAsyqMvOLLIBc1X3JRFj4AcMaWUR3RxXd2W9kXdgUBcyinp8TLphiEwxKm05Awf2LToaysbHtk19PKnY4gY9HGV8+HsG2nhcEcAEHOilhZEz5FJopjnLbMDW9o7LguHJdGk5/Gs4+c9OEMAmEh5TSHfI9d0X7u68aF3hnqOx4KmMDmT00NBFScrcVpRm00gU1JWcX5vx6LNzS1VQsSlBERRaZ7PMSojyfG8r5xRu7Gj+vmPRx5/f3gk4dZYAiHLqHlnutlBQlFqSiqBHhEYYlppSXR5OLylrWN5IBCXMiYlPx3o+U7kiDFHMobfPr/96u76R9879uKek4ogZIoco0qVd0URL+bYVgI9Z9k8I7sDwS3tHRfX1XlEEc9jFXCmQkaFbeP7f9D5zVUN33/n6PtHpwI+7jeY1At3FGxB9IgYk9JAdn/H4sdXr7m4ri4mpaM1xy+GvZBRnqLJlHfeouptm1d/7/eX19piIiUL/F8i1RYFcVEMT0etR/rKcMOWjo4lln1anMm6TxMAEVuwkUMQiHFHMob3nNNy1Yq6x947vu3TMQQQjFH59MjKVGY53meIHlhyxsNdKxt8ZsTzZkqd+Q8CkEQWQ5sx22BBn5CaqDJGIcBEyqv2iX/6Rud/fq3LBqbKdq2Ub8CcWheBAPyc73a9nfGYCcAQKwGhiBCg3jCGM5kH+w/e8vLevtFEOGAIxNy8u6AZiGjg0aGkfZhqfYYkwjIzaVEaLT4jAAY4peTT4xMT1VVXVFentabyfbsGIIAaIWJKPXL8+FOjo5OeB2Pw66HIvWe3PXhhR2vIjKQlEXGGZccOwGeykcH0wd6E1kRY2LZhfmKdGwMzQZDXBxqAguEr0egppW6srQWADBGf815FFOScIb4+MfHo8PC+ZDIkRLUQYIDS9NC7QzsGTv3ZpsV3rmsWHKYcxRCLrCACxoBxHNyTGOpPCoMJgcUxOW8WQphT4eYKcaIgY7vi8cfHxlJKWYj5vJREAjEsRH8qtWX//gcOHhxMp8OGwQEUkdIEAI0B32g8c/9PB65+dvevj0zVWYZfsPzAIA2cIxD0fxAb2pcSPpY1qQxzMAcN82OgnLyDOXqEGDvgOP86NjbseUHGNIAiIoA6w4hJ+fdDQ7fs2/fLSKRaCIsxSQVR62kyBYZt4/3jU19/vu/eV/uPx5ywbTAApYk0CB+6adW3Mzo25BhmQSFYkjkzP5VsYkrLWAogwNiElI+Oje1OpQKMVXHuY+y50dEb9u594sQJBlAthCLSJSOEQGoKmcI2+NbekYuf/Pifdw1pgDrLMEycGvf6fjUVj0jDzypKWDgbxPPrOQXfKgATUWr9o/HxG2prLaKHjx/vicdtxsKGIYnUQi/PMipsG2mp/vqtQy/sGf2LS5ecb4YGemIAIAwsth6hpBRAuWa/OAvlzWSI+VpUfqrhiCbAa9HocCr1aTIZ4jxL98qnXqXJx5hlwaGJ9K92ToTDAIicQflnYDmzRBneF2lpc4pAAA6wLBhst+3+WOx4KgUAorKJgiO6WieVuqiq+p6mpsWmGZOKAVTKnEJbxDzCBi2k12a05ojra2pa/P6BWCzqeT7GsIzZ2ZRHAFNStvvMP2psvKSqWhJFvPlrE5wrINCMJ3GuARWjzxGOKEPUaJp19fWDyeRgIuFpbcypXhCAIaaUYojXh+s31zfUcR5XCiqvZws6tVkyiGL0RAXoZ2XA+Z7sESFAdyjU7PcPxGInHSfbndE0ZyRRTMq1tn13Y/NZgUBSqZhSp1GK44xEN3NauqWs1Pcln+9qHRJiY13d8VRqfyKRltLHGAOIK1XF+R83tVxTW2swFpWywkaCSsvDpVtKLNaQcVbipIrNyDa1iwKBBr//QDx+LJVytb6oqvquxsbFpj+ulFex4xWQiYwhUhH6Mi1lad8roLQnq0xTzlvGFQ1FRmsfY+trahpN83zTurq2NqP1lJQcsZIuSAMwgGouhjJuXGsOSPO2lKWidlo7IYL90UijbbcEAgbjMrumUIEZmihNtNiyLg1VJ5XSFTcSBBBgzNF6RzTyRmzK0cRnKVCi3hHF6JHm1hYnkolJ120LBOr9VpYnWBmjMkRJreyigqV8I+FnTCD2pJLbo9HDGddCXoC+lFAi5p3tcofBuKfU4NTUhOO0B0Mhw1Ba68qGglWQDBQAB6gS4pjrbo9GPkglObIqJhTQvOgp3wAsrCQKCiQCQESBGMtk+iOTTZbdYts+zr3KGLVg3xxkLKX19sjkz2KxpFYBxglAlpbYsKjsL0qjVKoUnQ0SzhgBnEglJ12nNRBs8PsrZ9RcumsAPyJHfD+ZfCUaGcq4NmdBzhXl5xwsVWWWLSXYnFRUUCBRjlHM03Q4Hp9wnfZAoEoY2RK6cjMUgEAMIh7JuC9FIj2plGBYJbgmnBc9zmW6mKeJKSdHTjMK4p43MBVtMK1W2zYZl7Rwqp3hTFLrbdHI/8RiKa0DjBFCdmmoYvRYagSodHdfUr8nAI5IgCOOM+l5bZbV4DcZoCrDKALQQBbjCPBuIrFjKnLM9QKcBTjTMGeurQQ9QX4xh4UMqmjlJ+tOA1FqNZhMjLtuh21XG4ai4tJYAQlkQWSHXPel6GRvKi0QqzhXMNvAUKULoQUtpYDyQ1Dh2kmWUQZgXMr+WKzBNNtt28+5q3U2UjVAiPGYUj+ORd+KxRxNAcYIQM1uwsDT4n3+L0UtJSt0ROUrP0DTDc1J141K2WpZ9T4fR/Qj8zPcmYi/Go0MZ7wA5wHG9BzxptQb5139xwXWB04PfT4OgzFJdDiZHHOc7kDwcMZ9LRrZnU6ayKoEVwQl0WNOeihpAAEhlTFGlJ6GTx99fqpFAAMxpfSeeLwvEU9rXcW4BlQ0BxtjQKSUyvKwQMbKrSkTEWZXzpExTTSNDcutD3wh9PnBNNMiB1ihQIu57Q8EkEwkueBVNdWc8bzIL5h6EZGIYrFYxsvYdqCocRFfBvrZuJxNVli45ICaKONmLvzKpnUb1nNDzButQECkqX/fwK6duxgjLNHQFLaUXxx9acF4mveayPO8m++4tba+9s3/fvPY0aNZxddTmjNW2I2hIo2AzS3NV1555fLOZc89/byUEhELayEsU43+ltHneJ9KJq+96XrT8n3vH/5Ra22afgSKpd26oD2VchhDwRCREZCT8aptS2k9MTGxu3f3vVu23LT5pq1PPmMHisXdstn3t4oeATGTybS1tXV2r3j6qaeEEKFQSAguCf725qu2f+eO1//q7iWN4W9fecEN560JWf6f/c19qxc1S03BQCAUDD7/3HO1dTVd3Sscx80SiWEufeHvAH021WRcd8XKrkOHDk1OREzTBNJTyfQ3Nqy8esPK636w9ReffLa0qW5JuPrS1cu2PnDLrn2DPYeOWz5DKsWFcB13z549Xd1dnpQMEQBZZHzStPyBUFArVVBtfwnocyeIVdXVkUgEELI5MiPleUvbPto3OD4+9dBrO9/4TZ+Tkbdees6GM9peef9TrXNRS0SIGIlErIAVDIZM0z8ZibKR4WHGeEtbm5QqFxlfIvocVZOJRCgUAiJEJCBDiJ6hkXNXLa2vCf3wW9fcfdUmnyGe/vkHf/rM6y/++Z2mIZTWuR6MqKaqKhFPNLc0MYYjIyfY2ImRU6Mn15y9fo409CWgByQiw/B9dvDQ8uXLg6GQlBIAawLWjo/2vtk78Mpf3rWsqe7tTz+Lppz+4bGn3vrN4VOTmzetj6Udznl2d+XqtWsPHjx01tnrxsbGT548xW2fzQW/6PLLDg3sHz91yjRNPf9K/xdAn/3SMIzxU+NLly7tXt393rvvAQDnnDP28937f9o78Ow7Hzue/PjwcN/QiG2ZL+7afXh8kjPmeV40Er3l1lssv71/3/7rbvzmL/737cODR3hjuHn0xMjKM9d0rV29+8OPpJTc8FHBjr950ZdcOylWYbN6Tp5AzflAf/8Fmy7ceO7GkyfHkskkANimTyrlNwzBuZ7ZeydYRmrOWENjw22337ZkydJtL7y0+fY/TKed1159g3OBKxavzDhO6+KO+77z4OCBgy/86CnHdS3bgpJ6N1awdRQIpuW02Qo9v8ogQIZKKQD46lWXr+hekclkiCi3vxEoX3XA6anb9JkHDnz29i933nTz9V3dK/7jsSeGh0d8pg87O7oYZ6lUatW6Mzffc9f42NiOH287MjgIwIQQjLPPN9fSQpTLVhPpVDoQCITrw5zzcsvxWmvPk5OTkdq62tvuuKWpqfH5Z3+yd2+/ZVlaa+xc1AUAjPFUKtW+ZPGNd9za1NrS3/fJJ719I8PDyUQSZgvAhTehUcVV7fSkzJRSUsni0cZZXtrBYGtby1lnr1975pqRkZH/2vby0aPDtm3lth53Luqi6We5ruMzzfUbN5570QUNTY1K6YzjUKGQVLTSX+qS8gSmouWOYuUvx5LyqiMS+vwmZ2xs7NQH73/U+3FfJpMxTXN6Azvi8kXds6IKZ0ppJ502/VZTS1NLe3ttuK5gD9d8om4Rc/LtWvDGsmoGIUYnIyMjo6OjJ1034/f7OedZ32dH6f8AQqH1un1mWWoAAAAASUVORK5CYII="};
  function theme(state,colors,accent,surfaces,extras='') {
    if(state.palette==='original')return '';
    const [,body,surface,header]=colors;
    return `html{color-scheme:dark}html,body{background:${body}!important;color:#d0d0cc!important}
      ${surfaces}{background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff20!important}
      header,footer,.header,.footer,.nav__outer-wrap,.nav__inner-wrap,.nav__button-container{background:${header}!important;color:#ddd!important}
      a{color:${accent}!important}a:hover{filter:brightness(1.15)}
      input:not([type=checkbox]):not([type=radio]),textarea,select{background:${surface}!important;color:#eee!important;border-color:#777!important}
      h1,h2,h3,h4,h5,h6{color:#bfcbd8!important}
      button:not([role=switch]),.button-n,.btn,.form__submit-button{background:${header}!important;color:#ddd!important;border-color:#777!important}
      ${extras}`;
  }
  function shared(state) {
    return (state.brighterLinks?'a,a:visited{color:#9ad8f8!important}':'')+
      (state.hideAds?'.hpsgck,.fanatical_container,[id*="google_ads"],.adsbygoogle,[data-ad],.promo-banner,.sponsored,.bot-marketing-panel{display:none!important}':'');
  }
  const sections=new Map();
  function siteControls(state,colors,accent,selectors) {
    if(state.palette==='original')return '';
    return `:is(${selectors}){background:${colors[3]}!important;color:#eee!important;border-color:#858580!important;text-shadow:none!important;box-shadow:none!important}
      :is(${selectors}):hover{background:${colors[2]}!important;color:#fff!important}
      :is(${selectors}):focus-visible{outline:2px solid ${accent}!important;outline-offset:2px}
      input::placeholder,textarea::placeholder{color:#c0c0bc!important;opacity:1!important}`;
  }
  function steamControls(state,colors,accent) {
    if(state.palette==='original')return '';
    const surface=colors[2],control=colors[3];
    return `
      .nav__button,.page__heading__breadcrumbs,.pagination__navigation,.esgst-heading-button,
      .esgst-gf-button,.giveaway__columns>div,.esgst-gwc,.esgst-gwr{
        background:${control}!important;color:#d0d0cc!important;border-color:#ffffff30!important;text-shadow:none!important;box-shadow:none!important}
      .esgst-gf-container,.esgst-gf-box,.esgst-panel,.esgst-popup,.esgst-menu-layer,
      .fanatical_container,.fanatical_description,.sidebar__search-container{
        background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff30!important;text-shadow:none!important}
      .esgst-heading-button:hover,.esgst-gf-button:hover,.nav__button:hover{
        background:${surface}!important;color:#fff!important}
      .esgst-heading-button:focus-visible,.esgst-gf-button:focus-visible,.nav__button:focus-visible{
        outline:2px solid ${accent}!important;outline-offset:2px}
      .giveaway__columns>div a,.esgst-heading-button a,.pagination__navigation a{color:${accent}!important;text-shadow:none!important}
      .esgst-gc{background:${control}!important;color:#d0d0cc!important;border:1px solid #ffffff30!important;text-shadow:none!important}
      .giveaway__column--contributor-level--positive,.fanatical_pricing{background:#254521!important;color:#d8ffc5!important;text-shadow:none!important}
      .giveaway__column--contributor-level--negative{background:#662626!important;color:#ffdbdb!important;text-shadow:none!important}
    `;
  }
  function collapse(api,record,value) {
    record.collapsed=value;
    const map=api.read('sections',{});map[record.title]=value;api.write('sections',map);
    record.button.setAttribute('aria-expanded',String(!value));record.button.textContent=value?'▸':'▾';
    for(const child of record.content)child.classList.toggle('tp-section-hidden',value);
    if(value){record.scroll=scrollY;const positions=api.read('sectionScroll',{});positions[record.title]=scrollY;api.write('sectionScroll',positions);}
    else if(Number.isFinite(record.scroll)&&Math.abs(scrollY-record.scroll)<120)scrollTo(0,record.scroll);
  }
  const adapters={
    manapool:{name:'ManaPool',accent:'#5eb0ef',options:[['dense','Denser card grid'],['hideSoldOut','Hide sold out'],['compactPrices','Compact prices'],['alwaysChips','Always show chips']],
      actions:[['Collapse all',api=>{for(const record of sections.values())collapse(api,record,true);} ],['Expand all',api=>{for(const record of sections.values())collapse(api,record,false);}]],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        'main,#app,.app,article,.bg-white,.bg-gray-50,.bg-gray-100,.bg-popover,[data-popover-content],[role=dialog],[role=menu]',
        `:root{--background:60 3% 14%;--foreground:60 3% 80%;--card:60 3% 16%;--popover:60 3% 16%;--border:60 3% 28%}
        .text-green-700,.text-xl.font-bold.text-green-700{color:#22c55e!important}
        .bg-blue-100{background:#5eb0ef!important;color:#061018!important}.bg-green-100{background:#7ddea0!important;color:#062012!important}
        .bg-yellow-100,.bg-amber-100{background:#f0d35a!important;color:#1a1400!important}.bg-purple-100{background:#c9a0ef!important;color:#1a0828!important}
        .bg-orange-100{background:#f0a06a!important;color:#1a0c00!important}.bg-pink-100{background:#f5b0c8!important;color:#1a0610!important}
        .gradient-wrapper{height:15px!important;max-height:15px!important;overflow:hidden}.gradient-rare{background:linear-gradient(90deg,#d4af37,#fc0)!important}
        .gradient-mythic{background:linear-gradient(90deg,#b98747,#ffca89)!important}.gradient-uncommon{background:linear-gradient(90deg,#909497,#c0c0c0)!important}
        header a[href="/"]{color:${accent}!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],a.bg-blue-700,a.bg-blue-600,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.palette==='original'?'':'.text-gray-500,.text-gray-600,.text-gray-700,.text-gray-800,.text-gray-900{color:#d0d0cc!important}')+
        '.tp-section-hidden{display:none!important}.tp-section-heading{display:block!important;visibility:visible!important}.tp-section-button{border-radius:6px;padding:4px 8px;margin-right:8px;cursor:pointer}'+
        (state.dense?'ul.grid,.grid{gap:.5rem!important}article{margin:0!important}':'')+
        (state.hideSoldOut?'[data-tp-sold=true]{display:none!important}':'')+
        (state.compactPrices?'.text-green-700,.text-xl.font-bold{font-size:.95rem!important;line-height:1.2!important}':'')+
        (state.alwaysChips?'.rounded-b-lg.bg-gray-50,.inline-flex.items-center.border{opacity:1!important;visibility:visible!important}':'');},
      update(api){
        for(const card of document.querySelectorAll('article,li.group,.group.bg-white')) {
          const sold=/sold\s*out|out\s*of\s*stock/i.test(card.textContent)||!!card.querySelector('[data-stock="0"],[class*="out-of-stock"]');
          if(card.dataset.tpSold!==String(sold))card.dataset.tpSold=String(sold);
        }
        for(const [node] of sections)if(!node.isConnected)sections.delete(node);
        if(location.pathname.replace(/\/+$/,'')!=='')return;
        for(const heading of document.querySelectorAll('h2')) {
          if(heading.querySelector('.tp-section-button'))continue;
          let container=heading.parentElement;
          while(container&&container!==document.body&&!container.querySelector('ul,.grid,[class*=grid-cols]'))container=container.parentElement;
          if(!container||container===document.body||sections.has(container)||container.querySelectorAll('h2').length!==1)continue;
          const title=heading.textContent.trim();
          const content=[...container.children].filter(el=>el!==heading&&!el.contains(heading));if(!content.length)continue;
          const button=api.element('button',{type:'button',class:'tp-section-button','aria-label':'Toggle '+title});heading.prepend(button);
          heading.classList.add('tp-section-heading');
          const record={title,button,content,collapsed:false,scroll:api.read('sectionScroll',{})[title]};sections.set(container,record);
          let legacy={};try{legacy=JSON.parse(localStorage.getItem('mpge-collapsed-sections-v1')||'{}');}catch{}
          collapse(api,record,api.read('sections',legacy)[title]===true);
          button.addEventListener('click',()=>collapse(api,record,!record.collapsed));
        }
      }
    },
    scryfall:{name:'Scryfall',accent:'#7ec8f0',options:[['dimWarnings','Dim content warnings']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#main,.main,.homepage,.card-profile,.card-text,.card-grid,.print-gallery,.prints,.prints-table,.set-details,.reference-block,.rulings,.sidebar,.toolbox,.buybox,.search-info,.search-controls,.autocomplete,.select2-dropdown,.modal,.popover,table,td,th',
        '.card-image,img.card,picture{background:transparent!important}')+
        siteControls(state,colors,accent,'.button-n,.select-n,button:not([role=switch]),select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.dimWarnings?'.card-content-warning{opacity:.4;filter:grayscale(.55);max-height:3.5rem;overflow:hidden}.card-content-warning:hover,.card-content-warning:focus-within{opacity:1;filter:none;max-height:none}':'');},
      update(api){const toolbox=document.querySelector('.toolbox-links');if(toolbox&&!toolbox.querySelector('[data-tp-launch]')){
        const item=api.element('li'),button=api.element('button',{type:'button',class:'button-n','data-tp-launch':'true'},'Theme Picker settings');
        button.addEventListener('click',api.open);item.append(button);toolbox.append(item);
      }}
    },
    steamgifts:{name:'SteamGifts',accent:'#7ec8f0',options:[['hideEntered','Hide entered'],['hideEnded','Hide ended'],['softHideFeatured','Soft-hide featured / pinned'],['highContrastEnter','High-contrast Enter']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '.page__outer-wrap,.page__inner-wrap,.page__heading,.sidebar,.sidebar__heading,.table,.table__row-outer-wrap,.table__row-inner-wrap,.giveaway__row-inner-wrap,.featured__container,.comment__summary,.comment__description,.comment__entity,.form__row,.form__input-description,.pagination,.popup,.popup__heading,.popup__description,.markdown,.nav__absolute-dropdown,.nav__row,.widget-container,.esgst-popup,.esgst-menu-layer,.esgst-panel,.esgst-gv-popout,#dlg-box,#dlg-body,.ui-dialog,.ui-widget-content',
        '.sidebar__entry-insert,.form__submit-button{background:#315b27!important;color:#d8ffc5!important}.sidebar__entry-delete{background:#7f2828!important;color:#ffdbdb!important}.giveaway__heading__name{color:#c1d8ec!important}.giveaway__columns,.comment__username{color:#bbb!important}.is-faded{opacity:.55}.giveaway__image,.giveaway__image-outer-wrap{background-color:transparent!important}')+
        steamControls(state,colors,accent)+
        (state.hideEntered?'.giveaway__row-outer-wrap:has(.is-faded),.giveaway__row-outer-wrap:has(.esgst-faded),.giveaway-gridview .faded{display:none!important}':'')+
        (state.hideEnded?'[data-tp-ended=true]{display:none!important}':'')+
        (state.softHideFeatured?'.featured__container,.pinned-giveaways{opacity:.32;max-height:52px;overflow:hidden}.featured__container:hover,.featured__container:focus-within,.pinned-giveaways:hover,.pinned-giveaways:focus-within{opacity:1;max-height:none}':'')+
        (state.highContrastEnter?'.sidebar__entry-insert,.form__submit-button{background:#125c14!important;color:#fff!important;border:2px solid #fff!important;font-weight:bold!important}':'');},
      update(){for(const row of document.querySelectorAll('.giveaway__row-outer-wrap')){
        const ended=!!row.querySelector('.fa-times-circle')||[...row.querySelectorAll('[title]')].some(el=>/ended/i.test(el.title));
        if(row.dataset.tpEnded!==String(ended))row.dataset.tpEnded=String(ended);
      }}
    },
    cardkingdom:{name:'Card Kingdom',accent:'#e45b64',options:[['dense','Denser product results'],['hideSoldOut','Hide fully sold out'],['compactListings','Compact condition rows'],['stickyFilters','Sticky search filters']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#landing-wrapper,.landing-wrapper,main,.main,.productItemWrapper,.productCardWrapper,.itemContentWrapper,.detailWrapper,.addToCartWrapper,.addToCartByType,.filterContainer,.sidesearch,#sidecartContainer,.sideCart,.dropdown-menu,.pagination,.modal-content,.card,.footer,.footer-wrapper',
        `.header-nav,.bg-ck-blue{background:${colors[3]}!important}.productDetailTitle,.productDetailSet,.productDetailType,.collector-number,.styleQtyAvailText,.resultsCount{color:#d0d0cc!important}.stylePrice,.amtAndPrice{color:#8ee2a4!important}.outOfStockNotice{color:#ffabab!important}.mtg-card-static-wrapper,img.card-image{background:transparent!important}`)+
        siteControls(state,colors,accent,'.btn,.dropdown-toggle,.page-link,.addToCartButton,.sideSearchApply,button:not([role=switch]),select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.palette==='original'?'':'.text-muted,.detailFlavortext{color:#b8b8b4!important}.nav-tabs .nav-link.active{background:'+colors[2]+'!important;color:#fff!important;border-color:#777!important}')+
        (state.hideAds?'.promo,.promo-banner,.mega-menu-promo,[class*="promoColumn"],[class*="marketing"]{display:none!important}':'')+
        (state.dense?'.productItemWrapper{margin-bottom:.5rem!important}.productCardWrapper,.itemContentWrapper,.detailWrapper{padding:.45rem!important}.productDetailDrillIn{margin-bottom:.25rem!important}':'')+
        (state.hideSoldOut?'[data-tp-sold=true]{display:none!important}':'')+
        (state.compactListings?'.addToCartByType,.oneRow,.twoRow{min-height:auto!important;margin:.15rem 0!important;padding:.2rem .35rem!important}.style,.qty,.amtAndPrice{margin-top:.1rem!important;margin-bottom:.1rem!important}':'')+
        (state.stickyFilters?'.sidesearch{position:sticky!important;top:8px!important;max-height:calc(100vh - 16px)!important;overflow:auto!important;scrollbar-gutter:stable}':'');},
      update(){for(const card of document.querySelectorAll('.productItemWrapper,.productCardWrapper')){
        const available=!!card.querySelector('.addToCartButton:not(.disabled),button.addToCartButton:not([disabled])');
        const sold=!available&&!!card.querySelector('.outOfStockNotice');
        if(card.dataset.tpSold!==String(sold))card.dataset.tpSold=String(sold);
      }}
    },
    tcgplayer:{name:'TCGPlayer',accent:'#6ea8ff',options:[['dense','Denser product grid'],['hideSoldOut','Hide out of stock'],['compactListings','Compact listing rows'],['hideMerch','Hide merchandising carousels']],
      css(state,colors,accent){const [,body,surface,header]=colors;
        return shared(state)+theme(state,colors,accent,
        'main,#app,.app,.search-layout,.search-layout-hfb,.search-layout-vertical-content,.search-results,.search-result,.search-result__content,.search-result__listings,.search-toolbar,.filter-drawer,.filter-drawer__body,.filter-drawer__header,.filter-drawer__footer,.filter-side-bar,.horizontal-filters-bar,.hfb-popover-content,.hfb-result-count,.search-filters-autocomplete__dropdown,.search-filters-autocomplete__input,.listing-item,.list-view-product-card,.product-card,.product-card__content,.product-card__product,.item-card,.product-carousel,.tcg-carousel,.out-of-stock,.breadcrumbs,.search-breadcrumbs,.navbar,.navbar-menu,.navbar-dropdown,.navbar-item,.navbar-brand,.tcg-modal,.tcg-modal__inner,.tcg-modal-content,.tcg-modal__header,.tcg-modal-actions,.modal__title,.modal__content,.modal__actions,.modal__container,.tcg-drawer,.tcg-drawer__sheet,.tcg-drawer__content,.tcg-drawer__header,.spotlight,.product-details,.shopping-cart,.martech-card,.loading-overlay,.filter-bubbles,.search-filter,.availability,.shop-by-seller,.shop-by-direct,.find-a-seller,.seller-details,.item-added-drawer,.cart-drawer',
        `:root{--tcg-colors-surface-background-default:${body};--tcg-colors-surface-background-alt:${surface};--tcg-colors-surface-background-background:${body};--tcg-colors-surface-background-highlight:${header};--tcg-colors-surface-text-default:#d0d0cc;--tcg-colors-surface-text-primary:#eee;--tcg-colors-surface-text-subdued:#b8b8b4;--tcg-colors-surface-text-link:${accent};--tcg-colors-surface-text-highlight:${accent};--tcg-colors-surface-border-default:#ffffff30;--tcg-colors-brand-background-default:${header};--tcg-colors-brand-text-default:${accent};--tcg-brand-theme-surface-bg-colors-surface:${surface};--tcg-brand-theme-surface-bg-colors-border:#ffffff30;--tcg-brand-theme-text-on-surface-text-primary:#eee;--surface-surface-text-text-primary:#eee;--surface-surface-text-text-subdued:#b8b8b4;--surface-surface-background-border-default:#ffffff30;--brand-text-default:${accent}}
        .marketplace,.marketplace__content,.marketplace.grey-bg,.full-width-container,.horizontal-layout{background:${body}!important;color:#d0d0cc!important}
        .popover__dropdown-content,.consent-dialog,.compliance-banner,.image-wrapper{background:${surface}!important;color:#d0d0cc!important}
        .search-filter__title,.search-filter__label,.product-info__title,.product-card__title,.item-card__product-name,.availability-title,.shop-by-seller-title span,.filter-bubbles__title,.filter-bubbles__clear,.hfb-result-count,.search-toolbar__result-count,.horizontal-filters-bar__filters__clear-all,.modal__title,.modal__close,.navbar-item,.navbar-link{color:#d0d0cc!important}
        .product-info__category-name,.product-info__subtitle,.product-info__rarity,.product-info__meta,.product-card__rarity,.product-card__meta,.product-card__set-name,.product-card__category-name,.product-info__market-price,.product-card__market-price{color:#b8b8b4!important}
        .product-info__market-price--value,.product-card__market-price--value,.item-card__product-price{color:#7ddea0!important}
        .product-card__image,.search-result__image,.item-card__product-image,img.progressive-image-main,.listo-thumbnail__image{background:transparent!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],.tcg-standard-button,.tcg-button,.button,.mp-header__content__account-actions__cta__signin-btn,.mp-header__content__cart-count,select,input:not([type=checkbox]):not([type=radio]),textarea,.search-filter__facet')+
        (state.palette==='original'?'':`.mp-header [class*="signin-btn"],button.tcg-standard-button.tcg-standard-button--flat.mp-header__content__cart-count{background:${header}!important;color:#ddd!important;border-color:#777!important}`)+
        (state.hideAds?'.martech-promos-banner,.martech-promos-wrapper,.sponsored-wrap,.hero-banner-promo{display:none!important}':'')+
        (state.dense?'.search-results{display:grid!important;gap:.5rem!important;grid-gap:.5rem!important;grid-template-columns:repeat(auto-fill,minmax(180px,1fr))!important;padding:0 8px!important}.search-result{margin:0!important}.item-card,.merchandising-filmstrip .item-card{min-width:108px!important}':'')+
        (state.hideSoldOut?'.out-of-stock,.mp-oos-badge,[data-tp-sold=true],.search-result:has(.out-of-stock),.search-result:has(.mp-oos-badge){display:none!important}':'')+
        (state.compactListings?'.listing-item{padding:.5rem .75rem!important;margin-bottom:.25rem!important}.search-toolbar,.horizontal-filters-bar{min-height:auto!important;padding:.5rem 1rem!important}.search-filter{padding:.5rem .75rem!important}':'')+
        (state.hideMerch?'.merchandising-filmstrip,.product-carousel{display:none!important}':'');},
      update(){for(const card of document.querySelectorAll('.search-result,.search-result__content,.product-card,.item-card,.list-view-product-card')){
        const sold=!!card.querySelector('.out-of-stock,.mp-oos-badge')||/\bout\s*of\s*stock\b/i.test(card.textContent||'');
        if(card.dataset.tpSold!==String(sold))card.dataset.tpSold=String(sold);
      }}
    },
    goodreads:{name:'Goodreads',accent:'#d2b48c',options:[['denseBooks','Denser book lists'],['compactReviews','Compact reviews'],['hideRecommendations','Hide recommendations'],['wideReading','Wider reading column']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#siteContainer,#wrapper,.content,.mainContent,.gr-mainContent,.gr-box,.gr-box--withShadow,.BookPage,.BookPage__mainContent,.BookPage__rightColumn,.ReviewsList,.ReviewCard,.review,.elementList,.bookalike,.modal__content,.dropdown__menu,footer',
        `.siteHeader,.siteHeader__topLine,.siteHeader__contents,.Header,.HeaderNav{background:${colors[3]}!important}.bookTitle,.BookPageTitleSection__title,.ReviewCard__name{color:#eee!important}.authorName,.greyText,.minirating,.uitext{color:#bdbdb8!important}.bookCover,img.ResponsiveImage{background:transparent!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],.gr-button,.Button,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.denseBooks?'.elementList,.bookalike,.BookCard{padding:.45rem 0!important;margin:.2rem 0!important}.leftAlignedImage{margin-right:.65rem!important}.leftAlignedImage img,.bookCover{max-height:110px!important;width:auto!important}':'')+
        (state.compactReviews?'.review,.ReviewCard{padding:.65rem!important;margin:.35rem 0!important}.reviewText,.ReviewText{line-height:1.42!important}.ReviewsList__listContext{gap:.5rem!important}':'')+
        (state.hideRecommendations?'[data-tp-recommendation=true]{display:none!important}':'')+
        (state.wideReading?'.BookPage__mainContent,.mainContent,.gr-mainContent{max-width:980px!important;width:min(980px,100%)!important}.BookPage__rightColumn{max-width:280px!important}':'');},
      update(){for(const heading of document.querySelectorAll('h1,h2,h3,h4')){
        if(!/readers also enjoyed|recommend(?:ed|ations)|similar books|people also liked/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,.gr-box,.Carousel,.RecommendationShelf')||heading.parentElement;
        if(section)section.dataset.tpRecommendation='true';
      }}
    },
    genius:{name:'Genius',accent:'#f4df42',options:[['focusLyrics','Focus lyrics'],['compactAnnotations','Compact annotations'],['dimMedia','Dim media embeds'],['hideRecommendations','Hide recommendations']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        'main,[class*="Page__Container"],[class*="Lyrics__Container"],[data-lyrics-container="true"],[class*="Annotation"],[class*="SongHeader"],[class*="StickyPlayer"],[class*="Modal"],[class*="Dropdown"],footer',
        `.header,.Header,[class*="Header__Container"]{background:${colors[3]}!important}[data-lyrics-container="true"],[class*="Lyrics__Container"]{color:#eee!important}[class*="MetadataStats"],[class*="SongDescription"]{color:#bdbdb8!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.focusLyrics?'[data-lyrics-container="true"],[class*="Lyrics__Container"]{max-width:760px!important;margin-left:auto!important;margin-right:auto!important;font-size:1.08rem!important;line-height:1.72!important}':'')+
        (state.compactAnnotations?'[class*="Annotation"]{padding:.55rem!important;margin:.35rem 0!important;line-height:1.42!important}':'')+
        (state.dimMedia?'iframe,video,[class*="Media"]{opacity:.42!important;transition:opacity .15s ease}iframe:hover,iframe:focus,video:hover,video:focus,[class*="Media"]:hover,[class*="Media"]:focus-within{opacity:1!important}':'')+
        (state.hideRecommendations?'[data-tp-recommendation=true]{display:none!important}':'');},
      update(){for(const heading of document.querySelectorAll('h1,h2,h3,h4')){
        if(!/you might also like|recommended|more from|related songs/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,[class*="Recommended"],[class*="Related"]')||heading.parentElement;
        if(section)section.dataset.tpRecommendation='true';
      }}
    }
  };
  const site=adapters[siteId];site.icon=icons[siteId];
  ThemePicker.start(site);
})();

}
