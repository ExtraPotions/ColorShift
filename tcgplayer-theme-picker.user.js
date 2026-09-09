// ==UserScript==
// @name           ColorShift for TCGPlayer
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.1.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.1.0/assets/tcgplayer-colorshift-128.png
// @match          *://tcgplayer.com/*
// @match          *://www.tcgplayer.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-tcgplayer.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-tcgplayer.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.1.0/colorshift-common.js
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
  const siteId = 'tcgplayer';
  const icons = {"tcgplayer":"data:image/png;base64,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"};
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
