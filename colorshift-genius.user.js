// ==UserScript==
// @name           ColorShift for Genius
// @namespace      https://github.com/ExtraPotions/ColorShift
// @version        0.0.3
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           data:image/png;base64,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
// @match          *://genius.com/*
// @match          *://www.genius.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-genius.user.js
// @updateURL      https://github.com/ExtraPotions/ColorShift/releases/latest/download/colorshift-genius.user.js
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
      if(value) { position();refreshDiagnostics();panel.querySelector('.settings-search').focus(); }
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
    function refreshDiagnostics(){const out=panel?.querySelector('.diagnostics-output');if(out)out.textContent=diagnosticText();const status=panel?.querySelector('.theme-status');if(status)status.textContent=palettes[state.palette][0]+' · '+Object.entries(state).filter(([key,value])=>typeof defaults[key]==='boolean'&&value).length+' options on';}
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
      const header=element('header'),heading=element('div');heading.append(element('h2',{},'ColorShift'),element('p',{},site.name+' · Themes and page settings'));header.append(element('img',{src:site.icon,alt:'',class:'header-icon'}),heading);panel.append(header);
      const status=element('div',{class:'status-strip'});status.append(element('strong',{},'Changes save automatically'),element('p',{class:'theme-status'}));panel.append(status);
      const search=element('input',{type:'search',class:'settings-search',placeholder:'Find in settings…','aria-label':'Find in settings'});panel.append(search);
      const empty=element('p',{class:'empty-search',role:'status'},'No matching settings.');empty.hidden=true;panel.append(empty);
      const savedOpen=new Map();
      search.addEventListener('input',()=>{
        const term=search.value.trim().toLowerCase();
        let visible=0;
        for(const group of panel.querySelectorAll(':scope > .settings-group')){
          if(term&&!savedOpen.has(group))savedOpen.set(group,group.open);
          const title=group.querySelector('summary').textContent.toLowerCase(),titleMatch=title.includes(term);
          let matches=titleMatch;
          for(const item of group.children){if(item.tagName==='SUMMARY')continue;const match=!term||titleMatch||item.textContent.toLowerCase().includes(term);item.hidden=!match;matches ||= match;}
          group.hidden=!!term&&!matches;if(!group.hidden)visible++;
          if(term)group.open=matches;else if(savedOpen.has(group)){group.open=savedOpen.get(group);savedOpen.delete(group);}
        }
        empty.hidden=visible>0;position();
      });
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
    :host{all:initial;font:12px/1.4 Arial,sans-serif;color:#f5f5f5}*,*::before,*::after{box-sizing:border-box}[hidden]{display:none!important}
    button,input,select{font:inherit;color:inherit}button,summary{cursor:pointer}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:2px solid #9ad8f8;outline-offset:2px}
    .fab{position:fixed;right:16px;width:48px;height:48px;padding:0;z-index:2147483647;border:1px solid #ffffff55;border-radius:13px;background:#121722;box-shadow:0 5px 18px #0006;touch-action:none;overflow:hidden;pointer-events:auto}.fab img{width:100%;height:100%;object-fit:contain;pointer-events:none}.fab:hover{box-shadow:0 0 0 2px #9ad8f8}
    .panel{position:fixed;right:16px;z-index:2147483647;width:min(300px,calc(100vw - 24px));overflow:auto;overscroll-behavior:contain;background:#333;color:#f5f5f5;border:1px solid #777;border-radius:16px;padding:8px;box-shadow:0 12px 30px #0006;pointer-events:auto;font:12px/1.4 Arial,sans-serif}
    header{display:flex;gap:10px;align-items:center;padding:2px 2px 6px}.header-icon{width:32px;height:32px;border-radius:8px}h2{font-size:15px;margin:0;font-weight:800}header p{margin:2px 0 0;font-size:11px;color:#eee}
    .status-strip{background:#62404c;border:1px solid #b16480;border-radius:9px;padding:7px 8px;margin-bottom:5px;font-size:11px}.status-strip strong{font-weight:600}.theme-status{margin:1px 0 0;color:#f2e9ed}
    .settings-search{display:block;width:100%;max-width:none;min-height:30px;border:1px solid #777;background:#252525;border-radius:8px;padding:5px 8px;margin:0 0 5px}.settings-search::placeholder{color:#eee;opacity:1}
    .settings-group{border:1px solid #777;border-radius:9px;background:#444;margin-top:4px;overflow:hidden}.settings-group>summary{list-style:none;min-height:32px;padding:7px 8px;font-weight:700;display:flex;align-items:center;justify-content:space-between}.settings-group>summary::-webkit-details-marker{display:none}.settings-group>summary::after{content:'›';font-size:16px;line-height:1}.settings-group[open]>summary::after{transform:rotate(90deg)}.settings-group[open]>summary{border-bottom:1px solid #666}
    .row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px;padding:6px 8px}.row+.row{border-top:1px solid #ffffff18}.row>span{min-width:0}.row small{display:block;color:#ddd;font-size:10px;line-height:1.4;margin-top:3px}.row select{flex:0 0 108px;width:108px;min-width:0;min-height:32px;background:#292929;border:1px solid #999;border-radius:7px;padding:4px}
    .settings-group>button,.settings-group details>button{margin:5px 0 6px 8px;border:1px solid #888;background:#292929;border-radius:7px;padding:6px 8px;min-height:32px}.settings-group>button:hover{background:#555}.section-reset{font-size:11px}
    .switch{flex:0 0 44px;position:relative;width:44px;height:44px;padding:0;border:0;background:transparent}.switch::before{content:'';position:absolute;inset:12px 4px;border:1px solid #ccc;border-radius:999px;background:#626873}.switch span{position:absolute;top:15px;left:7px;width:14px;height:14px;border-radius:50%;background:white;transition:transform .15s}.switch[aria-checked=true]::before{background:#287aa3}.switch[aria-checked=true] span{transform:translateX(16px)}
    .settings-group details{padding:6px 8px;border-top:1px solid #666}.settings-group details>summary{min-height:32px;padding:6px 0}.diagnostics-output{white-space:pre-wrap;overflow-wrap:anywhere;padding:7px;background:#252525;border-radius:6px;font:11px/1.4 monospace}
    .notice:empty{display:none}.notice,.empty-search{padding:5px 2px;font-size:11px;margin:0}footer{padding:6px 2px 0;font-size:10px;color:#ddd}
    :host([data-motion]) *{transition:none!important;animation:none!important}:host([data-contrast]) .panel,:host([data-contrast]) .settings-group{background:#000;color:white;border-color:white}:host([data-contrast]) .switch::before{border:2px solid white;background:black}:host([data-contrast]) .switch[aria-checked=true]::before{background:white}:host([data-contrast]) .switch[aria-checked=true] span{background:black}
    @media(forced-colors:active){.switch::before{forced-color-adjust:none;border-color:ButtonText;background:Canvas}.switch span{background:ButtonText}.switch[aria-checked=true]::before{background:Highlight}.switch[aria-checked=true] span{background:HighlightText}}
  `;
  return {version,start};
})();

/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'genius';
  const icons = {"genius":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAAsSAAALEgHS3X78AAAfiUlEQVRogY16eXQc1Z2u/sgkA7Zk9VZV99a+dHX1LrXUakmt1r70KnVrl6x9s7zKC5Y3HMISbDYbgm3Z2PIiG2xjEhMSkvAIS4BAJkwmYd9fMpm8vDCZBDBZMGD0zr1VLclk5px3znfq3C5Vt77vd7/7u7/7687pSBPtLTrItmaiOZqbTuT3dqmrJmqnptLr1zevW5dasya1Zm1yLR5Mrk5OTiZXTSYmV6cmJ5MTE4nxieTYeHJ0LD46nhgdS4yMIgyPJAaH4wND8f5BhIHBeP9AbGU/Rl+sty/W3Rvt7o129SB09kTbuzA6o22d0db2aMZArKUtmmppqKoJen2crJgcGul0s5qL1lyMw8k4nGxOewvR1mJrbyFbU9bmWN7EWOWdd9924uzFk2cvzp4+d2zurIHT5/DLc9nB2dnT5xHm0M3Z0+ePzSEcPXX2KHr5IAZ64Njc+dnTDx4/c0GH8acz6Hrs9IPoXWhwYfb0heNnHpo9feGo/jnoih9A733o5NmHD9x3as2GtYVFDlG2YA2sw8mqmiGAzCStrSniGzdvOX3hR/ccvHvzptahgYKV3fbeLqW3097Tae/usHd3qJ1t9o5WtaPN0d6qtWe09oyzLeNszWiZFi3d4kw3O5uTjlRSS6VcqSRCMuFKxF3xuCsec8cQPLGoO9rkbmxyNzR66hs89fUIdXWe2jpvba23utZbVe2prPJGqnyRSl844g1HfJGqwmiienLdmiMnHjg6d76lLSXK1qwAJgc7x9bWTN6xb8+pc49MbUi1Jk0t8dx0wpROWtMJa0vC2hy3pmLWVNSaaLLFm2zxRluskYg22JrqbY11toZaW32Nra7aVlttq6lCqK60VVUSVRGisoKIhImKcqK8zFZeZisrtZWVEqEQEQzagsVEcTFRVEQEAkRhwFZQaPMXEH4/4fOTXi/p9pAuN+l0kZqTdDhJRbUKksnj5Tds2XLu4mN9Q/28aFGdnOJgcjrSZDqx4sZbtpw698jocHFL7JrONNmRBm0tVGsz1ZqiMkmqJUE1x6lUHKRiIBWDiRiMNyHEGkG0AUQbYFM9bKgD9bWgrgbW1sDaaoSaarqqko5U6ICRClgRhuFyGC6ny8pgaSkdCtElJXSwhA4G6eJiuqiIDhQxhQGmoJDx+Rmfn/X6WLcXweVhXB5O1SDD5a8c7Dv7nR8l0wmWt9o1Licdz1s1UXXmocemNsTTsWu7WgFe1mRrM5lJkekk2ZIgm+NkKkamYlQSI9FExZqoWCMVbQBN9QhZ9qC2GtRUgeoqUF0JqiJAJ42voCIMy8tAWRkoK4WhElBSAoJBEAzComJYVAQDRXRhISwopAsKaZ+f8fpoj5dxexmXh3a6ETQng23D0Uz+xq3TR0+d9/hUUQY5mWT+Xffcsf/eu1pTeZ0ZqiNNYlORevjTWfaIdxRRj2PqmD3VWE811lGNdaC+ZpF9VQShsgJEKkBFGITL8bUM6OxLS2EoBA32xQBTh4UBiNlDfwHtK0Ds3V7a7aEN9tmcoyKwkh24vcqxuQfHVq+mWUvOwErXybMPb1gfzyRyOzMAUU8ZQOyxeZJRKhkFiSiIN1JxTL2pHjTWUw11VH0NYl9bgwNfmaWO4q0LoLAGiD0Ds+xhMAiL9cAHYCCAol5QgNn7aZ29yw0xdPY0Yq8h2DVGdXI0a55cv+Fbh09KdjZnw/r47JkL/T1aa8rS3kK1pshM0nCOYf0YEpCILsZeD3xDLWhYaptKUBkBEcSYqsBRDxaD4iKqoMAWCJDhcro0BEMlS9gX04EiOhCgC5GARfYeLwq8DuQcF+NwGdTtGqM4GLvGsbytrrH22OmHgqXFOdPTPfedON3ZSrc1E23GqiXTCWPhovBj0+vsow3I94j9gumrqJqqrAAc+0gFKCsFfj9INJEnD6oPn6+PxwSn0xoMgrJSugSzD+imD9AFAbg09h4vDr/BnnG6mUUBDgTFwSoOTpChL+A5eup8fbQpZ9t0z5ETc50ZqAvIpCgc/mzm0ZesbvpG0NQAGutBQy0Kf73BnlowT1UEBb6wkKqqBLfsZH72KPvez7Url8c/+P3g/tvLSktpp4sIBmEwiAOP1iv0I/bQ56c9uu/xqkXA7PGGtcheVhlZZWWV4yXo8jruO3m2MR7P2TbdfeTEXEcGZpI25HsUfrIlTqb02Gedk/U9Tjg1yPq6eWqrQHUEVmH/BIupkhJqapJ+/AL39k/5l57gXvmJ9sl/DX7xt4n5K6vefqlj4/oCt5t0uaniYqYQ28bvR7FHAryMvmp19ppLB6s6Wd05ioOVVUays5LKcRJ0ejVDwPS27iPH59rTMJOyZZJUeiHrI+uDBd831VPGqq29ij32DywrpYoCZH83vDDLvvkc/9pP+F8+Lvzqce71Z7VPPxi88tHYZx8Mz18en788/vRjyfY2h6QQbg8IBJgF5yDzGAKyztHTjsZi56DwS3YswM5xItQ8+gwkcrZtQxZqa6EzSUIXoO9ZyRiKvQ5kHj38tZSxW1VD3fqRMCgKUMkYmLmDfeUp/q3n+F/9GOHlJ4Vf/Zh77Vnn5T8NXPlo9Mql0c8/Qpj/fNXfPhienakuK+cFifT4mCWrlsFgNTerOVHsEXuNRb5HzmElOysqrKhwrEg7PI77Tp1DAqbxGmhrptNJIp0EC5uubh48A9j6ddnw14I6lHZgdSWsjICmenjDNPPCo/y7L2DST/AvP8m/9ITwqyfE157h3/u587NPRuc/WfXZB8NXLo1duTT22YejVz4enZ+f/N27vbu2l7g9lNMN3cZuteB7gzpClv0SATwr0JpHu+/UuXosoPfw8blMCrYkyHQCoNhHl5pHZw8aUN7Uw4/Ms5A0D+xlf/dL+e3nxV8+Lrz8pPDyU8Ivfyy88rTw7gvCk9/hJofp3TtL3v91//z85JWPRz/7YOQLXcYHo1f+Njw/P/HY9wfcXl5zwQXbOJyoSjOoY8iGc1DsBQSeEWiHWzt66lx9LJFz3XXdh4/PpVM0KhbiMJkNvB77KHI/Wrgo7eDYZ7M+VRlBMtqSxK6N4MmH+Lefl179ifDSE8LbzwsvPsbfvIMpK4UOJ1TsRCTCzx2r+/sHI/Ofr7pyaeyLj0e+uDT86Ydb5i8f+/dfzxaXyKoDLPre2LAwdcQeUUdQWMRe1gUwqgvPQCyJBBw5PpdOMskoifbaJrTX6rHH4df3rAXr47SD/ROpQAIycSLRaOtoJu68gf7Zo/xrz4hH9zOxJuDQgL8A6vWZywMEydaaUZ95vGX+r6NXLq37/C/7P/3LhfnPv/fem4cCxYrdAXGds7jdorRzlW0Qe15GAniZp3lGNWYgmbPlup7Dx+daEkwiKyDWQOoblr5ws6lz0TxV2P0VYZT4Mwmio5loTRDROttIDzncCz1e4POj3aowAP1+6PVBnx/6/bRip1jePHOgdX7+25c/vvgZEnDxf791OFAs21XoQL7XBSz6HrG3Z9lLHKdD5iHP2J1IQB0W0Hv4+KlUgkYCmoCR8lGhhtnr5tGTZrZWi+BCLVyOtt7WBNGWJNpSRHszkY4RJUGqqAix16sDb7a2cXtofwHLcKat17XOz//g8qVzeAYefu/NmYKALKtQz/d6xsQp33AOYi+zvIypixwr8pwkAI6RNe2+k+fqogldwFwqzsQayVgjbMLsm7Jlps4elwyYPV67FRWgopwqL6UiCwIw2lNEJEwVFKLSEu+vEO2vxt6EdlmaNe3a2To//73Ll85/+pcH5z+/+N6bh/wBWbLT2PSMgvZaPeUj04sKJ2Ln6OFnRY4ReUYUKJZRNOeRE2dro8YMzCVjDPY91Ot7I+3ULS3XIKo0cfhxgUmVlaJKM7NEQFuSCJdR/gJU3ni8wOOFbg9KkS4PWqAuDwMZ047tVwl4980Zf4EsKRD5HtlG360Ynb3ue26BvcDRAk8LAsmwiuY6cvJsTVMiZ8sWJCARZZoayKUZM5t2qBrd91nqFWEqXE6Vl1GhEKqTMwly6QyUl6EF4EMCoNuL62FUUdIOJ+10s4Ax79iemZ9/BFvo/PyVi++8MeP1S6JCK8gzxl4rINMjAby0NPYcI/CQNwTIDtd9J8/VNCVzNm/uOTw7F2ukG+tIzB7U11J1NVRd1jkL7MPlVLgcWb8cnUtAKATKy0E6QbQmEXQBZSHg9aGFq/ve6UbUdTjdDGTNeAa+e/nSWSTg8++88/ohDxIAJTsjKjp0AVfFnhV5nT3kBciLBM1KDn0GsICZ43PRRqa+ltTZG7sVcg6sroIo51TAiiz1slL9YIXOhGWlKI3q7NNxMhMngkFK1aAXV8V67FUNAXdy2DyzZXo6PT//o8sfP/Tpx2d1AW6fJMgQr1dGkPUly/ISy0kspo7Y0yIKPOQFwAmAF200K6quwyfOVjciAb0zs3PRBrqhltSp19Ug2xhFMsqYMIJNX16GfK/HPhRCZ8JQCKTjRCZBpJqIrjS5ZQ21dS3ynuqkVY3Ri0qHE7FnBVqU6dEB5umHlfffWfnJhyeu/P2R+SsX3379gMsr8RIt2tmr2IuL7BlRoAVhUQAn2mhOQAIeqGlK5WzCApoa6LqarACcMatxzqmKoA1LZ6+HvzQE9INVcTE6HyYbibYkuW6UunUndccN4M4bwG3XU6uGqFAIigpKi5KdoTk6GWcePMb95l/Fd38mvPIk+fYLnv98b8P85YfeeeOo5hY5kUZL1mC/ZNUi9ry+cHXzUJxIsaIVcoLddQTNQCpn4yYsoJ6pqyb1vRa3FXDO0fN9GOjssQBYGoIlIXQsxPkeTPSTt38d7LsR3r4b7L0e7Lme2rOLuvMG6ubtVF8n9HjpsjLm3r3cO88L//4L8fVnxNefFd/8qfzq09zLT1IfvBt58ZlJ2SFxEi0q7FWmF1DOYRB1BJ095AwBFsDydpRGkYU2buo9PDvXWMfUVJF6kbx4NjfY64Ao/KgjAoMlsBgL8BeAeBPYMUXtuxGFf+/1Bm7dCfbsAncgGeCFHwi//5X41nM6dfGNZ8XXnhF+/aL83r8oR+8C4XKSFdFu9eVkb1A3nLNgHooVSVa0UCwrO401gGfgdH0tW11JGYFHtoEVFTCMmyKYOoLRUwga7ItwO8Tphl4fSCfA7i1g/83g9q/DPbvAnuuRgJu3gXtvhW88K77xrPTmc5j6T8T3fib+9hfCd+eETAtLMRzFItssyTZ64HG+57PUeRFwCCQrEgyCCQnQsjOwEVmoroapqqRQiV8BKhZbaLgPpXdEQog9PtGiVlQggEudAlQy+Py0XYM+P+huA7fshPtuBLfuAt/cCW7ZAe6+Gb7ytPDW8+Jrz0hv/VT8j38Tn/uesGqE4USagDhjyiyL1quxZBmRowWO5jnIIdsAFHhEnWIFPfYELdpo0UQaAqoaEzlTWEBtNVsZoXDs9Y0Wd9FKKWwbEApd5RzEHnfRUK2Gz+NeH+N005KdLi6GYwNw725wxw3wpu1g/83w5aeEN58Tf/sL8dVnpJt3cm4vY6EYXkZVGodypV7hLAk8zveA5wHHG+yzziEZxB4JIBhW0o4cf6CqIZGzYQoJqKlmKiPUAnvcijLyfSiktwGNdkhhwCjU9F6I0QjB5ymXm5FVWlDocBhumIB7rgf3fJN+63npNy9Ks/dwlRHGChhGQIfapY5nMWiBg7wOLACxFzB1gcyyJxjRCgUrFPIJBq+BB9AMbNi4EgmoYisqKOychSW70EhDKb9oKXv/0jbOQr5n9D1L1RheZgSFrquhb9lFf+8035FhSYYBLCPaDccv8Gay2QZymLruHLReMfslvrfRiL0F8IYASZs5/kB1QzJnCguoqmT1SmGBvWEbo4uWbV8WQN/SJlS2A5Xt3tB2B43rYZT+IYfOuIqDsQFGL2+Mgn6RN8cIuEZA8eZw1HkKURdw4AWDPaIuWiBvAQjZGdAO6xZaP7Xy0OxcZSVbXrbYxPxSB1MPfAGyjV4kowSPm1CMXqg5nHrviVZUerGixC7nJVTW66WBUR0YdkeOh9gwWABmz/J4vSL2KOp64GnRAgQL4HRYAW9YaEHAzOzpSAVbipYsHfof2Ov9M33JGt0/3ETIOodZWs2jqiZbUQrIM3ppwC4EnuY5mufpq6gLBnVGIDAW2WPnLAALoLNZKJmzfsPKQ8fmwuVsKGTsUwvsA19ij6jj+j7bNEbW19uuRt/PCLyeH5eUZUvtrgd+cbFSHE+yPLmEup4rselFK7iK/VUWOnEWzcDa9SsPHpsrxwJQpsfs9bZ9tnXM+AtY/fsSj4/1GF+ZsLiBw2kuTnVyqpNXNF5ROVnlZZWX7AiiwouKIMgCLwmcJLCSwIoCK4qMINKCCAURVQeCBHkJcAgUJ1GsRBqQCUa20fLC2v1HATOz96ONDAs4VV7GlJQAvcjBzkHdBLfX5nDk29V82Z4vyfminC9K+YJo4gUTy5sYzkSzCJAxQcZM0WYSmghgJoDZRpmtJIKFtJgJs9lmNtksJps132pdYbXmWax5ZmsuxnKzDcFkuzbfwDUrbNesIP5ZR57t2nwizwr17GkF6GqjBRPJcFgAmoF16/sOHZsrLWWDQVBSwhQVw+Ji2u8nXW5Lda2/a2Xz0Gjv0OjKwdGVQ6N9Q6P9Q2MDQ2MDgyMDAyMDg6NDAyODGEMDI8MDI8P9w0N9Q0P9w8P9wyN9GP3Do33D6M29gyO9gyM9gyM9A6MI6BPHewfHegbGegbHewfHewbHugfGuvpHO1aOdPaNdfaNdvaNRpvbHd7AchNppji0rCEymJlksQC8iNcgAadCIbaoGBQXw2CQ8fpsZeX2Lds2X7fzxt7htS2dgy2dg80dA6n2/mR7X6pjINnWl2zva+noa+nob+7oS7X1JloNxDM9sXRPLNMbz/TG0Lh7AdGW7mhLV7S5K9bSHU13NbV0xY37XQvP4Dtd+A5CItPTPTCxdddNI5NTFKeYSAZvCIKZYjkFpVFkoTXr0AyUYAHBIOPzEZVV7hv33NbY3G0GYq6NWW5lllvoq2ClrzXDnH8ic76C8JVlIHfhGSvGwjj7lmVm+qt58Kt54Ev3l1/95DILXGaB+kC/k2ulzUBs6xnetvsWIChmwNlwMccpzgUB/YdmT5eUsEVFaLstKKB233RjuC71tRUEyakU71gKkndQgsPKqFDUrrsu8v2L8ZPHGqvrC3JtChQdUHQQLHoLEPGTeEBwKhQdeaT94oX48aON15hliP6qf7JK8Sp6mFVJXs3eV0lOXfKAg2DtX82ztXT0r1p/3XILRbASmgG7C+3EjcmcybV9B4/NIQHF0O029fY1j6657pp8EggawdoROHzFIDm7DQ9+9Gjiyt/6fvhw/J3X2+e/GOjtK77GJC23ykBQTUDJtUkEazcB5VqzZGWUFYSSa5N37KhYPxW+1iJZaUX/NDNUrIyy3CpRvN0M5GvNIsEpBItgY5cO7CSv5hHsxm1fD5RW5tmgGfCc4jSy0OSavoNH54JBNlAEPR7Llm1bSiKNKwiO5FSD/RIBQFCvyZeGx0Pz80PdvUU5OezyfOHmmyprG/35QD54b+1rv8g8/1SyotpbEvY8/oPE6RONv3u7/djhhlybdPtt1Zu3VKTSgacfSxKsvSTsefaJlCfg2jAV/rcXMi/9PDM4VJxnQ2J06gsCbKxC8upyC53I9HSsHFlmIiwQCzh+PzpSTqzuP3j0VHExW1gIioqY7bu/LruKLFBcDP8SAVBQv5IrHjpY9+H/7bbQSqjCc/+ppgPfqku3B7/xjcilP3Un04UPXYi9+lImniqcnx88fKj25puq5ucHq+t9Tz2VPnN/dGi05PNPBmys0hgv/OzvA22dRe//YeW+ffW7doVXry1FU7f47/SJQjJIzr6CYEsi9cOTG3KtQBeA1kATEtB34L6TRcVsQSEoDNDbdu+2e4JmIBKcSnDIM18S8E+54p13VH/2US/F2yuqfY98O/Hp3wce/HbikYup//xt55m5hid+GH/2ieb+weDf/tireZ02Rvn7f61s6yj64XeTJ4829A8G//J+bx4hh6t8n/55ZaTGd8/dde//puNfnmnu7QuuIGTsosX/qGvQBZTXRAfH1y03U1YkwIUXMZ6BA0dPBYqYgkLa6bJs2roxUt+cZ2PQ6rmaPcHaKd6ea5PrGv3zVwbvP92g+ZzlVd5P/9J7657KAwfq/vAfnYES19hEybZt5fHmws8/Whks99jd2uU/96bbAv/r+4nTxxu7+4rnvxgoCLq2bAnPf9JX11TQN1gSTRR89+HUb37dZQayjVkqwDASxTuWmWFn31iytWeZmbQYa+AMWgMTk/2Hjp0qDDD+AlpzWlLp2qnpG5ZbIMo5+jK4GiRvX26Tp6bK//rH3r/+seezD3te/deWgqDL5Xe+8mLLO69k/vTb9kP31tQ2Fvz1jz2BkFt2aZf+0N2cKfzet2Nn55pEh+P/vNv5we+7fvHT5j//rjOaKHz2yZZ3Xul499W2e++pzbVKaM4X/IPHJK9aoETx6vTuWyTNZ6Y4M+D1ahT1hcYnBw4ePYV/IAL8BazqsFy3bWtn/8Q/ryDNQCCRi9SlwL5Sl1tlxa01JQorqn02RsmnZBOlQFFNNBdUVHtzbTItOQIhNxDQpBWG0FHN6Xc6/c48QnF4taZ4geDQ/EE3gdKakmgprK73mygcfjzt+P9iAYw9j2BzbczazTtaOvqWmUmSlc0Ux8rOGSSgOWdsFVrEfvQTC+Dzsy4P9Pq5bddfP7F+WvOHrIySTwr51FUwA9FKS7k24Wt53DX5nIkSzFA0QyGfFL62gr/GxFugmE8Ky8y8iRJMlLDcwudTYq5NyLUJVlrKswlfW8GtIIXlVsEE0JNfzWOvyefMQDQDwQTQW0xAxBBITi0qq9my86be4VUrbJBgJYIR8U6MLITK6dEJLKCQRU1ZP+P1s043dDip3v7O7btv2LB15+qprauntq7ZuG3Nxm2rN06v3ji9ZuO2tZu2r920DUG/g15uX7ipP7xu8441m7av2bh93eYdazfvQNdN21dv3LZ28/a1m7ev3jitP7l6anr1xq34k/F4anpyanpyg4ENW6+fmr6+oi6WZ9XZSzZGNAOONfaBVM7QaO+h2dOFAcHjhV4f40FnRVQti5LF4aTDkcKa+tLq2tLqOnStqi2rqi2N1JRVVJeFK0vLK0vLKstLI+WlkXCoIhwKh4Pl4WB5RbA8UlxeWVRWGSiNFIYihaWVgdLKglDEH4r4SzCCFb5ghbc47CsO+/DYZ4y/DMVdaKLYFTaa5GSCRezxTsxJTt+RE2craqM5qZbaE/d/p7KmSHMSXj/rNn5mxLq9vNPDKQ4gq6SiUjICkO1AskPRTosKLcg0L9GcxKCjlsjSPIv6Odl2iN4L0et7/I8lGy1Z0PFK1K2yABPgTZQBM8WbAbqaKE6HBQokJ1O8QjDIPEgAJ+fZYHl147G5BzV/MCdYIh89dX54fEhWTF4/585+XY7BuTyc08MjuNFVc/MOl+BwCapLVF2SXZMUTZJUSVRlwS4LdoVXFP1cg78idbCSxkgaI2u0qEFRowRcU6FkYP+fQKGrsgiUjpBzdNgYkeTkZWZy1Yatt9192Ay4HNVh2rR188zs/T4/73RDj5czBLiRAKeb09zoqg80F+9w8iqCaHeKmL0oqpJol3hF5hWFkxX9q11GUmlRpXGFBwQVoEJQz2PZDKNvsexi1bDkjvxlIOoG+3yCsbsLj595qKWzb7mZynG5yVCZNnv6wtadOyTZ7PIwHh9vxD5LXWfvcOngVZdgdwp2TZQdIhJgFwVFFgwB+Ns5XYCkQlHF7LM15sJmsmSTIv4boPPkP8iQKA6V0yaSvWnv/r37ZwhWttJijg/n/uZM9NzFx9Zt3KDYCdlOON2cyyu4s3Dp8AhOj6C5Rc0tOVyS3SkryEKy5FAkVRFVu6iqgl1FFlI0VtZYSaMlZB4gaIDX9OL5/wN23UgUn72iO4qNEXOtgGCk6d23zJ55yB0ozScYkpNzPF7a62ftdktHd/r+C4/uuevu2oaI3QEEyYphESQLL1l40cKLVk6wsoKV4QmaIyBLUCxBMSTJUAQENgisAFoANFPQTDH5JLOCYFbYmDx0JMJHE3RAgRh4YIbLzSB7ZykAghkDPQaWmallFmClxUh9fN+BY/edOh8oq8qzQQqrykE/ePEx6JfJdmt1Xenefd86c+GRfQeObNy6dWTV2PD4KMbI8PjoEMbg2MjA6MjA6NjA6Fj/yGj/yFj/yHjfyPjKkfGVwxPomDs00Ts43j043j0w3jUw3j040dU/3tU/3omBxgP6y7HO/rEuhIWxMfgSugbG127acee3jp544OKWHTfKTv8KgiY5PS9JugD0y1K3l1NUUnWAWKJu0/T03n3f2n/wyL4DR+669/Bd9x7ed8AY33HPjI7b75m5/e6Z2+8+hDFzm479M3v3H9q779DefQfRYP/MnrsO3nrXwT37Du3Zh17qDxiP7cd37j688FeEfTP47fozBnZ/867BifX+YHgFQZsojmRlWzYv5bgRdSQAtZdRumQlheAli6xSqoZ6nQjGjwbRL0gk9IUuJygsr/CcjLo9jIigt3r0dqye+600ggWiugMDbQL4pd7r/AfQV+0PqJ0IDeST7DIzlU+yBCvr7BcFuBBvQ4DTzaLl6+FdKOVzDheLgH/AY+QfJ2/XBEUTZIcoO9AOINglTpY5WWZlhZEUWlQgLuCyufKqc0k2/3z5zLU4ZmQbzj82xBIPEEs0QJ7JBt64iQf/D0rJdq7KudSzAAAAAElFTkSuQmCC"};
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
