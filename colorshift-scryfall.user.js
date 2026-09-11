// ==UserScript==
// @name           ColorShift for Scryfall
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.1.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           data:image/png;base64,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
// @match          *://scryfall.com/*
// @match          *://www.scryfall.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-scryfall.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-scryfall.user.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// ==/UserScript==
(function(){
/* ColorShift: shared settings, lifecycle and isolated UI. CC-BY-NC-4.0 */
var ColorShift = (() => {
  'use strict';
  const version = '0.1.0';
  const SETTINGS_SCHEMA = 1;
  const SCHEMA_KEY = 'settingsSchema';
  const palettes = {
    system: ['System'], original: ['Original'], lightGray: ['Graphite','#3f3f3c','#4a4a46','#333330'],
    darkGray: ['Charcoal','#252522','#2a2a28','#1c1c1a'],
    navy: ['Navy','#1a2332','#243044','#141c28'], black: ['Black','#0a0a0a','#111111','#050505'],
    fireRed: ['Ember','#211516','#382123','#481f22'],
    leafGreen: ['Forest','#131d17','#213329','#24442f'],
    heartGold: ['Antique Gold','#211d13','#39301d','#493a1d']
  };
  const accents = {site:['Site default',null],blue:['Blue','#5eb0ef'],green:['Green','#63d989'],amber:['Amber','#f0c14b'],violet:['Violet','#b57aef'],rose:['Rose','#f5b0c8'],teal:['Teal','#78dcca'],coral:['Coral','#ffb09b'],silver:['Silver','#cbd5e1']};
  const shared = [['brighterLinks','Brighter links'],['hideAds','Hide ads / promos']];
  const accessibility = [['reducedMotion','Reduce motion'],['highContrast','High contrast']];
  const memory = new Map();
  let storagePrefix="";
  function read(key, fallback) {
    key=storagePrefix+key;
    try { if (typeof GM_getValue === 'function') return GM_getValue(key,fallback); } catch {}
    try { const v=localStorage.getItem('colorshift-'+key); return v===null?fallback:JSON.parse(v); } catch { return memory.get(key) ?? fallback; }
  }
  function write(key,value) {
    key=storagePrefix+key;
    memory.set(key,value);
    try { if(typeof GM_setValue==='function') { GM_setValue(key,value); return; } } catch {}
    try { localStorage.setItem('colorshift-'+key,JSON.stringify(value)); } catch {}
  }
  function element(tag,attrs={},text) {
    const el=document.createElement(tag);
    for(const [key,value] of Object.entries(attrs)) el.setAttribute(key,value);
    if(text!==undefined) el.textContent=text;
    return el;
  }
  const LAUNCHER_PROTOCOL='userscript-launcher-v1';
  function declareLauncher(node,controls,meta) {
    const watched=()=>controls().filter(el=>el?.isConnected&&el.getClientRects().length);
    node.dataset.userscriptLauncher=LAUNCHER_PROTOCOL;
    node.dataset.launcherOwner=meta.owner;
    node.dataset.launcherId=meta.id;
    node.dataset.launcherPriority=String(meta.priority);
    node.dataset.launcherPreferredPosition=meta.preferredPosition;
    let frame=0;
    const publish=()=>{
      frame=0;const rects=watched().map(el=>el.getBoundingClientRect());if(!rects.length)return;
      const area={left:Math.round(Math.min(...rects.map(r=>r.left))),top:Math.round(Math.min(...rects.map(r=>r.top))),right:Math.round(Math.max(...rects.map(r=>r.right))),bottom:Math.round(Math.max(...rects.map(r=>r.bottom)))};
      node.dataset.launcherOccupiedArea=JSON.stringify(area);
      window.dispatchEvent(new CustomEvent('userscript-launcher:change',{detail:{protocol:LAUNCHER_PROTOCOL,owner:meta.owner,id:meta.id,priority:meta.priority,preferredPosition:meta.preferredPosition,occupiedArea:area}}));
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(publish);};
    if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(schedule);for(const el of controls().filter(Boolean))observer.observe(el);}
    window.addEventListener('resize',schedule,{passive:true});
    return {publish:schedule};
  }
  // DOM-based opt-in works across userscript sandboxes; only ExtraPotions companions yield.
  function coordinateExtraPotionsControls(anchor, registered = []) {
    const candidates = new Set([...document.querySelectorAll('[data-userscript-launcher="userscript-launcher-v1"],[data-ExtraPotions-control="secondary"],#pfh-fab,.pfh-fab'), ...registered]);
    const anchorNode=anchor.getRootNode().host||anchor;
    const anchorPriority=Number(anchorNode.dataset.launcherPriority||100);
    const primary = [anchor];
    for (const host of document.querySelectorAll('[data-ExtraPotions-dock-root]')) {
      const control = host.shadowRoot?.querySelector('[data-ExtraPotions-control="primary"]');
      if (control && control !== anchor) primary.push(control);
    }
    const occupied = primary.map(el=>el.getBoundingClientRect()).filter(r=>r.width&&r.height);
    const origin=anchor.getBoundingClientRect();
    const overlaps=r=>occupied.some(o=>r.left<o.right+8&&r.right>o.left-8&&r.top<o.bottom+8&&r.bottom>o.top-8);
    for (const el of candidates) {
      if (!el.isConnected || el===anchorNode || primary.includes(el) || el.dataset.ExtraPotionsControl==='primary' || Number(el.dataset.launcherPriority||0)>=anchorPriority) continue;
      const ownerRoot=el.getRootNode().host;
      if(ownerRoot?.dataset.ExtraPotionsDockRoot==='primary')continue;
      let rect=el.getBoundingClientRect();
      if (!rect.width || !rect.height || !['fixed','sticky'].includes(getComputedStyle(el).position)) continue;
      if(overlaps(rect)){
        let x=origin.left-rect.width-8,y=origin.top;
        for(let n=0;n<100;n++){
          if(x<8){x=Math.max(8,innerWidth-rect.width-16);y-=rect.height+8;}
          if(y<8)break;
          const box={left:x,right:x+rect.width,top:y,bottom:y+rect.height};
          if(!overlaps(box)){
            for(const [key,value] of Object.entries({left:x+'px',top:y+'px',right:'auto',bottom:'auto'}))el.style.setProperty(key,value,'important');
            rect=box;break;
          }
          x-=rect.width+8;
        }
      }
      occupied.push(rect);
    }
  }
  function start(site) {
    if(site.anywhere){if(window.top!==window.self)return;storagePrefix="anywhere:"+location.origin+":";}
    const defaults={palette:'darkGray',accent:'site',intensity:'normal',fabTop:null,updateNotifications:false};
    for(const [key] of [...shared,...site.options,...accessibility]) defaults[key]=false;
    const state={...defaults};
    function valid(key,value) {
      if(key==='palette') return Object.hasOwn(palettes,value);
      if(key==='accent') return Object.hasOwn(accents,value);
      if(key==='intensity') return ['normal','soft'].includes(value);
      if(key==='fabTop') return value===null || (typeof value==='number' && Number.isFinite(value));
      return typeof value==='boolean';
    }
    const storedSchema=Number(read(SCHEMA_KEY,0))||0;
    for(const key of Object.keys(defaults)) { const value=read(key,defaults[key]); if(valid(key,value)) state[key]=value; }
    if(storedSchema<SETTINGS_SCHEMA) {
      for(const [key,value] of Object.entries(state)) write(key,value);
      write(SCHEMA_KEY,SETTINGS_SCHEMA);
    }
    let host,root,fab,panel,notice,style,siteSheet,launcher,open=false,frame=0,lastProcessed=0;
    const diagnosticErrors=[];
    const metrics={updates:0,inspected:0,styles:0};let updateRoots=[document],lastCSS='';
    function query(selector){const found=new Set();for(const node of updateRoots){if(node.nodeType===1){if(node.matches(selector))found.add(node);let parent=node.parentElement?.closest(selector);while(parent){found.add(parent);parent=parent.parentElement?.closest(selector);}}for(const item of node.querySelectorAll(selector))found.add(item);}metrics.inspected+=found.size;return [...found];}
    function updatePage(roots=[document]){updateRoots=roots;metrics.updates++;try{site.update?.(api);repairSurfaces();}catch(error){diagnosticErrors.push(String(error?.message||error));if(diagnosticErrors.length>10)diagnosticErrors.shift();}finally{updateRoots=[document];}lastProcessed=Date.now();refreshDiagnostics();}
    let surfacePalette=null;
    let coverageReport='Theme coverage: not scanned. Use Scan theme coverage after the page loads.';
    const protectedSurfaces='[class*="esgst-"],[class*="badge" i],[class*="chip" i],[class*="rating" i],[class*="status" i],[role="progressbar"],[data-colorshift-preserve],svg,canvas,picture,[data-userscript-launcher]';
    const parseColor=value=>{const n=value.match(/[\d.]+/g)?.map(Number);return n&&n.length>=3?n:null;};
    const neutral=c=>c&&Math.max(...c.slice(0,3))-Math.min(...c.slice(0,3))<16;
    const luminance=c=>c.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
    function repairSurfaces(){
      if(!surfacePalette)return;
      const nodes=query('main,header,footer,nav,aside,section,article,div,form,ul,li,p,span,h1,h2,h3,h4,label');
      // Only neutral, opaque surfaces without artwork are eligible. Semantic colours stay owned by the site.
      for(const node of nodes){
        node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');
        if(node===host||node.closest(protectedSurfaces))continue;
        const computed=getComputedStyle(node),bg=parseColor(computed.backgroundColor);
        if(computed.display==='none'||computed.backgroundImage!=='none')continue;
        if(neutral(bg)&&(bg[3]??1)===1&&node.matches('main,header,footer,nav,aside,section,article,div,form,ul,li')){
          const rect=node.getBoundingClientRect();
          if(rect.width>=80&&rect.height>=24&&!surfacePalette.some(c=>c.every((v,i)=>v===bg[i]))){
            let level=node.closest('header,footer,nav')?'header':'surface';
            if(site.anywhere){
              if(node.matches('main'))level='page';
              else if(level==='surface'&&node.parentElement?.closest('[data-colorshift-surface="surface"],[data-colorshift-surface="raised"]'))level='raised';
            }
            node.dataset.colorshiftSurface=level;
          }
        }
        if(![...node.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;
        const fg=parseColor(computed.color);if(!neutral(fg))continue;
        let parent=node,back=null;
        while(parent){const style=getComputedStyle(parent);if(style.backgroundImage!=='none')break;const color=parseColor(style.backgroundColor);if(color&&(color[3]??1)===1){back=color;break;}parent=parent.parentElement;}
        if(back&&surfacePalette.some(c=>c.every((v,i)=>v===back[i]))){const a=luminance(fg),b=luminance(back);if((Math.max(a,b)+.05)/(Math.min(a,b)+.05)<4.5)node.dataset.colorshiftText='true';}
      }
    }
    function scanCoverage(){
      if(!surfacePalette){coverageReport='Theme coverage: Original mode; no theme audit needed.';refreshDiagnostics();return;}
      const findings=[];let scanned=0,unknown=0,protectedCount=0;
      const nodes=document.querySelectorAll('main,header,footer,nav,section,article,div,p,span,a,button,input,select,textarea,label,h1,h2,h3,h4');
      for(const node of nodes){
        if(node===host||!node.getClientRects().length)continue;
        if(node.closest(protectedSurfaces)){protectedCount++;continue;}
        if(scanned>=5000)break;scanned++;
        const style=getComputedStyle(node);if(style.visibility==='hidden'||style.opacity==='0')continue;
        const label=node.tagName.toLowerCase()+(node.id?'#'+node.id:node.classList.length?'.'+[...node.classList].slice(0,2).join('.'):'');
        const bg=parseColor(style.backgroundColor),rect=node.getBoundingClientRect();
        if(style.backgroundImage!=='none'){unknown++;continue;}
        if(neutral(bg)&&(bg[3]??1)===1&&rect.width>=80&&rect.height>=24&&!surfacePalette.some(c=>c.every((v,i)=>v===bg[i])))findings.push('Surface outside palette: '+label);
        if(node.matches(':disabled,[aria-disabled="true"]'))continue;
        if(!node.matches('input,select,textarea')&&![...node.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;
        let parent=node,back=null;
        while(parent){const s=getComputedStyle(parent),c=parseColor(s.backgroundColor);if(s.backgroundImage!=='none'||Number(s.opacity)<1)break;if(c&&(c[3]??1)>0){if((c[3]??1)===1)back=c;break;}parent=parent.parentElement;}
        const fg=parseColor(style.color);if(!back||!fg||(fg[3]??1)!==1){unknown++;continue;}
        const a=luminance(fg),b=luminance(back),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
        const large=parseFloat(style.fontSize)>=24||(parseFloat(style.fontSize)>=18.66&&parseInt(style.fontWeight)>=700);
        if(ratio<(large?3:4.5))findings.push('Low contrast '+ratio.toFixed(2)+': '+label);
      }
      coverageReport=['Theme coverage ('+new Date().toISOString()+'): '+scanned+' elements checked',findings.length+' potential issues · '+unknown+' require visual review · '+protectedCount+' protected elements skipped',...(scanned>=5000?['Scan limited to 5000 elements.']:[]),...findings.slice(0,20),...(findings.length>20?['Additional findings omitted.']:[])].join('\n');
      refreshDiagnostics();
    }
    const controls=new Map();
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const contrast=matchMedia('(prefers-contrast: more)');
    const systemTheme=matchMedia('(prefers-color-scheme: dark)');
    const api={state,read,write,element,query,open:()=>setOpen(true),notify:message=>{notice.textContent=message;},set};
    function set(key,value) {
      if(!Object.hasOwn(defaults,key)||!valid(key,value)) throw new Error('Invalid setting: '+key);
      state[key]=value; write(key,value); apply();
    }
    function setOpen(value) {
      open=value; panel.hidden=!value; fab.setAttribute('aria-expanded',String(value));
      if(value) { position();refreshDiagnostics();panel.querySelector('.menu-close').focus(); }
      else fab.focus({preventScroll:true});
    }
    function position() {
      const viewport=window.visualViewport;
      const left=viewport?.offsetLeft||0,upper=viewport?.offsetTop||0;
      const width=viewport?.width||innerWidth,height=viewport?.height||innerHeight;
      const margin=Math.min(12,width/4,height/4);
      const top=Math.max(upper+8,Math.min(upper+height-56,state.fabTop ?? upper+height-64));
      fab.style.top=top+'px';
      fab.style.right='auto';fab.style.left=Math.max(left,left+width-64)+'px';
      panel.style.boxSizing='border-box';
      const mobile=width<=480;panel.classList.toggle('bottom-sheet',mobile);
      panel.style.width=(mobile?Math.max(0,width-2*margin):Math.min(300,Math.max(0,width-2*margin)))+'px';
      panel.style.maxHeight=Math.max(0,height-2*margin)+'px';
      if(open){
        const bodies=[...panel.querySelectorAll(':scope > .settings-group[open] > .section-content')];
        for(const body of bodies)body.style.maxHeight='none';
        const overhead=panel.scrollHeight-bodies.reduce((sum,body)=>sum+body.offsetHeight,0)+2;
        for(const body of bodies)body.style.maxHeight=Math.max(32,(height-2*margin-overhead)/Math.max(1,bodies.length))+'px';
        panel.style.overflowY=overhead+32>height-2*margin?'auto':'hidden';
        panel.style.right='auto';
        panel.style.left=Math.max(left+margin,left+width-panel.offsetWidth-16)+'px';
        const above=top-upper-8,below=upper+height-(top+48)-8;
        const preferred=above>=below?top-panel.offsetHeight-8:top+48+8;
        panel.style.top=(mobile?upper+height-panel.offsetHeight-margin:Math.max(upper+margin,Math.min(preferred,upper+height-panel.offsetHeight-margin)))+'px';
      }
      // Primary controls keep their saved position; only companions yield.
      coordinateExtraPotionsControls(fab);
      launcher?.publish();
    }
    function readableAccent(accent,colors) {
      const rgb=hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16));
      const luminance=hex=>rgb(hex).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
      const backgrounds=colors.slice(1),contrast=(a,b)=>(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
      if(site.anywhere&&colors[2])backgrounds.push("#"+rgb(colors[2]).map(v=>Math.round(v+(255-v)*.06).toString(16).padStart(2,"0")).join(""));
      let result=accent;
      for(let i=0;i<30&&backgrounds.some(bg=>contrast(luminance(result),luminance(bg))<4.5);i++)result='#'+rgb(result).map(v=>Math.min(255,v+5).toString(16).padStart(2,'0')).join('');
      return result;
    }
    function apply() {
      coverageReport='Theme coverage: not scanned for current settings. Use Scan theme coverage.';
      const effectiveState={...state,palette:site.anywhere&&!state.enabled?'original':state.palette==='system'?(systemTheme.matches?'darkGray':'original'):state.palette};
      const colors=palettes[effectiveState.palette],accent=readableAccent(accents[state.accent][1]||site.accent,colors);
      api.theme={palette:effectiveState.palette,colors,accent};
      surfacePalette=effectiveState.palette==='original'?null:colors.slice(1).map(hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16)));
      const raised=surfacePalette?surfacePalette[1].map(v=>Math.round(v+(255-v)*.06)):null;
      if(site.anywhere&&surfacePalette)surfacePalette.push(raised);
      if(!surfacePalette)for(const node of document.querySelectorAll('[data-colorshift-surface],[data-colorshift-text]')){node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');}
      const css=(site.anywhere&&!state.enabled)?'':site.css(effectiveState,colors,accent)+
        (surfacePalette?`[data-colorshift-surface="surface"]{background-color:${colors[2]}!important}[data-colorshift-surface="header"]{background-color:${colors[3]}!important}[data-colorshift-text]{color:#eee!important}${site.anywhere?'[data-colorshift-surface=page]{background-color:'+colors[1]+'!important}[data-colorshift-surface=raised]{background-color:rgb('+raised.join(',')+')!important}article[data-colorshift-surface],section[data-colorshift-surface],[class*=card i][data-colorshift-surface],[class*=panel i][data-colorshift-surface]{box-shadow:inset 0 0 0 1px #ffffff18,0 2px 6px #0002!important}':''}`:'')+
        ((state.reducedMotion||motion.matches)?'*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition:none!important}':'')+
        ((state.highContrast||contrast.matches)&&effectiveState.palette!=='original'?'html,body,main,article,section,[role=dialog],[role=menu],input,textarea,select,button{background:#000!important;color:#fff!important;border-color:#fff!important}a{color:#9ad8f8!important}':'');
      if(css!==lastCSS){siteSheet.replaceSync(css);lastCSS=css;metrics.styles++;}
      site.themeChanged?.(api);
      repairSurfaces();
      for(const [key,control] of controls) {
        if(control.tagName==='SELECT'||control.tagName==='INPUT') {
          control.value=state[key];
          if(control.tagName==='SELECT'){
            const color=key==='accent'?(accents[state.accent][1]||site.accent):(palettes[state.palette][2]||'linear-gradient(135deg,#fafafa 50%,#252522 50%)');
            control.parentElement.style.setProperty('--preview-color',color);
          }
        }
        else control.setAttribute('aria-checked',String(state[key]));
      }
      host.toggleAttribute('data-motion',state.reducedMotion||motion.matches);
      host.toggleAttribute('data-contrast',state.highContrast||contrast.matches);
      host.style.setProperty('--accent',accent);
      const native=effectiveState.palette==='original',light=native&&!systemTheme.matches;
      const menu=native?(light?['#f4f4f2','#ffffff','#e8e8e5']:['#252522','#30302c','#1c1c1a']):colors.slice(1);
      const high=state.highContrast||contrast.matches;
      const variables={'--menu-bg':high?'#000':menu[0],'--menu-surface':high?'#000':menu[1],'--menu-control':high?'#000':menu[2],'--menu-text':high?'#fff':light?'#202020':'#f5f5f5','--menu-muted':high?'#fff':light?'#454545':'#ddd','--menu-border':high?'#fff':light?'#888':'#858580','--menu-accent':high?'#fff':light?'#185b88':accent};
      for(const [key,value]of Object.entries(variables))host.style.setProperty(key,value);
      position();refreshDiagnostics();
      if(state.updateNotifications)checkForUpdate();else {host.removeAttribute('data-update-available');fab.title='ColorShift for '+site.name;if(notice.textContent.startsWith('Update available:'))notice.textContent='';}
    }
    let updateInFlight=false, nextUpdateAttempt=0;
    function newer(latest,current) {
      if(!/^\d+\.\d+\.\d+$/.test(latest))return false;
      const a=latest.split('.').map(Number),b=current.split('.').map(Number);
      for(let i=0;i<3;i++){if(a[i]!==b[i])return a[i]>b[i];}return false;
    }
    function showUpdate(latest) {
      host.removeAttribute('data-update-available');fab.title='ColorShift for '+site.name;
      if(!state.updateNotifications||!newer(latest,version))return;
      host.dataset.updateAvailable=latest;fab.title='ColorShift '+latest+' for '+site.name+' is available';notice.textContent='Update available: '+latest;
    }
    async function checkForUpdate() {
      const cached=read('updateCheck',null),now=Date.now();
      if(cached&&Number.isFinite(cached.checked)&&now>=cached.checked&&now-cached.checked<86400000&&/^\d+\.\d+\.\d+$/.test(cached.latest)){showUpdate(cached.latest);return;}
      if(updateInFlight||now<nextUpdateAttempt)return;
      updateInFlight=true;const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
      try {
        const response=await fetch('https://api.github.com/repos/ExtraPotions/ColorShift/releases/latest',{headers:{Accept:'application/vnd.github+json'},signal:controller.signal});
        if(!response.ok)throw Error('Update unavailable');
        const data=await response.json(),latest=String(data.tag_name||'').replace(/^colorshift-/,'');
        if(data.draft||data.prerelease||!/^\d+\.\d+\.\d+$/.test(latest))throw Error('Invalid release');
        write('updateCheck',{checked:Date.now(),latest});showUpdate(latest);
      } catch {nextUpdateAttempt=Date.now()+300000;}
      finally {clearTimeout(timer);updateInFlight=false;}
    }
    function diagnosticText() {
      const active=Object.entries(state).filter(([key,value])=>typeof defaults[key]==='boolean'&&value).length;
      return [`ColorShift ${version}`,`Site: ${site.name} (${location.hostname})`,`Page: ${location.pathname||'/'}`,`Active options: ${active}`,`Page updates: ${metrics.updates} · Elements inspected: ${metrics.inspected} · Style writes: ${metrics.styles}`,`Last processed: ${lastProcessed?new Date(lastProcessed).toISOString():'Not yet'}`,`Errors: ${diagnosticErrors.length}${diagnosticErrors.length?' · '+diagnosticErrors.at(-1):''}`,coverageReport].join('\n');
    }
    function refreshDiagnostics(){const out=panel?.querySelector('.diagnostics-output');if(out)out.textContent=diagnosticText();}
    const descriptions={
      palette:'System follows your device: native site colours in light mode, dark gray in dark mode.',
      brighterLinks:'Use brighter blue links throughout the page.',hideAds:'Hide recognised advertising and promotional blocks.',
      dense:'Reduce spacing between cards or products.',hideSoldOut:'Hide products identified as unavailable.',compactPrices:'Reduce the size and spacing of prices.',alwaysChips:'Keep product labels visible without hovering.',
      dimWarnings:'Dim content warnings; hover or focus to reveal them.',hideEntered:'Hide giveaways you have already entered.',hideEnded:'Hide giveaways marked as ended.',softHideFeatured:'Collapse and dim pinned content; hover or focus to expand it.',highContrastEnter:'Make entry buttons easier to identify.',
      compactListings:'Reduce spacing in seller or condition rows.',stickyFilters:'Keep search filters visible while scrolling.',hideMerch:'Hide product recommendation carousels.',denseBooks:'Reduce spacing in book lists.',compactReviews:'Reduce review spacing.',hideRecommendations:'Hide recognised recommendation sections.',wideReading:'Allow a wider reading column.',focusLyrics:'Centre lyrics with larger text and comfortable line spacing.',compactAnnotations:'Reduce spacing around annotations.',dimMedia:'Dim embedded media; hover or focus to restore it.',
      reducedMotion:'Reduce animations and transitions on the page and in the menu.',highContrast:'Use stronger contrast on themed page surfaces and controls.',updateNotifications:'Check at most daily for a newer release; never installs automatically.'
    };
    function resetGroup(keys,message){for(const key of keys){state[key]=defaults[key];write(key,defaults[key]);}apply();notice.textContent=message;}
    function groupReset(block,title,keys){action(block,'Reset '+title,()=>resetGroup(keys,title+' reset.')).className='section-reset';}
    function row(section,label,control,description) {
      const line=element('label',{class:'row'}); const caption=element('span',{},label);if(description){const hint=element('small',{id:'hint-'+control.getAttribute('data-setting')},description);caption.append(hint);control.setAttribute('aria-describedby',hint.id);}line.append(caption,control);section.append(line);
    }
    function section(title) { const block=element('details',{class:'settings-group'});const summary=element('summary',{},title);block.append(summary);summary.addEventListener('click',()=>{if(!block.open)for(const other of panel.querySelectorAll(':scope > .settings-group'))if(other!==block)other.open=false;});panel.append(block);block.addEventListener('toggle',()=>{if(open)position();});return block; }
    function toggles(block,options) {
      for(const [key,label] of options) {
        const button=element('button',{type:'button',role:'switch','aria-label':label,'aria-checked':String(state[key]),class:'switch'});
        button.append(element('span',{'aria-hidden':'true'}));button.addEventListener('click',()=>set(key,!state[key]));
        button.setAttribute('data-setting',key);controls.set(key,button);row(block,label,button,descriptions[key]);
      }
    }
    function action(parent,title,fn) { const b=element('button',{type:'button'},title);b.addEventListener('click',fn);parent.append(b);return b; }
    function mount() {
      if(!document.body) return;
      if(document.getElementById('colorshift-root')) return;
      host=element('div',{id:'colorshift-root','data-colorshift-primary-control':'true','data-ExtraPotions-dock-root':'primary'});
      host.style.cssText='all:initial!important;position:fixed!important;inset:0!important;z-index:2147483647!important;pointer-events:none!important;';
      root=host.attachShadow({mode:'open'});
      const sheet=new CSSStyleSheet();sheet.replaceSync(UI_CSS);root.adoptedStyleSheets=[sheet];
      fab=element('button',{id:'colorshift-fab',type:'button',class:'fab',title:'ColorShift for '+site.name,'aria-label':'ColorShift for '+site.name+' settings','aria-controls':'colorshift-panel','aria-expanded':'false','data-floating-control':'primary'});
      const icon=element('img',{src:site.icon,alt:'',draggable:'false'});fab.append(icon);
      fab.dataset.ExtraPotionsControl='primary';
      panel=element('div',{id:'colorshift-panel',role:'dialog','aria-label':'ColorShift for '+site.name+' settings',class:'panel'});panel.hidden=true;
      const header=element('header'),heading=element('div');heading.append(element('h2',{},site.anywhere?'ColorShift Anywhere':'ColorShift'),element('p',{},site.anywhere?location.hostname+' · Best-effort theming':site.name+' · Themes and page settings'));header.append(element('img',{src:site.icon,alt:'',class:'header-icon'}),heading);const close=action(header,'×',()=>setOpen(false));close.className='menu-close';close.setAttribute('aria-label','Close settings');header.append(close);panel.append(header);
      if(site.anywhere)toggles(panel,[['enabled','Enable on this site']]);
      const appearance=section('Appearance');
      for(const [key,label,values] of [['palette','Theme',palettes],['accent','Accent',accents]]) {
        const select=element('select',{'aria-label':label,class:'color-select'});
        for(const [value,[name,color,surface]] of Object.entries(values)){
          const option=element('option',{value},name);
          option.style.setProperty('--option-color',(key==='accent'?(color||site.accent):(surface||'linear-gradient(135deg,#fafafa 50%,#252522 50%)')));
          select.append(option);
        }
        select.addEventListener('change',()=>set(key,select.value));select.setAttribute('data-setting',key);controls.set(key,select);const picker=element('span',{class:'color-picker'});picker.append(element('span',{class:'color-dot','aria-hidden':'true'}),select);row(appearance,label,picker,descriptions[key]);
      }
      groupReset(appearance,'appearance',['palette','accent','intensity']);
      const pageOptions=appearance;toggles(pageOptions,shared);groupReset(pageOptions,'page settings',shared.map(([key])=>key));
      const siteOptions=site.anywhere?null:section(site.name);if(siteOptions){toggles(siteOptions,site.options);groupReset(siteOptions,site.name+' options',site.options.map(([key])=>key));}
      const disclosure=section('Accessibility');toggles(disclosure,accessibility);groupReset(disclosure,'accessibility',accessibility.map(([key])=>key));
      if(site.actions) { const group=siteOptions;for(const [title,fn] of site.actions)action(group,title,()=>fn(api)); }
      const tools=section('Settings');
      toggles(tools,[['updateNotifications','Quiet update notifications']]);
      action(tools,'Export',async()=>{
        const json=JSON.stringify({colorShift:true,schemaVersion:SETTINGS_SCHEMA,...state},null,2);
        try { await navigator.clipboard.writeText(json);notice.textContent='Settings copied.'; } catch { window.prompt('Copy settings JSON',json); }
      });
      action(tools,'Import',()=>{
        const input=window.prompt('Paste ColorShift settings JSON');if(input===null)return;
        try {
          const data=JSON.parse(input);if(!data||data.colorShift!==true||Array.isArray(data))throw Error();
          const schema=Number(data.schemaVersion??SETTINGS_SCHEMA);if(!Number.isInteger(schema)||schema<0||schema>SETTINGS_SCHEMA)throw Error();
          const entries=Object.entries(data).filter(([k])=>Object.hasOwn(defaults,k));
          if(entries.some(([k,v])=>!valid(k,v)))throw Error();
          for(const [key,value] of entries){state[key]=value;write(key,value);}write(SCHEMA_KEY,SETTINGS_SCHEMA);apply();notice.textContent='Settings imported.';
        } catch {notice.textContent='Import failed: invalid ColorShift settings.';}
      });
      action(tools,'Reset defaults',()=>{if(!confirm('Reset ColorShift settings?'))return;for(const [k,v]of Object.entries(defaults)){state[k]=v;write(k,v);}apply();notice.textContent='Settings reset.';});
      const diagnostics=element('details');diagnostics.append(element('summary',{},'About & diagnostics'));
      diagnostics.append(element('pre',{class:'diagnostics-output'},diagnosticText()));
      action(diagnostics,'Scan theme coverage',scanCoverage);
      action(diagnostics,'Copy diagnostics',async()=>{const text=diagnosticText();try{await navigator.clipboard.writeText(text);notice.textContent='Diagnostics copied.';}catch{window.prompt('Copy diagnostics',text);}});tools.append(diagnostics);
      notice=element('p',{role:'status','aria-live':'polite',class:'notice'});panel.append(notice,element('footer',{},'Drag to position · Tap outside to close · v'+version));
      for(const group of panel.querySelectorAll(':scope > .settings-group')){
        const content=element('div',{class:'section-content'});
        for(const child of [...group.children])if(child.tagName!=='SUMMARY')content.append(child);
        group.append(content);
      }
      root.append(fab,panel);document.body.append(host);
      launcher=declareLauncher(host,()=>[fab,panel],{owner:'ExtraPotions',id:'colorshift-'+site.name.toLowerCase(),priority:100,preferredPosition:'right-bottom'});
      style=element('style',{id:'colorshift-site-style'});document.head.append(style);
      siteSheet=new CSSStyleSheet();document.adoptedStyleSheets=[...document.adoptedStyleSheets,siteSheet];
      let drag=null,suppress=false;
      fab.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={y:e.clientY,top:fab.getBoundingClientRect().top,moved:false};fab.setPointerCapture(e.pointerId);});
      fab.addEventListener('pointermove',e=>{if(!drag)return;const dy=e.clientY-drag.y;if(Math.abs(dy)>5)drag.moved=true;if(drag.moved){state.fabTop=Math.max(8,Math.min(innerHeight-56,drag.top+dy));position();}});
      fab.addEventListener('pointerup',()=>{if(drag?.moved){write('fabTop',state.fabTop);suppress=true;}drag=null;});
      fab.addEventListener('pointercancel',()=>{drag=null;});
      fab.addEventListener('click',()=>{if(suppress){suppress=false;return;}setOpen(!open);});
      document.addEventListener('keydown',e=>{
        if(e.key==='Escape'&&open){e.preventDefault();setOpen(false);}
      });
      panel.addEventListener('keydown',e=>{
        if(e.key!=='Tab')return;
        const items=[...panel.querySelectorAll('button,select,input,summary')].filter(el=>el.getClientRects().length);
        const first=items[0],last=items.at(-1);
        if(e.shiftKey&&root.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&root.activeElement===last){e.preventDefault();first.focus();}
      });
      document.addEventListener('pointerdown',e=>{if(open&&!e.composedPath().includes(host))setOpen(false);});
      const menuResizeObserver=new ResizeObserver(()=>{if(open)position();});
      menuResizeObserver.observe(panel);
      panel.addEventListener('toggle',()=>{if(open)position();},true);
      window.visualViewport?.addEventListener('resize',position,{passive:true});
      window.visualViewport?.addEventListener('scroll',position,{passive:true});
      window.addEventListener('resize',position);motion.addEventListener('change',apply);contrast.addEventListener('change',apply);systemTheme.addEventListener('change',()=>{if(state.palette==='system'||state.palette==='original')apply();});
      try {if(typeof GM_registerMenuCommand==='function')GM_registerMenuCommand('ColorShift settings',()=>setOpen(true));}catch(error){console.warn('ColorShift: extension menu registration unavailable',error);}
      site.mount?.(api);apply();updatePage();
      const pending=new Set();
      function queue(node){if(!node)return;if(node.nodeType!==1&&node.nodeType!==9)node=node.parentElement;if(!node||node===host||node===style||host.contains(node))return;pending.add(node);if(pending.size>40){pending.clear();pending.add(document);} }
      const observer=new MutationObserver(records=>{
        for(const record of records){
          if(record.target===style||record.target===host)continue;
          if(record.type==='childList'){
            for(const node of record.addedNodes)queue(node);
            if(record.removedNodes.length)queue(record.target);
          }else queue(record.target);
        }
        if(!pending.size||frame)return;
        frame=setTimeout(()=>{frame=0;
          if(!host.isConnected)document.body.append(host);
          if(!style.isConnected)document.head.append(style);
          if(!document.adoptedStyleSheets.includes(siteSheet))document.adoptedStyleSheets=[...document.adoptedStyleSheets,siteSheet];
          const roots=[...pending].filter(node=>node.isConnected);pending.clear();
          const minimal=roots.filter(node=>!roots.some(other=>other!==node&&other.contains(node)));
          if(minimal.length)updatePage(minimal);position();
        },80);
      });
      observer.observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class','title','disabled','data-stock','style']});
      window.addEventListener('pageshow',()=>{updatePage();position();});
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
    return api;
  }
  const UI_CSS=`
    :host{all:initial;font:12px/1.4 Arial,sans-serif;color:#f5f5f5}*,*::before,*::after{box-sizing:border-box}[hidden]{display:none!important}
    button,input,select{font:inherit;color:inherit}button,summary{cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:2px solid #9ad8f8;outline-offset:2px}
    .color-picker{display:inline-flex;align-items:center;gap:6px;min-width:0}.color-dot{width:12px;height:12px;flex:0 0 12px;border-radius:50%;border:1px solid #888;background:var(--preview-color)}
    @supports (appearance:base-select){
      .color-select,.color-select::picker(select){appearance:base-select}
      .color-select::picker(select){background:var(--menu-control);color:var(--menu-text);border:1px solid var(--menu-border);border-radius:8px;max-height:60dvh;overflow:auto}
      .color-select option{display:flex;align-items:center;gap:8px;padding:6px 10px}
      .color-select option::before{content:'';width:12px;height:12px;border-radius:50%;border:1px solid #888;background:var(--option-color);flex-shrink:0}
      .color-select option:checked{font-weight:bold}.color-select option:hover,.color-select option:focus{background:var(--menu-bg)}
    }
    .fab{position:fixed;right:16px;width:48px;height:48px;padding:0;z-index:2147483647;border:1px solid #ffffff55;border-radius:13px;background:#121722;box-shadow:0 5px 18px #0006;touch-action:none;overflow:hidden;pointer-events:auto}.fab img{width:100%;height:100%;object-fit:contain;pointer-events:none}.fab:hover{box-shadow:0 0 0 2px #9ad8f8}
    .panel{position:fixed;right:16px;z-index:2147483647;width:min(300px,calc(100vw - 24px));overflow:auto;overscroll-behavior:contain;background:#333;color:#f5f5f5;border:1px solid #777;border-radius:16px;padding:8px;box-shadow:0 12px 30px #0006;pointer-events:auto;font:12px/1.4 Arial,sans-serif}
    header{display:flex;gap:10px;align-items:center;padding:2px 2px 6px}.header-icon{width:32px;height:32px;border-radius:8px}h2{font-size:15px;margin:0;font-weight:800}header p{margin:2px 0 0;font-size:11px;color:#eee}
    .section-content{overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--menu-accent) var(--menu-surface)}.bottom-sheet{border-radius:20px 20px 12px 12px}.panel>header,.settings-group>summary{flex-shrink:0}
    .settings-group{border:1px solid #777;border-radius:9px;background:#444;margin-top:4px;overflow:hidden}.settings-group>summary{list-style:none;min-height:32px;padding:7px 8px;font-weight:700;display:flex;align-items:center;justify-content:space-between}.settings-group>summary::-webkit-details-marker{display:none}.settings-group>summary::after{content:'›';font-size:16px;line-height:1}.settings-group[open]>summary::after{transform:rotate(90deg)}.settings-group[open]>summary{border-bottom:1px solid #666}
    .row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px;padding:6px 8px}.row+.row{border-top:1px solid #ffffff18}.row>span{min-width:0}.row small{display:block;color:#ddd;font-size:10px;line-height:1.4;margin-top:3px}.row select{flex:0 0 108px;width:108px;min-width:0;min-height:32px;background:#292929;border:1px solid #999;border-radius:7px;padding:4px}
    .section-content>button,.settings-group details>button{margin:5px 0 6px 8px;border:1px solid #888;background:#292929;border-radius:7px;padding:6px 8px;min-height:32px}.section-content>button:hover{background:#555}.section-reset{font-size:11px}
    .switch{flex:0 0 44px;position:relative;width:44px;height:44px;padding:0;border:0;background:transparent}.switch::before{content:'';position:absolute;inset:12px 4px;border:1px solid #ccc;border-radius:999px;background:#626873}.switch span{position:absolute;top:15px;left:7px;width:14px;height:14px;border-radius:50%;background:white;transition:transform .15s}.switch[aria-checked=true]::before{background:#287aa3}.switch[aria-checked=true] span{transform:translateX(16px)}
    .settings-group details{padding:6px 8px;border-top:1px solid #666}.settings-group details>summary{min-height:32px;padding:6px 0}.diagnostics-output{white-space:pre-wrap;overflow-wrap:anywhere;padding:7px;background:#252525;border-radius:6px;font:11px/1.4 monospace}
    .notice:empty{display:none}.notice{padding:5px 2px;font-size:11px;margin:0}footer{padding:6px 2px 0;font-size:10px;color:#ddd}
    :host([data-motion]) *{transition:none!important;animation:none!important}:host([data-contrast]) .panel,:host([data-contrast]) .settings-group{background:#000;color:white;border-color:white}:host([data-contrast]) .switch::before{border:2px solid white;background:black}:host([data-contrast]) .switch[aria-checked=true]::before{background:white}:host([data-contrast]) .switch[aria-checked=true] span{background:black}
    @media(forced-colors:active){.switch::before{forced-color-adjust:none;border-color:ButtonText;background:Canvas}.switch span{background:ButtonText}.switch[aria-checked=true]::before{background:Highlight}.switch[aria-checked=true] span{background:HighlightText}}
    .panel{background:var(--menu-bg);color:var(--menu-text);border-color:var(--menu-border)}header{gap:8px}header>div{flex:1;min-width:0}header p,.row small,footer{color:var(--menu-muted)}
    .menu-close{flex:0 0 32px;width:32px;height:32px;align-self:flex-start;padding:0;border:0;border-radius:6px;background:transparent;color:var(--menu-text);font-size:22px;line-height:1}.menu-close:hover{background:var(--menu-surface)}
    .settings-group{background:var(--menu-surface);border-color:var(--menu-border)}.settings-group[open]>summary,.settings-group details{border-color:var(--menu-border)}.row select,.section-content>button,.settings-group details>button,.diagnostics-output{background:var(--menu-control);color:var(--menu-text);border-color:var(--menu-border)}.section-content>button:hover{background:var(--menu-bg)}
    button:focus-visible,select:focus-visible,summary:focus-visible{outline-color:var(--menu-accent)}.switch[aria-checked=true]::before{background:var(--menu-accent)}.switch[aria-checked=true] span{background:var(--menu-control)}
  `;
  return {version,start};
})();

/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'scryfall';
  const icons = {"scryfall":"data:image/png;base64,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"};
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
        button[data-popover-trigger] svg.text-primary{color:${accent}!important}
        div.text-xs.text-primary{color:#eee!important}
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
        'div.h-12.w-24:has(>button.h-full.w-full:only-child){width:72px!important;height:36px!important}'+
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

})();
