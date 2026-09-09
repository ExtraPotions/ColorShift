// ==UserScript==
// @name           ColorShift for TCGPlayer
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.2
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.2/assets/tcgplayer-colorshift-128.png
// @match          *://tcgplayer.com/*
// @match          *://www.tcgplayer.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-tcgplayer.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-tcgplayer.user.js
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
