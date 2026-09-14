// ==UserScript==
// @name           ColorShift Anywhere
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.2.6
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           data:image/png;base64,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
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-anywhere.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-anywhere.user.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @match          http://*/*
// @match          https://*/*
// @noframes       
// ==/UserScript==
(function(){
/* ColorShift: shared settings, lifecycle and isolated UI. CC-BY-NC-4.0 */
var ColorShift = (() => {
  'use strict';
  const version = '0.2.6';
  const SETTINGS_SCHEMA = 2;
  const SCHEMA_KEY = 'settingsSchema';
  const palettes = {
    system: ['System'], original: ['Original'], lightGray: ['Graphite','#3f3f3c','#4a4a46','#333330'],
    darkGray: ['Charcoal','#252522','#2a2a28','#1c1c1a'],
    navy: ['Midnight','#1a2332','#243044','#141c28'], black: ['Obsidian','#0a0a0a','#111111','#050505'],
    fireRed: ['Ember','#211516','#382123','#481f22'],
    leafGreen: ['Pine','#131d17','#213329','#24442f'],
    heartGold: ['Cinder','#211d13','#39301d','#493a1d'],
    pride: ['Pride','#19171f','#28242f','#211d29']
  };
  const accents = {site:['Site default',null],blue:['Sky','#69bdf2'],green:['Mint','#63d99a'],amber:['Amber','#e8b94f'],violet:['Amethyst','#b487ed'],rose:['Blush','#ed9fba'],teal:['Aqua','#61d7ca'],coral:['Coral','#f29a82'],silver:['Silver','#c6d0dc'],pride:['Pride','#f2a6c4']};
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
  function coordinateCompanionControls(anchor, registered = []) {
    const candidates = new Set([...document.querySelectorAll('[data-userscript-launcher="userscript-launcher-v1"],[data-colorshift-control="secondary"],#pfh-fab,.pfh-fab'), ...registered]);
    const anchorNode=anchor.getRootNode().host||anchor;
    const anchorPriority=Number(anchorNode.dataset.launcherPriority||100);
    const primary = [anchor];
    for (const host of document.querySelectorAll('[data-colorshift-dock-root]')) {
      const control = host.shadowRoot?.querySelector('[data-colorshift-control="primary"]');
      if (control && control !== anchor) primary.push(control);
    }
    const occupied = primary.map(el=>el.getBoundingClientRect()).filter(r=>r.width&&r.height);
    const origin=anchor.getBoundingClientRect();
    const overlaps=r=>occupied.some(o=>r.left<o.right+8&&r.right>o.left-8&&r.top<o.bottom+8&&r.bottom>o.top-8);
    for (const el of candidates) {
      if (!el.isConnected || el===anchorNode || primary.includes(el) || el.dataset.colorshiftControl==='primary' || Number(el.dataset.launcherPriority||0)>=anchorPriority) continue;
      const ownerRoot=el.getRootNode().host;
      if(ownerRoot?.dataset.colorshiftDockRoot==='primary')continue;
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
    const defaults={palette:'system',accent:'site',intensity:'normal',fabTop:null,updateNotifications:true};
    for(const [key] of [...shared,...site.options,...accessibility]) defaults[key]=false;
    if(site.anywhere){defaults.enabled=true;defaults.palette='original';}
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
      if(storedSchema>0) { const savedFabTop=state.fabTop; for(const [key,value] of Object.entries(defaults)) state[key]=value; state.fabTop=savedFabTop; if(site.anywhere) state.enabled=true; }
      for(const [key,value] of Object.entries(state)) write(key,value);
      write(SCHEMA_KEY,SETTINGS_SCHEMA);
    }
    let host,root,fab,panel,notice,updateToast,style,siteSheet,launcher,appearanceSummary,open=false,frame=0,lastProcessed=0;
    const diagnosticErrors=[];
    const metrics={updates:0,inspected:0,styles:0};let updateRoots=[document],lastCSS='';
    function query(selector){const found=new Set();for(const node of updateRoots){if(node.nodeType===1){if(node.matches(selector))found.add(node);let parent=node.parentElement?.closest(selector);while(parent){found.add(parent);parent=parent.parentElement?.closest(selector);}}for(const item of node.querySelectorAll(selector))found.add(item);}metrics.inspected+=found.size;return [...found];}
    function updatePage(roots=[document]){updateRoots=roots;metrics.updates++;try{site.update?.(api);repairSurfaces();}catch(error){diagnosticErrors.push(String(error?.message||error));if(diagnosticErrors.length>10)diagnosticErrors.shift();}finally{updateRoots=[document];}lastProcessed=Date.now();refreshDiagnostics();}
    let surfacePalette=null;
    let coverageReport='Theme coverage: not scanned. Use Scan theme coverage after the page loads.';
    let fullCoverageReport=coverageReport;
    const protectedSurfaces='[class*="esgst-"],[class*="badge" i],[class*="chip" i],[class*="rating" i],[class*="status" i],[role="progressbar"],[data-colorshift-preserve],svg,canvas,picture,[data-userscript-launcher]';
    const parseColor=value=>{const n=value.match(/[\d.]+/g)?.map(Number);return n&&n.length>=3?n:null;};
    const chroma=c=>Math.max(...c.slice(0,3))-Math.min(...c.slice(0,3));
    const neutral=c=>c&&chroma(c)<16;
    // Modern sites often tint their neutral containers blue/green. Treat low-chroma
    // dark and light tints as surfaces while leaving saturated semantic colours alone.
    const neutralSurface=c=>c&&(neutral(c)||chroma(c)<=42);
    const ownedTextStyles=new WeakMap();
    function setReadableText(node,value){
      if(value)node.style.setProperty('--colorshift-readable-text',value);
      else node.style.removeProperty('--colorshift-readable-text');
      ownedTextStyles.set(node,node.getAttribute('style'));
    }
    const luminance=c=>c.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
    // Only single, opaque, nearly uniform neutral gradients are layout surfaces.
    function neutralGradient(image){
      if(!image.startsWith('linear-gradient('))return false;
      const stops=image.match(/rgba?\([^)]+\)/g)||[];
      const rest=image.replace(/rgba?\([^)]+\)/g,'').replace(/^linear-gradient\(/,'').replace(/\)$/,'');
      if(stops.length<2||/[()]/.test(rest)||/[^\d\s.,%pxdegtoleftrighbm-]/.test(rest))return false;
      const colors=stops.map(parseColor);
      return colors.every(c=>neutral(c)&&(c[3]??1)===1)&&Math.max(...colors.flatMap(c=>c.slice(0,3)))-Math.min(...colors.flatMap(c=>c.slice(0,3)))<=24;
    }
    function repairSurfaces(){
      if(!surfacePalette)return;
      const nodes=query('main,header,footer,nav,aside,section,article,div,form,ul,li,p,span,a,button,h1,h2,h3,h4,label');
      // Only neutral, opaque surfaces without artwork are eligible. Semantic colours stay owned by the site.
      for(const node of nodes){
        node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');setReadableText(node,null);node.removeAttribute('data-colorshift-gradient');
        if(node===host||node.closest(protectedSurfaces))continue;
        const computed=getComputedStyle(node),bg=parseColor(computed.backgroundColor),gradient=neutralGradient(computed.backgroundImage);
        if(computed.display==='none'||(computed.backgroundImage!=='none'&&!gradient))continue;
        // Separate transparent product metadata from its repaired image card.
        if(node.matches('div[class*="metadata" i]')&&(bg?.[3]===0)&&node.parentElement?.matches('[data-colorshift-surface]')&&node.parentElement.querySelector('img')){
          node.dataset.colorshiftSurface='details';
        }
        const layoutSurface=node.matches('main,header,footer,nav,aside,section,article,div,form,ul,li,h1,h2,h3,h4')||
          (node.matches('span,label,a')&&['block','inline-block','flex','inline-flex','grid','inline-grid'].includes(computed.display));
        if((gradient||(neutralSurface(bg)&&(bg[3]??1)===1))&&layoutSurface){
          const rect=node.getBoundingClientRect();
          if(rect.width>=80&&rect.height>=24&&(gradient||!surfacePalette.some(c=>c.every((v,i)=>v===bg[i])))){
            let level=node.closest('header,footer,nav')?'header':'surface';
            {
              if(node.matches('main'))level='page';
              else if(level==='surface'&&node.parentElement?.closest('[data-colorshift-surface="surface"],[data-colorshift-surface="raised"]'))level='raised';
            }
            node.dataset.colorshiftSurface=level;
            if(gradient)node.dataset.colorshiftGradient='true';
          }
        }
        if(![...node.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;
        const fg=parseColor(computed.color);if(!fg)continue;
        let parent=node,back=null;
        while(parent){const style=getComputedStyle(parent);if(style.backgroundImage!=='none')break;const color=parseColor(style.backgroundColor);if(color&&(color[3]??1)===1){back=color;break;}parent=parent.parentElement;}
        if(back&&(neutral(fg)||neutralSurface(back)||(chroma(fg)<=64&&chroma(back)<=32)||node.matches('a')||surfacePalette.some(c=>c.every((v,i)=>v===back[i])))){
          const a=luminance(fg),b=luminance(back);
          if((Math.max(a,b)+.05)/(Math.min(a,b)+.05)<4.5){
            if(neutral(fg)||node.matches('a'))node.dataset.colorshiftText=b>.179?'dark':'light';
            else {
              // Keep semantic hues, moving toward the more readable endpoint.
              const target=b>.179?0:255;let adjusted=fg.slice(0,3);
              for(let step=1;step<=100;step++){adjusted=fg.slice(0,3).map(v=>Math.round(v+(target-v)*step/100));const l=luminance(adjusted);if((Math.max(l,b)+.05)/(Math.min(l,b)+.05)>=4.5)break;}
              setReadableText(node,'rgb('+adjusted.join(',')+')');node.dataset.colorshiftText='hue';
            }
          }
        }
      }
      repairImageBlending();
    }
    function repairImageBlending(){
      for(const img of query('img')){
        img.removeAttribute('data-colorshift-image');
        if(img.closest(protectedSurfaces.split(',').filter(selector=>selector!=='picture').join(','))||!img.closest('[data-colorshift-surface]')||getComputedStyle(img).mixBlendMode!=='multiply')continue;
        let parent=img.parentElement;
        while(parent){
          const style=getComputedStyle(parent),bg=parseColor(style.backgroundColor);
          if(style.backgroundImage!=='none')break;
          if(bg&&(bg[3]??1)===1){if(surfacePalette.some(c=>c.every((v,i)=>v===bg[i])))img.dataset.colorshiftImage='normal';break;}
          parent=parent.parentElement;
        }
      }
    }
    function visuallyHidden(node){
      for(let current=node;current&&current!==document.documentElement;current=current.parentElement){
        const style=getComputedStyle(current),rect=current.getBoundingClientRect();
        if(style.display==='none'||style.visibility==='hidden'||style.visibility==='collapse'||Number(style.opacity)===0)return true;
        const clip=style.clip.match(/^rect\(([^)]+)\)$/);
        if(clip){const edges=clip[1].split(/[,\s]+/).filter(Boolean).map(parseFloat);if(edges.length===4&&edges.every(Number.isFinite)&&(edges[2]<=edges[0]||edges[1]<=edges[3]))return true;}
        if(/^inset\(50%(?:\s|\))/.test(style.clipPath))return true;
        if(rect.width<=1&&rect.height<=1&&['hidden','clip'].includes(style.overflow))return true;
      }
      return false;
    }
    function scanCoverage(){
      if(!surfacePalette){coverageReport='Theme coverage: Original mode; no theme audit needed.';refreshDiagnostics();return;}
      const findings=[],visualReview=[];let scanned=0,unknown=0,protectedCount=0;
      const nodes=document.querySelectorAll('main,header,footer,nav,section,article,div,p,span,a,button,input,select,textarea,label,h1,h2,h3,h4');
      for(const node of nodes){
        if(node===host||!node.getClientRects().length||visuallyHidden(node))continue;
        if(node.closest(protectedSurfaces)){protectedCount++;continue;}
        if(scanned>=5000)break;scanned++;
        const style=getComputedStyle(node);if(style.visibility==='hidden'||style.opacity==='0')continue;
        const label=node.tagName.toLowerCase()+(node.id?'#'+node.id:node.classList.length?'.'+[...node.classList].slice(0,2).join('.'):'');
        const bg=parseColor(style.backgroundColor),rect=node.getBoundingClientRect();
        if(style.backgroundImage!=='none'){unknown++;if(visualReview.length<100)visualReview.push('Visual review: '+label+' (background image or gradient)');continue;}
        if(neutralSurface(bg)&&(bg[3]??1)===1&&rect.width>=80&&rect.height>=24&&!surfacePalette.some(c=>c.every((v,i)=>v===bg[i])))findings.push('Surface outside palette: '+label);
        if(node.matches(':disabled,[aria-disabled="true"]'))continue;
        if(!node.matches('input,select,textarea')&&![...node.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;
        let parent=node,back=null;
        while(parent){const s=getComputedStyle(parent),c=parseColor(s.backgroundColor);if(s.backgroundImage!=='none'||Number(s.opacity)<1)break;if(c&&(c[3]??1)>0){if((c[3]??1)===1)back=c;break;}parent=parent.parentElement;}
        const fg=parseColor(style.color);if(!back||!fg||(fg[3]??1)!==1){unknown++;if(visualReview.length<100)visualReview.push('Visual review: '+label+' (unresolved colors)');continue;}
        const a=luminance(fg),b=luminance(back),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
        const large=parseFloat(style.fontSize)>=24||(parseFloat(style.fontSize)>=18.66&&parseInt(style.fontWeight)>=700);
        if(ratio<(large?3:4.5))findings.push('Low contrast '+ratio.toFixed(2)+': '+label);
      }
      const header=['Theme coverage ('+new Date().toISOString()+'): '+scanned+' elements checked',findings.length+' potential issues · '+unknown+' require visual review · '+protectedCount+' protected elements skipped',...(scanned>=5000?['Scan limited to 5000 elements.']:[])];
      fullCoverageReport=[...header,'','Potential issues (complete):',...(findings.length?findings:['None recorded']),'','Visual-review candidates (complete scan, capped at 100):',...(visualReview.length?visualReview:['None recorded'])].join('\n');
      coverageReport=[...header,...findings.slice(0,20),...(findings.length>20?['Additional findings omitted.']:[]),'','Top visual-review candidates (up to 100):',...(visualReview.length?visualReview:['None recorded'])].join('\n');
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
    function setOpen(value,focus=true) {
      open=value; panel.hidden=!value; fab.setAttribute('aria-expanded',String(value));
      if(value) { position();refreshDiagnostics();if(focus)panel.querySelector('.menu-close').focus(); }
      else fab.focus({preventScroll:true});
    }
    let dockCandidates=[],dockScanAt=0;
    function floatingDock(left,upper,width,height){
      if(!site.anywhere||state.fabTop!==null)return null;
      if(performance.now()-dockScanAt>500||!dockCandidates.length){
        dockScanAt=performance.now();
        dockCandidates=[...document.querySelectorAll('button,a[role="button"],[data-userscript-launcher],iframe')].slice(0,300);
        for(const node of [...dockCandidates])if(node.shadowRoot)dockCandidates.push(...node.shadowRoot.querySelectorAll('button,[role="button"]'));
      }
      const boxes=[];
      for(const node of dockCandidates){
        if(!node.isConnected||node===host||node.getRootNode()===root||node.closest?.('#colorshift-root'))continue;
        const r=node.getBoundingClientRect(),style=getComputedStyle(node);
        if(r.width<24||r.height<24||r.width>120||r.height>120||style.visibility==='hidden'||style.display==='none'||Number(style.opacity)===0)continue;
        if(r.left<left||r.right>left+width||r.top<upper||r.bottom>upper+height)continue;
        if(r.left>left+80&&r.right<left+width-80)continue;
        let parent=node,floating=false;
        for(let i=0;parent&&i<8;i++,parent=parent.parentElement||parent.getRootNode()?.host){if(getComputedStyle(parent).position==='fixed'){floating=true;break;}}
        if(floating)boxes.push(r);
      }
      boxes.sort((a,b)=>Math.hypot(left+width-a.right,upper+height-a.bottom)-Math.hypot(left+width-b.right,upper+height-b.bottom));
      for(const r of boxes){
        const x=Math.max(left+8,Math.min(r.left+(r.width-48)/2,left+width-56));
        for(const y of [r.top-56,r.bottom+8]){
          if(y<upper+8||y+48>upper+height-8)continue;
          if(boxes.some(other=>other!==r&&x<other.right+8&&x+48>other.left-8&&y<other.bottom+8&&y+48>other.top-8))continue;
          return {x,y};
        }
      }
      return null;
    }
    function position() {
      const viewport=window.visualViewport;
      const left=viewport?.offsetLeft||0,upper=viewport?.offsetTop||0;
      const width=viewport?.width||innerWidth,height=viewport?.height||innerHeight;
      const margin=Math.min(12,width/4,height/4);
      const dock=floatingDock(left,upper,width,height);
      const top=dock?.y??Math.max(upper+8,Math.min(upper+height-56,state.fabTop ?? upper+height-64));
      fab.style.top=top+'px';
      fab.style.right='auto';fab.style.left=(dock?.x??Math.max(left,left+width-64))+'px';
      panel.style.boxSizing='border-box';
      const mobile=width<=480;panel.classList.toggle('bottom-sheet',mobile);
      panel.style.width=(mobile?Math.max(0,width-2*margin):Math.min(280,Math.max(0,width-2*margin)))+'px';
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
      if(!site.anywhere)coordinateCompanionControls(fab);
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
      if(appearanceSummary) appearanceSummary.textContent=`${palettes[effectiveState.palette][0]} · ${accents[state.accent][0]}`;
      const enabled=site.anywhere?state.enabled:effectiveState.palette!=='original';
      fab.dataset.themeEnabled=String(enabled);
      const footerStatus=panel.querySelector('.footer-status');if(footerStatus)footerStatus.textContent=site.anywhere?(enabled?'Enabled on this site':'Disabled on this site'):(enabled?'Theme active':'Original appearance');
      fab.setAttribute('aria-description',enabled?'ColorShift enabled on this site':'ColorShift disabled on this site');
      surfacePalette=effectiveState.palette==='original'?null:colors.slice(1).map(hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16)));
      const raised=surfacePalette?surfacePalette[1].map(v=>Math.round(v+(255-v)*.06)):null;
      if(surfacePalette)surfacePalette.push(raised);
      if(!surfacePalette)for(const node of document.querySelectorAll('[data-colorshift-surface],[data-colorshift-text],[data-colorshift-image]')){node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');node.style.removeProperty('--colorshift-readable-text');node.removeAttribute('data-colorshift-gradient');node.removeAttribute('data-colorshift-image');}
      const css=(site.anywhere&&!state.enabled)?'':site.css(effectiveState,colors,accent)+
        (surfacePalette?`:is(button,a[role="button"],a.btn,a.btn-sm,a.button,input[type="submit"]):not([data-colorshift-preserve]){background-color:${colors[3]}!important;background-image:none!important;color:#fff!important;border-color:#888!important;text-shadow:none!important}`:'')+
        (surfacePalette&&(state.palette==='pride'||state.accent==='pride')?'[data-colorshift-surface=header]{border-image:linear-gradient(90deg,#ef6572,#f4ad62,#ead96c,#70cd91,#72b6f1,#bd94ea) 1;border-bottom:3px solid transparent!important}':'')+
        (surfacePalette?`[data-colorshift-surface=details]{background-color:${colors[3]}!important;box-shadow:inset 0 1px 0 #ffffff30!important}[data-colorshift-image=normal]{mix-blend-mode:normal!important}[data-colorshift-gradient]{background-image:none!important}[data-colorshift-surface="surface"]{background-color:${colors[2]}!important}[data-colorshift-surface="header"]{background-color:${colors[3]}!important}[data-colorshift-text][data-colorshift-text][data-colorshift-text]{color:#eee!important}[data-colorshift-text=hue][data-colorshift-text][data-colorshift-text]{color:var(--colorshift-readable-text)!important}[data-colorshift-text=dark][data-colorshift-text][data-colorshift-text]{color:#000!important}[data-colorshift-text=light][data-colorshift-text][data-colorshift-text]{color:#fff!important}${'[data-colorshift-surface=page]{background-color:'+colors[1]+'!important}[data-colorshift-surface=raised]{background-color:rgb('+raised.join(',')+')!important}article[data-colorshift-surface],section[data-colorshift-surface],[class*=card i][data-colorshift-surface],[class*=panel i][data-colorshift-surface]{box-shadow:inset 0 0 0 1px #ffffff18,0 2px 6px #0002!important}'}`:'')+
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
            const chooser=control.closest('.theme-chooser');if(chooser){const summary=chooser.querySelector('summary');summary.textContent=control.selectedOptions[0].textContent;for(const choice of chooser.querySelectorAll('[data-choice]'))choice.setAttribute('aria-pressed',String(choice.dataset.choice===state[key]));}
          }
        }
        else control.setAttribute('aria-checked',String(state[key]));
      }
      host.toggleAttribute('data-pride',state.palette==='pride'||state.accent==='pride');
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
      host.removeAttribute('data-update-available');fab.title='ColorShift for '+site.name;if(updateToast)updateToast.hidden=true;
      if(!state.updateNotifications||!newer(latest,version))return;
      host.dataset.updateAvailable=latest;fab.title='ColorShift '+latest+' for '+site.name+' is available';const message='Update available: '+latest+' — refreshed themes and accents, compact grids, improved diagnostics, and safer site coverage.';notice.textContent=message;if(updateToast){updateToast.textContent=message;updateToast.hidden=false;}
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
      palette:'Choose the page mood. System follows your device, while Original keeps native site colours.',
      accent:'Choose the highlight colour used for links, focus rings, controls, and menu emphasis.',
      brighterLinks:'Use brighter blue links throughout the page.',hideAds:'Hide recognised advertising and promotional blocks.',
      dense:'Reduce spacing between cards or products.',compactGrids:'Reduce gaps between grid items while preserving the page layout.',hideSoldOut:'Hide products identified as unavailable.',compactPrices:'Reduce the size and spacing of prices.',alwaysChips:'Keep product labels visible without hovering.',
      dimWarnings:'Dim content warnings; hover or focus to reveal them.',hideEntered:'Hide giveaways you have already entered.',hideEnded:'Hide giveaways marked as ended.',softHideFeatured:'Collapse and dim pinned content; hover or focus to expand it.',highContrastEnter:'Make entry buttons easier to identify.',
      compactListings:'Reduce spacing in seller or condition rows.',stickyFilters:'Keep search filters visible while scrolling.',hideMerch:'Hide product recommendation carousels.',denseBooks:'Reduce spacing in book lists.',compactReviews:'Reduce review spacing.',hideRecommendations:'Hide recognised recommendation sections.',wideReading:'Allow a wider reading column.',focusLyrics:'Centre lyrics with larger text and comfortable line spacing.',compactAnnotations:'Reduce spacing around annotations.',dimMedia:'Dim embedded media; hover or focus to restore it.',
      reducedMotion:'Reduce animations and transitions on the page and in the menu.',highContrast:'Use stronger contrast on themed page surfaces and controls.',updateNotifications:'Check at most daily for a newer release; never installs automatically.'
    };
    function resetGroup(keys,message){for(const key of keys){state[key]=defaults[key];write(key,defaults[key]);}apply();notice.textContent=message;}
    function groupReset(block,title,keys){const button=action(block,'Reset '+title,()=>resetGroup(keys,title+' reset.'));button.className='section-reset';return button;}
    function infoButton(label,description,input){
      const wrap=element('span',{class:'info-wrap'}),id='info-'+input.getAttribute('data-setting'),button=element('button',{type:'button',class:'info-button','aria-label':'About '+label,'aria-expanded':'false','aria-controls':id},'ⓘ'),tip=element('div',{id,class:'info-tip',popover:'manual',role:'tooltip'},description);
      input.setAttribute('aria-describedby',id);button.setAttribute('aria-describedby',id);
      const hide=()=>{if(tip.matches(':popover-open'))tip.hidePopover();button.setAttribute('aria-expanded','false');};
      const show=()=>{if(tip.matches(':popover-open'))return;tip.showPopover();button.setAttribute('aria-expanded','true');const r=button.getBoundingClientRect(),v=window.visualViewport,x=v?.offsetLeft||0,y=v?.offsetTop||0,w=v?.width||innerWidth,h=v?.height||innerHeight;tip.style.width=Math.min(240,w-16)+'px';tip.style.left=Math.max(x+8,Math.min(r.left,x+w-tip.offsetWidth-8))+'px';tip.style.top=Math.max(y+8,Math.min(r.bottom+5,y+h-tip.offsetHeight-8))+'px';};
      button.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show();});wrap.addEventListener('pointerleave',e=>{if(e.pointerType!=='touch')hide();});button.addEventListener('focus',()=>{if(matchMedia('(hover:hover)').matches)show();});
      let openOnPress=false;button.addEventListener('pointerdown',()=>{openOnPress=button.getAttribute('aria-expanded')==='true';});
      button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(openOnPress||tip.matches(':popover-open'))hide();else show();openOnPress=false;});
      wrap.addEventListener('focusout',e=>{if(!wrap.contains(e.relatedTarget))hide();});wrap.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();hide();button.focus();}});
      document.addEventListener('pointerdown',event=>{if(!event.composedPath().includes(wrap))hide();},true);document.addEventListener('keydown',event=>{if(event.key==='Escape'&&tip.matches(':popover-open')){event.stopPropagation();hide();}},true);
      tip.addEventListener('toggle',()=>button.setAttribute('aria-expanded',String(tip.matches(':popover-open'))));
      panel.addEventListener('scroll',hide,true);window.addEventListener('resize',hide);wrap.append(button,tip);return wrap;
    }
    function row(section,label,control,description) {
      const picker=control.classList.contains('color-picker');
      const input=picker?control.querySelector('select'):control;
      const line=element('div',{class:picker?'row picker-row':'row'}),caption=element('span',{class:'row-caption'},label);
      line.append(caption,control);
      if(description){
        caption.append(infoButton(label,description,input));
      }
      section.append(line);
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
      host=element('div',{id:'colorshift-root','data-colorshift-primary-control':'true','data-colorshift-dock-root':'primary'});
      host.style.cssText='all:initial!important;position:fixed!important;inset:0!important;z-index:2147483647!important;pointer-events:none!important;';
      root=host.attachShadow({mode:'open'});
      const sheet=new CSSStyleSheet();sheet.replaceSync(UI_CSS);root.adoptedStyleSheets=[sheet];
      fab=element('button',{id:'colorshift-fab',type:'button',class:'fab',title:'ColorShift for '+site.name,'aria-label':'ColorShift for '+site.name+' settings','aria-controls':'colorshift-panel','aria-expanded':'false','data-floating-control':'primary'});
      const icon=element('img',{src:site.icon,alt:'',draggable:'false'});fab.append(icon);
      fab.dataset.colorshiftControl='primary';
      panel=element('div',{id:'colorshift-panel',role:'dialog','aria-label':'ColorShift for '+site.name+' settings',class:'panel'});panel.hidden=true;
      const header=element('header'),heading=element('div');heading.append(element('h2',{},site.anywhere?'ColorShift Anywhere':'ColorShift'),element('p',{},site.anywhere?location.hostname:site.name));header.append(element('img',{src:site.icon,alt:'',class:'header-icon'}),heading);const close=action(header,'×',()=>setOpen(false));close.className='menu-close';close.setAttribute('aria-label','Close settings');header.append(close);panel.append(header);
      if(site.anywhere)toggles(panel,[['enabled','Enable on this site']]);
      const appearance=section('Appearance');
      const pickers=element('div',{class:'theme-pickers'});appearance.append(pickers);
      appearanceSummary=element('p',{class:'appearance-summary','aria-live':'polite'});appearance.append(appearanceSummary);
      const sortedChoices=(values,key)=>Object.entries(values).sort(([a,av],[b,bv])=>{if(a==='pride'||b==='pride')return a==='pride'?1:-1;if(['system','original','site'].includes(a)||['system','original','site'].includes(b))return ['system','original','site'].includes(a)?(['system','original','site'].includes(b)?0:-1):1;const rgb=v=>v.slice(1).match(/../g).map(n=>parseInt(n,16));return luminance(rgb(bv[1]))-luminance(rgb(av[1]));});
      for(const [key,label,values] of [['palette','Theme',palettes],['accent','Accent',accents]]) {
        const select=element('select',{'aria-label':label,class:'color-select'});
        for(const [value,[name,color,surface]] of sortedChoices(values,key)){
          const option=element('option',{value},name);
          option.style.setProperty('--option-color',(key==='accent'?(color||site.accent):(surface||'linear-gradient(135deg,#fafafa 50%,#252522 50%)')));
          select.append(option);
        }
        select.addEventListener('change',()=>set(key,select.value));select.setAttribute('data-setting',key);controls.set(key,select);
        const field=element('div',{class:'theme-field'}),picker=element('details',{class:'theme-chooser'}),summary=element('summary',{'aria-label':'Choose '+label.toLowerCase()}),list=element('div',{class:'theme-choices',popover:'manual',role:'group','aria-label':label+' previews'});
        const fieldLabel=element('span',{class:'row-caption'},label);if(descriptions[key])fieldLabel.append(infoButton(label,descriptions[key],select));field.append(fieldLabel);select.style.cssText='position:absolute;width:1px;height:1px;clip-path:inset(50%);overflow:hidden';select.tabIndex=-1;picker.append(summary,select,list);field.append(picker);pickers.append(field);
        const endPreview=()=>apply();
        for(const [value,[name,color,surface]] of Object.entries(values)){
          const choice=element('button',{type:'button','data-choice':value},name);
          const preview=()=>{const saved=state[key];state[key]=value;apply();state[key]=saved;};
          choice.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')preview();});choice.addEventListener('focus',preview);
          choice.addEventListener('click',()=>{set(key,value);picker.open=false;summary.focus();});list.append(choice);
        }
        picker.addEventListener('pointerleave',endPreview);picker.addEventListener('focusout',event=>{if(!picker.contains(event.relatedTarget))endPreview();});
        const placeChoices=()=>{const r=summary.getBoundingClientRect(),v=window.visualViewport,w=v?.width||innerWidth,h=v?.height||innerHeight,x=v?.offsetLeft||0,y=v?.offsetTop||0;const below=y+h-r.bottom-8,above=r.top-y-8,down=below>=Math.min(list.scrollHeight,300)||below>=above;list.style.width=Math.max(110,r.width)+'px';list.style.maxHeight=Math.max(40,Math.min(300,down?below:above))+'px';list.style.left=Math.max(x+8,Math.min(r.left,x+w-list.offsetWidth-8))+'px';list.style.top=(down?r.bottom+4:Math.max(y+8,r.top-list.offsetHeight-4))+'px';};
        picker.addEventListener('toggle',()=>{if(!picker.open){if(list.matches(':popover-open'))list.hidePopover();endPreview();}else{for(const other of pickers.querySelectorAll('details'))if(other!==picker)other.open=false;list.showPopover();placeChoices();}});
        root.addEventListener('pointerdown',event=>{if(!event.composedPath().includes(picker))picker.open=false;});
        window.addEventListener('resize',()=>{if(picker.open)placeChoices();});
        panel.addEventListener('scroll',event=>{if(event.target!==list)picker.open=false;},true);
        picker.addEventListener('keydown',event=>{if(event.key==='Escape'){event.stopPropagation();picker.open=false;endPreview();summary.focus();}});

      }
      const appearanceTools=element('div',{class:'group-tools'});groupReset(appearanceTools,'appearance',['palette','accent','intensity']);action(appearanceTools,'Reset accent',()=>resetGroup(['accent'],'Accent'));appearance.append(appearanceSummary);
      const pageTools=element('div',{class:'group-tools'});groupReset(pageTools,'page settings',shared.map(([key])=>key));const pageOptions=appearance;toggles(pageOptions,shared);const resetTools=element('div',{class:'group-tools reset-tools'});resetTools.append(...appearanceTools.children,...pageTools.children);appearance.append(resetTools);
      const moduleOptions=site.options.filter(([key])=>key!=='enabled');const siteOptions=site.anywhere&&!site.moduleName?null:section(site.anywhere?'Site tweaks':site.name);if(siteOptions){toggles(siteOptions,moduleOptions);groupReset(siteOptions,(site.moduleName||site.name)+' options',moduleOptions.map(([key])=>key));}
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
      const diagnostics=section('About & diagnostics');diagnostics.append(element('p',{},'Run a deeper scan to find contrast issues and surfaces that need visual review.'));
      diagnostics.append(element('pre',{class:'diagnostics-output'},diagnosticText()));
      action(diagnostics,'Scan theme coverage',scanCoverage);
      action(diagnostics,'Copy diagnostics',async()=>{const text=diagnosticText().replace(coverageReport,fullCoverageReport);try{await navigator.clipboard.writeText(text);notice.textContent='Complete diagnostics copied.';}catch{window.prompt('Copy complete diagnostics',text);}});panel.append(diagnostics);
      notice=element('p',{role:'status','aria-live':'polite',class:'notice'});const footer=element('footer',{class:'menu-footer'});footer.append(element('span',{class:'footer-status',role:'status'}),element('a',{href:'https://github.com/ExtraPotions/ColorShift/releases/tag/colorshift-'+version,target:'_blank',rel:'noopener noreferrer','aria-label':'Release notes for ColorShift '+version},'v'+version));panel.append(notice,footer);
      for(const group of panel.querySelectorAll(':scope > .settings-group')){
        const content=element('div',{class:'section-content'});
        for(const child of [...group.children])if(child.tagName!=='SUMMARY')content.append(child);
        group.append(content);
      }
      if(site.anywhere){const toggle=controls.get('enabled'),row=toggle.closest('.row');footer.insertBefore(toggle,footer.lastElementChild);row.remove();}
      const tabs=element('div',{class:'menu-tabs',role:'group','aria-label':'Settings sections'}),groups=[...panel.querySelectorAll(':scope>.settings-group')];panel.insertBefore(tabs,groups[0]);
      for(const group of groups){const summary=group.querySelector(':scope>summary'),button=element('button',{type:'button','aria-expanded':String(group.open)},summary.textContent==='About & diagnostics'?'Diagnostics':summary.textContent);group.classList.add('menu-section');button.addEventListener('click',()=>{const next=!group.open;for(const other of groups)other.open=false;group.open=next;});group.addEventListener('toggle',()=>button.setAttribute('aria-expanded',String(group.open)));tabs.append(button);}
      updateToast=element('div',{class:'update-toast',role:'status','aria-live':'polite'});updateToast.hidden=true;root.append(fab,updateToast,panel);document.body.append(host);
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
      if(site.anywhere)window.addEventListener('scroll',position,{passive:true});
      window.addEventListener('resize',position);motion.addEventListener('change',apply);contrast.addEventListener('change',apply);systemTheme.addEventListener('change',()=>{if(state.palette==='system'||state.palette==='original')apply();});
      try {if(typeof GM_registerMenuCommand==='function')GM_registerMenuCommand('ColorShift settings',()=>setOpen(true));}catch(error){console.warn('ColorShift: extension menu registration unavailable',error);}
      site.mount?.(api);apply();updatePage();
      const pending=new Set();
      function queue(node){if(!node)return;if(node.nodeType!==1&&node.nodeType!==9)node=node.parentElement;if(!node||node===host||node===style||host.contains(node))return;pending.add(node);if(pending.size>40){pending.clear();pending.add(document);} }
      const observer=new MutationObserver(records=>{
        for(const record of records){
          if(record.target===style||record.target===host)continue;
          if(record.type==='attributes'&&record.attributeName==='style'&&ownedTextStyles.has(record.target)&&ownedTextStyles.get(record.target)===record.target.getAttribute('style'))continue;
          if(record.type==='childList'){
            dockScanAt=-Infinity;
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
.panel>header{align-items:center;padding:0 2px 3px;gap:7px}.panel>header .header-icon{width:36px;height:36px;border-radius:8px}.panel>header .menu-close{align-self:center}.menu-footer{gap:4px}.footer-status{flex:1}.panel .menu-footer .switch{height:28px;width:40px;flex-basis:40px}.panel .menu-footer .switch::before{top:4px;bottom:4px;left:3px;right:3px}.panel .menu-footer .switch span{top:6px;left:5px}@media(pointer:coarse){.panel .menu-footer .switch{height:44px;width:44px;flex-basis:44px}.panel .menu-footer .switch::before{top:12px;bottom:12px;left:5px;right:5px}.panel .menu-footer .switch span{top:14px;left:7px}}
    .menu-tabs{display:flex;flex-wrap:wrap;gap:3px;margin-top:4px}.menu-tabs button{flex:1;min-width:0;padding:5px 3px;min-height:30px;border:1px solid var(--menu-border);border-radius:6px;background:var(--menu-surface);color:var(--menu-text);font-size:11px;font-weight:600}.menu-tabs button:hover,.menu-tabs button[aria-expanded=true]{border-color:var(--menu-accent);background:color-mix(in srgb,var(--menu-accent) 15%,var(--menu-surface))}.menu-section:not([open]){display:none}.menu-section>summary{display:none!important}.menu-section[open]{margin-top:4px}.panel .menu-section[open]{box-shadow:none}@media(pointer:coarse){.menu-tabs button{min-height:44px}}
    .menu-tabs,.menu-tabs button,.group-tools,.group-tools button{box-sizing:border-box;max-width:100%}.menu-tabs button,.group-tools button.section-reset{border:1px solid var(--menu-border)!important;border-radius:6px!important;overflow:hidden}.group-tools{display:flex;flex-wrap:wrap;gap:4px;align-items:center}.group-tools button.section-reset{margin:0!important;padding:4px 7px!important;background:var(--menu-control)!important;color:var(--menu-text)!important}.group-tools button.section-reset:hover,.group-tools button.section-reset:focus-visible{border-color:var(--menu-accent)!important;background:var(--menu-surface)!important}
    .menu-tabs{width:100%;min-width:0}.menu-tabs button{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-color:var(--menu-border,#858580)!important}.group-tools{width:100%;min-width:0}.group-tools .section-reset{flex:1 1 0;min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-color:var(--menu-border,#858580)!important}.section-content>button,.settings-group details>button{box-sizing:border-box;max-width:calc(100% - 16px);margin-left:8px;margin-right:8px;border-color:var(--menu-border,#858580)!important;color:var(--menu-text,#f5f5f5);background:var(--menu-control,#292929)}
    :host{all:initial;font:12px/1.4 Arial,sans-serif;color:#f5f5f5}*,*::before,*::after{box-sizing:border-box}[hidden]{display:none!important}
    button,input,select{font:inherit;color:inherit}button,summary{cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:2px solid #9ad8f8;outline-offset:2px}
    :host([data-pride]) .panel>header,:host([data-pride]) .settings-group[open]>summary{background-image:linear-gradient(90deg,#ef6572,#f4ad62,#ead96c,#70cd91,#72b6f1,#bd94ea);background-size:100% 3px;background-repeat:no-repeat;background-position:bottom;padding-bottom:7px}
    :host([data-pride]) .switch[aria-checked=true]::before{background:linear-gradient(90deg,#ef6572,#f4ad62,#ead96c,#70cd91,#72b6f1,#bd94ea)}
    :host([data-pride]){--pride-rainbow:linear-gradient(90deg,#ef6572,#f4ad62,#ead96c,#70cd91,#72b6f1,#bd94ea);--pride-wash:linear-gradient(100deg,#ef657218,#f4ad6218,#ead96c18,#70cd9118,#72b6f118,#bd94ea18)}
    :host([data-pride]) .panel{background-image:var(--pride-wash)}
    :host([data-pride]) .settings-group[open],:host([data-pride]) .settings-group:has(>summary:hover){border-color:transparent;background-image:linear-gradient(var(--menu-surface),var(--menu-surface)),var(--pride-rainbow);background-origin:padding-box,border-box;background-clip:padding-box,border-box;box-shadow:none}
    :host([data-pride]) :is(.row:hover,.row:focus-within,.settings-group>summary:hover,.settings-group>summary:focus-visible,.theme-choices button:hover,.theme-choices button:focus-visible,.theme-choices button[aria-pressed=true],.group-tools button:hover,.menu-close:hover){background-image:var(--pride-wash);box-shadow:inset 0 -2px #ffffff40}
    :host([data-pride]) .theme-choices button[aria-pressed=true]{border-color:transparent;background-image:linear-gradient(var(--menu-control),var(--menu-control)),var(--pride-rainbow);background-origin:padding-box,border-box;background-clip:padding-box,border-box}
    :host([data-pride]) .fab:hover{background-image:var(--pride-rainbow);box-shadow:0 0 0 2px #bd94ea,0 0 16px #72b6f166}
    .row-caption{display:flex;align-items:center;justify-content:space-between;gap:4px;min-width:0}.row>.row-caption{flex:1}.info-wrap{display:inline-flex;flex:none}.info-button{display:grid;place-items:center;width:24px;height:26px;padding:0;border:0;border-radius:5px;background:transparent;color:var(--menu-muted);font-size:15px}.info-button:hover,.info-button:focus-visible{color:var(--menu-text);background:var(--menu-control)}
    .info-tip{position:fixed;inset:auto;margin:0;padding:9px 11px;border:1px solid var(--menu-border);border-radius:8px;background:var(--menu-control);color:var(--menu-text);font:12px/1.45 ui-sans-serif,system-ui,sans-serif;box-shadow:0 8px 24px #0006;overflow-wrap:anywhere;max-height:calc(100dvh - 16px);overflow:auto;pointer-events:auto}
    @media(pointer:coarse){.info-button{width:44px;height:44px}.theme-pickers .theme-field>.row-caption{min-height:44px}}
    .theme-field>.row-caption{display:flex;min-height:26px;margin-bottom:4px}
    .reset-tools{justify-content:flex-end}.reset-tools .section-reset{flex:1}
    .theme-pickers{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;padding:6px}
    .theme-field{min-width:0;font-size:11px;padding:5px;border:1px solid var(--menu-border);border-radius:7px;background:var(--menu-bg);box-shadow:inset 0 1px 0 #ffffff0a}.theme-field:focus-within{border-color:var(--menu-accent)}.theme-field>span{margin-bottom:4px}
    .settings-group .theme-chooser{padding:0;border:0;margin:0}
    .settings-group .theme-chooser>summary{display:flex;align-items:center;gap:5px;min-height:30px;padding:5px;border:1px solid var(--menu-border);border-radius:5px;background:var(--menu-control);list-style:none;font-size:11px}
    .theme-chooser>summary::-webkit-details-marker{display:none}.theme-chooser>summary::after{content:'⌄';margin-left:auto}
    .theme-choices{display:none;position:fixed;inset:auto;margin:0;padding:4px;border:1px solid var(--menu-border);border-radius:6px;background:var(--menu-control);color:var(--menu-text);box-shadow:0 8px 24px #0006;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin}.theme-choices:popover-open{display:grid;gap:2px}.theme-choices button{display:flex;align-items:center;gap:5px;text-align:left;min-height:26px;padding:3px 5px;border:1px solid transparent;border-radius:4px;background:var(--menu-control);color:var(--menu-text);font-size:11px}
    .theme-choices button:is(:hover,:focus-visible,[aria-pressed=true]){border-color:var(--menu-accent)}.theme-help{display:block;padding:0 8px 6px;color:var(--menu-muted);font-size:10px}
    .group-tools{display:flex;align-items:center;justify-content:space-between;gap:6px;padding:2px 6px;font-size:10px;color:var(--menu-muted)}
    .group-tools .section-reset{min-height:26px;padding:3px 5px;border:1px solid var(--menu-border);border-radius:5px;background:var(--menu-control);color:var(--menu-text);font-size:10px}
    @media(pointer:fine){.panel .row{min-height:36px;padding-block:3px}.panel .switch{height:36px}.panel .switch::before{top:8px;bottom:8px}.panel .switch span{top:10px}}
    @media(pointer:coarse){.theme-choices button,.group-tools .section-reset{min-height:44px}}
    .color-picker{display:inline-flex;align-items:center;gap:6px;min-width:0}.color-dot{width:12px;height:12px;flex:0 0 12px;border-radius:50%;border:1px solid #888;background:var(--preview-color)}
    @supports (appearance:base-select){
      .color-select,.color-select::picker(select){appearance:base-select}
      .color-select::picker(select){background:var(--menu-control);color:var(--menu-text);border:1px solid var(--menu-border);border-radius:8px;max-height:60dvh;overflow:auto}
      .color-select option{display:flex;align-items:center;gap:8px;padding:6px 10px}
      .color-select option::before{content:'';width:12px;height:12px;border-radius:50%;border:1px solid #888;background:var(--option-color);flex-shrink:0}
      .color-select option:checked{font-weight:bold}.color-select option:hover,.color-select option:focus{background:var(--menu-bg)}
    }
    .fab{position:fixed;right:16px;width:48px;height:48px;padding:0;z-index:2147483647;border:1px solid #ffffff55;border-radius:13px;background:#121722;box-shadow:0 5px 18px #0006;touch-action:none;overflow:hidden;pointer-events:auto}.fab img{width:100%;height:100%;object-fit:contain;pointer-events:none}.fab:hover,.fab:focus-visible{box-shadow:0 0 0 2px var(--menu-accent),0 0 16px color-mix(in srgb,var(--menu-accent) 45%,transparent)}
    .fab::after{content:'';position:absolute;right:3px;bottom:3px;width:10px;height:10px;border:2px solid #171717;border-radius:50%;background:#ef4444;pointer-events:none}.fab[data-theme-enabled=true]::after{background:#22c55e}
    .update-toast{position:fixed;right:72px;bottom:16px;width:min(300px,calc(100vw - 88px));padding:8px 10px;border:1px solid var(--menu-accent,#5eb0ef);border-radius:9px;background:var(--menu-control,#1c1c1a);color:var(--menu-text,#f5f5f5);font:11px/1.35 ui-sans-serif,system-ui,sans-serif;box-shadow:0 8px 24px #0008;pointer-events:auto}.update-toast[hidden]{display:none}
    .settings-group>summary:hover,.settings-group>summary:focus-visible,.settings-group details>summary:hover,.settings-group details>summary:focus-visible,.row:hover,.row:focus-within{background:color-mix(in srgb,var(--menu-accent) 16%,var(--menu-surface));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--menu-accent) 45%,transparent)}
    .section-content>button:hover,.section-content>button:focus-visible{outline:1px solid var(--menu-accent);outline-offset:-1px}
    .panel{position:fixed;right:16px;z-index:2147483647;width:min(280px,calc(100vw - 24px));overflow:auto;overscroll-behavior:contain;background:#333;color:#f5f5f5;border:1px solid #777;border-radius:14px;padding:10px;box-shadow:0 18px 50px #0007;pointer-events:auto;font:12px/1.4 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
    header{display:flex;gap:10px;align-items:center;padding:0 2px 3px}.header-icon{width:26px;height:26px;flex:none;border-radius:6px}h2{font-size:16px;line-height:1.3;margin:0;font-weight:700}header p{margin:2px 0 0;font-size:11px;color:#eee}
    .section-content{overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--menu-accent) var(--menu-surface)}.bottom-sheet{border-radius:20px 20px 12px 12px}.panel>header,.settings-group>summary{flex-shrink:0}
    .settings-group{border:1px solid #777;border-radius:8px;background:#444;margin-top:4px;overflow:hidden}.settings-group>summary{list-style:none;min-height:28px;padding:3px 8px;font-weight:600;display:flex;align-items:center;justify-content:space-between}.settings-group>summary::-webkit-details-marker{display:none}.settings-group>summary::after{content:'›';font-size:16px;line-height:1}.settings-group[open]>summary::after{transform:rotate(90deg)}.settings-group[open]>summary{border-bottom:1px solid #666}
    .settings-group{transition:border-color .15s ease,box-shadow .15s ease}
    .settings-group[open],.settings-group:has(>summary:hover),.settings-group:has(>summary:focus-visible){border-color:color-mix(in srgb,var(--menu-accent) 65%,var(--menu-border));box-shadow:inset 3px 0 var(--menu-accent),0 0 0 1px color-mix(in srgb,var(--menu-accent) 22%,transparent)}
    .settings-group:has(>summary:hover){box-shadow:inset 3px 0 var(--menu-accent),0 0 14px color-mix(in srgb,var(--menu-accent) 28%,transparent)}
    .settings-group[open]>.section-content{padding:0 2px 2px}
    @media(pointer:coarse){.settings-group>summary{min-height:44px}}
    @media(prefers-reduced-motion:reduce){.settings-group,.switch span{transition:none}}
    .picker-row.row{display:grid;grid-template-columns:minmax(0,1fr) auto}.picker-row>small{grid-column:1 / -1;margin-top:0;overflow-wrap:anywhere}.picker-row .color-picker{max-width:100%}
    .row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px;padding:0 8px}.row+.row{border-top:1px solid #ffffff18}.row>span{min-width:0}.row small{display:block;color:#ddd;font-size:10px;line-height:1.4;margin-top:3px}.row select{flex:0 0 108px;width:108px;min-width:0;min-height:32px;background:#292929;border:1px solid #999;border-radius:7px;padding:4px}
    .section-content>button,.settings-group details>button{margin:5px 0 6px 8px;border:1px solid #888;background:#292929;border-radius:7px;padding:6px 8px;min-height:32px}.section-content>button:hover{background:#555}.section-reset{font-size:11px}
    .switch{flex:0 0 44px;position:relative;width:44px;height:44px;padding:0;border:0;background:transparent}.switch::before{content:'';position:absolute;inset:12px 5px;border:0;border-radius:999px;background:#626873}.switch span{position:absolute;top:14px;left:7px;width:16px;height:16px;border-radius:50%;background:white;transition:transform .15s}.switch[aria-checked=true]::before{background:#287aa3}.switch[aria-checked=true] span{transform:translateX(14px)}
    .settings-group details{padding:6px 8px;border-top:1px solid #666}.settings-group details>summary{min-height:32px;padding:6px 0}.diagnostics-output{white-space:pre-wrap;overflow-wrap:anywhere;padding:7px;background:#252525;border-radius:6px;font:11px/1.4 monospace}
    .menu-footer{display:flex;justify-content:space-between;align-items:center;gap:8px}.menu-footer a{color:var(--menu-muted);text-decoration:underline;text-underline-offset:2px;padding:3px 0}.menu-footer a:hover,.menu-footer a:focus-visible{color:var(--menu-accent)}
    .notice:empty{display:none}.notice{padding:5px 2px;font-size:11px;margin:0}footer{padding:3px 2px 0;font-size:10px;color:#ddd}
    :host([data-motion]) *{transition:none!important;animation:none!important}:host([data-contrast]) .panel,:host([data-contrast]) .settings-group{background:#000;color:white;border-color:white}:host([data-contrast]) .switch::before{border:2px solid white;background:black}:host([data-contrast]) .switch[aria-checked=true]::before{background:white}:host([data-contrast]) .switch[aria-checked=true] span{background:black}
    @media(forced-colors:active){.switch::before{forced-color-adjust:none;border-color:ButtonText;background:Canvas}.switch span{background:ButtonText}.switch[aria-checked=true]::before{background:Highlight}.switch[aria-checked=true] span{background:HighlightText}}
    .panel{background:var(--menu-bg,#252522);color:var(--menu-text,#f5f5f5);border-color:var(--menu-border,#858580)}header{gap:6px}header>div{flex:1;min-width:0}header p,.row small,footer{color:var(--menu-muted,#ddd)}
    .menu-close{flex:0 0 32px;width:32px;height:32px;align-self:flex-start;padding:0;border:0;border-radius:6px;background:transparent;color:var(--menu-text);font-size:22px;line-height:1}.menu-close:hover{background:var(--menu-surface)}
    .settings-group{background:var(--menu-surface);border-color:var(--menu-border)}.settings-group[open]>summary,.settings-group details{border-color:var(--menu-border)}.row select,.section-content>button,.settings-group details>button,.diagnostics-output{background:var(--menu-control);color:var(--menu-text);border-color:var(--menu-border)}.section-content>button:hover{background:var(--menu-bg)}
    .switch[aria-checked=false]::before{background:#626873;border:0}.switch[aria-checked=false] span{background:white}
    button:focus-visible,select:focus-visible,summary:focus-visible{outline-color:var(--menu-accent)}.switch[aria-checked=true]::before{background:var(--menu-accent)}.switch[aria-checked=true] span{background:var(--menu-control)}
  `;
  return {version,start};
})();



/* Site adapters: theme surfaces and features are separate from the shared menu. */
function colorShiftSiteModule(siteId) {
  'use strict';

  const icons = {};
  function theme(state,colors,accent,surfaces,extras='') {
    if(state.palette==='original')return '';
    const [,body,surface,header]=colors;
    return `html{color-scheme:dark}html,body{background:${body}!important;color:#d0d0cc!important}
      ${surfaces}{background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff20!important}
      header,footer,.header,.footer,.nav__outer-wrap,.nav__inner-wrap,.nav__button-container{background:${header}!important;color:#ddd!important}
      ${siteId==='steamgifts'?'a:not(.esgst-gc):not(.esgst-gc *)':'a'}{color:${accent}!important}a:hover{filter:brightness(1.15)}
      :is(button,a[role=button],a.btn,a.btn-sm,a.button,input[type=submit]){background:${header}!important;background-image:none!important;color:#fff!important;text-shadow:none!important;border-color:#888!important}
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
  site.deactivate=()=>{
    for(const record of sections.values()){record.button.remove();for(const node of record.content)node.classList.remove('colorshift-section-hidden');}
    sections.clear();
  };
  return site;
}
/* Best-effort adapter: neutral surfaces use the shared repair engine. */
(() => {
  const domains={'manapool.com':'manapool','scryfall.com':'scryfall','steamgifts.com':'steamgifts','steamtrades.com':'steamgifts','sgtools.info':'steamgifts','tcgplayer.com':'tcgplayer','cardkingdom.com':'cardkingdom','goodreads.com':'goodreads','genius.com':'genius'};
  const moduleId=domains[location.hostname.replace(/^www\./,'')];
  const tailored=moduleId?colorShiftSiteModule(moduleId):null;
  const site={name:'Anywhere',anywhere:true,icon:"data:image/png;base64,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",accent:'#ffb09b',options:[['enabled','Enable on this site'],['compactGrids','Compact grids']],
    css(state,colors,accent){
      if(!state.enabled||state.palette==='original')return '';
      const protectedSelector='[data-colorshift-preserve],[class*="badge" i],[class*="chip" i],[class*="status" i],[class*="rating" i],[class*="esgst-"],svg,canvas,picture';
      const reddit=location.hostname.replace(/^www\./,'')==='reddit.com';
      return 'html,body{background-color:'+colors[1]+'!important;color:#eee!important;color-scheme:dark}'+
        'a:not(:is('+protectedSelector+')):not(:is('+protectedSelector+') *){color:'+(state.brighterLinks?'#9ad8f8':accent)+'!important}'+
        ':is(button,a.btn,a.btn-sm,a.button,a[class*="-button"],a[role="button"],input:not([type=color]):not([type=range]):not([type=checkbox]):not([type=radio]),select,textarea):not(:is('+protectedSelector+')):not(:is('+protectedSelector+') *){background-color:'+colors[3]+'!important;color:#eee!important;border-color:#888!important}'+
        (reddit?'.rounded-full.absolute{background-image:none!important;background-color:'+colors[2]+'!important;color:#eee!important;border-color:#ffffff30!important}.rounded-full.absolute img{filter:none!important}#RESAccountSwitcherIcon{background-color:'+colors[2]+'!important;color:'+accent+'!important;background-image:none!important}.pageNavigator.res-icon{color:'+accent+'!important;background-color:'+colors[3]+'!important;background-image:none!important}':'')+
        (state.compactGrids?'[class*="grid" i],[style*="grid-template-columns"]{column-gap:min(1rem,2vw)!important;row-gap:min(1rem,2vw)!important}':'')+
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

})();
