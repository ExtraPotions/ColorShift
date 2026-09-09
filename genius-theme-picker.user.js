// ==UserScript==
// @name           ColorShift for Genius
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.2.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.2.0/assets/genius-colorshift-128.png
// @match          *://genius.com/*
// @match          *://www.genius.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-genius.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-genius.user.js
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
  const siteId = 'genius';
  const icons = {"genius":"data:image/png;base64,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"};
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
