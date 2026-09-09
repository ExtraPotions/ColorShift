// ==UserScript==
// @name           ColorShift for ManaPool
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        4.2.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/colorshift-4.2.0/assets/manapool-colorshift-128.png
// @match          *://manapool.com/*
// @match          *://www.manapool.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/colorshift-manapool.user.js
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
