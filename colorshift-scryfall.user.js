// ==UserScript==
// @name           ColorShift for Scryfall
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.4.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.4.0/assets/scryfall-colorshift-128.png
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-scryfall.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.4.0/colorshift-common.js
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
    },
    goodreads:{name:'Goodreads',accent:'#d2b48c',options:[['denseBooks','Denser book lists'],['compactReviews','Compact reviews'],['hideRecommendations','Hide recommendations'],['wideReading','Wider reading column']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#siteContainer,#wrapper,.content,.mainContent,.gr-mainContent,.gr-box,.gr-box--withShadow,.BookPage,.BookPage__mainContent,.BookPage__rightColumn,.ReviewsList,.ReviewCard,.review,.elementList,.bookalike,.modal__content,.dropdown__menu,footer',
        `.siteHeader,.siteHeader__topLine,.siteHeader__contents,.Header,.HeaderNav{background:${colors[3]}!important}.bookTitle,.BookPageTitleSection__title,.ReviewCard__name{color:#eee!important}.authorName,.greyText,.minirating,.uitext{color:#bdbdb8!important}.bookCover,img.ResponsiveImage{background:transparent!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],.gr-button,.Button,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.denseBooks?'.elementList,.bookalike,.BookCard{padding:.45rem 0!important;margin:.2rem 0!important}.leftAlignedImage{margin-right:.65rem!important}.leftAlignedImage img,.bookCover{max-height:110px!important;width:auto!important}':'')+
        (state.compactReviews?'.review,.ReviewCard{padding:.65rem!important;margin:.35rem 0!important}.reviewText,.ReviewText{line-height:1.42!important}.ReviewsList__listContext{gap:.5rem!important}':'')+
        (state.hideRecommendations?'[data-tp-recommendation=true]{display:none!important}':'')+
        (state.wideReading?'.BookPage__mainContent,.mainContent,.gr-mainContent{max-width:980px!important;width:min(980px,100%)!important}.BookPage__rightColumn{max-width:280px!important}':'');},
      update(){for(const heading of document.querySelectorAll('h1,h2,h3,h4')){
        if(!/readers also enjoyed|recommend(?:ed|ations)|similar books|people also liked/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,.gr-box,.Carousel,.RecommendationShelf')||heading.parentElement;
        if(section)section.dataset.tpRecommendation='true';
      }}
    },
    genius:{name:'Genius',accent:'#f4df42',options:[['focusLyrics','Focus lyrics'],['compactAnnotations','Compact annotations'],['dimMedia','Dim media embeds'],['hideRecommendations','Hide recommendations']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        'main,[class*="Page__Container"],[class*="Lyrics__Container"],[data-lyrics-container="true"],[class*="Annotation"],[class*="SongHeader"],[class*="StickyPlayer"],[class*="Modal"],[class*="Dropdown"],footer',
        `.header,.Header,[class*="Header__Container"]{background:${colors[3]}!important}[data-lyrics-container="true"],[class*="Lyrics__Container"]{color:#eee!important}[class*="MetadataStats"],[class*="SongDescription"]{color:#bdbdb8!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.focusLyrics?'[data-lyrics-container="true"],[class*="Lyrics__Container"]{max-width:760px!important;margin-left:auto!important;margin-right:auto!important;font-size:1.08rem!important;line-height:1.72!important}':'')+
        (state.compactAnnotations?'[class*="Annotation"]{padding:.55rem!important;margin:.35rem 0!important;line-height:1.42!important}':'')+
        (state.dimMedia?'iframe,video,[class*="Media"]{opacity:.42!important;transition:opacity .15s ease}iframe:hover,iframe:focus,video:hover,video:focus,[class*="Media"]:hover,[class*="Media"]:focus-within{opacity:1!important}':'')+
        (state.hideRecommendations?'[data-tp-recommendation=true]{display:none!important}':'');},
      update(){for(const heading of document.querySelectorAll('h1,h2,h3,h4')){
        if(!/you might also like|recommended|more from|related songs/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,[class*="Recommended"],[class*="Related"]')||heading.parentElement;
        if(section)section.dataset.tpRecommendation='true';
      }}
    }
  };
  const site=adapters[siteId];site.icon=icons[siteId];
  ThemePicker.start(site);
})();

}
