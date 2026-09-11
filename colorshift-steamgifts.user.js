// ==UserScript==
// @name           ColorShift for SteamGifts
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.0.2
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/ColorShift/colorshift-0.0.2/assets/steamgifts-colorshift-128.png
// @match          *://steamgifts.com/*
// @match          *://www.steamgifts.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-steamgifts.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-steamgifts.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/ColorShift/colorshift-0.0.2/colorshift-common.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @match          *://steamtrades.com/*
// @match          *://www.steamtrades.com/*
// @match          *://sgtools.info/*
// @match          *://www.sgtools.info/*
// ==/UserScript==
if(typeof ColorShift==='undefined'||typeof ColorShift.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='ColorShift could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{
/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'steamgifts';
  const icons = {"steamgifts":"data:image/png;base64,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"};
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
    for(const child of record.content)child.classList.toggle('colorshift-section-hidden',value);
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
        '.colorshift-section-hidden{display:none!important}.colorshift-section-heading{display:block!important;visibility:visible!important}.colorshift-section-button{border-radius:6px;padding:4px 8px;margin-right:8px;cursor:pointer}'+
        (state.dense?'ul.grid,.grid{gap:.5rem!important}article{margin:0!important}':'')+
        (state.hideSoldOut?'[data-colorshift-sold=true]{display:none!important}':'')+
        (state.compactPrices?'.text-green-700,.text-xl.font-bold{font-size:.95rem!important;line-height:1.2!important}':'')+
        (state.alwaysChips?'.rounded-b-lg.bg-gray-50,.inline-flex.items-center.border{opacity:1!important;visibility:visible!important}':'');},
      update(api){
        for(const card of document.querySelectorAll('article,li.group,.group.bg-white')) {
          const sold=/sold\s*out|out\s*of\s*stock/i.test(card.textContent)||!!card.querySelector('[data-stock="0"],[class*="out-of-stock"]');
          if(card.dataset.colorshiftSold!==String(sold))card.dataset.colorshiftSold=String(sold);
        }
        for(const [node] of sections)if(!node.isConnected)sections.delete(node);
        if(location.pathname.replace(/\/+$/,'')!=='')return;
        for(const heading of document.querySelectorAll('h2')) {
          if(heading.querySelector('.colorshift-section-button'))continue;
          let container=heading.parentElement;
          while(container&&container!==document.body&&!container.querySelector('ul,.grid,[class*=grid-cols]'))container=container.parentElement;
          if(!container||container===document.body||sections.has(container)||container.querySelectorAll('h2').length!==1)continue;
          const title=heading.textContent.trim();
          const content=[...container.children].filter(el=>el!==heading&&!el.contains(heading));if(!content.length)continue;
          const button=api.element('button',{type:'button',class:'colorshift-section-button','aria-label':'Toggle '+title});heading.prepend(button);
          heading.classList.add('colorshift-section-heading');
          const record={title,button,content,collapsed:false,scroll:api.read('sectionScroll',{})[title]};sections.set(container,record);
          collapse(api,record,api.read('sections',{})[title]===true);
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
      update(api){const toolbox=document.querySelector('.toolbox-links');if(toolbox&&!toolbox.querySelector('[data-colorshift-launch]')){
        const item=api.element('li'),button=api.element('button',{type:'button',class:'button-n','data-colorshift-launch':'true'},'ColorShift settings');
        button.addEventListener('click',api.open);item.append(button);toolbox.append(item);
      }}
    },
    steamgifts:{name:'SteamGifts',accent:'#7ec8f0',options:[['hideEntered','Hide entered'],['hideEnded','Hide ended'],['softHideFeatured','Soft-hide featured / pinned'],['highContrastEnter','High-contrast Enter']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '.page__outer-wrap,.page__inner-wrap,.page__heading,.sidebar,.sidebar__heading,.table,.table__row-outer-wrap,.table__row-inner-wrap,.giveaway__row-inner-wrap,.featured__container,.comment__summary,.comment__description,.comment__entity,.form__row,.form__input-description,.pagination,.popup,.popup__heading,.popup__description,.markdown,.nav__absolute-dropdown,.nav__row,.widget-container,.esgst-popup,.esgst-menu-layer,.esgst-panel,.esgst-gv-popout,#dlg-box,#dlg-body,.ui-dialog,.ui-widget-content',
        '.sidebar__entry-insert,.form__submit-button{background:#315b27!important;color:#d8ffc5!important}.sidebar__entry-delete{background:#7f2828!important;color:#ffdbdb!important}.giveaway__heading__name{color:#c1d8ec!important}.giveaway__columns,.comment__username{color:#bbb!important}.is-faded{opacity:.55}.giveaway__image,.giveaway__image-outer-wrap{background-color:transparent!important}')+
        steamControls(state,colors,accent)+
        (state.hideEntered?'.giveaway__row-outer-wrap:has(.is-faded),.giveaway__row-outer-wrap:has(.esgst-faded),.giveaway-gridview .faded{display:none!important}':'')+
        (state.hideEnded?'[data-colorshift-ended=true]{display:none!important}':'')+
        (state.softHideFeatured?'.featured__container,.pinned-giveaways{opacity:.32;max-height:52px;overflow:hidden}.featured__container:hover,.featured__container:focus-within,.pinned-giveaways:hover,.pinned-giveaways:focus-within{opacity:1;max-height:none}':'')+
        (state.highContrastEnter?'.sidebar__entry-insert,.form__submit-button{background:#125c14!important;color:#fff!important;border:2px solid #fff!important;font-weight:bold!important}':'');},
      update(){for(const row of document.querySelectorAll('.giveaway__row-outer-wrap')){
        const ended=!!row.querySelector('.fa-times-circle')||[...row.querySelectorAll('[title]')].some(el=>/ended/i.test(el.title));
        if(row.dataset.colorshiftEnded!==String(ended))row.dataset.colorshiftEnded=String(ended);
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
        (state.hideSoldOut?'[data-colorshift-sold=true]{display:none!important}':'')+
        (state.compactListings?'.addToCartByType,.oneRow,.twoRow{min-height:auto!important;margin:.15rem 0!important;padding:.2rem .35rem!important}.style,.qty,.amtAndPrice{margin-top:.1rem!important;margin-bottom:.1rem!important}':'')+
        (state.stickyFilters?'.sidesearch{position:sticky!important;top:8px!important;max-height:calc(100vh - 16px)!important;overflow:auto!important;scrollbar-gutter:stable}':'');},
      update(){for(const card of document.querySelectorAll('.productItemWrapper,.productCardWrapper')){
        const available=!!card.querySelector('.addToCartButton:not(.disabled),button.addToCartButton:not([disabled])');
        const sold=!available&&!!card.querySelector('.outOfStockNotice');
        if(card.dataset.colorshiftSold!==String(sold))card.dataset.colorshiftSold=String(sold);
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
        (state.hideSoldOut?'.out-of-stock,.mp-oos-badge,[data-colorshift-sold=true],.search-result:has(.out-of-stock),.search-result:has(.mp-oos-badge){display:none!important}':'')+
        (state.compactListings?'.listing-item{padding:.5rem .75rem!important;margin-bottom:.25rem!important}.search-toolbar,.horizontal-filters-bar{min-height:auto!important;padding:.5rem 1rem!important}.search-filter{padding:.5rem .75rem!important}':'')+
        (state.hideMerch?'.merchandising-filmstrip,.product-carousel{display:none!important}':'');},
      update(){for(const card of document.querySelectorAll('.search-result,.search-result__content,.product-card,.item-card,.list-view-product-card')){
        const sold=!!card.querySelector('.out-of-stock,.mp-oos-badge')||/\bout\s*of\s*stock\b/i.test(card.textContent||'');
        if(card.dataset.colorshiftSold!==String(sold))card.dataset.colorshiftSold=String(sold);
      }}
    },
    goodreads:{name:'Goodreads',accent:'#d2b48c',options:[['denseBooks','Denser book lists'],['compactReviews','Compact reviews'],['hideRecommendations','Hide recommendations'],['wideReading','Wider reading column']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#siteContainer,#wrapper,.content,.mainContent,.gr-mainContent,.gr-box,.gr-box--withShadow,.BookPage,.BookPage__mainContent,.BookPage__rightColumn,.ReviewsList,.ReviewCard,.review,.elementList,.bookalike,.modal__content,.dropdown__menu,footer',
        `.siteHeader,.siteHeader__topLine,.siteHeader__contents,.Header,.HeaderNav{background:${colors[3]}!important}.bookTitle,.BookPageTitleSection__title,.ReviewCard__name{color:#eee!important}.authorName,.greyText,.minirating,.uitext{color:#bdbdb8!important}.bookCover,img.ResponsiveImage{background:transparent!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],.gr-button,.Button,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.denseBooks?'.elementList,.bookalike,.BookCard{padding:.45rem 0!important;margin:.2rem 0!important}.leftAlignedImage{margin-right:.65rem!important}.leftAlignedImage img,.bookCover{max-height:110px!important;width:auto!important}':'')+
        (state.compactReviews?'.review,.ReviewCard{padding:.65rem!important;margin:.35rem 0!important}.reviewText,.ReviewText{line-height:1.42!important}.ReviewsList__listContext{gap:.5rem!important}':'')+
        (state.hideRecommendations?'[data-colorshift-recommendation=true]{display:none!important}':'')+
        (state.wideReading?'.BookPage__mainContent,.mainContent,.gr-mainContent{max-width:980px!important;width:min(980px,100%)!important}.BookPage__rightColumn{max-width:280px!important}':'');},
      update(){for(const heading of document.querySelectorAll('h1,h2,h3,h4')){
        if(!/readers also enjoyed|recommend(?:ed|ations)|similar books|people also liked/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,.gr-box,.Carousel,.RecommendationShelf')||heading.parentElement;
        if(section)section.dataset.colorshiftRecommendation='true';
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
        (state.hideRecommendations?'[data-colorshift-recommendation=true]{display:none!important}':'');},
      update(){for(const heading of document.querySelectorAll('h1,h2,h3,h4')){
        if(!/you might also like|recommended|more from|related songs/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,[class*="Recommended"],[class*="Related"]')||heading.parentElement;
        if(section)section.dataset.colorshiftRecommendation='true';
      }}
    }
  };
  const site=adapters[siteId];site.icon=icons[siteId];
  ColorShift.start(site);
})();

}
