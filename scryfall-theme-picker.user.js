// ==UserScript==
// @name           ColorShift for Scryfall
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.3
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.3/assets/scryfall-colorshift-128.png
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.3/colorshift-common.js
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
