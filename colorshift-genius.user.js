// ==UserScript==
// @name           ColorShift for Genius
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.0.1
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/ColorShift/colorshift-0.0.1/assets/genius-colorshift-128.png
// @match          *://genius.com/*
// @match          *://www.genius.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-genius.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-genius.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/ColorShift/colorshift-0.0.1/colorshift-common.js
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
