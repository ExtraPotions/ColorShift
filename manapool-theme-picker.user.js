// ==UserScript==
// @name           ColorShift for ManaPool
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.4.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.4.0/assets/manapool-colorshift-128.png
// @match          *://manapool.com/*
// @match          *://www.manapool.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
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
