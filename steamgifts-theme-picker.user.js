// ==UserScript==
// @name           SteamGifts Theme Picker
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        3.1.1
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.1.1/assets/theme-picker-icon.png
// @match          *://steamgifts.com/*
// @match          *://www.steamgifts.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/steamgifts-theme-picker.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/steamgifts-theme-picker.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.1.1/theme-picker-common.js
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
