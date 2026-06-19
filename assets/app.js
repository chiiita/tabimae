const ORDER = ["korea","taiwan","thailand","china","hongkong","vietnam","singapore","philippines","indonesia","malaysia","india","cambodia","srilanka","nepal","mongolia","laos","france","italy","spain","germany","uk","switzerland","netherlands","belgium","ireland","croatia","greece","portugal","austria","czech","hungary","poland","finland","sweden","norway","denmark","usa","canada","mexico","brazil","australia","guam","newzealand","fiji","saipan","uae","turkey","egypt","morocco","southafrica"];
const REGIONS = ["アジア","ヨーロッパ","北米・ハワイ","オセアニア","中南米","中東・アフリカ"];
const D = window.TABIMAE || {};
const SECTIONS = [
  {key:"checklist",label:"準備",     title:"出発前チェックリスト", sub:"タップでチェック・自動保存"},
  {key:"basics",   label:"基本情報", title:"基本情報", sub:"通貨・チップ・交通・気候など"},
  {key:"entry",    label:"入国",     title:"ビザ・入国", sub:"ビザ要否・事前申請・滞在日数"},
  {key:"fx",       label:"為替",     title:"為替（円との相場）", sub:"現在レート・かんたん換算"},
  {key:"budget",   label:"予算",     title:"予算の目安", sub:"食事・交通・宿・1日の目安"},
  {key:"safety",   label:"注意点",   title:"渡航前の注意点", sub:"治安・詐欺・マナー・法律"},
  {key:"phrases",  label:"会話",     title:"場面別フレーズ", sub:"タップで現地語をコピー／🔊で発音"},
  {key:"arrival",  label:"到着後",   title:"着いたら、まず", sub:"入国〜市内までの最初の動き"},
  {key:"emergency",label:"緊急時",   title:"緊急時・トラブル対処", sub:"連絡先と「こんな時どうする」"},
  {key:"apps",     label:"アプリ",   title:"便利アプリ", sub:"入れておくと安心"},
];
// 国別の音声合成ロケール（フレーズ読み上げ用 BCP-47）
const SPEECH_LANG = {korea:"ko-KR",taiwan:"zh-TW",thailand:"th-TH",china:"zh-CN",hongkong:"zh-HK",vietnam:"vi-VN",singapore:"en-SG",philippines:"fil-PH",indonesia:"id-ID",malaysia:"ms-MY",india:"hi-IN",cambodia:"km-KH",srilanka:"si-LK",nepal:"ne-NP",mongolia:"mn-MN",laos:"lo-LA",france:"fr-FR",italy:"it-IT",spain:"es-ES",germany:"de-DE",uk:"en-GB",switzerland:"de-CH",netherlands:"nl-NL",belgium:"nl-BE",ireland:"en-IE",croatia:"hr-HR",greece:"el-GR",portugal:"pt-PT",austria:"de-AT",czech:"cs-CZ",hungary:"hu-HU",poland:"pl-PL",finland:"fi-FI",sweden:"sv-SE",norway:"nb-NO",denmark:"da-DK",usa:"en-US",canada:"en-CA",mexico:"es-MX",brazil:"pt-BR",australia:"en-AU",guam:"en-US",newzealand:"en-NZ",fiji:"en-US",saipan:"en-US",uae:"ar-AE",turkey:"tr-TR",egypt:"ar-EG",morocco:"ar-MA",southafrica:"en-ZA"};
const LV = {1:{t:"比較的安全",c:"lv1"},2:{t:"注意",c:"lv2"},3:{t:"要注意",c:"lv3"},4:{t:"危険",c:"lv4"}};

