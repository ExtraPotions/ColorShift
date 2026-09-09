// ==UserScript==
// @name           ColorShift for ManaPool
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.2
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.2/assets/manapool-colorshift-128.png
// @match          *://manapool.com/*
// @match          *://www.manapool.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.2/colorshift-common.js
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
