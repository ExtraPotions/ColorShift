/* ColorShift: shared settings, lifecycle and isolated UI. CC-BY-NC-4.0 */
var ColorShift = (() => {
  'use strict';
  const version = '0.0.3';
  const SETTINGS_SCHEMA = 1;
  const SCHEMA_KEY = 'settingsSchema';
  const palettes = {
    system: ['System'], original: ['Original'], lightGray: ['Light Gray','#3f3f3c','#4a4a46','#333330'],
    darkGray: ['Dark Gray','#252522','#2a2a28','#1c1c1a'],
    navy: ['Navy','#1a2332','#243044','#141c28'], black: ['Black','#0a0a0a','#111111','#050505'],
    fireRed: ['Fire Red','#211516','#382123','#481f22'],
    leafGreen: ['Leaf Green','#131d17','#213329','#24442f'],
    heartGold: ['Heart Gold','#211d13','#39301d','#493a1d']
  };
  const accents = {site:['Site default',null],blue:['Blue','#5eb0ef'],green:['Green','#63d989'],amber:['Amber','#f0c14b'],violet:['Violet','#b57aef'],rose:['Rose','#f5b0c8']};
  const shared = [['brighterLinks','Brighter links'],['hideAds','Hide ads / promos']];
  const accessibility = [['reducedMotion','Reduce motion'],['highContrast','High contrast']];
  const memory = new Map();
  function read(key, fallback) {
    try { if (typeof GM_getValue === 'function') return GM_getValue(key,fallback); } catch {}
    try { const v=localStorage.getItem('colorshift-'+key); return v===null?fallback:JSON.parse(v); } catch { return memory.get(key) ?? fallback; }
  }
  function write(key,value) {
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
          if(rect.width>=80&&rect.height>=24&&!surfacePalette.some(c=>c.every((v,i)=>v===bg[i])))node.dataset.colorshiftSurface=node.closest('header,footer,nav')?'header':'surface';
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
      const top=Math.max(8,Math.min(innerHeight-56,state.fabTop ?? innerHeight-64));
      fab.style.top=top+'px';
      panel.style.maxHeight=Math.max(100,innerHeight-24)+'px';
      if(open) panel.style.top=Math.max(12,Math.min(top-panel.offsetHeight-8,innerHeight-panel.offsetHeight-12))+'px';
      // Primary controls keep their saved position; only companions yield.
      coordinateExtraPotionsControls(fab);
      launcher?.publish();
    }
    function readableAccent(accent,colors) {
      const rgb=hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16));
      const luminance=hex=>rgb(hex).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
      const backgrounds=colors.slice(1),contrast=(a,b)=>(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
      let result=accent;
      for(let i=0;i<30&&backgrounds.some(bg=>contrast(luminance(result),luminance(bg))<4.5);i++)result='#'+rgb(result).map(v=>Math.min(255,v+5).toString(16).padStart(2,'0')).join('');
      return result;
    }
    function apply() {
      coverageReport='Theme coverage: not scanned for current settings. Use Scan theme coverage.';
      const effectiveState={...state,palette:state.palette==='system'?(systemTheme.matches?'darkGray':'original'):state.palette};
      const colors=palettes[effectiveState.palette],accent=readableAccent(accents[state.accent][1]||site.accent,colors);
      api.theme={palette:effectiveState.palette,colors,accent};
      surfacePalette=effectiveState.palette==='original'?null:colors.slice(1).map(hex=>hex.slice(1).match(/../g).map(v=>parseInt(v,16)));
      if(!surfacePalette)for(const node of document.querySelectorAll('[data-colorshift-surface],[data-colorshift-text]')){node.removeAttribute('data-colorshift-surface');node.removeAttribute('data-colorshift-text');}
      const css=site.css(effectiveState,colors,accent)+
        (surfacePalette?`[data-colorshift-surface="surface"]{background-color:${colors[2]}!important}[data-colorshift-surface="header"]{background-color:${colors[3]}!important}[data-colorshift-text]{color:#eee!important}`:'')+
        ((state.reducedMotion||motion.matches)?'*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition:none!important}':'')+
        ((state.highContrast||contrast.matches)&&effectiveState.palette!=='original'?'html,body,main,article,section,[role=dialog],[role=menu],input,textarea,select,button{background:#000!important;color:#fff!important;border-color:#fff!important}a{color:#9ad8f8!important}':'');
      if(css!==lastCSS){siteSheet.replaceSync(css);lastCSS=css;metrics.styles++;}
      site.themeChanged?.(api);
      repairSurfaces();
      for(const [key,control] of controls) {
        if(control.tagName==='SELECT'||control.tagName==='INPUT') control.value=state[key];
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
    function section(title) { const block=element('details',{class:'settings-group'});block.append(element('summary',{},title));panel.append(block);block.addEventListener('toggle',()=>{if(open)position();});return block; }
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
      const header=element('header'),heading=element('div');heading.append(element('h2',{},'ColorShift'),element('p',{},site.name+' · Themes and page settings'));header.append(element('img',{src:site.icon,alt:'',class:'header-icon'}),heading);const close=action(header,'×',()=>setOpen(false));close.className='menu-close';close.setAttribute('aria-label','Close settings');header.append(close);panel.append(header);
      const appearance=section('Appearance');
      for(const [key,label,values] of [['palette','Theme',palettes],['accent','Accent',accents]]) {
        const select=element('select',{'aria-label':label});for(const [value,[name]] of Object.entries(values))select.append(element('option',{value},name));
        select.addEventListener('change',()=>set(key,select.value));select.setAttribute('data-setting',key);controls.set(key,select);row(appearance,label,select,descriptions[key]);
      }
      groupReset(appearance,'appearance',['palette','accent','intensity']);
      const pageOptions=appearance;toggles(pageOptions,shared);groupReset(pageOptions,'page settings',shared.map(([key])=>key));
      const siteOptions=section(site.name);toggles(siteOptions,site.options);groupReset(siteOptions,site.name+' options',site.options.map(([key])=>key));
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
    .fab{position:fixed;right:16px;width:48px;height:48px;padding:0;z-index:2147483647;border:1px solid #ffffff55;border-radius:13px;background:#121722;box-shadow:0 5px 18px #0006;touch-action:none;overflow:hidden;pointer-events:auto}.fab img{width:100%;height:100%;object-fit:contain;pointer-events:none}.fab:hover{box-shadow:0 0 0 2px #9ad8f8}
    .panel{position:fixed;right:16px;z-index:2147483647;width:min(300px,calc(100vw - 24px));overflow:auto;overscroll-behavior:contain;background:#333;color:#f5f5f5;border:1px solid #777;border-radius:16px;padding:8px;box-shadow:0 12px 30px #0006;pointer-events:auto;font:12px/1.4 Arial,sans-serif}
    header{display:flex;gap:10px;align-items:center;padding:2px 2px 6px}.header-icon{width:32px;height:32px;border-radius:8px}h2{font-size:15px;margin:0;font-weight:800}header p{margin:2px 0 0;font-size:11px;color:#eee}
    .settings-group{border:1px solid #777;border-radius:9px;background:#444;margin-top:4px;overflow:hidden}.settings-group>summary{list-style:none;min-height:32px;padding:7px 8px;font-weight:700;display:flex;align-items:center;justify-content:space-between}.settings-group>summary::-webkit-details-marker{display:none}.settings-group>summary::after{content:'›';font-size:16px;line-height:1}.settings-group[open]>summary::after{transform:rotate(90deg)}.settings-group[open]>summary{border-bottom:1px solid #666}
    .row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px;padding:6px 8px}.row+.row{border-top:1px solid #ffffff18}.row>span{min-width:0}.row small{display:block;color:#ddd;font-size:10px;line-height:1.4;margin-top:3px}.row select{flex:0 0 108px;width:108px;min-width:0;min-height:32px;background:#292929;border:1px solid #999;border-radius:7px;padding:4px}
    .settings-group>button,.settings-group details>button{margin:5px 0 6px 8px;border:1px solid #888;background:#292929;border-radius:7px;padding:6px 8px;min-height:32px}.settings-group>button:hover{background:#555}.section-reset{font-size:11px}
    .switch{flex:0 0 44px;position:relative;width:44px;height:44px;padding:0;border:0;background:transparent}.switch::before{content:'';position:absolute;inset:12px 4px;border:1px solid #ccc;border-radius:999px;background:#626873}.switch span{position:absolute;top:15px;left:7px;width:14px;height:14px;border-radius:50%;background:white;transition:transform .15s}.switch[aria-checked=true]::before{background:#287aa3}.switch[aria-checked=true] span{transform:translateX(16px)}
    .settings-group details{padding:6px 8px;border-top:1px solid #666}.settings-group details>summary{min-height:32px;padding:6px 0}.diagnostics-output{white-space:pre-wrap;overflow-wrap:anywhere;padding:7px;background:#252525;border-radius:6px;font:11px/1.4 monospace}
    .notice:empty{display:none}.notice{padding:5px 2px;font-size:11px;margin:0}footer{padding:6px 2px 0;font-size:10px;color:#ddd}
    :host([data-motion]) *{transition:none!important;animation:none!important}:host([data-contrast]) .panel,:host([data-contrast]) .settings-group{background:#000;color:white;border-color:white}:host([data-contrast]) .switch::before{border:2px solid white;background:black}:host([data-contrast]) .switch[aria-checked=true]::before{background:white}:host([data-contrast]) .switch[aria-checked=true] span{background:black}
    @media(forced-colors:active){.switch::before{forced-color-adjust:none;border-color:ButtonText;background:Canvas}.switch span{background:ButtonText}.switch[aria-checked=true]::before{background:Highlight}.switch[aria-checked=true] span{background:HighlightText}}
    .panel{background:var(--menu-bg);color:var(--menu-text);border-color:var(--menu-border)}header{gap:8px}header>div{flex:1;min-width:0}header p,.row small,footer{color:var(--menu-muted)}
    .menu-close{flex:0 0 32px;width:32px;height:32px;align-self:flex-start;padding:0;border:0;border-radius:6px;background:transparent;color:var(--menu-text);font-size:22px;line-height:1}.menu-close:hover{background:var(--menu-surface)}
    .settings-group{background:var(--menu-surface);border-color:var(--menu-border)}.settings-group[open]>summary,.settings-group details{border-color:var(--menu-border)}.row select,.settings-group>button,.settings-group details>button,.diagnostics-output{background:var(--menu-control);color:var(--menu-text);border-color:var(--menu-border)}.settings-group>button:hover{background:var(--menu-bg)}
    button:focus-visible,select:focus-visible,summary:focus-visible{outline-color:var(--menu-accent)}.switch[aria-checked=true]::before{background:var(--menu-accent)}.switch[aria-checked=true] span{background:var(--menu-control)}
  `;
  return {version,start};
})();
