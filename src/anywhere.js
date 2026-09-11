/* Best-effort adapter: neutral surfaces use the shared repair engine. */
(() => {
  const site={name:'Anywhere',anywhere:true,icon:__ICON__,accent:'#ffb09b',options:[['enabled','Enable on this site']],
    css(state,colors,accent){
      if(!state.enabled||state.palette==='original')return '';
      const protectedSelector='[data-colorshift-preserve],[class*="badge" i],[class*="chip" i],[class*="status" i],[class*="rating" i],[class*="esgst-"],svg,canvas,picture';
      return 'html,body{background-color:'+colors[1]+'!important;color:#eee!important;color-scheme:dark}'+
        'a:not(:is('+protectedSelector+')):not(:is('+protectedSelector+') *){color:'+(state.brighterLinks?'#9ad8f8':accent)+'!important}'+
        ':is(button,input:not([type=color]):not([type=range]):not([type=checkbox]):not([type=radio]),select,textarea):not(:is('+protectedSelector+')):not(:is('+protectedSelector+') *){background-color:'+colors[3]+'!important;color:#eee!important;border-color:#888!important}'+
        (state.hideAds?'[data-ad],.adsbygoogle,[aria-label="Advertisement"]{display:none!important}':'');
    }
  };
  ColorShift.start(site);
})();
