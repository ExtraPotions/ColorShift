// ==UserScript==
// @name           ColorShift for Card Kingdom
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.1.0
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           data:image/png;base64,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
// @match          *://cardkingdom.com/*
// @match          *://www.cardkingdom.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-cardkingdom.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-cardkingdom.user.js
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
            {
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
      if(colors[2])backgrounds.push("#"+rgb(colors[2]).map(v=>Math.round(v+(255-v)*.06).toString(16).padStart(2,"0")).join(""));
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
      if(surfacePalette)surfacePalette.push(raised);
      if(!surfacePalette)for(const node of document.querySelectorAll('[data-colorshift-surface],[data-colorshift-text]')){node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');}
      const css=(site.anywhere&&!state.enabled)?'':site.css(effectiveState,colors,accent)+
        (surfacePalette?`[data-colorshift-surface="surface"]{background-color:${colors[2]}!important}[data-colorshift-surface="header"]{background-color:${colors[3]}!important}[data-colorshift-text]{color:#eee!important}${'[data-colorshift-surface=page]{background-color:'+colors[1]+'!important}[data-colorshift-surface=raised]{background-color:rgb('+raised.join(',')+')!important}article[data-colorshift-surface],section[data-colorshift-surface],[class*=card i][data-colorshift-surface],[class*=panel i][data-colorshift-surface]{box-shadow:inset 0 0 0 1px #ffffff18,0 2px 6px #0002!important}'}`:'')+
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
  const siteId = 'cardkingdom';
  const icons = {"cardkingdom":"data:image/png;base64,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"};
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
