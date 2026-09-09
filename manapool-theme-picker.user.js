// ==UserScript==
// @name           ColorShift for ManaPool
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        3.3.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.3.0/assets/manapool-colorshift-128.png
// @match          *://manapool.com/*
// @match          *://www.manapool.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/manapool-theme-picker.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/manapool-theme-picker.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.3.0/theme-picker-common.js
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
  const siteId = 'manapool';
  const icons = {"manapool":"data:image/png;base64,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"};
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
