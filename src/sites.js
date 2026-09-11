/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = '__SITE__';
  const icons = __ICONS__;
  function theme(state,colors,accent,surfaces,extras='') {
    if(state.palette==='original')return '';
    const [,body,surface,header]=colors;
    return `html{color-scheme:dark}html,body{background:${body}!important;color:#d0d0cc!important}
      ${surfaces}{background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff20!important}
      header,footer,.header,.footer,.nav__outer-wrap,.nav__inner-wrap,.nav__button-container{background:${header}!important;color:#ddd!important}
      ${siteId==='steamgifts'?'a:not(.esgst-gc):not(.esgst-gc *)':'a'}{color:${accent}!important}a:hover{filter:brightness(1.15)}
      input:not([type=checkbox]):not([type=radio]),textarea,select{background:${surface}!important;color:#eee!important;border-color:#777!important}
      h1,h2,h3,h4,h5,h6{color:#bfcbd8!important}
      button:not([role=switch]):not(.gr-iconButton):not(.gr-buttonAsLink),.button-n,.btn,.form__submit-button{background:${header}!important;color:#ddd!important;border-color:#777!important}
      ${extras}`;
  }
  function shared(state) {
    return (state.brighterLinks?(siteId==='steamgifts'?'a:not(.esgst-gc):not(.esgst-gc *),a:visited:not(.esgst-gc):not(.esgst-gc *)':'a,a:visited')+'{color:#9ad8f8!important}':'')+
      (state.hideAds?'.hpsgck,.fanatical_container,[id*="google_ads"],.adsbygoogle,[data-ad],.promo-banner,.sponsored,.bot-marketing-panel{display:none!important}':'');
  }
  const sections=new Map();
  function manaSalesAccent(api){
    if(!api.theme)return;
    // Map the chart's fixed hsl(226,71%,40%) blue to the accent; neutral grid/labels and alpha are unchanged.
    const source=[.116,.2485333333,.684],target=api.theme.accent.slice(1).match(/../g).map(v=>parseInt(v,16)/255);
    const values=target.flatMap((v,i)=>{const d=(v-source[i])/(source[2]-source[0]);return [Number(i===0)-d,Number(i===1),Number(i===2)+d,0,0];}).concat([0,0,0,1,0]).join(' ');
    let svg=document.getElementById('colorshift-sales-filter');
    if(!svg){
      const ns='http://www.w3.org/2000/svg';svg=document.createElementNS(ns,'svg');svg.id='colorshift-sales-filter';svg.setAttribute('width','0');svg.setAttribute('height','0');svg.setAttribute('aria-hidden','true');svg.style.cssText='position:absolute;pointer-events:none';
      const filter=document.createElementNS(ns,'filter');filter.id='colorshift-sales-accent';filter.setAttribute('color-interpolation-filters','sRGB');
      filter.append(document.createElementNS(ns,'feColorMatrix'));svg.append(filter);document.body.append(svg);
    }
    const matrix=svg.querySelector('feColorMatrix');if(matrix.getAttribute('values')!==values)matrix.setAttribute('values',values);
    for(const heading of api.query('h3'))if(heading.textContent.trim()==='Recent Sales')for(const canvas of heading.parentElement.querySelectorAll('canvas'))if(!canvas.hasAttribute('data-colorshift-sales'))canvas.setAttribute('data-colorshift-sales','');
  }
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
      .esgst-gf-button,.esgst-gwc,.esgst-gwr,.giveaway__columns>div:not([class*="esgst-"]){
        background:${control}!important;color:#d0d0cc!important;border-color:#ffffff30!important;text-shadow:none!important;box-shadow:none!important}
      .esgst-gf-container,.esgst-gf-box,.esgst-panel,.esgst-popup,.esgst-menu-layer,
      .fanatical_container,.fanatical_description,.sidebar__search-container{
        background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff30!important;text-shadow:none!important}
      .esgst-heading-button:hover,.esgst-gf-button:hover,.nav__button:hover{
        background:${surface}!important;color:#fff!important}
      .esgst-heading-button:focus-visible,.esgst-gf-button:focus-visible,.nav__button:focus-visible{
        outline:2px solid ${accent}!important;outline-offset:2px}
      .giveaway__columns>div:not([class*="esgst-"]) a:not([class*="esgst-"]),.esgst-heading-button a,.pagination__navigation a{color:${accent}!important;text-shadow:none!important}
      .esgst-gwc span,.esgst-gwr span,.esgst-heading-button,.esgst-gf-button{color:${accent}!important;text-shadow:none!important}
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
      themeChanged:manaSalesAccent,
      actions:[['Collapse all',api=>{for(const record of sections.values())collapse(api,record,true);} ],['Expand all',api=>{for(const record of sections.values())collapse(api,record,false);}]],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        'main,#app,.app,article,.bg-white,.bg-gray-50,.bg-gray-100,.bg-popover,[data-popover-content],[role=dialog],[role=menu]',
        `:root{--background:60 3% 14%;--foreground:60 3% 80%;--card:60 3% 16%;--popover:60 3% 16%;--border:60 3% 28%}
        article.group,li.group,.group.bg-white{background:linear-gradient(#ffffff12,#ffffff12),${colors[2]}!important;box-shadow:inset 0 0 0 1px #ffffff26,0 2px 8px #0003!important}
        article.group:hover,li.group:hover,.group.bg-white:hover{box-shadow:inset 0 0 0 1px #ffffff40,0 4px 12px #0004!important}
        .text-green-700,.text-xl.font-bold.text-green-700{color:#22c55e!important}
        .bg-blue-100{background:#5eb0ef!important;color:#061018!important}.bg-green-100{background:#7ddea0!important;color:#062012!important}
        .bg-yellow-100,.bg-amber-100{background:#f0d35a!important;color:#1a1400!important}.bg-purple-100{background:#c9a0ef!important;color:#1a0828!important}
        .bg-orange-100{background:#f0a06a!important;color:#1a0c00!important}.bg-pink-100{background:#f5b0c8!important;color:#1a0610!important}
        .gradient-wrapper{height:15px!important;max-height:15px!important;overflow:hidden}.gradient-rare{background:linear-gradient(90deg,#d4af37,#fc0)!important}
        .gradient-mythic{background:linear-gradient(90deg,#b98747,#ffca89)!important}.gradient-uncommon{background:linear-gradient(90deg,#909497,#c0c0c0)!important}
        header a[href="/"]{color:${accent}!important}
        svg#Layer_2 .cls-2{fill:${accent}!important}
        canvas[data-colorshift-sales]{filter:url(#colorshift-sales-accent)!important}
        button[aria-label="Open profile menu"]{border-radius:999px!important}
        nav[aria-label="Breadcrumb"]{opacity:1!important}
        nav[aria-label="Breadcrumb"] ol{background:${colors[2]}!important;color:#ddd!important}
        nav[aria-label="Breadcrumb"] svg,nav[aria-label="Breadcrumb"] [aria-current="page"]{color:#c0c0bc!important}
        [data-popover-content] button[data-popover-close]:not([role=switch]){background:transparent!important;border-color:transparent!important}
        [data-popover-content] button[data-popover-close]:not([role=switch]):hover,[data-popover-content] button[data-popover-close]:not([role=switch]):focus-visible{background:${colors[3]}!important}
        [data-popover-content] .link-class{color:${accent}!important}
        [data-popover-content] img[alt$="set icon"]{filter:brightness(0) invert(1)!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],a.bg-blue-700,a.bg-blue-600,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.palette==='original'?'':'.text-gray-500,.text-gray-600,.text-gray-700,.text-gray-800,.text-gray-900{color:#d0d0cc!important}')+
        '.colorshift-section-hidden{display:none!important}.colorshift-section-heading{display:block!important;visibility:visible!important}.colorshift-section-button{border-radius:6px;padding:4px 8px;margin-right:8px;cursor:pointer}'+
        (state.dense?'ul.grid,.grid{gap:.5rem!important}article{margin:0!important}':'')+
        (state.hideSoldOut?'[data-colorshift-sold=true]{display:none!important}':'')+
        (state.compactPrices?'.text-green-700,.text-xl.font-bold{font-size:.95rem!important;line-height:1.2!important}':'')+
        (state.alwaysChips?'.rounded-b-lg.bg-gray-50,.inline-flex.items-center.border{opacity:1!important;visibility:visible!important}':'');},
      update(api){
        manaSalesAccent(api);
        for(const card of api.query('article,li.group,.group.bg-white')) {
          const sold=/sold\s*out|out\s*of\s*stock/i.test(card.textContent)||!!card.querySelector('[data-stock="0"],[class*="out-of-stock"]');
          if(card.dataset.colorshiftSold!==String(sold))card.dataset.colorshiftSold=String(sold);
        }
        for(const [node] of sections)if(!node.isConnected)sections.delete(node);
        if(location.pathname.replace(/\/+$/,'')!=='')return;
        for(const heading of api.query('h2')) {
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
        '.card-image,img.card,picture{background:transparent!important}.skip-links a,.print-langs-item.current,.currency-usd,.currency-eur,.currency-tix,a.card-kingdom{background:'+colors[3]+'!important;color:'+accent+'!important;text-shadow:none!important}.print-langs-item.current{box-shadow:inset 0 0 0 1px '+accent+'!important}.pill.blue{background:#17536b!important;color:#fff!important;text-shadow:none!important}')+
        siteControls(state,colors,accent,'.button-n,.select-n,button:not([role=switch]),select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.dimWarnings?'.card-content-warning{opacity:.4;filter:grayscale(.55);max-height:3.5rem;overflow:hidden}.card-content-warning:hover,.card-content-warning:focus-within{opacity:1;filter:none;max-height:none}':'');},
      update(api){const toolbox=document.querySelector('.toolbox-links');if(toolbox&&!toolbox.querySelector('[data-colorshift-launch]')){
        const item=api.element('li'),button=api.element('button',{type:'button',class:'button-n','data-colorshift-launch':'true'},'ColorShift settings');
        button.addEventListener('click',api.open);item.append(button);toolbox.append(item);
      }}
    },
    steamgifts:{name:'SteamGifts',accent:'#7ec8f0',options:[['hideEntered','Hide entered'],['hideEnded','Hide ended'],['softHideFeatured','Soft-hide featured / pinned'],['highContrastEnter','High-contrast Enter']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '.page__outer-wrap,.page__inner-wrap,.page__heading,.sidebar,.sidebar__heading,.table,.table__row-outer-wrap,.table__row-inner-wrap,.giveaway__row-inner-wrap,.featured__container,.featured__outer-wrap,.featured__inner-wrap,.comment__summary,.comment__description,.comment__entity,.form__row,.form__input-description,.pagination,.popup,.popup__heading,.popup__description,.markdown,.nav__absolute-dropdown,.nav__row,.widget-container,.esgst-popup,.esgst-menu-layer,.esgst-panel,.esgst-gv-popout,#dlg-box,#dlg-body,.ui-dialog,.ui-widget-content',
        '.pinned-giveaways-tab{background:'+colors[2]+'!important;color:#eee!important;text-shadow:none!important}.homepage_table_column_heading{color:'+accent+'!important;text-shadow:none!important}.fanatical_new{background:'+colors[3]+'!important;color:'+accent+'!important;text-shadow:none!important}.sidebar__entry-insert,.form__submit-button{background:#315b27!important;color:#d8ffc5!important}.sidebar__entry-delete{background:#7f2828!important;color:#ffdbdb!important}.giveaway__heading__name,.comment__username{color:'+accent+'!important}.giveaway__columns{color:#bbb!important}.is-faded{opacity:.55}.giveaway__image,.giveaway__image-outer-wrap{background-color:transparent!important}')+
        steamControls(state,colors,accent)+
        (state.hideEntered?'.giveaway__row-outer-wrap:has(.is-faded),.giveaway__row-outer-wrap:has(.esgst-faded),.giveaway-gridview .faded{display:none!important}':'')+
        (state.hideEnded?'[data-colorshift-ended=true]{display:none!important}':'')+
        (state.softHideFeatured?'.featured__container,.pinned-giveaways{opacity:.32;max-height:52px;overflow:hidden}.featured__container:hover,.featured__container:focus-within,.pinned-giveaways:hover,.pinned-giveaways:focus-within{opacity:1;max-height:none}':'')+
        (state.highContrastEnter?'.pinned-giveaways-tab{background:'+colors[2]+'!important;color:#eee!important;text-shadow:none!important}.homepage_table_column_heading{color:'+accent+'!important;text-shadow:none!important}.fanatical_new{background:'+colors[3]+'!important;color:'+accent+'!important;text-shadow:none!important}.sidebar__entry-insert,.form__submit-button{background:#125c14!important;color:#fff!important;border:2px solid #fff!important;font-weight:bold!important}':'');},
      update(api){for(const row of api.query('.giveaway__row-outer-wrap')){
        const ended=!!row.querySelector('.fa-times-circle')||[...row.querySelectorAll('[title]')].some(el=>/ended/i.test(el.title));
        if(row.dataset.colorshiftEnded!==String(ended))row.dataset.colorshiftEnded=String(ended);
      }}
    },
    cardkingdom:{name:'Card Kingdom',accent:'#e45b64',options:[['dense','Denser product results'],['hideSoldOut','Hide fully sold out'],['compactListings','Compact condition rows'],['stickyFilters','Sticky search filters']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#landing-wrapper,.landing-wrapper,main,.main,.productItemWrapper,.productCardWrapper,.itemContentWrapper,.detailWrapper,.addToCartWrapper,.addToCartByType,.filterContainer,.sidesearch,#sidecartContainer,.sideCart,.dropdown-menu,.pagination,.modal-content,.card,.footer,.footer-wrapper',
        `.header-nav,.bg-ck-blue{background:${colors[3]}!important}.productDetailTitle,.productDetailSet,.productDetailType,.collector-number,.styleQtyAvailText,.resultsCount{color:#d0d0cc!important}.stylePrice,.amtAndPrice{color:#8ee2a4!important}.outOfStockNotice{color:#ffabab!important}.mtg-card-static-wrapper,img.card-image{background:transparent!important}
        #landing-wrapper,#landing-wrapper .section-wrapper{background-color:${colors[1]}!important;color:#eee!important}
        #landing-wrapper .section-container,#landing-wrapper .header-section,#landing-wrapper .body-section{background-color:${colors[2]}!important;color:#eee!important}
        #landing-wrapper .light-gradient-section{background:linear-gradient(180deg,${colors[1]},${colors[2]})!important}
        #landing-wrapper .dark-gradient-section,#landing-wrapper .dark-section{background:${colors[3]}!important;color:#eee!important}
        #landing-wrapper .img-wrapper.shape-square{color:#eee!important;background-color:${colors[2]}!important;background-image:none!important;border-color:${accent}!important}
        #landing-wrapper .slider-item-image.shape-square{background-color:${colors[2]}!important}
        #landing-wrapper .slider-item,#landing-wrapper .slider-item-title,#landing-wrapper .slider-item-price,#landing-wrapper .price{color:#eee!important}
        .desktop-menu-content,.desktop-menu-content.open,.desktop-menu-content .mega-menu,.desktop-submenu-promospot{background:${colors[2]}!important;color:#eee!important}
        .desktop-menu-header,.desktop-menu-button,.desktop-submenu-header{background-color:${colors[3]}!important;color:#eee!important}
        .desktop-menu-content:after{border-bottom-color:${colors[3]}!important}
        a.desktop-menu-callout,a.submenu-callout-button,.desktop-menu-content .submenu-callout-button{background:${colors[3]}!important;color:#fff!important;border-color:${accent}!important}
        #footer,#footer .bg-ck-light-blue-gradient,#footer .footer-callout-row{background:${colors[2]}!important;color:#eee!important}
        #footer .bg-ck-blue,#footer .footer-bottom-row,#footer .back-to-top-row{background:${colors[3]}!important;color:#eee!important}
        #footer .footer-callout-section,#footer .footer-callout-title,#footer .footer-callout-text,#footer .footer-link-list-header,#footer .footer-legalese-row{color:#eee!important}
        #footer a{color:${accent}!important}
        #autocomplete.rounded-pill,#autoCompleteSearchResults,#autoCompleteSearchResults .list-wrapper{background:${colors[2]}!important;color:#eee!important;border-color:#858580!important}
        #autocomplete #header-search-form{background:transparent!important}
        #autocomplete #header-search-input,#autocomplete #header-search-input:focus{background:transparent!important;color:#eee!important;border-color:transparent!important;box-shadow:none!important}
        #autocomplete #header-search-input::placeholder{color:#c0c0bc!important;opacity:1!important}
        #autocomplete .input-icon{background:transparent!important;color:#eee!important;border:0!important;box-shadow:none!important}
        #autocomplete .input-icon img{filter:brightness(0) invert(1)!important}
        #autocomplete:focus-within{outline:2px solid ${accent}!important;outline-offset:2px}
        #autoCompleteSearchResults li,#autoCompleteSearchResults .recent-searches{background-color:${colors[2]}!important;color:#eee!important}
        #autoCompleteSearchResults a{color:${accent}!important}
        #autoCompleteSearchResults .ui-state-active,#autoCompleteSearchResults li:hover{background:${colors[3]}!important;color:#fff!important}
        `)+
        siteControls(state,colors,accent,'.btn,.dropdown-toggle,.page-link,.addToCartButton,.sideSearchApply,button:not([role=switch]),select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.palette==='original'?'':'.text-muted,.detailFlavortext{color:#b8b8b4!important}.nav-tabs .nav-link.active{background:'+colors[2]+'!important;color:#fff!important;border-color:#777!important}')+
        (state.hideAds?'.promo,.promo-banner,.mega-menu-promo,[class*="promoColumn"],[class*="marketing"]{display:none!important}':'')+
        (state.dense?'.productItemWrapper{margin-bottom:.5rem!important}.productCardWrapper,.itemContentWrapper,.detailWrapper{padding:.45rem!important}.productDetailDrillIn{margin-bottom:.25rem!important}':'')+
        (state.hideSoldOut?'[data-colorshift-sold=true]{display:none!important}':'')+
        (state.compactListings?'.addToCartByType,.oneRow,.twoRow{min-height:auto!important;margin:.15rem 0!important;padding:.2rem .35rem!important}.style,.qty,.amtAndPrice{margin-top:.1rem!important;margin-bottom:.1rem!important}':'')+
        (state.stickyFilters?'.sidesearch{position:sticky!important;top:8px!important;max-height:calc(100vh - 16px)!important;overflow:auto!important;scrollbar-gutter:stable}':'');},
      update(api){for(const card of api.query('.productItemWrapper,.productCardWrapper')){
        const available=!!card.querySelector('.addToCartButton:not(.disabled),button.addToCartButton:not([disabled])');
        const sold=!available&&!!card.querySelector('.outOfStockNotice');
        if(card.dataset.colorshiftSold!==String(sold))card.dataset.colorshiftSold=String(sold);
      }}
    },
    tcgplayer:{name:'TCGPlayer',accent:'#6ea8ff',options:[['dense','Denser product grid'],['hideSoldOut','Hide out of stock'],['compactListings','Compact listing rows'],['hideMerch','Hide merchandising carousels'],['hideSupport','Hide support chat']],
      css(state,colors,accent){const [,body,surface,header]=colors;
        return shared(state)+theme(state,colors,accent,
        'main,#app,.app,.search-layout,.search-layout-hfb,.search-layout-vertical-content,.search-results,.search-result,.search-result__content,.search-result__listings,.search-toolbar,.filter-drawer,.filter-drawer__body,.filter-drawer__header,.filter-drawer__footer,.filter-side-bar,.horizontal-filters-bar,.hfb-popover-content,.hfb-result-count,.search-filters-autocomplete__dropdown,.search-filters-autocomplete__input,.listing-item,.list-view-product-card,.product-card,.product-card__content,.product-card__product,.item-card,.product-carousel,.tcg-carousel,.out-of-stock,.breadcrumbs,.search-breadcrumbs,.navbar,.navbar-menu,.navbar-dropdown,.navbar-item,.navbar-brand,.tcg-modal,.tcg-modal__inner,.tcg-modal-content,.tcg-modal__header,.tcg-modal-actions,.modal__title,.modal__content,.modal__actions,.modal__container,.tcg-drawer,.tcg-drawer__sheet,.tcg-drawer__content,.tcg-drawer__header,.spotlight,.product-details,.shopping-cart,.martech-card,.loading-overlay,.filter-bubbles,.search-filter,.availability,.shop-by-seller,.shop-by-direct,.find-a-seller,.seller-details,.item-added-drawer,.cart-drawer',
        `:root{--tcg-colors-surface-background-default:${body};--tcg-colors-surface-background-alt:${surface};--tcg-colors-surface-background-background:${body};--tcg-colors-surface-background-highlight:${header};--tcg-colors-surface-text-default:#d0d0cc;--tcg-colors-surface-text-primary:#eee;--tcg-colors-surface-text-subdued:#b8b8b4;--tcg-colors-surface-text-link:${accent};--tcg-colors-surface-text-highlight:${accent};--tcg-colors-surface-border-default:#ffffff30;--tcg-colors-brand-background-default:${header};--tcg-colors-brand-text-default:${accent};--tcg-brand-theme-surface-bg-colors-surface:${surface};--tcg-brand-theme-surface-bg-colors-border:#ffffff30;--tcg-brand-theme-text-on-surface-text-primary:#eee;--surface-surface-text-text-primary:#eee;--surface-surface-text-text-subdued:#b8b8b4;--surface-surface-background-border-default:#ffffff30;--brand-text-default:${accent}}
        .anchored-select{background:${surface}!important;color:#eee!important;text-shadow:none!important}.mp-header__content__account-actions__cta__signin-btn a[data-aid="header-sign-in"]{color:#eee!important}.martech-button{background:${header}!important;border-color:${accent}!important}.martech-button a.martech-base-link{color:${accent}!important;text-shadow:none!important}
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
        (state.hideMerch?'.merchandising-filmstrip,.product-carousel{display:none!important}':'')+
        (state.hideSupport?'iframe#forethought-chat,iframe[src*="forethought.ai"],iframe[id^="forethought-"]{display:none!important}':'');},
      update(api){for(const card of api.query('.search-result,.search-result__content,.product-card,.item-card,.list-view-product-card')){
        const sold=!!card.querySelector('.out-of-stock,.mp-oos-badge')||/\bout\s*of\s*stock\b/i.test(card.textContent||'');
        if(card.dataset.colorshiftSold!==String(sold))card.dataset.colorshiftSold=String(sold);
      }}
    },
    goodreads:{name:'Goodreads',accent:'#d2b48c',options:[['denseBooks','Denser book lists'],['compactReviews','Compact reviews'],['hideRecommendations','Hide recommendations'],['wideReading','Wider reading column']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#siteContainer,#wrapper,.content,.gr-newsfeed,.gr-newsfeedItem,.gr-childNewsfeedItem,.gr-childNewsfeedItemContainer,.gr-commentForm,.mainContent,.gr-mainContent,.gr-box,.gr-box--withShadow,.BookPage,.BookPage__mainContent,.BookPage__rightColumn,.ReviewsList,.ReviewCard,.review,.elementList,.bookalike,.modal__content,.dropdown__menu,footer',
        `.gr-newsfeed,.gr-newsfeed .u-defaultType,.gr-newsfeedItem__body,.gr-newsfeedItem__header,.gr-newsfeedItem__footer,.gr-newsfeedItem__reviewText{color:#d0d0cc!important}.gr-commentForm{background:${colors[3]}!important}.siteHeader,.siteHeader__topLine,.siteHeader__contents,.Header,.HeaderNav{background:${colors[3]}!important}.bookTitle,.BookPageTitleSection__title,.ReviewCard__name{color:#eee!important}.authorName,.greyText,.minirating,.uitext{color:#bdbdb8!important}.bookCover,img.ResponsiveImage{background:transparent!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]):not(.gr-iconButton):not(.gr-buttonAsLink),a[role=button],.gr-button,.Button,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.palette==='original'?'':`
        .siteHeader__topFullImageContainer,.siteHeader__primaryNavSeparateLine{background-color:${colors[3]}!important}
        .siteHeader__browseMenuDropdown,.siteHeader__subNav,.siteHeader__spotlight,.dropdown__menu,.primaryNavMenu__menu,.wantToReadMenu,.searchBox__form{background:${colors[2]}!important;color:#ddd!important;border-color:#ffffff30!important}
        .siteHeader__topLevelLink,.primaryNavMenu__trigger,.siteHeader__subNavLink{color:#eee!important}
        .siteHeader__topLevelLink:hover,.primaryNavMenu__trigger:hover,.primaryNavMenu__trigger--active,.siteHeader__subNavLink:hover{background:${colors[2]}!important;color:${accent}!important}
        .gr-newsfeed{background:${colors[1]}!important}
        .gr-newsfeedItem{box-shadow:0 0 0 1px #ffffff26,0 2px 6px #0002!important;border-color:#ffffff26!important}
        .gr-commentForm{border-color:#ffffff26!important}
        .gr-buttonAsLink{background:transparent!important;color:${accent}!important;border-color:transparent!important;box-shadow:none!important}
        .gr-iconButton{background-color:transparent!important;border-color:transparent!important;box-shadow:none!important}
        .wantToReadButton__left,.wantToReadButton__right{background:${colors[3]}!important;border-color:#ffffff40!important;color:#eee!important}
        .gr-footer__siteLinks,.gr-footer__appLinks{background-color:${colors[1]}!important;color:#c0c0bc!important}
        .gr-newsfeedItem__headerTimestamp,.gr-footer__layoutLink{color:#c0c0bc!important}
        `)+
        (state.denseBooks?'.elementList,.bookalike,.BookCard{padding:.45rem 0!important;margin:.2rem 0!important}.leftAlignedImage{margin-right:.65rem!important}.leftAlignedImage img,.bookCover{max-height:110px!important;width:auto!important}':'')+
        (state.compactReviews?'.review,.ReviewCard{padding:.65rem!important;margin:.35rem 0!important}.reviewText,.ReviewText{line-height:1.42!important}.ReviewsList__listContext{gap:.5rem!important}':'')+
        (state.hideRecommendations?'[data-colorshift-recommendation=true]{display:none!important}':'')+
        (state.wideReading?'.BookPage__mainContent,.mainContent,.gr-mainContent{max-width:980px!important;width:min(980px,100%)!important}.BookPage__rightColumn{max-width:280px!important}':'');},
      update(api){for(const heading of api.query('h1,h2,h3,h4')){
        if(!/readers also enjoyed|recommend(?:ed|ations)|similar books|people also liked/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,.gr-box,.Carousel,.RecommendationShelf')||heading.parentElement;
        if(section)section.dataset.colorshiftRecommendation='true';
      }}
    },
    genius:{name:'Genius',accent:'#f4df42',options:[['focusLyrics','Focus lyrics'],['compactAnnotations','Compact annotations'],['dimMedia','Dim media embeds'],['hideRecommendations','Hide recommendations'],['hideCommunity','Hide Community section'],['hideLatest','Hide Latest section'],['hideVideos','Hide Videos section'],['hideCharts','Hide Charts section'],['hideNews','Hide News section']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        'main,[class*="Page__Container"],[class*="Lyrics__Container"],[data-lyrics-container="true"],[class*="Annotation"],[class*="SongHeader"],[class*="StickyPlayer"],[class*="Modal"],[class*="Dropdown"],footer',
        `main [class*="HomeContent-"][class*="__Section"],main [class*="HomeContent-"][class*="__CenteredFlexColumn"],main [class*="PageGrid"],[class*="SquareManySelects__Container"]{background:${colors[2]}!important;color:#eee!important}
        #sticky-nav,[class*="PageFooter-"]{background:${colors[3]}!important;color:#ddd!important}
        [class*="CommunityRanking-"][class*="__Iq"] [class*="TextLabel"],[class*="TextLabel"][color="accent.main"]{color:${accent}!important}
        [class*="StickyNavSearch-"][class*="__Form"]{background:${colors[2]}!important}
        main [class*="SizedImage__Container"]{background-color:${colors[2]}!important}
        .header,.Header,[class*="Header__Container"]{background:${colors[3]}!important}[data-lyrics-container="true"],[class*="Lyrics__Container"]{color:#eee!important}[class*="MetadataStats"],[class*="SongDescription"]{color:#bdbdb8!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.focusLyrics?'[data-lyrics-container="true"],[class*="Lyrics__Container"]{max-width:760px!important;margin-left:auto!important;margin-right:auto!important;font-size:1.08rem!important;line-height:1.72!important}':'')+
        (state.compactAnnotations?'[class*="Annotation"]{padding:.55rem!important;margin:.35rem 0!important;line-height:1.42!important}':'')+
        (state.dimMedia?'iframe,video,[class*="Media"]{opacity:.42!important;transition:opacity .15s ease}iframe:hover,iframe:focus,video:hover,video:focus,[class*="Media"]:hover,[class*="Media"]:focus-within{opacity:1!important}':'')+
        (state.hideRecommendations?'[data-colorshift-recommendation=true]{display:none!important}':'')+
        (state.hideCommunity?'main #community{display:none!important}':'')+
        (state.hideLatest?'main [data-colorshift-home-section="latest"]{display:none!important}':'')+
        (state.hideVideos?'main #videos{display:none!important}':'')+
        (state.hideCharts?'main #top-songs{display:none!important}':'')+
        (state.hideNews?'main #featured-stories{display:none!important}':'');},
      update(api){
        for(const heading of api.query('main h2')){
          if(heading.textContent.trim()!=='Latest')continue;
          const section=heading.closest('section');
          if(section&&section.dataset.colorshiftHomeSection!=='latest')section.dataset.colorshiftHomeSection='latest';
        }
        for(const heading of api.query('h1,h2,h3,h4')){
        if(!/you might also like|recommended|more from|related songs/i.test(heading.textContent||''))continue;
        const section=heading.closest('section,[class*="Recommended"],[class*="Related"]')||heading.parentElement;
        if(section)section.dataset.colorshiftRecommendation='true';
      }}
    }
  };
  const site=adapters[siteId];site.icon=icons[siteId];
  ColorShift.start(site);
})();
