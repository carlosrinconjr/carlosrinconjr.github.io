(function(){
'use strict';
const {people, events, stops} = window.FAMILY;
const IMGS = new Set(window.RECORD_IMAGES || []);
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LABEL = {verified:'Verified', likely:'Likely', story:'Family story'};
const badge = (l, n) => `<span class="badge ${l}">${LABEL[l]}${n ? ` <small>· ${esc(n)}</small>` : ''}</span>`;
const lockSvg = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';

/* child lookup, relationship words */
const childOf = {};
Object.entries(people).forEach(([id, p]) => (p.parents||[]).forEach(pid => { childOf[pid] = id; }));
function relWord(p){
  if (p.rel) return p.rel;
  const m = p.sex === 'm', g = p.gen - 1;   /* generations above Carlos Jr. */
  if (g === 1) return m ? 'Dad · Papá' : 'Mom · Mamá';
  if (g === 2) return m ? 'Grandpa · Abuelo' : 'Grandma · Abuela';
  if (g === 3) return m ? 'Great-grandpa · Bisabuelo' : 'Great-grandma · Bisabuela';
  if (g === 4) return m ? '2× great-grandpa · Tatarabuelo' : '2× great-grandma · Tatarabuela';
  if (g === 5) return m ? '3× great-grandpa · Trastatarabuelo' : '3× great-grandma · Trastatarabuela';
  return `${g-2}× great-grand${m ? 'pa' : 'ma'}`;
}
const GROUP = {2:'Grandparents · Abuelos', 3:'Great-grandparents · Bisabuelos', 4:'2× great-grandparents · Tatarabuelos', 5:'3× great-grandparents · Trastatarabuelos'};
const groupLabel = gen => GROUP[gen-1] || `${gen-3}× great-grandparents`;
const LINKED = {carlossr:true, amparo:true};  /* child→parents links known from family, no record yet */
const first = id => people[id].name.split(' ')[0] === 'María' && people[id].name.split(' ')[1] ? people[id].name.split(' ').slice(0,2).join(' ') : people[id].name.split(' ')[0];

/* ---------- person card ---------- */
function card(id){
  const p = people[id];
  const cls = ['person', p.sex === 'f' ? 'f' : 'm', p.living ? 'living' : ''].join(' ');
  const meta = p.living
    ? `<span class="lock">${lockSvg} Private · name only</span>`
    : `${p.years ? `<span class="p-years">${esc(p.years)}</span>` : ''}${p.label ? badge(p.label) : ''}`;
  const ph = !p.living && p.photo;
  const txt = `<span class="p-name">${esc(p.name)}</span>
    <span class="p-rel">${esc(relWord(p))}</span>
    <span class="p-meta">${meta}</span>`;
  return `<button class="${cls}${ph ? ' has-photo' : ''}" data-id="${id}">${ph
    ? `<img class="p-avatar" src="assets/photos/${esc(ph.avatar)}" alt="" width="48" height="48" loading="lazy"><span class="p-txt">${txt}</span>`
    : txt}</button>`;
}
function branch(id){
  const p = people[id];
  const ps = (p.parents || []).filter(x => people[x]);
  let h = `<div class="branch">${card(id)}`;
  if (ps.length){
    const kid = 'k-' + id;
    h += `<button class="parents-toggle ${p.sex==='f'?'f':''}" aria-expanded="true" aria-controls="${kid}"><span class="chev">▸</span> Parents of ${esc(first(id))}</button>${LINKED[id] ? `<span class="linkpill on-toggle" title="The family knows this link, but no record shows it yet">Family-confirmed link · no record yet</span>` : ''}
      <div class="kids" id="${kid}"><div class="gen-label">${esc(groupLabel(people[ps[0]].gen))}</div><div class="couple">${ps.map(branch).join('')}</div></div>`;
  }
  return h + '</div>';
}
$('#root-carlosjr').innerHTML = card('carlosjr');
$('#root-diana').innerHTML = card('diana');
$('#line-rincon').innerHTML = branch('carlossr');
$('#line-jimenez').innerHTML = branch('amparo');

document.addEventListener('click', e => {
  const t = e.target.closest('.parents-toggle');
  if (t){ const k = document.getElementById(t.getAttribute('aria-controls')); const open = t.getAttribute('aria-expanded') === 'true';
    t.setAttribute('aria-expanded', String(!open)); k.hidden = open; return; }
  const pb = e.target.closest('[data-id]');
  if (pb && people[pb.dataset.id]) { openSheet(pb.dataset.id); }
});
$('#expandAll').onclick = () => $$('.parents-toggle').forEach(t => { t.setAttribute('aria-expanded','true'); document.getElementById(t.getAttribute('aria-controls')).hidden = false; });
$('#collapseAll').onclick = () => $$('.parents-toggle').forEach(t => { t.setAttribute('aria-expanded','false'); document.getElementById(t.getAttribute('aria-controls')).hidden = true; });

function segment(sel, attr, panelAttr){
  $$(sel + ' button').forEach(b => b.addEventListener('click', () => {
    $$(sel + ' button').forEach(x => x.classList.toggle('on', x === b));
    $$(`[${panelAttr}]`).forEach(p => p.classList.toggle('on', p.getAttribute(panelAttr) === b.dataset[attr]));
  }));
}
segment('.side-switch', 'side', 'data-panel');
segment('.line-switch', 'line', 'data-linepanel');

/* ---------- stats ---------- */
const ancestors = Object.values(people).filter(p => !p.living);
const maxGen = Math.max(...Object.values(people).map(p => p.gen));
const verified = ancestors.filter(p => p.label === 'verified').length;
$('#stats').innerHTML = [[maxGen, 'generations'], [ancestors.length, 'ancestors researched'], [verified, 'proven by records'], [IMGS.size, 'record images']]
  .map(([n, t]) => `<li><b>${n}</b><span>${t}</span></li>`).join('');

/* ---------- sheet ---------- */
const sheet = $('#sheet'), back = $('#backdrop'), body = $('#sheetBody');
let lastFocus = null;
function recRow(r){
  const has = r.img && IMGS.has(r.img);
  const thumb = has
    ? `<button class="rec-thumb" data-img="${esc(r.img)}" data-cap="${esc(r.t)}" aria-label="View record image: ${esc(r.t)}"><img src="assets/records/${esc(r.img)}" alt="" loading="lazy"></button>`
    : `<div class="rec-thumb empty">Record image coming soon</div>`;
  return `<li class="rec">${thumb}<div><div class="rec-t">${esc(r.t)}</div>
    <div class="rec-links">${badge(r.l, r.n)}${r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">FamilySearch ↗</a>` : ''}</div></div></li>`;
}
function famPhoto(ph, cls){
  return `<figure class="fam-photo ${cls||''}"><button class="hp-img fp-img" data-full="assets/photos/${esc(ph.f)}" data-cap="${esc(ph.cap)} · Family photo, confirmed by family"><img src="assets/photos/${esc(ph.f)}" alt="${esc(ph.cap)}" width="${ph.w}" height="${ph.h}" loading="lazy"></button>
    <figcaption><b>${esc(ph.cap)}</b><span class="fp-conf">📷 Family photo, confirmed by family</span><span>${esc(ph.title)} · ${esc(ph.by)} · <a href="${esc(ph.url || '')}" target="_blank" rel="noopener">FamilySearch Memories ↗</a></span></figcaption></figure>`;
}
function openSheet(id){
  const p = people[id]; lastFocus = document.activeElement;
  const kid = childOf[id];
  const ps = (p.parents || []).filter(x => people[x]);
  let h = `<p class="s-rel">${esc(relWord(p))}</p><h2 class="s-name" id="sheetName">${esc(p.name)}</h2>`;
  if (p.living){
    h += `<div class="s-sub">${p.note ? esc(p.note) : ''}</div>
      <div class="private-note" style="margin-top:14px">${lockSvg.replace('<svg','<svg class="pn"')}<div>${id==='baby' ? 'The newest branch of the family. She’s shown by name only, like all living family.' : 'Living family is shown by name and relationship only, to keep them private.'}</div></div>`;
  } else {
    h += `<div class="s-sub">${p.years ? `<b>${esc(p.years)}</b>` : ''}${p.label ? badge(p.label) : ''}</div>`;
    if (p.link) h += `<p class="s-link"><span class="linkpill">${esc(p.link)}</span></p>`;
    if (p.places && p.places.length) h += `<ul class="s-places">${p.places.map(x => `<li>📍 ${esc(x)}</li>`).join('')}</ul>`;
    if (p.photo) h += `<h3 class="s-h">Family photo</h3>${famPhoto(p.photo, 'in-sheet')}`;
    const feat = (p.records||[]).find(r => r.img && IMGS.has(r.img));
    h += feat ? `<button class="feature rec-thumb" data-img="${esc(feat.img)}" data-cap="${esc(feat.t)}"><img src="assets/records/${esc(feat.img)}" alt="${esc(feat.t)}"><span>${esc(feat.t)} · tap to enlarge</span></button>`
      : `<div class="feature empty"><span>Record image coming soon</span></div>`;
    if (p.story) h += `<h3 class="s-h">Family story</h3><div class="story-box">“${esc(p.story)}”</div>`;
    if (p.facts && p.facts.length) h += `<h3 class="s-h">What we know</h3><ul class="facts">${p.facts.map(f => `<li>${badge(f.l, f.n)}<span>${esc(f.t)}</span></li>`).join('')}</ul>`;
    h += `<h3 class="s-h">Records</h3>`;
    h += (p.records && p.records.length) ? `<ul class="recs">${p.records.map(recRow).join('')}</ul>`
      : `<ul class="recs"><li class="rec"><div class="rec-thumb empty">Record image coming soon</div><div><div class="rec-t">No original record found yet</div><div class="rec-links" style="color:var(--ink2)">Known from the FamilySearch Family Tree.</div></div></li></ul>`;
  }
  if (kid && people[kid]) h += `<h3 class="s-h">${p.sex==='f'?'Mother':'Father'} of</h3><div class="sheet-parents" style="grid-template-columns:1fr">${card(kid)}</div>`;
  if (ps.length) h += `<h3 class="s-h">${esc(first(id))}’s parents</h3><div class="sheet-parents">${ps.map(card).join('')}</div>`;
  body.innerHTML = h; sheet.hidden = false; back.hidden = false; sheet.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  $('#sheetClose').focus({preventScroll:true});
  history.replaceState(null, '', '#person=' + id);
}
function closeSheet(){
  sheet.hidden = true; back.hidden = true; document.body.style.overflow = '';
  history.replaceState(null, '', location.pathname + location.search);
  if (lastFocus) lastFocus.focus({preventScroll:true});
}
$('#sheetClose').onclick = closeSheet; back.onclick = closeSheet;

/* lightbox */
const lb = $('#lightbox');
sheet.addEventListener('click', e => {
  const t = e.target.closest('.rec-thumb[data-img]'); if (!t) return;
  e.stopPropagation(); $('img', lb).src = 'assets/records/' + t.dataset.img; $('p', lb).textContent = t.dataset.cap; lb.hidden = false;
}, true);
lb.addEventListener('click', () => { lb.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape'){ if (!lb.hidden) lb.hidden = true; else if (!sheet.hidden) closeSheet(); } });

/* ---------- map ---------- */
const M = window.MAP_DATA;
(function drawMap(){
  const VB = [110, 50, 670, 545];
  const pt = k => k === 'larioja' ? null : M.points[k];
  const inX = 128, inY = 455, inS = 0.85;
  const lr = [inX + M.points.larioja_inset[0]*inS, inY + M.points.larioja_inset[1]*inS];
  const P = k => k === 'larioja' ? lr : pt(k);
  const curve = (a, b, bend) => { const mx=(a[0]+b[0])/2, my=(a[1]+b[1])/2, dx=b[0]-a[0], dy=b[1]-a[1];
    return `M${a[0]},${a[1]} Q${mx - dy*bend},${my + dx*bend} ${b[0]},${b[1]}`; };
  const main = ['larioja','zacatecas','chihuahua','torreon','chicago','orange'];
  let routes = '';
  for (let i=0;i<main.length-1;i++) routes += `<path class="route" d="${curve(P(main[i]),P(main[i+1]), i===0?-0.18:0.16)}"/>`;
  routes += `<path class="route roots" d="${curve(P('papasquiaro'),P('orange'),-0.12)}"/><path class="route roots" d="${curve(P('canadas'),P('orange'),-0.16)}"/>`;
  const country = n => M.countries[n] ? `<path class="land ${n==='Mexico'?'mx':n==='United States of America'?'us':'other'}" d="${M.countries[n]}"/>` : '';
  const st = Object.entries(M.states).map(([n,d]) => `<path class="state ${['California','Illinois'].includes(n)?'us':''}" d="${d}"/>`).join('');
  const marks = stops.map((s,i) => { const [x,y] = P(s.k); const c = s.k==='larioja'?'spain':s.k==='orange'?'home':'';
    return `<g class="mk ${c}" data-k="${s.k}" transform="translate(${x},${y})"><circle class="halo" r="26"/><circle r="17"/><text y="6">${i+1}</text></g>`; }).join('');
  const inset = Object.entries(M.inset).map(([n,d]) => `<path class="${n==='La Rioja'?'lr':n==='Spain'?'es':'eu'}" d="${d}"/>`).join('');
  $('#mapFigure').innerHTML = `<svg viewBox="${VB.join(' ')}" role="img" aria-label="Map of the family's places in Spain, Mexico, and the United States">
    <defs><pattern id="waves" width="16" height="10" patternUnits="userSpaceOnUse"><path d="M0 6 Q4 2 8 6 T16 6" fill="none" stroke="#d9e3e0" stroke-width="1"/></pattern>
    <clipPath id="insetClip"><rect x="${inX-6}" y="${inY-6}" width="${M.insetW*inS+12}" height="${M.insetH*inS+12}" rx="10"/></clipPath></defs>
    <rect x="${VB[0]}" y="${VB[1]}" width="${VB[2]}" height="${VB[3]}" fill="#eef1ea"/><rect x="${VB[0]}" y="${VB[1]}" width="${VB[2]}" height="${VB[3]}" fill="url(#waves)" opacity=".7"/>
    ${country('Canada')}${country('United States of America')}${country('Cuba')}${country('Guatemala')}${country('Belize')}${country('Honduras')}${country('El Salvador')}${country('Mexico')}
    ${st}
    <text class="lbl big" x="560" y="235">UNITED STATES</text><text class="lbl big" x="300" y="362">MÉXICO</text>
    <text class="lbl sea" x="330" y="585">Pacific Ocean</text><text class="lbl sea" x="600" y="455">Gulf of Mexico</text>
    <g clip-path="url(#insetClip)"><rect x="${inX-6}" y="${inY-6}" width="${M.insetW*inS+12}" height="${M.insetH*inS+12}" fill="#eef1ea"/>
      <g transform="translate(${inX},${inY}) scale(${inS})">${inset}</g></g>
    <rect x="${inX-6}" y="${inY-6}" width="${M.insetW*inS+12}" height="${M.insetH*inS+12}" rx="10" fill="none" stroke="#c9b493" stroke-width="1.5"/>
    <text class="lbl inset" x="${inX-4}" y="${inY-14}">SPAIN</text>
    ${routes}${marks}</svg>`;
  $('#stops').innerHTML = stops.map((s,i) => `<li class="stop ${s.k==='larioja'?'spain':s.k==='orange'?'home':''}" data-k="${s.k}" tabindex="0">
    <span class="stop-n">${i+1}</span><div><span class="yr">${esc(s.y)}</span><h4>${esc(s.n)}</h4><p>${esc(s.t)}</p><div class="stop-foot">${badge(s.l)}<a class="ch-link" href="#place-${s.k}">Read the chapter →</a></div></div></li>`).join('')
    + `<li class="map-note">Lines show how the family’s branches come together today, not exact travel routes.</li>`;
  const hi = k => { $$('.stop').forEach(x => x.classList.toggle('on', x.dataset.k === k)); $$('.mk').forEach(x => x.classList.toggle('on', x.dataset.k === k)); };
  $$('.stop').forEach(li => { li.addEventListener('click', () => hi(li.dataset.k)); li.addEventListener('keydown', e => { if (e.key==='Enter') hi(li.dataset.k); }); });
  $$('.mk').forEach(g => g.addEventListener('click', () => { hi(g.dataset.k); const li = $(`.stop[data-k="${g.dataset.k}"]`); li && li.scrollIntoView({block:'nearest', behavior:'smooth'}); }));
})();

/* ---------- chapters ---------- */
const CH = window.CHAPTERS || [];
const PLACE_NAME = {}; CH.forEach(c => { PLACE_NAME[c.k] = c.n.split(',')[0]; });
(function drawChapters(){
  $('#placeNav').innerHTML = CH.map((c,i) => `<a href="#place-${c.k}"><span>${i+1}</span>${esc(c.n.split(',')[0])}</a>`).join('');
  $('#chapters').innerHTML = CH.map((c,i) => {
    const fam = c.family.map(f => {
      const p = people[f.who];
      const nm = p ? esc(p.name) : '';
      return `<li><button class="fam-b" data-id="${f.who}"><span class="fam-name">${nm}${p && p.years && !p.living ? ` <small>${esc(p.years)}</small>` : ''}</span><span class="fam-t">${esc(f.t)}</span>${f.l ? badge(f.l, f.n) : `<span class="lock">${lockSvg} Private · name only</span>`}</button></li>`;
    }).join('');
    const lf = (window.LIFE||{})[c.k];
    const LS = window.LIFE_SRC || {};
    const srcs = c.sources.slice();
    const addSrc = k => { const v = LS[k]; if (v && !srcs.some(x => x[1]===v[1])) srcs.push(v); return v; };
    const tag = sk => (Array.isArray(sk)?sk:[sk]).map(k => { if (k==='photo') return ''; const v = addSrc(k); return v ? `<a class="lf-src" href="${esc(v[1])}" target="_blank" rel="noopener" title="Source: ${esc(v[0])}">${esc(v[2] || v[0].replace(/ \(.*\)$/,''))} ↗</a>` : ''; }).join(' ');
    let life = '';
    let photoList = c.photos;
    if (lf) {
      const glance = (lf.glance||[]).map(g => `<div class="lf-stat"><span class="lf-ic" aria-hidden="true">${g.i}</span><span class="lf-k">${esc(g.k)}</span><b class="lf-v">${esc(g.v)}</b><span class="lf-sub">${esc(g.sub)}</span>${tag(g.s)}</div>`).join('');
      let chart = '';
      if (lf.chart) {
        const ch = lf.chart, mx = Math.max(...ch.pts.map(p => p[1]));
        const inEra = y => ch.era.length && y >= ch.era[0] && y <= ch.era[1];
        const fmt = n => n >= 1e6 ? (n/1e6).toFixed(n>=1e7?0:1).replace(/\.0$/,'')+'M' : n >= 1e3 ? Math.round(n/1e3)+'k' : String(n);
        addSrc(ch.src);
        chart = `<figure class="lf-chart"><figcaption>${esc(ch.title)}${ch.era.length?` <span class="lf-key"><i></i>family’s years</span>`:''}</figcaption>
          <div class="lf-bars">${ch.pts.map(([y,n]) => `<div class="lf-bar ${inEra(y)?'on':''}" title="${y}: ${n.toLocaleString('en-US')}"><span class="lf-n">${fmt(n)}</span><span class="lf-col" style="height:${Math.max(2, Math.round(n/mx*100))}%"></span><span class="lf-y">${y}</span></div>`).join('')}</div>
          ${ch.note?`<p class="lf-note">${esc(ch.note)}</p>`:''}</figure>`;
      }
      const day = (lf.day||[]).map(d => `<li><span class="lf-ic" aria-hidden="true">${d.i}</span><div><b>${esc(d.h)}</b> ${esc(d.t)} ${tag(d.s)}</div></li>`).join('');
      const ev = (lf.events||[]).map(e => `<li><span class="lf-ey">${esc(e.y)}</span><div><p>${esc(e.t)} ${tag(e.s)}</p><p class="lf-who">👤 ${esc(e.who)}</p></div></li>`).join('');
      let tn = '';
      if (lf.tn) {
        const side = (o, lab) => `<figure class="tn-side"><button class="hp-img tn-img" data-full="assets/history/${esc(o.f)}" data-cap="${esc((o.cap||lf.tn.place)+', '+o.y)}"><img src="assets/history/${esc(o.f)}" alt="${esc((o.cap||lf.tn.place)+', '+o.y)}" loading="lazy"><span class="tn-lab">${lab} · ${esc(o.y)}</span></button>
          <figcaption>${o.cap?`<b>${esc(o.cap)}</b> `:''}${esc(o.by)} · ${o.licUrl?`<a href="${esc(o.licUrl)}" target="_blank" rel="noopener">${esc(o.lic)}</a>`:esc(o.lic)} · <a href="${esc(o.url)}" target="_blank" rel="noopener">file page ↗</a></figcaption></figure>`;
        tn = `<div class="lf-block"><h5><span aria-hidden="true">📷</span> Then &amp; now <small>Entonces y ahora</small></h5><p class="lf-place">${esc(lf.tn.place)}</p><div class="tn">${side(lf.tn.then,'Then')}${side(lf.tn.now,'Now')}</div></div>`;
        if (lf.movePhoto) photoList = c.photos.filter(ph => ph.f !== lf.tn.then.f);
      }
      life = `<section class="life" aria-label="Life back then in ${esc(c.n)}">
        <div class="life-head"><h4>Life back then <span>Cómo se vivía</span></h4>${lf.intro?`<p class="lf-intro">${esc(lf.intro)}</p>`:''}</div>
        <div class="lf-block"><h5><span aria-hidden="true">🏘️</span> Town at a glance <small>El pueblo en cifras</small></h5><div class="lf-stats">${glance}</div>${chart}${lf.noEra?`<p class="lf-note">${esc(lf.noEra)}</p>`:''}</div>
        ${day?`<div class="lf-block"><h5><span aria-hidden="true">☀️</span> A day in their life <small>Un día en su vida</small></h5>${lf.dayNote?`<p class="lf-note">${esc(lf.dayNote)}</p>`:''}<ul class="lf-day">${day}</ul></div>`:''}
        ${ev?`<div class="lf-block"><h5><span aria-hidden="true">🕰️</span> What they lived through <small>Lo que vivieron</small></h5>${lf.eventsNote?`<p class="lf-note">${esc(lf.eventsNote)}</p>`:''}<ol class="lf-ev">${ev}</ol></div>`:''}
        ${tn}
      </section>`;
    }
    const famPh = []; const seenF = new Set();
    (c.famPhotos || []).forEach(w => { const ph = people[w] && !people[w].living && people[w].photo; if (ph && !seenF.has(ph.f)) { seenF.add(ph.f); famPh.push(ph); } });
    const famBlock = famPh.length ? `<div class="ch-famphotos"><h4>Family photos <span>Fotos de la familia</span></h4><div class="fp-grid ${famPh.length>1?'two':''}">${famPh.map(ph => famPhoto(ph)).join('')}</div></div>` : '';
    const photos2 = photoList.map(ph => `<figure class="hp"><button class="hp-img" data-full="assets/history/${esc(ph.f)}" data-cap="${esc(ph.cap)}"><img src="assets/history/${esc(ph.f)}" alt="${esc(ph.cap)}" loading="lazy"></button>
      <figcaption><b>${esc(ph.cap)}</b><span>${esc(ph.by)} · ${esc(ph.src)} · ${ph.licUrl ? `<a href="${esc(ph.licUrl)}" target="_blank" rel="noopener">${esc(ph.lic)}</a>` : esc(ph.lic)} · <a href="${esc(ph.url)}" target="_blank" rel="noopener">file page ↗</a></span></figcaption></figure>`).join('');
    return `<article class="chapter" id="place-${c.k}">
      <div class="ch-head"><span class="ch-num">${i+1}</span><div><p class="ch-era">${esc(c.era)}</p><h3>${esc(c.n)}</h3>${c.es !== c.n ? `<p class="ch-es">${esc(c.es)}</p>` : ''}</div></div>
      <figure class="ch-hero"><img src="assets/chapters/${esc(c.illus)}" alt="Illustrated scene of ${esc(c.n)}" loading="lazy"><figcaption>Illustration, not a real photo.</figcaption></figure>
      ${c.note ? `<p class="ch-note">${badge(c.noteL || c.l)} ${esc(c.note)}</p>` : ''}
      <div class="ch-body">
        <div class="ch-history"><h4>The place</h4>${c.history.map(t => `<p>${esc(t)}</p>`).join('')}
          </div>
        <div class="ch-family"><h4>Our family here</h4><ul class="fam">${fam}</ul></div>
      </div>
      ${famBlock}
      ${life}
      ${photoList.length ? `<div class="ch-photos ${photoList.length>1?'two':''}">${photos2}</div>` : ''}
      <p class="ch-sources">Sources: ${srcs.map(([t,u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`).join(' · ')}</p>
    </article>`;
  }).join('');
  document.addEventListener('click', e => {
    const b = e.target.closest('.hp-img'); if (!b) return;
    $('img', lb).src = b.dataset.full; $('p', lb).textContent = b.dataset.cap; lb.hidden = false;
  });
})();

/* ---------- timeline ---------- */
function drawTL(f){
  $('#tl').innerHTML = events.filter(e => f==='all' || e.side===f || e.side==='both').map(e => `
    <li class="tl ${e.side} ${e.baby?'baby':''}"><div class="tl-y ${e.y.length>4?'c':''}">${esc(e.y)}</div>
    <div class="tl-b"><button class="tl-t" data-id="${e.who}">${esc(e.t)}</button><div class="tl-foot">${e.baby?'':badge(e.l)}${e.p ? `<a class="ch-link" href="#place-${e.p}">📍 ${esc(e.pl || PLACE_NAME[e.p])}</a>` : ''}</div></div></li>`).join('');
}
drawTL('all');
$$('.tl-filter button').forEach(b => b.addEventListener('click', () => { $$('.tl-filter button').forEach(x => x.classList.toggle('on', x===b)); drawTL(b.dataset.f); }));

/* deep link: #person=id */
const m = location.hash.match(/^#person=(\w+)/); if (m && people[m[1]]) openSheet(m[1]);
})();
