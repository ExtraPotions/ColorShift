/* Best-effort adapter: neutral surfaces use the shared repair engine. */
(() => {
  const domains={'manapool.com':'manapool','scryfall.com':'scryfall','steamgifts.com':'steamgifts','steamtrades.com':'steamgifts','sgtools.info':'steamgifts','tcgplayer.com':'tcgplayer','cardkingdom.com':'cardkingdom','goodreads.com':'goodreads','genius.com':'genius'};
  const moduleId=domains[location.hostname.replace(/^www\./,'')];
  const tailored=moduleId?colorShiftSiteModule(moduleId):null;
  const site={name:'Anywhere',anywhere:true,icon:__ICON__,accent:'#ffb09b',options:[['enabled','Enable on this site']],
    css(state,colors,accent){
      if(!state.enabled||state.palette==='original')return '';
      const protectedSelector='[data-colorshift-preserve],[class*="badge" i],[class*="chip" i],[class*="status" i],[class*="rating" i],[class*="esgst-"],svg,canvas,picture';
      return 'html,body{background-color:'+colors[1]+'!important;color:#eee!important;color-scheme:dark}'+
        'a:not(:is('+protectedSelector+')):not(:is('+protectedSelector+') *){color:'+(state.brighterLinks?'#9ad8f8':accent)+'!important}'+
        ':is(button,a.btn,a.btn-sm,a.button,a[class*="-button"],a[role="button"],input:not([type=color]):not([type=range]):not([type=checkbox]):not([type=radio]),select,textarea):not(:is('+protectedSelector+')):not(:is('+protectedSelector+') *){background-color:'+colors[3]+'!important;color:#eee!important;border-color:#888!important}'+
        (state.hideAds?'[data-ad],.adsbygoogle,[aria-label="Advertisement"]{display:none!important}':'');
    }
  };
  if(tailored){
    site.moduleName=tailored.name;
    site.options.push(...tailored.options);
    site.accent=tailored.accent;
    site.css=(state,colors,accent)=>state.enabled?tailored.css(state,colors,accent):'';
    site.update=api=>{if(api.state.enabled)tailored.update?.(api);else{
      tailored.deactivate?.();
      for(const button of document.querySelectorAll('.colorshift-section-button,[data-colorshift-launch]'))button.remove();
      for(const node of document.querySelectorAll('.colorshift-section-hidden,.colorshift-section-heading'))node.classList.remove('colorshift-section-hidden','colorshift-section-heading');
    }};
    site.actions=tailored.actions?.map(([label,fn])=>[label,api=>{if(api.state.enabled)fn(api);}]);
  }
  ColorShift.start(site);
})();
