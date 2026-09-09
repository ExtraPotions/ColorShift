// ==UserScript==
// @name           ColorShift for Scryfall
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.0/assets/scryfall-colorshift-128.png
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.0/colorshift-common.js
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
