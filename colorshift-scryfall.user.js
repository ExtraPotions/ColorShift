// ==UserScript==
// @name           ColorShift for Scryfall
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.1
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.1/assets/scryfall-colorshift-128.png
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.1/colorshift-common.js
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
  const siteId = 'scryfall';
  const icons = {"scryfall":"data:image/png;base64,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"};
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
