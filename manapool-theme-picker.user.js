// ==UserScript==
// @name           ColorShift for ManaPool
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.1
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.1/assets/manapool-colorshift-128.png
// @match          *://manapool.com/*
// @match          *://www.manapool.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
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
