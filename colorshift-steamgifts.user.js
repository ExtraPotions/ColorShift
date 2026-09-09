// ==UserScript==
// @name           ColorShift for SteamGifts
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.1.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.1.0/assets/steamgifts-colorshift-128.png
// @match          *://steamgifts.com/*
// @match          *://www.steamgifts.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-steamgifts.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-steamgifts.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.1.0/colorshift-common.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @match          *://steamtrades.com/*
// @match          *://www.steamtrades.com/*
// @match          *://sgtools.info/*
// @match          *://www.sgtools.info/*
// ==/UserScript==
if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='ColorShift could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{
/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'steamgifts';
  const icons = {"steamgifts":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAASD0lEQVR42rVaa5RU1ZXe+5xzX1Vd1dVd/aKb5qWABFCQRHkZJKKTycPMWqijqEElYeHKjJk8yEo0kzVrJcvEmOckJsYxS10SH0GXMQtHHYwQlUQiJChEHkJDA/1+1uvWvbfuOXt+VFd33apquiRJ/Sgup2/d+51zvr33t/fZGJ8+DxAAEAAY51LKbNYxLau1taW9rS0er4eJDxb9ixXGJy5x4hvPfc85Hjj286HRxJnewe7+IcfNWZbBOVNq4leiGL3jOoZuXrV2zRWrV7Q0NSmlHMehiUcTAE58j19C0UX5J3APAhAQVP9BRFPXGWe9g8Ov7zv45juHHTdnGoYiGvt7vH1+Hn3GtufMmrXx1pvaprUcOPjX/X95+0xXdzqdKVqM8R3AotUtvgheY8kPK41A8TOLxwvPQawJh9qnNS5bOG/J/Dld/UOP/WZnR3d/2DKVIkDAePt8xrlt20suuXjzpo19/QPbntx+vOMkAAohOOdjcMf3vRpY5X86123ljyp+HUqlfKkA4MKZbbd84qrmhthD2186cKQjFDKVUtg4c4HjujNntG/94l3H3jv+4MOPua5nhaz8ngMAEAJigTD5CwQEQJxkhAHSxEjJXgVQlk0Ayh6Yv5sxAMg6nmHoW67/2LxZbfc/+mxnz4Cp69yMxjWhfe7OzelM5r8feEgqZVqGKlAMgJ3n2gMAYwAMAZExIgrezyZZ+8ojREAEhq77vv+Xwx1LFsxZMv+CN985poCYnXWWL/9QW2vLtie3O56n67qUqgCaVXAL5/ouclNckO+h77ie62QdLgQydn7oxy+kUrqmO7ncth2725rql18y33Y9ZlnmFatWHHj70PGOk5ZlSakKT2FBM53qZVggLhcASPYohRqar73nC9/49qzZM0dHRpVSnIvzRj82B1KWaRw/3XPg6MkrLl1o6TprnTatpalp/4G3g9ZTHXosQp9fWibISQNB6LKb6zb8XMy/6vIVK+77yc9u23ynbhjJZJIxxhg7H/TFH4b7j5xoicdam+Ji+vQ2qdTZrm4hRMFFV732xcxhgnwHfE+fsyq0epPW8gHfSYOTSqd5rcVvvu32D69d+8Rjj/5+16uMMSsUVkrReIyoBn1hhAAE52d7h6RS05vjoiFe7zhuOp3hgp8PcwCBc1CS7FHeMCu04nbjonVAiuwRQAaMM8aJYHR0uKm5+Stf/88r1617/NFHjh4+Eq4Ja5oux4JqNegnoi9nLG1nHddriEXEeLgsdcDnZk5+nHFApGwKzXBoxUbzgzeyUB05SQBAxosjLufC8zzXcT50+fJFF1+y4/nnf/PsM8PDw5FoFADyIWkq9EG/VNh/UeZnJtnW0h1gwDnlHPBz+twPh1ZvEk3zyU1RNgGMTyYKkPNUKsU5v3HDzVesufLJXz3+6iuvAGCoJqykIqIq0RdLF1H8hrEIcg70BbqD8slOisYLrZWbjPlrQflkjwBjk6Ev2goOAKOJ0fp4/Re3fmXN2o88/tij7/713VA4PObBp0RPAUUoymZcKfiPfzMGwMhJohUNrfqM9cF/RSNKbgoApoReMo1cLue67tJLL124aNH/7njh2We2Dw4ORaIRRKaUOqf5FdEssAPFkagCcxgwTl4WlDQuWmetvEM0XkBumpzk+4JezCjOeSadZpyvv/66VVesevrJp3bufEUpFQ7XKFJlwbso2NOEeQVtIM+uUvQInIP0yU6J5nmh1Z/R564BP0f2aDWcOfeHcQ4AiUQiFqu76z++sGbtlY8/9vjBQ4csK6Tr4z4Ky9KMCR0ligYnVZ3kJNGMhT58q7XsBtTDlE0Bwt8IvSKjFi1afO937n3ppZe3//qZgYGBcE2kYLJlIqoAU4wve6WECAGApG8suDq08rO8YRY5qffBGVJAQMSUotIXT8Io27YR8dprr12xYsVTT2/f9ervEBAZpzGvwwrOZoLtLGAAAS+GhIjKq1t7Z3j9D3mkkeyRqo2VQPmoWaSFDNMMhcJS+kRTZ2KMMURMJpOhcM1Xv3zXXV/+mmQmjLlXVmGRi6QVBLmU3xhimtnc/0ez4xUpTEAG1aSDSgIghuOQ7O59YusPtm45fvRIXX0D51xKvzr7ZiEN9h7uevGUIawIkawgAQNeaCIhxLL8nZObqP/zL5KZwdTcj7FctrAek3AGCK1aclOZV39i/+FRsEf2+vjOvj997LoN62//TLypOZVIkFJ5263wAAIAiFpi9+Ghx98460vJEXKASEF1gwEvFKwOlHohAq4R49F3n+J2X2LRzQCA0gPkpW8miXoYOHcPvWjv+qnfcxjNCFi1EQQp5fZHHtzzu5du2LRl3afWcy4y6VSeLYGdI+IMDY39em/3b/f3mjo3NWGPxZ9ChA1gK7aBCS8UVMiQd7okjWi4c1d874+YlyEtBEoWvdkHLjBc7/cdTWzbknzqLn/wJIbjwDgoKaUEgNr6+PBg/4//62t3f/bWg/v+FI3FNF2Xvj/u0aUiQzAi+PnOU8/t6wkbgiGoid0uU5CF3WCVo1ggAAMAIEmlR42hdxvevE9LnFZGBEiCkkDEwvWUTWVe+Nbowzd7R3ajVYuaBcovDjfS9zVNj8bq3z3w569v2fj9e7YO9vbG6uPAUEopFYVNPpzO3b/j+JvHR2otTVGRzRcn32UZQolpY6AigsFqD0ml1/DMYPzN+63ut5QeYVYEhJ7d+6vRh26wX38YkKEVBSWBVCV+k5R+qKbGMM3/e277l2697sn/+SkpqKmti5jiaHf6279972S/HTGFVFTqbhhW0MiBQDbOqmIFQlhar1KShAHKr9v/gHBuGoZY9tUf+p37QQ9hOA7KD1CrsouSABCN1blO9uEf3L9rx/Mbt9wpp1/2yO5TBBAyeBB9eaEOSygiKlSmAtK6kqthnNCIHtnuDwzY3R1KjwjOSfnVh16pJBNaNKSf7ez80bNvhZe0MACNY2X0Y1UWqlhJKNFCpWK1ssckAmASWbx1RqShpe/MqeH+PkDknFcTrYBx8l3le+ac5fUrbxH17SqbBERV8adY0QtNMKNoAlhSiw242/JJIICf8wRn7RfMra2P95zuzGbSXAhEnHQayABIZZMi1hq+/EZz7mqQvsyMVhHdC0lMaX4SoFBJRlbJBsoEDBH5uVwkVheORAd6ugZ6uqXvcyHK5oDAGHk2IAtd8onwsvU8FFNuugptghXKpjCBTQS1UHFGli9BYzXKXvo+Ira0z6ytj/ecPpUcGWGcs7GCHADjIH2VTWnTFkRW3KK3LVaerZxUVbKqfGWBAagiCgXkahB0FejH5wAAfi5nWqFZFy0c6e/vO9vpua7QNEJUToqZkciq26zF/4xcqGyi6kSCJmIrBb1Q4cUiEIZLEx8ARHYOTpdNQ0lJAPHm5kgs1nf29MhAP0nXmrM8vHyDqJ+h3BTJXPVqHLkGjBXwUJAmWFEL5YXDhKUrUo6Xi4QsXykiwur2ws/lhBDtF8yN1NaNtq42F6wD6al8waKaXSUFyJge9lN9yrMLugsrHfzkbYAqF/URGSk61TsQj0YaYhGNc18prG4riMD33GhTqzdvlfRsIFnVwhMBEGoW+V6mY0/21Fskc8h4hUAWiANYnElSIHlDBMD+kWQik22qi9bVhABBKqpyGsr3lZsBLXxub1bEGR0Y9/qOZU68kUv2MWFABfQ4tuJlSX2xrQQSCCFETqozAyOjmWxzXTRs6JKoSkZNmUwWcyaX6rePv+72HQXGmB4KZsNYGp6LvBAFqy6l6Q8BIaJATGe9jDsYj4QbayMaZ75SUNXanpszgJpFOTdz/DX71FvkO6hZed1ULJsDchPLyypTn1sBIXIEAhxI2gnba6oN19VYCCCJznMOec4gc3sP2yf2+Mk+1EzUrKIFrVRmHM+6AmKu2HVOXhUjQEAQjPlKnR1OjtpuSywcNjRFpOj9bAUpQI562E/0Zk685vUdAybQCEP+LClw5omVs+Gi0mJJIYimLKkTASIKZBk319GfqK8xm6Khan1UnjO6RZ6TObYr27mPfHeMM6SCOddkRVIo0ULBLKzqsxMC4IwRwGDKSTp+Y8SqDxtTMIoUCh0Ana5D2RN7cukBplmoWQFjhakK1OM0KauNliX1U5ydjJ0qCIG+VF0jmdGs1xw1IxUZRQpQoB72E12ZY695/cdBCKaXcKa6w4GgzBHFuqLs/L2akx8YYxRD2/NPDWbqwkZTxNA5SgmUTyWJuB6Srm0feSV7eh/5OTQKnCk5Ia7qcABLtNAk5fVqz63GtpUAODJAGMp4SddvrDHiFucIKHTGteyZt+2OP/jpQaZZqFtBx10d+uLxSoGsGi90TsMCpHz7CAOpqDvhJmxoqjf9RE/qxN7c4HHgGtPDAFSKHgERpzr9L3j+4lIiAFB5RnY+6APqKi9hBYLtU+dQAgefIemhHgIaj00TP2cMCdCXasKOMdhzACzvGAXjyAppZxGRRGnegHBe6LGkAk4IDNmYfYzHpqKbERAYprMuZzwWDecdWsVnIoJSkLSzrivDpoGMgVTFYg6n8kLvG32pgCnmTAE9Ibhu7splCy9bMFtHhUR5LgUKWghEBASE6KM4eKp3577DrJA/VUzqy73QeaFHnKSeg+PWkvPlpk9e2RyCl3Y8d/rMGSAgoJzn6boxlqYq6Xs53TTyLVLTWpqvufqq+f+y5qEdezypkI01XZUk9X9X9JO0NzGG6ay34ZoVEZW+994HlCLTNP2cxzhvamvv6TyJjEnf102roam5q/Mk51zTjaGhoT+//c7mOzZu/OjlDzz/RjVe6O+Nfux/6OZke3N80YzG7933XSGEaZqe59U1Nt7+hbuFpkdjse9u/VxL+4zbvni3m3WF4D/+xtaRwYFwTY2Ry2174ul77v7qwtmtHd0DeSfFCkcz7B+PHgEBGbo5f+Gc9o73jg2NjBiGoZRynWzbzNnLP7Juz8vP7drxLCK740t3v/Lc0/fcsf73L/7WtEJKSiWlEMJx3YNvv7NodqufZxECGxxNmoZRUxOSigLHT3939EUsikVCoyMjCEhESqlQOHLorb2/+PY3b/63z6/95Pr6pmYzFPvDzpevWf/py9esbG6bLqWPyIiIIRseGQ4bWjRsmRofTNnsbO8AZ2x6S5MvZVFP0j8A/Xj/GGDKdiKRSD5PYoxlM+klK1e3zpi25ZMfrWtonLd4adepo5/69KY/7X5x+pyFC5Ze5th23vMoUrHaaNJ2p8cjAtnZwSTr7h/qHRhe9oG5QVH0j0GPQACaJo6e7pkzb16kpsb3fUTUTaPzvWOtM+d+65dPHzv4zhsv79j2k+9fsGDxl77z044jh3e/8FxNNJpvBeJcLFy8+PCZ/g/Nm949mu4eTousm3t9/8ENH//Ihe3TO872hEKGlDRFm+J5t40BEoFp6Ce6+s+MOhtuvP5nv/ilZRq6YSRGhr71+c2x+ng6mdA0vS+T+ua/3xGN1SVGhoXQDNN0XTeVznz6putHyMzY2RXzZzzx+sFsTvJo29yu/qGL58++eN7svQeP5nypCY0qBvbxkb+lbQwQEDnjh050rb5s6fIlC/sH+jPpDGPcNE3f83TDRMY4F7ph+J5nWhYXAoCaGhtuuemG6QsueWTnvs9es8x2c0/t+avgHBuXXu14uZmtTVvvuP7Yya4Ht7/o5nKWaeRz+TFFFTjnwbFq/eTCKzhS+iciZAx9RUDw8ZUXL5rZ5GczpBRWqHkVpAFjmhk+1DXy0r7Dt121dPHMxvue/WPnYMLUBcaXrGOM2Y675KILN1/30b6h0W0v7D5+pgcQBed8or+tXP2Wt6pWaoqa5AZERgQZxw2HzOa6KOOMSssnY79SRDlfDSbSjdHQ5n/6YGt95MGX9x841RcyNEWA8aVXAwBjPJN150xv3vipdW2N9QeOntx/uONM32DadsoS5cm7YEobewqnbFSxJTdfeGVSqZxUNKFwgidGDGpMY0Zj7eXz2pddOO3sUOrR3x3o6E+ETV0RAWB+AuPN356h68svnn/FpQtb4jGllON676dVu3JpfMq78JyPMHXBGPaOpF979/SbR7tcX5q6pgrtExhfes34yjGGUlHW9UzdaG2qa29ujMciFaBU6J+frDO/hBKT99uPd7iXHLggDCWzZwYT3SNpJyctXeN8/DAKAeH/ATZN7X776GwgAAAAAElFTkSuQmCC"};
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
    }
  };
  const site=adapters[siteId];site.icon=icons[siteId];
  ThemePicker.start(site);
})();

}
