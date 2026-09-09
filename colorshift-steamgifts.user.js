// ==UserScript==
// @name           ColorShift for SteamGifts
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.1
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.1/assets/steamgifts-colorshift-128.png
// @match          *://steamgifts.com/*
// @match          *://www.steamgifts.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-steamgifts.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-steamgifts.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.1/colorshift-common.js
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