/* ---------- SVGアイコン（Lucide系ライン） ---------- */
const SVGI = p => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const IC = {
  compass:SVGI('<circle cx="12" cy="12" r="10"/><polygon points="16.2 7.8 14.1 14.1 7.8 16.2 9.9 9.9 16.2 7.8"/>'),
  chart:SVGI('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
  shieldAlert:SVGI('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>'),
  message:SVGI('<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.7-.7L3 21l1.4-4.2A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>'),
  lifebuoy:SVGI('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.9" y1="4.9" x2="9.2" y2="9.2"/><line x1="14.8" y1="14.8" x2="19.1" y2="19.1"/><line x1="14.8" y1="9.2" x2="19.1" y2="4.9"/><line x1="4.9" y1="19.1" x2="9.2" y2="14.8"/>'),
  smartphone:SVGI('<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/>'),
  banknote:SVGI('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>'),
  clock:SVGI('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/>'),
  shield:SVGI('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  sun:SVGI('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>'),
  alert:SVGI('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
  users:SVGI('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>'),
  scale:SVGI('<path d="M12 3v18"/><path d="M7 21h10"/><path d="M5 7h14"/><path d="m5 7-3 6h6z"/><path d="m19 7-3 6h6z"/>'),
  shirt:SVGI('<path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.1a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.3-2.2z"/>'),
  smile:SVGI('<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>'),
  utensils:SVGI('<path d="M4 2v7a3 3 0 0 0 6 0V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-3 4.5V11a1 1 0 0 0 1 1h2zm0 0v7"/>'),
  bag:SVGI('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'),
  car:SVGI('<path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13"/><path d="M5 13h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z"/><circle cx="7.5" cy="17.5" r="1"/><circle cx="16.5" cy="17.5" r="1"/>'),
  bed:SVGI('<path d="M3 18V7a1 1 0 0 1 1-1h11a4 4 0 0 1 4 4v8"/><path d="M3 14h18"/><path d="M21 18v-3"/><circle cx="8" cy="10" r="1.5"/>'),
  pin:SVGI('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  cross:SVGI('<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>'),
  hash:SVGI('<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>'),
  phone:SVGI('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/>'),
  fileText:SVGI('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>'),
  globe:SVGI('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>'),
  landmark:SVGI('<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>'),
  plane:SVGI('<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8L8 11l-2 2-2-.5-1 1 3 2 2 3 1-1L7 16l2-2 4 3.7a.5.5 0 0 0 .8-.5z"/>'),
  suitcase:SVGI('<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="12" y1="11" x2="12" y2="17"/>'),
  refresh:SVGI('<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/>'),
  volume:SVGI('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19.5 5a9 9 0 0 1 0 14"/>'),
  passport:SVGI('<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="2.6"/><path d="M9 16h6"/>'),
  wallet:SVGI('<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2"/><path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3"/><path d="M21 11h-5a2 2 0 0 0 0 4h5z"/>'),
  checklist:SVGI('<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="m9 14 2 2 4-4"/>'),
  arrival:SVGI('<path d="M9 19l-6 2V6l6-2 6 2 6-2v9"/><path d="M9 4v15"/><path d="M15 6v7"/><path d="M19 21l3-3-3-3"/><path d="M14 18h8"/>'),
};
const sectionIcon = k => ({checklist:IC.checklist,basics:IC.compass,entry:IC.passport,fx:IC.chart,budget:IC.wallet,safety:IC.shieldAlert,phrases:IC.message,arrival:IC.arrival,emergency:IC.lifebuoy,apps:IC.smartphone}[k]||IC.compass);
const secHas = (c,k) => (k==='entry') ? Array.isArray(c.entry)&&c.entry.length>0
  : (k==='budget') ? Array.isArray(c.budget)&&c.budget.length>0 : true;
function icoCat(c){c=c||'';if(/治安|防犯/.test(c))return IC.shield;if(/詐欺|ぼったくり/.test(c))return IC.alert;if(/マナー|文化/.test(c))return IC.users;if(/法律|禁止/.test(c))return IC.scale;if(/服装/.test(c))return IC.shirt;return IC.shieldAlert;}
function icoScene(s){s=s||'';if(/あいさつ/.test(s))return IC.smile;if(/レストラン|飲食|屋台|カフェ/.test(s))return IC.utensils;if(/買い物/.test(s))return IC.bag;if(/移動|タクシー/.test(s))return IC.car;if(/ホテル|宿泊/.test(s))return IC.bed;if(/道案内|交通/.test(s))return IC.pin;if(/体調|薬|病院/.test(s))return IC.cross;if(/トラブル|緊急/.test(s))return IC.lifebuoy;if(/数字|あいづち/.test(s))return IC.hash;return IC.message;}
const regionIcon = r => ({"アジア":IC.globe,"ヨーロッパ":IC.landmark,"北米・ハワイ":IC.plane,"オセアニア":IC.palm||IC.globe,"中南米":IC.globe,"中東・アフリカ":IC.landmark}[r]||IC.globe);

/* ---------- ヒーロー：国別ランドマーク・シルエット（landmarks.js） ---------- */
function heroArt(c){
  const L=window.LANDMARK||{};
  const lm=L[c.id]||L._default||'';
  return `<svg class="heroart" viewBox="0 0 400 130" preserveAspectRatio="xMidYMax meet" aria-hidden="true">`+
    `<circle cx="334" cy="34" r="17" fill="#d9b85f" opacity=".55"/><g opacity=".92">${lm}</g></svg>`;
}

const COPY_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const grad = () => 'linear-gradient(140deg,#2a4d76 0%,#1c3858 55%,#16263f 100%)';

const BASE = (typeof window!=='undefined' && window.__BASE__) || '';
function cardHTML(id){
  const c=D[id];
  const q=esc((c.name+' '+c.nameEn).toLowerCase());
  return `<a class="ccard" data-q="${q}" href="${BASE}${id}/">
    <div class="cflag" style="background:${grad(c)}"><span>${c.flag}</span></div>
    <div class="cinfo">
      <div class="ctop"><span class="cname">${esc(c.name)}</span></div>
      <div class="cen">${esc(c.nameEn)}</div>
      <div class="ctag">${esc(c.tagline)}</div>
    </div></a>`;
}
function renderHome(){
  const list=document.getElementById('countryList');
  list.innerHTML = REGIONS.map(reg=>{
    const ids=ORDER.filter(id=>D[id]&&(D[id].region||'アジア')===reg);
    if(!ids.length) return '';
    return `<div class="sectitle" data-reg="${reg}"><span class="regico">${regionIcon(reg)}</span>${reg}<span class="regcount">${ids.length}</span></div>`+
      `<div class="grid" data-reg="${reg}">`+ids.map(cardHTML).join('')+`</div>`;
  }).join('');
}
function filterHome(q){
  q=(q||'').trim().toLowerCase();
  let any=false;
  document.querySelectorAll('#countryList .ccard').forEach(card=>{
    const hit=!q||(card.dataset.q||'').includes(q);
    card.style.display=hit?'':'none'; if(hit)any=true;
  });
  document.querySelectorAll('#countryList .grid').forEach(g=>{
    const vis=[...g.querySelectorAll('.ccard')].some(c=>c.style.display!=='none');
    g.style.display=vis?'':'none';
    const head=g.previousElementSibling;
    if(head&&head.classList.contains('sectitle')) head.style.display=vis?'':'none';
  });
  document.getElementById('noHit').style.display=any?'none':'block';
}

let currentId=null, io=null;
function renderCountry(id){
  const c=D[id]; if(!c) return goHome();
  const lv=LV[c.summary?.safety]||{t:"-",c:"lv2"}; const s=c.summary||{};
  const secs = SECTIONS.filter(sec=>secHas(c,sec.key));
  const jump = secs.map((sec,i)=>`<div class="jchip ${i===0?'on':''}" data-k="${sec.key}"
      onclick="jumpTo('${sec.key}')">${sectionIcon(sec.key)} ${sec.label}</div>`).join('');
  document.getElementById('country').innerHTML = `
    <div class="chead" style="background:${grad(c)}">
      ${heroArt(c)}
      <div class="flag">${c.flag}</div>
      <h2>${esc(c.name)} <span class="lang">／ ${esc(c.lang)}</span></h2>
      <div class="tg">${esc(c.tagline)}</div>
    </div>
    <div class="summary">
      <div class="stile"><div class="si">${IC.banknote}</div><div class="sl">通貨</div><div class="sv">${esc(s.currency||'-')}</div></div>
      <div class="stile"><div class="si">${IC.clock}</div><div class="sl">時差</div><div class="sv">${esc(s.timezone||'-')}</div></div>
      <div class="stile"><div class="si">${IC.shield}</div><div class="sl">治安</div><div><span class="lvbadge ${lv.c}">${lv.t}</span></div></div>
      <div class="stile"><div class="si">${IC.sun}</div><div class="sl">ベスト</div><div class="sv">${esc(s.season||'-')}</div></div>
    </div>
    <div class="jumpnote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>下のボタンをタップすると各項目へ移動できます（色は今いる場所）</div>
    <div class="jumpbar">${jump}</div>
    ${secs.map(sec=>sectionHTML(c,sec)).join('')}`;
  setupScrollSpy();
  initFx(c);
}

function sectionHTML(c,sec){
  return `<section class="block" id="sec-${sec.key}">
    <div class="bhead"><span class="ichip">${sectionIcon(sec.key)}</span>
      <div><h3>${sec.title}</h3><div class="sub">${sec.sub}</div></div></div>
    ${bodyHTML(c,sec.key)}</section>`;
}
function kvGrid(arr){return `<div class="binfo">`+(arr||[]).map(b=>`<div class="brow">
    <div class="bl">${esc(b.label)}</div><div class="bv">${esc(b.value)}</div>
    ${b.note?`<div class="bn">${esc(b.note)}</div>`:''}</div>`).join('')+`</div>`;}

function getBasic(c,re){const b=(c.basics||[]).find(x=>re.test(x.label));return b?b.value:'';}
function entryVal(c,key){const x=(c.entry||[]).find(i=>i.label.indexOf(key)>=0);return x?x.value:'';}

/* 出発前チェックリスト（国別・localStorage保存） */
function checklistItems(c){
  const visa=[entryVal(c,'ビザ'),entryVal(c,'事前申請')].filter(Boolean).join(' / ');
  return [
    {t:'パスポートの残存期間を確認', n:entryVal(c,'パスポート残存')||'入国条件を満たすか確認'},
    {t:'ビザ・事前申請の確認', n:visa||'各国の入国条件を確認'},
    {t:'海外旅行保険に加入', n:'医療費が高額な国も。必ず入る'},
    {t:'航空券・宿の予約を確認（印刷かスクショ）', n:''},
    {t:'パスポート・保険証券のコピーを別保管', n:'写真をスマホにも入れておく'},
    {t:'現地通貨を少し＋海外対応カード', n:'通貨：'+(c.summary?.currency||'')},
    {t:'SIM／eSIM・Wi-Fiの準備', n:getBasic(c,/ネット/)||''},
    {t:'変換プラグ・充電器', n:getBasic(c,/電圧|プラグ/)||''},
    {t:'地図・翻訳・配車アプリを入れる', n:'「アプリ」タブを参照'},
    {t:'常備薬・処方薬（英文の説明があると安心）', n:''},
    {t:'緊急連絡先をメモ（大使館・家族・カード会社）', n:'「緊急時」タブを参照'},
    {t:'外務省「たびレジ」に登録', n:'渡航先の安全情報がメールで届く'}
  ];
}
function getChecks(id){try{return new Set(JSON.parse(localStorage.getItem('tabimae_chk_'+id)||'[]'));}catch(e){return new Set();}}
function toggleCheck(id,i,on){try{const s=getChecks(id);on?s.add(i):s.delete(i);localStorage.setItem('tabimae_chk_'+id,JSON.stringify([...s]));}catch(e){}}

/* トラブル対処フロー（緊急セクションに追記） */
function troubleFlow(){
  const flows=[
    {t:'パスポートを失くした', s:['まず警察で紛失・盗難届を出し、証明書をもらう','日本大使館・総領事館に連絡','「帰国のための渡航書」か旅券を申請（証明写真・身分証コピーが必要）']},
    {t:'盗難・スリにあった', s:['身の安全を最優先に確保する','警察で被害届を出す（保険請求に必要）','カード会社へ連絡して利用停止']},
    {t:'体調が悪い・ケガをした', s:['無理せず休む。海外保険のサポートデスクに相談','薬局（市販薬）か病院へ。重症は救急車（番号は上記）','受診したら領収書・診断書を保管（保険請求用）']},
    {t:'お金が尽きた・カードが使えない', s:['カード会社へ連絡（不正利用や限度額も確認）','家族から海外送金（Wise等）を受け取る','どうしても困ったら大使館に相談']}
  ];
  return `<div class="bhead2">こんな時、どうする？</div><div class="flows">`+flows.map(f=>
    `<div class="flow"><div class="flowt">${esc(f.t)}</div><ol class="flowsteps">`+
    f.s.map(x=>`<li>${esc(x)}</li>`).join('')+`</ol></div>`).join('')+`</div>`;
}

function bodyHTML(c,key){
  if(key==='checklist'){
    const items=checklistItems(c); const saved=getChecks(c.id);
    return `<div class="chklist">`+items.map((it,i)=>`<label class="chkrow">
      <input type="checkbox" ${saved.has(i)?'checked':''} onchange="toggleCheck('${c.id}',${i},this.checked);this.closest('.chkrow').classList.toggle('done',this.checked)">
      <span class="chkbox">${COPY_SVG?'':''}</span>
      <span class="chktxt"><b>${esc(it.t)}</b>${it.n?`<span class="chkn">${esc(it.n)}</span>`:''}</span></label>`).join('')+
      `</div><div class="secnote">チェックは自動保存されます（この端末のみ）。</div>`;
  }
  if(key==='arrival'){
    const trans=getBasic(c,/交通/), net=getBasic(c,/ネット/), cur=c.summary?.currency||'';
    const visa=[entryVal(c,'ビザ'),entryVal(c,'事前申請')].filter(Boolean).join(' / ');
    const steps=[
      {t:'入国審査・税関', d:'パスポート・帰りの航空券・滞在先住所を準備。'+(visa?'（ビザ/事前申請：'+visa+'）':'')},
      {t:'通信を確保する', d:net||'空港でSIMを受け取る、またはeSIMを有効化。'},
      {t:'お金を用意する', d:'両替は街中が好レートのことが多い。ATMは銀行併設が安心。通貨：'+cur},
      {t:'市内へ移動する', d:(trans?trans+'　':'')+'ぼったくり回避はメーターか配車アプリで。'},
      {t:'ホテルにチェックイン', d:'貴重品はセーフティボックスへ。Wi-Fiパスワードを確認。'}
    ];
    return `<ol class="steps">`+steps.map(s=>`<li><div class="stept">${esc(s.t)}</div><div class="stepd">${esc(s.d)}</div></li>`).join('')+`</ol>`;
  }
  if(key==='basics')return kvGrid(c.basics);
  if(key==='entry')return kvGrid(c.entry)+`<div class="secnote">※ ビザ・入国制度は変更されます。渡航前に必ず各国大使館・外務省の最新情報をご確認ください。</div>`;
  if(key==='budget')return kvGrid(c.budget)+`<div class="secnote">※ 物価・為替の目安です。時期やお店で変わります。</div>`;
  if(key==='fx'){
    // TradingViewにJPYクロスが存在する通貨のみチャート表示（希少通貨はレート表のみ）
    const CHART_OK=['USD','EUR','GBP','AUD','NZD','CAD','CHF','CNY','HKD','SGD','THB','KRW','TWD','INR','IDR','MYR','PHP','VND','TRY','ZAR','MXN','BRL','SEK','NOK','DKK','PLN','CZK','HUF','AED','EGP'];
    let chart='';
    if(c.fxSymbol||CHART_OK.indexOf(c.currencyCode)>=0){
      const sym=c.fxSymbol||('FX_IDC:'+c.currencyCode+'JPY');
      const cfg=encodeURIComponent(JSON.stringify({symbol:sym,width:"100%",height:240,locale:"ja",
        dateRange:"12M",colorTheme:"light",isTransparent:true,autosize:false,chartOnly:false}));
      chart=`<div class="fxchart"><iframe title="${esc(c.name)}の為替チャート" scrolling="no"
        frameborder="0" loading="lazy" allowtransparency="true"
        src="https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=ja#${cfg}"></iframe>
        <div class="fxchartcap">1 ${esc(c.summary?.currency||'')} = 何円か の推移（直近12か月／提供 TradingView）</div></div>`;
    }
    return chart+`<div class="fxbox" id="fxbox"><div class="fxstate">現在レートを取得中…</div></div>`;
  }
  if(key==='safety')return `<div class="safe">`+c.safety.map(s=>`<div class="scat">
    <div class="st"><span class="ichip">${icoCat(s.category)}</span>${esc(s.category)}</div>
    <ul>${s.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')+`</div>`;
  if(key==='phrases')return `<div class="copyhint"><span style="display:inline-grid;width:15px;height:15px">${COPY_SVG.replace('<svg','<svg width="15" height="15"')}</span>カードをタップで現地語をコピー（発音はカタカナ目安）</div>`+
    c.phrases.map(p=>`<div class="pscene"><div class="pt"><span class="ichip">${icoScene(p.scene)}</span>${esc(p.scene)}</div>`+
      p.items.map(it=>{const q=esc(it.local).replace(/'/g,"\\'");return `<div class="pcard" onclick="copyText('${q}')">
        <div class="ptxt"><div class="pja">${esc(it.ja)}</div>
          <div class="ploc">${esc(it.local)}</div><div class="prom">${esc(it.roman)}</div></div>
        <button class="pbtn pspeak" onclick="event.stopPropagation();speak('${q}')" aria-label="読み上げ">${IC.volume}</button>
        <span class="pcp" aria-hidden="true">${COPY_SVG}</span></div>`;}).join('')+`</div>`).join('');
  if(key==='emergency')return `<div class="emerg">`+c.emergency.map(e=>{
    const tel=/^[+0-9][0-9\- ]+$/.test(e.value);
    const val=tel?`<a href="tel:${e.value.replace(/[^+0-9]/g,'')}">${esc(e.value)}</a>`:esc(e.value);
    return `<div class="erow"><div class="eic">${tel?IC.phone:IC.fileText}</div><div class="ebody">
      <div class="el">${esc(e.label)}</div><div class="ev">${val}</div>
      ${e.note?`<div class="en2">${esc(e.note)}</div>`:''}</div></div>`;
  }).join('')+`</div>`+
    `<div class="secnote">※ 緊急番号・連絡先は変わることがあります。出発前にメモし、現地の最新情報や外務省「海外安全ホームページ」もご確認ください。</div>`+
    troubleFlow();
  if(key==='apps')return `<div class="apps">`+c.apps.map(a=>`<div class="arow"><div class="aic">${IC.smartphone}</div>
    <div><div class="an">${esc(a.name)}<span class="ac">${esc(a.category)}</span></div>
    <div class="ad">${esc(a.desc)}</div></div></div>`).join('')+`</div>`;
  return '';
}

function jumpTo(key){const el=document.getElementById('sec-'+key);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function setActiveChip(key){document.querySelectorAll('.jchip').forEach(ch=>ch.classList.toggle('on',ch.dataset.k===key));}
function setupScrollSpy(){
  if(io)io.disconnect();
  io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)setActiveChip(e.target.id.replace('sec-',''));});},
    {rootMargin:'-110px 0px -65% 0px',threshold:0});
  SECTIONS.forEach(s=>{const el=document.getElementById('sec-'+s.key);if(el)io.observe(el);});
}

function speak(t){
  try{
    if(!('speechSynthesis' in window)){ showToast('この端末は読み上げ非対応です'); return; }
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(t);
    u.lang=SPEECH_LANG[currentId]||'en-US'; u.rate=0.9;
    speechSynthesis.speak(u);
  }catch(e){}
}
function copyText(t){
  const done=()=>showToast('コピー：'+t);
  if(navigator.clipboard){navigator.clipboard.writeText(t).then(done).catch(()=>fallbackCopy(t,done));}
  else fallbackCopy(t,done);
}
function fallbackCopy(t,cb){const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);
  ta.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(ta);cb&&cb();}
let toastTimer;
function showToast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1600);}

/* ---------- 為替（円との相場） ---------- */
let _fxPromise=null, _fxRate=null; // _fxRate={code,r}  r = 1円あたりの現地通貨
// レート取得：①Coinbase(即時・市場レート/チャートに近い) → 失敗時 ②open.er-api(日次) にフォールバック
function getRates(){
  if(_fxPromise) return _fxPromise;
  _fxPromise = fetch('https://api.coinbase.com/v2/exchange-rates?currency=JPY')
    .then(r=>r.json())
    .then(d=>{
      if(d&&d.data&&d.data.rates){
        const o={}; for(const k in d.data.rates) o[k]=parseFloat(d.data.rates[k]);
        return {rates:o, src:'Coinbase（最新の市場レート）'};
      }
      throw new Error('cb');
    })
    .catch(()=> fetch('https://open.er-api.com/v6/latest/JPY').then(r=>r.json()).then(d=>{
      if(d&&d.rates) return {rates:d.rates, src:'open.er-api.com（'+((d.time_last_update_utc||'').replace(/ \+0000.*/,' UTC'))+'）'};
      throw new Error('er');
    }));
  return _fxPromise;
}
// 金額表示（現地通貨・大きい数は整数、小さい数は小数2桁）
function fxFmt(n){
  if(!isFinite(n)) return '-';
  if(n>=100) return Math.round(n).toLocaleString('ja-JP');
  return (Math.round(n*100)/100).toLocaleString('ja-JP',{maximumFractionDigits:2});
}
// 「1単位=何円」レート表示（チャートと桁を揃える＝有効数字を確保）
function fxRate(n){
  if(!isFinite(n)) return '-';
  if(n>=100) return Math.round(n).toLocaleString('ja-JP');
  if(n>=1)   return n.toLocaleString('ja-JP',{maximumFractionDigits:2});
  return n.toLocaleString('ja-JP',{maximumSignificantDigits:3}); // 例 0.105
}
function initFx(c){
  const box=document.getElementById('fxbox'); if(!box) return;
  const code=c.currencyCode, unit=c.summary?.currency||code;
  if(!code){ box.innerHTML=`<div class="fxstate">為替情報は準備中です。</div>`; return; }
  getRates().then(d=>{
    const r=d.rates[code];
    if(!r){ throw new Error('no rate'); }
    _fxRate={code,r,unit};
    const jpyPer1=1/r;              // 1現地通貨 = ?円
    const localPer100=100*r;        // 100円 = ?現地通貨
    const upd=d.src||'';
    const jpyRows=[100,500,1000,5000,10000,30000];
    const table=jpyRows.map(j=>`<tr><td>${j.toLocaleString('ja-JP')} 円</td>
      <td class="fxto">${fxFmt(j*r)} <small>${esc(unit)}</small></td></tr>`).join('');
    box.innerHTML=`
      <div class="fxtop"><button class="fxrefresh" onclick="refreshFx()">${IC.refresh}更新</button></div>
      <div class="fxhero">
        <div class="fxbig">1 ${esc(unit)} ≈ <b>${fxRate(jpyPer1)}</b> 円</div>
        <div class="fxsub">100 円 ≈ ${fxFmt(localPer100)} ${esc(unit)}</div>
      </div>
      <div class="fxcalc">
        <div class="fxrow">
          <input id="fxJpy" type="number" inputmode="decimal" value="10000" oninput="fxCalc('jpy')">
          <span class="fxunit">円</span><span class="fxeq">→</span>
          <span class="fxout" id="fxJpyOut">${fxFmt(10000*r)} ${esc(unit)}</span>
        </div>
        <div class="fxrow">
          <input id="fxLoc" type="number" inputmode="decimal" value="1000" oninput="fxCalc('loc')">
          <span class="fxunit">${esc(unit)}</span><span class="fxeq">→</span>
          <span class="fxout" id="fxLocOut">${fxFmt(1000*jpyPer1)} 円</span>
        </div>
      </div>
      <table class="fxtable"><tbody>${table}</tbody></table>
      <div class="fxmeta">出典：${esc(upd)}／参考値・実際の両替には手数料がかかります</div>`;
  }).catch(()=>{
    box.innerHTML=`<div class="fxstate">⚠️ 為替レートを取得できませんでした（通信状況をご確認ください）。<br>
      目安：通貨は「${esc(c.summary?.currency||'-')}」です。基本情報のレート目安も参照してください。</div>`;
  });
}
function refreshFx(){
  _fxPromise=null; _fxRate=null;
  const box=document.getElementById('fxbox');
  if(box) box.innerHTML='<div class="fxstate">最新レートを取得中…</div>';
  const c=D[currentId]; if(c) initFx(c);
}
function fxCalc(from){
  if(!_fxRate) return;
  const {r,unit}=_fxRate;
  if(from==='jpy'){
    const v=parseFloat(document.getElementById('fxJpy').value)||0;
    document.getElementById('fxJpyOut').innerHTML=`${fxFmt(v*r)} ${esc(unit)}`;
  }else{
    const v=parseFloat(document.getElementById('fxLoc').value)||0;
    document.getElementById('fxLocOut').innerHTML=`${fxFmt(v/r)} 円`;
  }
}

function openCountry(id){location.href=BASE+id+'/';}
function goHome(){location.href=BASE||'./';}

// マルチページ版の初期化：国ページ(__COUNTRY__)か、ホームか
function init(){
  if(typeof document==='undefined') return;
  if(window.__COUNTRY__ && D[window.__COUNTRY__]){
    // 国ページ：その国を表示（事前レンダリング済みHTMLを再構築＋為替/音声等を有効化）
    currentId=window.__COUNTRY__;
    const home=document.getElementById('home'); if(home) home.style.display='none';
    const cm=document.getElementById('country'); if(cm) cm.style.display='block';
    renderCountry(currentId);
  }else{
    // ホーム：旧 #thailand 形式のリンクは実URLへ転送
    const h=(location.hash||'').replace('#','');
    if(h && D[h]){ location.replace(BASE+h+'/'); return; }
    renderHome();
  }
}
init();

// PWA: Service Worker登録（http(s)配信時のみ。scopeは /tabimae/ ＝ sw.jsの位置）
if(typeof navigator!=='undefined' && 'serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load',()=>navigator.serviceWorker.register(BASE+'sw.js').catch(()=>{}));
}
