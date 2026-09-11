// ==UserScript==
// @name           ColorShift for SteamGifts
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.0.3
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           data:image/png;base64,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
// @match          *://steamgifts.com/*
// @match          *://www.steamgifts.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-steamgifts.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-steamgifts.user.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// @match          *://steamtrades.com/*
// @match          *://www.steamtrades.com/*
// @match          *://sgtools.info/*
// @match          *://www.sgtools.info/*
// ==/UserScript==
(function(){
/* ColorShift: shared settings, lifecycle and isolated UI. CC-BY-NC-4.0 */
var ColorShift = (() => {
  'use strict';
  const version = '0.0.3';
  const SETTINGS_SCHEMA = 1;
  const SCHEMA_KEY = 'settingsSchema';
  const palettes = {
    system: ['System'], original: ['Original'], lightGray: ['Light gray','#3f3f3c','#4a4a46','#333330'],
    darkGray: ['Dark gray','#252522','#2a2a28','#1c1c1a'],
    navy: ['Navy','#1a2332','#243044','#141c28'], black: ['Black','#0a0a0a','#111111','#050505'],
    fireRed: ['Fire red','#211516','#382123','#481f22'],
    leafGreen: ['Leaf green','#131d17','#213329','#24442f'],
    heartGold: ['Heart gold','#211d13','#39301d','#493a1d']
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
  function normaliseShortcut(value) {
    if(typeof value!=='string')return 'Alt+G';const raw=value.trim();if(!raw||/^off$/i.test(raw))return '';
    const parts=raw.split('+').map(part=>part.trim()).filter(Boolean),key=parts.pop();if(!key)return '';
    const mods=['Ctrl','Alt','Shift','Meta'].filter(mod=>parts.some(part=>part.toLowerCase()===mod.toLowerCase()));
    return [...mods,key.length===1?key.toUpperCase():key].join('+');
  }
  function eventShortcut(event){return [...(event.ctrlKey?['Ctrl']:[]),...(event.altKey?['Alt']:[]),...(event.shiftKey?['Shift']:[]),...(event.metaKey?['Meta']:[]),event.key.length===1?event.key.toUpperCase():event.key].join('+');}
  function editableTarget(target){return target?.matches?.('input,textarea,select,[contenteditable="true"]');}
  function shortcutBlocked(node,shortcut){const priority=Number(node?.dataset.launcherPriority||0),id=node?.dataset.launcherId||'';return [...document.querySelectorAll('[data-userscript-launcher="userscript-launcher-v1"]')].some(el=>{if(el===node)return false;let shortcuts=[];try{shortcuts=JSON.parse(el.dataset.launcherShortcuts||'[]');}catch{}const other=Number(el.dataset.launcherPriority||0);return shortcuts.includes(shortcut)&&(other>priority||(other===priority&&(el.dataset.launcherId||'').localeCompare(id)<0));});}
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
    const checkCollision=()=>{let own=[];try{own=JSON.parse(node.dataset.launcherShortcuts||'[]');}catch{}const collision=[...document.querySelectorAll('[data-userscript-launcher="userscript-launcher-v1"]')].some(el=>{if(el===node)return false;try{return JSON.parse(el.dataset.launcherShortcuts||'[]').some(value=>own.includes(value));}catch{return false;}});node.dataset.launcherShortcutCollision=String(collision);};
    window.addEventListener('userscript-launcher:change',checkCollision);queueMicrotask(checkCollision);
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
    const defaults={palette:'darkGray',accent:'site',intensity:'normal',fabTop:null,shortcut:'Alt+G',updateNotifications:false};
    for(const [key] of [...shared,...site.options,...accessibility]) defaults[key]=false;
    const state={...defaults};
    function valid(key,value) {
      if(key==='palette') return Object.hasOwn(palettes,value);
      if(key==='accent') return Object.hasOwn(accents,value);
      if(key==='intensity') return ['normal','soft'].includes(value);
      if(key==='fabTop') return value===null || (typeof value==='number' && Number.isFinite(value));
      if(key==='shortcut') return typeof value==='string'&&value.length<=40;
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
    function updatePage(roots=[document]){updateRoots=roots;metrics.updates++;try{site.update?.(api);}catch(error){diagnosticErrors.push(String(error?.message||error));if(diagnosticErrors.length>10)diagnosticErrors.shift();}finally{updateRoots=[document];}lastProcessed=Date.now();refreshDiagnostics();}
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
      if(value) { position();refreshDiagnostics();if(host.dataset.launcherShortcutCollision==='true')notice.textContent='Shortcut conflict detected; the higher-priority launcher responds first.';panel.querySelector('select,button').focus(); }
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
      const effectiveState={...state,palette:state.palette==='system'?(systemTheme.matches?'darkGray':'original'):state.palette};
      const colors=palettes[effectiveState.palette],accent=readableAccent(accents[state.accent][1]||site.accent,colors);
      const css=site.css(effectiveState,colors,accent)+
        ((state.reducedMotion||motion.matches)?'*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition:none!important}':'')+
        ((state.highContrast||contrast.matches)&&effectiveState.palette!=='original'?'html,body,main,article,section,[role=dialog],[role=menu],input,textarea,select,button{background:#000!important;color:#fff!important;border-color:#fff!important}a{color:#9ad8f8!important}':'');
      if(css!==lastCSS){siteSheet.replaceSync(css);lastCSS=css;metrics.styles++;}
      for(const [key,control] of controls) {
        if(control.tagName==='SELECT'||control.tagName==='INPUT') control.value=state[key];
        else control.setAttribute('aria-checked',String(state[key]));
      }
      host.toggleAttribute('data-motion',state.reducedMotion||motion.matches);
      host.toggleAttribute('data-contrast',state.highContrast||contrast.matches);
      host.dataset.launcherShortcuts=JSON.stringify(state.shortcut?[normaliseShortcut(state.shortcut)]:[]);
      host.style.setProperty('--accent',accent);
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
      return [`ColorShift ${version}`,`Site: ${site.name} (${location.hostname})`,`Page: ${location.pathname||'/'}`,`Active options: ${active}`,`Page updates: ${metrics.updates} · Elements inspected: ${metrics.inspected} · Style writes: ${metrics.styles}`,`Last processed: ${lastProcessed?new Date(lastProcessed).toISOString():'Not yet'}`,`Errors: ${diagnosticErrors.length}${diagnosticErrors.length?' · '+diagnosticErrors.at(-1):''}`].join('\n');
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
    function section(title) { const block=element('section');block.append(element('h3',{},title));panel.append(block);return block; }
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
      const header=element('header');header.append(element('h2',{},'ColorShift · '+site.name),element('p',{},'Customize colours and site behaviour.'));action(header,'Close settings',()=>setOpen(false)).className='close-menu';panel.append(header);
      const appearance=section('Appearance');
      for(const [key,label,values] of [['palette','Theme',palettes],['accent','Accent',accents]]) {
        const select=element('select',{'aria-label':label});for(const [value,[name]] of Object.entries(values))select.append(element('option',{value},name));
        select.addEventListener('change',()=>set(key,select.value));select.setAttribute('data-setting',key);controls.set(key,select);row(appearance,label,select,descriptions[key]);
      }
      groupReset(appearance,'appearance',['palette','accent','intensity']);
      const pageOptions=section('Page settings');toggles(pageOptions,shared);groupReset(pageOptions,'page settings',shared.map(([key])=>key));
      const siteOptions=section(site.name);toggles(siteOptions,site.options);groupReset(siteOptions,site.name+' options',site.options.map(([key])=>key));
      const disclosure=element('details');disclosure.append(element('summary',{},'Accessibility'));toggles(disclosure,accessibility);groupReset(disclosure,'accessibility',accessibility.map(([key])=>key));panel.append(disclosure);
      if(site.actions) { const group=section('Home sections');for(const [title,fn] of site.actions)action(group,title,()=>fn(api)); }
      const tools=section('Settings');
      toggles(tools,[['updateNotifications','Quiet update notifications']]);
      const shortcut=element('input',{type:'text','aria-label':'Open menu shortcut',placeholder:'Off',value:state.shortcut});
      shortcut.addEventListener('change',()=>{set('shortcut',normaliseShortcut(shortcut.value));shortcut.value=state.shortcut;const collision=[...document.querySelectorAll('[data-userscript-launcher="userscript-launcher-v1"]')].some(el=>{if(el===host)return false;try{return JSON.parse(el.dataset.launcherShortcuts||'[]').includes(state.shortcut);}catch{return false;}});notice.textContent=collision?'Shortcut is also used by another installed script.':'Shortcut saved.';});controls.set('shortcut',shortcut);row(tools,'Open menu shortcut',shortcut);
      action(tools,'Disable shortcut',()=>{set('shortcut','');shortcut.value='';notice.textContent='Keyboard shortcut disabled.';});
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
      action(tools,'Close',()=>setOpen(false));
      const diagnostics=element('details');diagnostics.append(element('summary',{},'About & diagnostics'));
      diagnostics.append(element('pre',{class:'diagnostics-output'},diagnosticText()));
      action(diagnostics,'Copy diagnostics',async()=>{const text=diagnosticText();try{await navigator.clipboard.writeText(text);notice.textContent='Diagnostics copied.';}catch{window.prompt('Copy diagnostics',text);}});panel.append(diagnostics);
      notice=element('p',{role:'status','aria-live':'polite',class:'notice'});panel.append(notice,element('footer',{},'Drag to position · configurable shortcut · Esc · v'+version));
      root.append(fab,panel);document.body.append(host);
      launcher=declareLauncher(host,()=>[fab,panel],{owner:'ExtraPotions',id:'colorshift-'+site.name.toLowerCase(),priority:100,preferredPosition:'right-bottom'});
      host.dataset.launcherShortcuts=JSON.stringify(state.shortcut?[state.shortcut]:[]);
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
        else if(state.shortcut&&!editableTarget(e.target)&&eventShortcut(e)===normaliseShortcut(state.shortcut)&&!shortcutBlocked(host,normaliseShortcut(state.shortcut))){e.preventDefault();setOpen(!open);}
      });
      panel.addEventListener('keydown',e=>{
        if(e.key!=='Tab')return;
        const items=[...panel.querySelectorAll('button,select,input,summary')].filter(el=>el.getClientRects().length);
        const first=items[0],last=items.at(-1);
        if(e.shiftKey&&root.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&root.activeElement===last){e.preventDefault();first.focus();}
      });
      document.addEventListener('pointerdown',e=>{if(open&&!e.composedPath().includes(host))setOpen(false);});
      window.addEventListener('resize',position);motion.addEventListener('change',apply);contrast.addEventListener('change',apply);systemTheme.addEventListener('change',()=>{if(state.palette==='system')apply();});
      try {if(typeof GM_registerMenuCommand==='function')GM_registerMenuCommand('ColorShift settings',()=>setOpen(true));}catch(error){console.warn('ColorShift: extension menu registration unavailable',error);}
      site.mount?.(api);apply();updatePage();
      const pending=new Set();
      function queue(node){if(!node)return;if(node.nodeType!==1&&node.nodeType!==9)node=node.parentElement;if(!node||node===host||node===style||host.contains(node))return;pending.add(node);if(pending.size>40){pending.clear();pending.add(document);} }
      const observer=new MutationObserver(records=>{
        for(const record of records){
          if(record.target===style||record.target===host)continue;
          if(record.attributeName==='style'&&!record.target.matches('#pfh-fab,.pfh-fab,#adpb-settings-fab,[data-userscript-launcher]'))continue;
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
    :host { all:initial; font:13px/1.4 system-ui,sans-serif; color:#eee; }
    *,*::before,*::after { box-sizing:border-box; }
    .panel {font:13px/1.4 system-ui,sans-serif;}
    [hidden] { display:none!important; }
    button,select,input { font:inherit; color:inherit; }
    button { cursor:pointer; }
    button:focus-visible,select:focus-visible,input:focus-visible,summary:focus-visible { outline:2px solid #82dcff; outline-offset:3px; }
    .fab { position:fixed; right:16px; width:48px; height:48px; padding:0; z-index:2147483647; border:1px solid #ffffff33; border-radius:13px; background:#121722; box-shadow:0 5px 18px #0006; touch-action:none; overflow:hidden; pointer-events:auto; }
    .fab img { width:100%;height:100%;object-fit:contain;pointer-events:none; }
    .fab:hover { box-shadow:0 0 0 2px #82dcff,0 8px 22px #0006; }
    .panel { position:fixed;right:16px;z-index:2147483647;width:min(312px,calc(100vw - 32px));overflow:auto;background:#282826;color:#ddd;border:1px solid #ffffff22;border-radius:14px;box-shadow:0 16px 40px #0007;pointer-events:auto; }
    header {padding:14px 18px 10px;} h2 {font-size:15px;margin:0 0 3px;} p {margin:0;font-size:12px;color:#bbb;}
    section,details {padding:9px 18px;border-top:1px solid #ffffff14;}
    h3 {font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#aaa;margin:0 0 4px;}
    .row {display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px;}
    .row select,.row input {flex:0 0 124px;width:124px;}
    .row small {display:block;font-size:11px;line-height:1.4;color:#bfc3c8;margin:3px 0 6px;overflow-wrap:anywhere;}
    .section-reset {font-size:11px;color:#cbd7ee;}
    .close-menu {margin-top:8px;border:1px solid #768093;background:#1c2230;border-radius:8px;padding:6px 10px;}
    .row + .row {border-top:1px solid #ffffff0c;}.row>span {min-width:0;}
    select,input,section>button,details>button {border:1px solid #ffffff22;background:#1c2230;border-radius:8px;padding:5px 8px;max-width:145px;min-height:36px;min-width:0;}
    section>button {margin:3px 4px 3px 0;}section>button:hover {background:#273044;}
    .switch {flex:0 0 44px;position:relative;width:44px;height:44px;padding:0;border:0;background:transparent;}
    .switch::before {content:'';position:absolute;inset:12px 4px;border:1px solid #ffffff99;border-radius:999px;background:#596171;}
    .switch span {position:absolute;top:15px;left:7px;width:14px;height:14px;border-radius:50%;background:white;box-shadow:0 1px 3px #0006;transition:transform .15s;}
    .switch[aria-checked=true]::before {background:#287aa3;}.switch[aria-checked=true] span {transform:translateX(16px);}
    summary {cursor:pointer;min-height:44px;align-content:center;}footer {padding:8px 18px 12px;color:#aaa;font-size:10px;}.notice {padding:0 18px;}
    .diagnostics-output{white-space:pre-wrap;overflow-wrap:anywhere;margin:6px 0;padding:7px;border-radius:6px;background:#171715;color:#c8c8c4;font:11px/1.35 ui-monospace,monospace}
    :host([data-motion]) * {transition:none!important;animation:none!important;}
    :host([data-contrast]) .panel {border:2px solid white;color:white;background:black;}
    :host([data-contrast]) .switch::before {border:2px solid white;background:black;}
    :host([data-contrast]) .switch[aria-checked=true]::before {background:white;}
    :host([data-contrast]) .switch[aria-checked=true] span {background:black;}
    @media(forced-colors:active) {.switch::before {forced-color-adjust:none;border-color:ButtonText;background:Canvas;}.switch span {background:ButtonText;}.switch[aria-checked=true]::before {background:Highlight;}.switch[aria-checked=true] span {background:HighlightText;}}
  `;
  return {version,start};
})();

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
      update(api){for(const row of api.query('.giveaway__row-outer-wrap')){
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
      update(api){for(const card of api.query('.productItemWrapper,.productCardWrapper')){
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
      update(api){for(const card of api.query('.search-result,.search-result__content,.product-card,.item-card,.list-view-product-card')){
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
      update(api){for(const heading of api.query('h1,h2,h3,h4')){
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
      update(api){for(const heading of api.query('h1,h2,h3,h4')){
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
