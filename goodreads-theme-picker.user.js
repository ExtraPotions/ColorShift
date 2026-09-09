// ==UserScript==
// @name           ColorShift for Goodreads
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.3.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.3.0/assets/goodreads-colorshift-128.png
// @match          *://goodreads.com/*
// @match          *://www.goodreads.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-goodreads.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-goodreads.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.3.0/colorshift-common.js
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
  const siteId = 'goodreads';
  const icons = {"goodreads":"data:image/png;base64,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"};
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
