// ==UserScript==
// @name           ColorShift for TCGPlayer
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.0.3
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           data:image/png;base64,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
// @match          *://tcgplayer.com/*
// @match          *://www.tcgplayer.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-tcgplayer.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-tcgplayer.user.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
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
  const siteId = 'tcgplayer';
  const icons = {"tcgplayer":"data:image/png;base64,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"};
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
