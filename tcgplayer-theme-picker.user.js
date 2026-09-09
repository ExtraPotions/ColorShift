// ==UserScript==
// @name           ColorShift for TCGPlayer
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.1
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.1/assets/tcgplayer-colorshift-128.png
// @match          *://tcgplayer.com/*
// @match          *://www.tcgplayer.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-tcgplayer.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-tcgplayer.user.js
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
