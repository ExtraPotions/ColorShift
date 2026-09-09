// ==UserScript==
// @name           ColorShift for Scryfall
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.0.2
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.0.2/assets/scryfall-colorshift-128.png
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
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
  const siteId = 'scryfall';
  const icons = {"scryfall":"data:image/png;base64,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fPC/fnT1w88qjVqWacm5tZs23VhepnDTxPh4Y/Trby670YnJhx7cS8gXX551SbhM9CF455AwNLMidWT4deZiL1D2/L3iHJIEZiYSVUkgRUI4AZm4ZKHZXLf27m13T567cEGN5999//y7pz79yau3v/rm0olTaadnIt1eL0t7x48cmq5UL8zMNGrV39+1a6Je//D0x256dumebdvuv2/n5avXbk3PlCulcOQDQ4vgcNnaUE0X+RMKRmg52Qr6Ix7+kbhXlECJIzEO3DIplb65Nb1t+7bH9t4/1misvuuuUcq61as3bFw/Xq2unhhbPTG2deOGg08enBsd++0336r6hzZseGbPfRe+/uZHL/w4MbN3f31y757dx48dvnlrutvtJSXnvXKQOBzmqEMgywJYbZjMSvSSczlSdLYhShO8rdCehYmU3vzsiy3r121ct7YG0ImBalYKxwPJnvq3Z2Znm02IrBkfP77r3mZr5Y03T5hZUq3Vzp776uKlr3fs2PG9P3n+hR+/mPbTSqWcZb6QjcVRi4HPWpyhiscyWAzhAoRFTzwabPndS1QnUV4xJhLAWrk0NTP77fRtiIMQFCSCXA+IsFausFSqVcrff2Dv9o0bX3z5tY8+Or169WpXa4wb7NSHpzduWL9/34OTd6+5evXawuKSE5EwbCBz+ROIbKC1AgnD4UgXSKFzJINXKRSEjwopLhzszQ9cOlIkPAgvJQkck1KpXK6UK6VKuVyulMuVcrlUqpTL1VIiRKffW79q1V88vG/35k2fnjn705+9VCqV1MxV6mPOOVU9/fGnmzZv3PfQA1s3bxKRxaWldrudpakPI+Is86re+8z7LIv/ZN5n5jOvmfeZ+jB1zLxPvU81PJM/aZqZZaqZaqaWqWVmKSxTSy2wWaRmGczDMkMKy1RT73vqU+H42OjBbdue+853tq5bd/arC//17/9HmqbOOZgNHT3up7Va5djTR44+/dTY6OiVqevnzl+4dm1qZaUdi9rys84UcSQEEk8kFLlFJ2H+GsV4bHACEcutNYtdTEQknE+gOEmcIj8wl7u3pXJ5ol5fPzZ2//p1O9avn282T7x78h//8c12u3PH0eM7D38vPX7gsT/6w+dWr15drVZckoThpI+eCpyIOAcgHk0PJ3pycw3FafZcHOcDeckdfY3nQIQDpkUKqWpePQs3NFhXpJlN3Zo+c/bc9es33nrzxP//8Pfw8fulpeVGo37XqlVHDh/q91OvXjPvzSSWQ4TTcFZeCrWOO045YthMz8+ORfNm6M+A1RKFcbA8ScZRohmq1epIo/7Ka69PTd1IEjf6/xy//7/3HFCkodYDfQAAAABJRU5ErkJggg=="};
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
