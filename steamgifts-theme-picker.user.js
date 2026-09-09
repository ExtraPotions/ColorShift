// ==UserScript==
// @name           ColorShift for SteamGifts
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        3.3.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.3.0/assets/steamgifts-colorshift-128.png
// @match          *://steamgifts.com/*
// @match          *://www.steamgifts.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/steamgifts-theme-picker.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/steamgifts-theme-picker.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.3.0/theme-picker-common.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @match          *://steamtrades.com/*
// @match          *://www.steamtrades.com/*
// @match          *://sgtools.info/*
// @match          *://www.sgtools.info/*
// ==/UserScript==
if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='Theme Picker could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{
/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'steamgifts';
  const icons = {"steamgifts":"data:image/png;base64,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"};
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
