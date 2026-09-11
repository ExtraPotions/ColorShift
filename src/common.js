/* ColorShift: shared settings, lifecycle and isolated UI. CC-BY-NC-4.0 */
var ColorShift = (() => {
  'use strict';
  const version = '0.2.0';
  const SETTINGS_SCHEMA = 1;
  const SCHEMA_KEY = 'settingsSchema';
  const palettes = {
    system: ['System'], original: ['Original'], lightGray: ['Graphite','#3f3f3c','#4a4a46','#333330'],
    darkGray: ['Charcoal','#252522','#2a2a28','#1c1c1a'],
    navy: ['Navy','#1a2332','#243044','#141c28'], black: ['Black','#0a0a0a','#111111','#050505'],
    fireRed: ['Ember','#211516','#382123','#481f22'],
    leafGreen: ['Forest','#131d17','#213329','#24442f'],
    heartGold: ['Antique Gold','#211d13','#39301d','#493a1d'],
    pride: ['Pride','#19171f','#28242f','#211d29']
  };
  const accents = {site:['Site default',null],blue:['Blue','#5eb0ef'],green:['Green','#63d989'],amber:['Amber','#f0c14b'],violet:['Violet','#b57aef'],rose:['Rose','#f5b0c8'],teal:['Teal','#78dcca'],coral:['Coral','#ffb09b'],silver:['Silver','#cbd5e1'],pride:['Pride','#ffb4ce']};
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
        node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');node.style.removeProperty('--colorshift-readable-text');node.removeAttribute('data-colorshift-gradient');
        if(node===host||node.closest(protectedSurfaces))continue;
        const computed=getComputedStyle(node),bg=parseColor(computed.backgroundColor),gradient=neutralGradient(computed.backgroundImage);
        if(computed.display==='none'||(computed.backgroundImage!=='none'&&!gradient))continue;
        // Separate transparent product metadata from its repaired image card.
        if(node.matches('div[class*="metadata" i]')&&(bg?.[3]===0)&&node.parentElement?.matches('[data-colorshift-surface]')&&node.parentElement.querySelector('img')){
          node.dataset.colorshiftSurface='details';
        }
        if((gradient||(neutral(bg)&&(bg[3]??1)===1))&&node.matches('main,header,footer,nav,aside,section,article,div,form,ul,li,h1,h2,h3,h4')){
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
        if(back&&(neutral(fg)||node.matches('a')||surfacePalette.some(c=>c.every((v,i)=>v===back[i])))){
          const a=luminance(fg),b=luminance(back);
          if((Math.max(a,b)+.05)/(Math.min(a,b)+.05)<4.5){
            if(neutral(fg)||node.matches('a'))node.dataset.colorshiftText=b>.179?'dark':'light';
            else {
              // Keep semantic hues, moving toward the more readable endpoint.
              const target=b>.179?0:255;let adjusted=fg.slice(0,3);
              for(let step=1;step<=100;step++){adjusted=fg.slice(0,3).map(v=>Math.round(v+(target-v)*step/100));const l=luminance(adjusted);if((Math.max(l,b)+.05)/(Math.min(l,b)+.05)>=4.5)break;}
              node.style.setProperty('--colorshift-readable-text','rgb('+adjusted.join(',')+')');node.dataset.colorshiftText='hue';
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
      const findings=[];let scanned=0,unknown=0,protectedCount=0;
      const nodes=document.querySelectorAll('main,header,footer,nav,section,article,div,p,span,a,button,input,select,textarea,label,h1,h2,h3,h4');
      for(const node of nodes){
        if(node===host||!node.getClientRects().length||visuallyHidden(node))continue;
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
      const enabled=site.anywhere?state.enabled:effectiveState.palette!=='original';
      fab.dataset.themeEnabled=String(enabled);
      const footerStatus=panel.querySelector('.footer-status');if(footerStatus)footerStatus.textContent=site.anywhere?(enabled?'Enabled on this site':'Disabled on this site'):(enabled?'Theme active':'Original appearance');
      fab.setAttribute('aria-description',enabled?'ColorShift enabled on this site':'ColorShift disabled on this site');
      surfacePalette=effectiveState.palette==='original'?null:colors.slice(1).map(hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16)));
      const raised=surfacePalette?surfacePalette[1].map(v=>Math.round(v+(255-v)*.06)):null;
      if(surfacePalette)surfacePalette.push(raised);
      if(!surfacePalette)for(const node of document.querySelectorAll('[data-colorshift-surface],[data-colorshift-text],[data-colorshift-image]')){node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');node.style.removeProperty('--colorshift-readable-text');node.removeAttribute('data-colorshift-gradient');node.removeAttribute('data-colorshift-image');}
      const css=(site.anywhere&&!state.enabled)?'':site.css(effectiveState,colors,accent)+
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
      const appearanceTools=element('div',{class:'group-tools'});groupReset(appearanceTools,'appearance',['palette','accent','intensity']);
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
      const diagnostics=element('details');diagnostics.append(element('summary',{},'About & diagnostics'));
      diagnostics.append(element('pre',{class:'diagnostics-output'},diagnosticText()));
      action(diagnostics,'Scan theme coverage',scanCoverage);
      action(diagnostics,'Copy diagnostics',async()=>{const text=diagnosticText();try{await navigator.clipboard.writeText(text);notice.textContent='Diagnostics copied.';}catch{window.prompt('Copy diagnostics',text);}});tools.append(diagnostics);
      notice=element('p',{role:'status','aria-live':'polite',class:'notice'});const footer=element('footer',{class:'menu-footer'});footer.append(element('span',{class:'footer-status',role:'status'}),element('a',{href:'https://github.com/ExtraPotions/ColorShift/releases/tag/colorshift-'+version,target:'_blank',rel:'noopener noreferrer','aria-label':'Release notes for ColorShift '+version},'v'+version));panel.append(notice,footer);
      for(const group of panel.querySelectorAll(':scope > .settings-group')){
        const content=element('div',{class:'section-content'});
        for(const child of [...group.children])if(child.tagName!=='SUMMARY')content.append(child);
        group.append(content);
      }
      if(site.anywhere){const toggle=controls.get('enabled'),row=toggle.closest('.row');footer.insertBefore(toggle,footer.lastElementChild);row.remove();}
      const tabs=element('div',{class:'menu-tabs',role:'group','aria-label':'Settings sections'}),groups=[...panel.querySelectorAll(':scope>.settings-group')];panel.insertBefore(tabs,groups[0]);
      for(const group of groups){const summary=group.querySelector(':scope>summary'),button=element('button',{type:'button','aria-expanded':String(group.open)},summary.textContent);group.classList.add('menu-section');button.addEventListener('click',()=>{const next=!group.open;for(const other of groups)other.open=false;group.open=next;});group.addEventListener('toggle',()=>button.setAttribute('aria-expanded',String(group.open)));tabs.append(button);}
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
      if(site.anywhere)window.addEventListener('scroll',position,{passive:true});
      window.addEventListener('resize',position);motion.addEventListener('change',apply);contrast.addEventListener('change',apply);systemTheme.addEventListener('change',()=>{if(state.palette==='system'||state.palette==='original')apply();});
      try {if(typeof GM_registerMenuCommand==='function')GM_registerMenuCommand('ColorShift settings',()=>setOpen(true));}catch(error){console.warn('ColorShift: extension menu registration unavailable',error);}
      site.mount?.(api);apply();updatePage();
      if(site.anywhere&&!state.enabled)setOpen(true,false);
      const pending=new Set();
      function queue(node){if(!node)return;if(node.nodeType!==1&&node.nodeType!==9)node=node.parentElement;if(!node||node===host||node===style||host.contains(node))return;pending.add(node);if(pending.size>40){pending.clear();pending.add(document);} }
      const observer=new MutationObserver(records=>{
        for(const record of records){
          if(record.target===style||record.target===host)continue;
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
    .panel{background:var(--menu-bg);color:var(--menu-text);border-color:var(--menu-border)}header{gap:6px}header>div{flex:1;min-width:0}header p,.row small,footer{color:var(--menu-muted)}
    .menu-close{flex:0 0 32px;width:32px;height:32px;align-self:flex-start;padding:0;border:0;border-radius:6px;background:transparent;color:var(--menu-text);font-size:22px;line-height:1}.menu-close:hover{background:var(--menu-surface)}
    .settings-group{background:var(--menu-surface);border-color:var(--menu-border)}.settings-group[open]>summary,.settings-group details{border-color:var(--menu-border)}.row select,.section-content>button,.settings-group details>button,.diagnostics-output{background:var(--menu-control);color:var(--menu-text);border-color:var(--menu-border)}.section-content>button:hover{background:var(--menu-bg)}
    .switch[aria-checked=false]::before{background:#626873;border:0}.switch[aria-checked=false] span{background:white}
    button:focus-visible,select:focus-visible,summary:focus-visible{outline-color:var(--menu-accent)}.switch[aria-checked=true]::before{background:var(--menu-accent)}.switch[aria-checked=true] span{background:var(--menu-control)}
  `;
  return {version,start};
})();
