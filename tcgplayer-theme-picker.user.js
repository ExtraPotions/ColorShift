// ==UserScript==
// @name           ColorShift for TCGPlayer
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        3.3.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.3.0/assets/tcgplayer-colorshift-128.png
// @match          *://tcgplayer.com/*
// @match          *://www.tcgplayer.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/tcgplayer-theme-picker.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/tcgplayer-theme-picker.user.js
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
