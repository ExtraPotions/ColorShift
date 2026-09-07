/* Theme Picker 3: shared settings, lifecycle and isolated UI. CC-BY-NC-4.0 */
var ThemePicker = (() => {
  'use strict';
  const version = '3.0.0';
  const palettes = {
    original: ['Original'], lightGray: ['Light gray','#3f3f3c','#4a4a46','#333330'],
    darkGray: ['Dark gray','#252522','#2a2a28','#1c1c1a'],
    navy: ['Navy','#1a2332','#243044','#141c28'], black: ['Black','#0a0a0a','#111111','#050505']
  };
  const accents = {site:['Site default',null],blue:['Blue','#5eb0ef'],green:['Green','#63d989'],amber:['Amber','#f0c14b'],violet:['Violet','#b57aef'],rose:['Rose','#f5b0c8']};
  const shared = [['brighterLinks','Brighter links'],['hideAds','Hide ads / promos']];
  const accessibility = [['reducedMotion','Reduce motion'],['highContrast','High contrast']];
  const memory = new Map();
  function read(key, fallback) {
    try { if (typeof GM_getValue === 'function') return GM_getValue(key,fallback); } catch {}
    try { const v=localStorage.getItem('ge-'+key); return v===null?fallback:JSON.parse(v); } catch { return memory.get(key) ?? fallback; }
  }
  function write(key,value) {
    memory.set(key,value);
    try { if(typeof GM_setValue==='function') { GM_setValue(key,value); return; } } catch {}
    try { localStorage.setItem('ge-'+key,JSON.stringify(value)); } catch {}
  }
  function element(tag,attrs={},text) {
    const el=document.createElement(tag);
    for(const [key,value] of Object.entries(attrs)) el.setAttribute(key,value);
    if(text!==undefined) el.textContent=text;
    return el;
  }
  function start(site) {
    const defaults={palette:'darkGray',accent:'site',intensity:'normal',fabTop:null};
    for(const [key] of [...shared,...site.options,...accessibility]) defaults[key]=false;
    const state={...defaults};
    function valid(key,value) {
      if(key==='palette') return Object.hasOwn(palettes,value);
      if(key==='accent') return Object.hasOwn(accents,value);
      if(key==='intensity') return ['normal','soft'].includes(value);
      if(key==='fabTop') return value===null || (typeof value==='number' && Number.isFinite(value));
      return typeof value==='boolean';
    }
    for(const key of Object.keys(defaults)) { const value=read(key,defaults[key]); if(valid(key,value)) state[key]=value; }
    if(read('palette',null)===null && state.intensity==='soft') state.palette='lightGray';
    let host,root,fab,panel,notice,style,siteSheet,open=false,frame=0;
    const controls=new Map();
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const contrast=matchMedia('(prefers-contrast: more)');
    const api={state,read,write,element,open:()=>setOpen(true),notify:message=>{notice.textContent=message;},set};
    function set(key,value) {
      if(!Object.hasOwn(defaults,key)||!valid(key,value)) throw new Error('Invalid setting: '+key);
      state[key]=value; write(key,value); apply();
    }
    function setOpen(value) {
      open=value; panel.hidden=!value; fab.setAttribute('aria-expanded',String(value));
      if(value) { position(); panel.querySelector('select,button').focus(); }
      else fab.focus({preventScroll:true});
    }
    function position() {
      const top=Math.max(8,Math.min(innerHeight-56,state.fabTop ?? innerHeight-64));
      fab.style.top=top+'px';
      panel.style.maxHeight=Math.max(100,innerHeight-24)+'px';
      if(open) panel.style.top=Math.max(12,Math.min(top-panel.offsetHeight-8,innerHeight-panel.offsetHeight-12))+'px';
      // The picker owns its location. Only known companion launchers yield.
      const anchor=fab.getBoundingClientRect();
      const occupied=[anchor];
      for(const other of document.querySelectorAll('#pfh-fab, .pfh-fab, #adpb-settings-fab')) {
        let r=other.getBoundingClientRect();
        if(!r.width||!r.height||getComputedStyle(other).position!=='fixed') continue;
        const overlaps=box=>occupied.some(o=>box.left<o.right+8&&box.right>o.left-8&&box.top<o.bottom+8&&box.bottom>o.top-8);
        if(overlaps(r)) {
          let x=anchor.left-r.width-8,y=anchor.top;
          for(let n=0;n<50;n++) {
            if(x<8) { x=Math.max(8,innerWidth-r.width-16); y-=r.height+8; }
            const candidate={left:x,right:x+r.width,top:y,bottom:y+r.height};
            if(y<8) break;
            if(!overlaps(candidate)) {
              for(const [k,v] of Object.entries({left:x+'px',top:y+'px',right:'auto',bottom:'auto'})) other.style.setProperty(k,v,'important');
              r=candidate; break;
            }
            x-=r.width+8;
          }
        }
        occupied.push(r);
      }
    }
    function apply() {
      const colors=palettes[state.palette],accent=accents[state.accent][1]||site.accent;
      siteSheet.replaceSync(site.css(state,colors,accent));
      for(const [key,control] of controls) {
        if(control.tagName==='SELECT') control.value=state[key];
        else control.setAttribute('aria-checked',String(state[key]));
      }
      host.toggleAttribute('data-motion',state.reducedMotion||motion.matches);
      host.toggleAttribute('data-contrast',state.highContrast||contrast.matches);
      host.style.setProperty('--accent',accent);
      site.update?.(api); position();
    }
    function row(section,label,control) {
      const line=element('label',{class:'row'}); line.append(element('span',{},label),control);section.append(line);
    }
    function section(title) { const block=element('section');block.append(element('h3',{},title));panel.append(block);return block; }
    function toggles(block,options) {
      for(const [key,label] of options) {
        const button=element('button',{type:'button',role:'switch','aria-label':label,'aria-checked':String(state[key]),class:'switch'});
        button.append(element('span',{'aria-hidden':'true'}));button.addEventListener('click',()=>set(key,!state[key]));
        controls.set(key,button);row(block,label,button);
      }
    }
    function action(parent,title,fn) { const b=element('button',{type:'button'},title);b.addEventListener('click',fn);parent.append(b);return b; }
    function mount() {
      if(!document.body) return;
      if(document.getElementById('theme-picker-root')) return;
      host=element('div',{id:'theme-picker-root','data-theme-picker-primary-control':'true'});
      host.style.cssText='all:initial!important;position:fixed!important;inset:0!important;z-index:2147483647!important;pointer-events:none!important;';
      root=host.attachShadow({mode:'open'});
      const sheet=new CSSStyleSheet();sheet.replaceSync(UI_CSS);root.adoptedStyleSheets=[sheet];
      fab=element('button',{id:'theme-picker-fab',type:'button',class:'fab','aria-label':site.name+' Theme Picker settings','aria-controls':'theme-picker-panel','aria-expanded':'false','data-floating-control':'primary'});
      const icon=element('img',{src:site.icon,alt:'',draggable:'false'});fab.append(icon);
      panel=element('div',{id:'theme-picker-panel',role:'dialog','aria-label':site.name+' Theme Picker settings',class:'panel'});panel.hidden=true;
      const header=element('header');header.append(element('h2',{},'Theme Picker · '+site.name),element('p',{},'Customize colours and site behaviour.'));panel.append(header);
      const appearance=section('Appearance');
      for(const [key,label,values] of [['palette','Theme',palettes],['accent','Accent',accents]]) {
        const select=element('select',{'aria-label':label});for(const [value,[name]] of Object.entries(values))select.append(element('option',{value},name));
        select.addEventListener('change',()=>set(key,select.value));controls.set(key,select);row(appearance,label,select);
      }
      toggles(section('Page settings'),shared);toggles(section(site.name),site.options);
      const disclosure=element('details');disclosure.append(element('summary',{},'Accessibility'));toggles(disclosure,accessibility);panel.append(disclosure);
      if(site.actions) { const group=section('Home sections');for(const [title,fn] of site.actions)action(group,title,()=>fn(api)); }
      const tools=section('Settings');
      action(tools,'Export',async()=>{
        const json=JSON.stringify({themePicker:true,v:3,...state},null,2);
        try { await navigator.clipboard.writeText(json);notice.textContent='Settings copied.'; } catch { window.prompt('Copy settings JSON',json); }
      });
      action(tools,'Import',()=>{
        const input=window.prompt('Paste Theme Picker settings JSON');if(input===null)return;
        try {
          const data=JSON.parse(input);if(!data||data.themePicker!==true)throw Error();
          const entries=Object.entries(data).filter(([k])=>Object.hasOwn(defaults,k));
          if(entries.some(([k,v])=>!valid(k,v)))throw Error();
          for(const [key,value] of entries){state[key]=value;write(key,value);}apply();notice.textContent='Settings imported.';
        } catch {notice.textContent='Import failed: invalid Theme Picker settings.';}
      });
      action(tools,'Reset defaults',()=>{if(!confirm('Reset Theme Picker settings?'))return;for(const [k,v]of Object.entries(defaults)){state[k]=v;write(k,v);}apply();notice.textContent='Settings reset.';});
      action(tools,'Close',()=>setOpen(false));
      notice=element('p',{role:'status','aria-live':'polite',class:'notice'});panel.append(notice,element('footer',{},'Drag to position · Alt+G · Esc · v'+version));
      root.append(fab,panel);document.body.append(host);
      style=element('style',{id:'theme-picker-site-style'});document.head.append(style);
      siteSheet=new CSSStyleSheet();document.adoptedStyleSheets=[...document.adoptedStyleSheets,siteSheet];
      let drag=null,suppress=false;
      fab.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={y:e.clientY,top:fab.getBoundingClientRect().top,moved:false};fab.setPointerCapture(e.pointerId);});
      fab.addEventListener('pointermove',e=>{if(!drag)return;const dy=e.clientY-drag.y;if(Math.abs(dy)>5)drag.moved=true;if(drag.moved){state.fabTop=Math.max(8,Math.min(innerHeight-56,drag.top+dy));position();}});
      fab.addEventListener('pointerup',()=>{if(drag?.moved){write('fabTop',state.fabTop);suppress=true;}drag=null;});
      fab.addEventListener('pointercancel',()=>{drag=null;});
      fab.addEventListener('click',()=>{if(suppress){suppress=false;return;}setOpen(!open);});
      document.addEventListener('keydown',e=>{
        if(e.key==='Escape'&&open){e.preventDefault();setOpen(false);}
        else if(e.altKey&&!e.ctrlKey&&!e.metaKey&&e.key.toLowerCase()==='g'){e.preventDefault();setOpen(!open);}
      });
      panel.addEventListener('keydown',e=>{
        if(e.key!=='Tab')return;
        const items=[...panel.querySelectorAll('button,select,summary')].filter(el=>el.getClientRects().length);
        const first=items[0],last=items.at(-1);
        if(e.shiftKey&&root.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&root.activeElement===last){e.preventDefault();first.focus();}
      });
      document.addEventListener('pointerdown',e=>{if(open&&!e.composedPath().includes(host))setOpen(false);});
      window.addEventListener('resize',position);motion.addEventListener('change',apply);contrast.addEventListener('change',apply);
      try {if(typeof GM_registerMenuCommand==='function')GM_registerMenuCommand('Theme Picker settings',()=>setOpen(true));}catch(error){console.warn('Theme Picker: extension menu registration unavailable',error);}
      site.mount?.(api);apply();
      const observer=new MutationObserver(records=>{
        if(records.every(r=>r.target===style||r.target===host||(r.type==='attributes'&&!r.target.matches('#pfh-fab,.pfh-fab,#adpb-settings-fab'))))return;
        if(frame)return;
        frame=requestAnimationFrame(()=>{frame=0;if(!host.isConnected)document.body.append(host);if(!style.isConnected)document.head.append(style);if(!document.adoptedStyleSheets.includes(siteSheet))document.adoptedStyleSheets=[...document.adoptedStyleSheets,siteSheet];site.update?.(api);position();});
      });
      observer.observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['style','class']});
      window.addEventListener('pageshow',()=>{site.update?.(api);position();});
    }
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
    return api;
  }
  const UI_CSS=`
    :host { all:initial; font:13px/1.4 system-ui,sans-serif; color:#eee; }
    *,*::before,*::after { box-sizing:border-box; }
    .panel {font:13px/1.4 system-ui,sans-serif;}
    [hidden] { display:none!important; }
    button,select { font:inherit; color:inherit; }
    button { cursor:pointer; }
    button:focus-visible,select:focus-visible,summary:focus-visible { outline:2px solid #82dcff; outline-offset:3px; }
    .fab { position:fixed; right:16px; width:48px; height:48px; padding:0; z-index:2147483647; border:1px solid #ffffff33; border-radius:13px; background:#121722; box-shadow:0 5px 18px #0006; touch-action:none; overflow:hidden; pointer-events:auto; }
    .fab img { width:100%;height:100%;object-fit:contain;pointer-events:none; }
    .fab:hover { box-shadow:0 0 0 2px #82dcff,0 8px 22px #0006; }
    .panel { position:fixed;right:16px;z-index:2147483647;width:min(312px,calc(100vw - 32px));overflow:auto;background:#282826;color:#ddd;border:1px solid #ffffff22;border-radius:14px;box-shadow:0 16px 40px #0007;pointer-events:auto; }
    header {padding:14px 18px 10px;} h2 {font-size:15px;margin:0 0 3px;} p {margin:0;font-size:12px;color:#bbb;}
    section,details {padding:9px 18px;border-top:1px solid #ffffff14;}
    h3 {font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#aaa;margin:0 0 4px;}
    .row {display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px;}
    .row + .row {border-top:1px solid #ffffff0c;}.row>span {min-width:0;}
    select,section>button {border:1px solid #ffffff22;background:#1c2230;border-radius:8px;padding:5px 8px;max-width:145px;}
    section>button {margin:3px 4px 3px 0;}section>button:hover {background:#273044;}
    .switch {flex:0 0 36px;position:relative;width:36px;height:20px;padding:0;border:1px solid #ffffff33;border-radius:999px;background:#596171;}
    .switch span {position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:white;box-shadow:0 1px 3px #0006;transition:transform .15s;}
    .switch[aria-checked=true] {background:linear-gradient(90deg,#e66aa1,#67cfff,#a185f5);}.switch[aria-checked=true] span {transform:translateX(16px);}
    summary {cursor:pointer;min-height:30px;align-content:center;}footer {padding:8px 18px 12px;color:#aaa;font-size:10px;}.notice {padding:0 18px;}
    :host([data-motion]) * {transition:none!important;animation:none!important;}
    :host([data-contrast]) .panel {border:2px solid white;color:white;background:black;}
    :host([data-contrast]) .switch {border:2px solid white;background:black;}
    :host([data-contrast]) .switch[aria-checked=true] {background:white;}
    :host([data-contrast]) .switch[aria-checked=true] span {background:black;}
    @media(forced-colors:active) {.switch {forced-color-adjust:none;border-color:ButtonText;background:Canvas;}.switch span {background:ButtonText;}.switch[aria-checked=true] {background:Highlight;}.switch[aria-checked=true] span {background:HighlightText;}}
  `;
  return {version,start};
})();
