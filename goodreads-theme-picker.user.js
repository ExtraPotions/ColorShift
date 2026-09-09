// ==UserScript==
// @name           ColorShift for Goodreads
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.2.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.2.0/assets/goodreads-colorshift-128.png
// @match          *://goodreads.com/*
// @match          *://www.goodreads.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-goodreads.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-goodreads.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.2.0/colorshift-common.js
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
