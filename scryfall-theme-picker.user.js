// ==UserScript==
// @name           Scryfall Theme Picker
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        3.2.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.2.0/assets/scryfall-favicon.ico
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/scryfall-theme-picker.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/scryfall-theme-picker.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.2.0/theme-picker-common.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// ==/UserScript==
if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='Theme Picker could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{
/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'scryfall';
  const icons = {"scryfall":"data:image/x-icon;base64,AAABAAIAEBAAAAEAIAAoBQAAJgAAACAgAAABACAAKBQAAE4FAAAoAAAAEAAAACAAAAABACAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2DX0iShV3ilIhg/5OGYP+ThmD/k4Zg/5GFXv+RhV7/k4Zg/5OGYP+ThmD/lIhg/5KFXeKNg19IAAAAAI2DX0iUh2H8lYlh/5OGYP+RhV3/in1W/42CXf+Uimj/lYto/4yBXP+JfVb/kYVd/5OGYP+UiGL/lIZh/I1/X0iRhV3ll4tl/5OIYv+NgVr/kIZj/723pf/Sysv/2tTc/8/M1//Z1tP/vbek/46DYv+Nf1z/kYJj/5OBZf+PfGPllIhg/5OHYf+NgVr/m5Jy/9bQzv+0o7j/noOu/9PI3f/Z1+b/8/L5///////m497/lodz/4t2Yf+QeWj/kXlr/5OGYP+RhV3/kYdk/8/Jxv+VgJj/iW6M/8Gwx//Kvtb/vrvT/9PQ4f/8/P3//////+fj4f+MdWv/jXJq/45xbf+ThmD/in5W/7y3pP+aiZ3/pZen/8zAzf+7qMT/yLvU/9vZ5//h3+r//Pz9////////////u6ys/4VlZ/+NbHH/k4Vg/46CYP/HwL//d2F6/4Bsgv+1p7b/1cra/9nR4v/T0OH//////////////////////+Xe4P+FY2//jGZ1/5B/Yf+WiHD/vbO7/3Rddv95Y3v/zcPN/8q80v/q4+7////////////////////////////08fL/jGl8/4pfeP+PeWX/lYJz/72yu/++tL//yL7I/7enuP/AsMf/3NTk//f3+v//////////////////////9PHz/4tkf/+JWXz/j3Vr/4tya//DuL3/gmyF/7amt//QxdD/2c/e/8W50v/Rzt///////////////////////+Tb4v+CVHr/iVSB/45vb/+FZWj/uKeq/6GRo//Nw87/zMHN/7yrxP/v6/P///////////////////////////+4n7b/gEl6/4hSg/+ManP/i2Zz/4xref/Jvcb/n4yi/7Ggsv/Sx9f/8u/1///////////////////////m3eX/hVWB/4dQgv+IUoP/jWV4/4xjef+GW3X/lXKJ/82/y/+rmaz/uajB/9vQ4v/////////////////l2+T/j2SL/4NMfv+IUoP/ilOF/4hceOWMXX7/jF6B/4ZVfP+IXIH/tpy0/+Ta4v/08fT/8+/y/+LY4f+3nbX/hVaB/4NMfv+KVYX/i1WG/4dPgOWGUXtIileC/IpVg/+IU4P/h1CC/4BJe/+CT33/iVqF/4lahf+BT33/f0l7/4dQgv+IUoP/jFWG/4tVhvyDSn9IAAAAAINKf0iHUILiilOF/4hSg/+IUoP/iFKD/4dQgv+HUIL/iFKD/4lThP+IUoP/ilOF/4dQguKDSn9IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDe08dkodddZGGXvKTh1//k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+Th1//kYZe8pKHXXWDe08dAAAAAAAAAAAAAAAAj4FeSZKHX+WYjGP/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+Th1//k4Zg/5OGYP+RhWD/kYVg/5OGYP+ThmD/k4df/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+Th1//mIxj/5KHX+WPgV5JAAAAAI16VRuShV3ploph/5OGYP+VimX/k4df/5OGYP+ThmD/k4Zg/5OGYP+ThmD/j4Nd/4p+Wf+FeVX/gnZR/4B1UP+AdVD/gnZR/4V5VP+Kfln/j4Nd/5OGYP+ThmD/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+ThmD/lolj/5CDYOmNelUbj4dad5iMY/+RhV7/k4Ze/5SIYv+UiGL/k4Zg/5OGYP+ThmD/jYFc/4R5VP9/dFD/iX9e/52Ud/+wqZH/urSf/7q0n/+wqZH/nZR4/4l/Xv9/dFD/hHlU/42BXP+ThmD/k4Zg/5OGYP+ThWD/k4Rg/5ODYf+RgmL/l4Zn/498YHeRhF3zk4df/5aLZf+ViWP/kYVe/5OHYf+Th1//kIRe/4Z7Vv+AdFH/m5J3/87Ku//y8uz//f39//fz+v/z8fn/9vX8//v7///+/v7/7+3p/8vGuP+bknX/gHRR/4d7V/+Qg2D/k4Rh/5GCYf+RgWL/kYBj/5F/ZP+Rf2X/kH1k85OHX/+ThmD/mo9r/5eMZ/+RhV7/k4Zg/46DXf+BdlL/jIFh/83Juv/9/fz/7env/8m60v+yncH/y7vU/7yzzf+jnsH/n5q+/7q20P////////////v7+v/Mx7n/jIFl/4FzVf+NfmD/kYBk/5F/ZP+QfmX/kHxm/5B7Zv+Re2j/k4Zg/5OGYP+ThmD/k4Zg/5OGYP+Og13/gHVR/5mQc//s6+T/9PH2/7iouv+Te5T/k3ah/6KHtP/29Pj///////Hv9f/Nyt3/zMnc//79/v/////////////////p5uL/mIt2/39uVf+NemP/kHxm/5B7aP+Qemj/j3lo/494af+ThmD/k4Zg/5OGYP+ThmD/kIRe/4J2Uv+Zj3L/9fTw/+Pd5f+bhp3/jXSP/5J6k/+XeqT/l3mr/6aLtf/JwNb/7e3z///////////////////////////////////////x7+3/mId4/4BrWf+OeGf/kHhp/493af+Pdmr/j3Vr/5OGYP+ThmD/k4Zg/5OGYP+Ge1b/i4Fg/+7t5v/Z09v/inOM/5J4k/+SepT/j3eR/7ajvP/SxNr/sJi+/5mKs/+albv/s67L/9fV5P/19fj////////////////////////////q5+T/inVp/4RsYP+PdWv/j3Rr/45zbP+Ocm3/k4Zg/5OGYP+ThmD/jYFc/4B0UP/Py7z/7+3x/4Brgf9zXHX/inKN/492kf+NdJD/x7nK////////////7Ory/8nG2v+oo8P/l5C4/6OewP/y8fb////////////////////////////Mwr//fWNc/4luaf+Pcm7/jnBu/45vb/+ThmD/k4Zg/5OGYP+EeVT/m5J3//7+/v+gkaL/bVZv/5aFl//PxtD/sqGz/5Z/l/+Td6D/q5K7/82+1v/w7fP///////39/v/h3+v/z8ze//n5+/////////////////////////////z7+/+YgoH/gGNi/41ub/+NbnD/jWxx/5OGYP+ThmD/j4Nd/390UP/QzL3/4t3l/3Vedv9xW3P/pZam//v6+///////8e7x/9DD1v+ulr3/mHmq/5qLtP+zsMz/3dvo/////////////////////////////////////////////////8u/v/97XWD/imlw/41rc/+NanP/k4Zg/5OHX/+Kfln/iX5f//X07/+sn67/cFpy/3ZgeP90Xnb/hXKH/7iquf/n4ef////////////q5O7/x7/W/6Sfwf+vqsn//fz9////////////////////////////////////////////7+vs/4Vnbv+FY2z/jWh0/4xndf+ThWD/k4Rh/4R3V/+dk3z/+vn6/4l1i/90XXb/dmB4/3ZgeP9yW3T/gGeC/451kP+nkbD/z8HY//Pw9f//////+fn7//f2+f/////////////////////////////////////////////////+/v7/mX6I/39baf+MZXb/jGR2/5GCYv+RgWL/gXFV/7Gnl//v7PH/emV8/3Vfd/92YHj/c1x1/5B/kv/l4OX/y8DM/6iSsf+Wdqn/rZW8//38/f////////////////////////////////////////////////////////////////+rlJ//fFVn/4tid/+LYXj/kX9k/5B+ZP9/bVX/vLKl/+bi6P90Xnb/dF12/3Fbc/9vWnL/jXmP/+jj6f///////////+jh7P/l3er//////////////////////////////////////////////////////////////////////7WgrP96U2n/il95/4tfev+QfGX/j3tm/39qV/+8sKf/5N/m/39rgf/Y0tn/xLrE/5OBlP+Hb4n/jnWQ/6WSp//OwtH/8+/1////////////////////////////////////////////////////////////////////////////tZ+t/3lPav+JXHv/ilx8/5B6Z/+PeGj/gGlb/7Cimv/s6e3/gm6E/9rU2v///////////+rl6v/DtsT/nomf/5B0mf+cf6//t6HE/9rT4//29vn///////////////////////////////////////////////////////////+rj6L/ek5t/4laff+JWX7/j3dp/492av+CaWD/nImD//f29/+FcYb/c1x1/5B+kv/IvMn/7+vv///////+/v7/4drl/76ryv+ghLH/loWx/6Ccv//d2+j//////////////////////////////////////////////////v7+/5d1j/99TnL/iVeA/4lWgP+PdGv/j3Rs/4drZ/+HbWr/8/Dw/6WXp/9wWnL/e2R9/4tyjf+QeJP/rJqu/9TL1f/39ff///////f0+P/Y0+P/t7PO/+De6v/////////////////////////////////////////////////v6e7/gld6/4JRev+JVYL/iFOC/45xbf+OcW7/i21s/3teX//PxMT/2tTb/29Ycf+Wg5f/39jg/8G0wv+chp7/i3GM/5mAoP+9qsr/7Ofw/////////////////////////////////////////////////////////////////8m1xv92RXH/hlOB/4hSg/+IUoP/jW5v/41ucP+NbHH/f2Bl/5h/hP/8+/v/koCT/5J/k//x7vH///////38/f/d1t3/t6a9/5x+rv/JudL////////////////////////////////////////////////////////////7+vv/k2yQ/3tHdv+IUoP/iFKD/4hSg/+NbHH/jWtz/41qc/+IZG//e1hk/8/Bxv/l4eb/fmiA/5R9lv+wnrH/1s3X//j3+f//////+Pb5//v6/P///////////////////////////////////////////////////////////8m1x/92RHL/g09//4hSg/+IUoP/iFKD/4xpc/+MaHT/jGd1/4xmdf+AW2v/hmR1/+7p6//Nxc7/jHSO/410kP+OdZD/m4Wc/7ysv//k3On//Pv8///////////////////////////////////////////////////////p4Oj/g1V//31KeP+IUoP/iFKD/4hSg/+IUoP/jGZ1/4xldv+MZHb/jGN3/4lhd/97VGr/lHSH//Tx8//Uy9X/k3uV/492kf+ReJL/jnKU/5Z4qv+ojrj/7Ofw////////////////////////////////////////////8evw/5Fojv94RXT/hlGB/4hSg/+IUoP/iFKD/4hSg/+LY3f/i2J3/4xjev+LYXr/i196/4dbd/95T2v/k3CJ/+vk6f/o5On/qJSq/410j/+/sMH/1Mfc/7ijxf/u6fH//////////////////////////////////////+jf5/+RaY7/d0Rz/4VQgP+IUoP/iFKD/4hSg/+IUoP/iFKD/4xhev+LYHn/il96/4pee/+LXXz/kGSE/4dZe/96TW//hFt7/8u4x//49ff/5eHm//7+/v////////////////////////////////////////////v5+//ItMb/g1aA/3hFdP+FUID/iFKD/4hSg/+IUoP/iFKD/4hSg/+JU4T/iFx484tdfP+KXHz/ilt9/4pbf/+TZ4n/i1mB/4dVfv99TXb/d0Zw/5RtkP/Lt8n/7uju//7+/v///////////////////////v7+/+3n7f/Hs8b/lGyQ/3ZEcv99Snj/hlGB/4hSg/+IUoP/iVSE/4xYh/+IUoP/iVKE/4ZPgfOHWnp3j16D/4lZfv+JWH//iVeA/4hVgP+IVYH/iVSC/4hTg/+DT3//e0d2/3ZDcv+BUn3/lm+T/6mJpv+zl7H/s5ex/6mJpv+Vb5L/gVJ9/3ZDcv97R3b/g09//4hSg/+IUoP/iFKD/4hSg/+NWYj/k2GO/4hTg/+OVYj/h0+Ad3pLcRuIVX7pjVmE/4lVgf+IVIL/iFOC/4hSg/+IUoP/iFKD/4hSg/+IUoP/hVCA/4BNfP97SHf/eEV0/3dDc/93Q3P/eEV0/3tId/+ATXz/hVCA/4hSg/+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+JU4T/jFSG/4dQgel6S3obAAAAAIRTfUmIVILljlaI/4lShP+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iVKE/4hSg/+IUoP/h1KC/4dSgv+IUoP/iFKD/4pUhf+KVIX/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iVKE/45ViP+IUYTlhEyBSQAAAAAAAAAAAAAAAHtGex2JUIJ1h1CB8olThP+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iFKD/4hSg/+IUoP/iFKD/4lThP+HUIHyiVCCdXtGch0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="};
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
