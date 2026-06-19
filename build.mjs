// たびまえ 静的サイトジェネレーター
// 既存の assets/app.js のレンダリング関数を使い、ホーム＋国別ページ＋sitemap＋sw を生成する。
// 使い方: node build.mjs   （生成後に git add/commit/push）
import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const SITE = 'https://chiiita.github.io/tabimae/';

/* ---------- DOMスタブ（app.jsをNodeで動かす） ---------- */
const store = {};
const mkEl = id => ({ id, _html:'', style:{}, dataset:{}, value:'',
  classList:{add(){},remove(){},toggle(){}},
  set innerHTML(v){this._html=v;}, get innerHTML(){return this._html;},
  textContent:'', addEventListener(){}, scrollIntoView(){}, observe(){}, querySelectorAll:()=>[] });
['home','country','countryList','fxbox','toast','backBtn','noHit'].forEach(id=>store[id]=mkEl(id));
global.window = { __BASE__:'', addEventListener(){}, scrollTo(){} };
global.document = { getElementById:id=>store[id]||(store[id]=mkEl(id)), querySelectorAll:()=>[],
  createElement:()=>({style:{},select(){},value:''}), body:{appendChild(){},removeChild(){}}, execCommand(){} };
global.location = { hash:'', protocol:'file:', pathname:'/' };
global.IntersectionObserver = class { disconnect(){} observe(){} };
// navigator / fetch / setTimeout は Node 組み込みを使用（build経路では呼ばれない or .catch済）

/* ---------- データ読込（国→landmarks→ex の順） ---------- */
const files = fs.readdirSync('./data').filter(f=>f.endsWith('.js') && !f.startsWith('._'));
const countryFiles = files.filter(f=>f!=='landmarks.js' && !/^ex_/.test(f));
const exFiles = files.filter(f=>/^ex_/.test(f)).sort();
countryFiles.forEach(f=>require('./data/'+f));
require('./data/landmarks.js');
exFiles.forEach(f=>require('./data/'+f));
const T = global.window.TABIMAE;

/* ---------- app.js を eval して関数を取得 ---------- */
let appSrc = fs.readFileSync('./assets/app.js','utf8');
appSrc += '\n;globalThis.__B={renderHome,renderCountry,ORDER};';
eval(appSrc);
const { renderHome, renderCountry, ORDER } = globalThis.__B;

/* ---------- 共通パーツ ---------- */
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const dataScripts = base => ORDER.map(id=>`<script src="${base}data/${id}.js"></script>`).join('\n')
  + `\n<script src="${base}data/landmarks.js"></script>\n`
  + exFiles.map(f=>`<script src="${base}data/${f}"></script>`).join('\n');

const LOGO_SVG = '<span class="em" style="color:var(--accent);display:inline-flex"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="12" y1="11" x2="12" y2="17"/></svg></span>たびまえ <small>旅マエ準備帳</small>';
const PLANE_SVG = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8L8 11l-2 2-2-.5-1 1 3 2 2 3 1-1L7 16l2-2 4 3.7a.5.5 0 0 0 .8-.5z"/></svg>';

const FAQ = [
  ['ビザって必要？','国によります。日本のパスポートは多くの国で短期観光ビザ不要ですが、必要な国もあります。各国ページの「ビザ・入国」で確認してください。'],
  ['ESTA・eTA・ETAって何？','アメリカ(ESTA)・カナダ(eTA)・イギリス(ETA)などの電子渡航認証です。ビザは不要でも、これを出発前にオンライン申請しないと搭乗できません。有料・承認に時間がかかることも。'],
  ['シェンゲン協定って？','ヨーロッパの多くの国でつくる枠組み。180日のうち合計90日までビザなしで滞在できます。フランス＋イタリアなど周遊する場合、滞在日数は合算されます。'],
  ['パスポートの残存期間は？','国により入国時に3〜6か月以上必要なことが多いです。期限が近い人は早めに更新を。各国ページで確認できます。'],
  ['チップは必要？','国によります（アメリカは事実上必須、アジアの多くは不要）。各国ページの「基本情報」のチップ欄を見てください。'],
  ['水道水は飲める？','これも国次第。飲める国とお腹を壊しやすい国があります。各国「基本情報」の水の欄を確認し、不安ならミネラルウォーターを。'],
  ['海外旅行保険は入るべき？','強くおすすめします。国によっては医療費が非常に高額（救急車も有料）。クレジットカード付帯では不足することもあるので内容を確認。'],
  ['現金とカード、どっちがいい？','キャッシュレスが進む国も増えています。海外対応のカード＋少額の現地通貨の組み合わせが安心。両替は街中が好レートのことが多いです。'],
  ['スマホ・ネットはどうする？','eSIM・現地SIM・Wi-Fiルーターの3択。今はeSIMが手軽。各国「基本情報／アプリ」を参照。地図・翻訳・配車アプリは出発前に入れておくと安心。'],
  ['もしもの時は？','各国ページの「緊急時・トラブル対処」に番号と手順をまとめています。出発前に外務省「たびレジ」に登録すると、現地の安全情報が届きます。']
];
const faqHTML = FAQ.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('\n      ');
const faqJsonLd = JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',
  mainEntity:FAQ.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});

function head({base, title, desc, canonical, jsonld}){
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="8nxnfNfAeiIF4y2o9Pat0MSHB5bYzsV2z5ZaysLEMr8">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/png" sizes="192x192" href="${base}icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="${base}icon-512.png">
<link rel="manifest" href="${base}manifest.json">
<meta name="theme-color" content="#16263f">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="たびまえ">
<link rel="apple-touch-icon" href="${base}icon-192.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="たびまえ">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}ogp.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}ogp.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500;700;900&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/style.css">
<script type="application/ld+json">${jsonld}</script>
</head>`;
}
const footer = `<footer class="wrap">
  <div class="disc">
    ※ 当サイトの情報は <b>2026年6月時点</b> の一般的な目安です。ビザ・治安・法律・連絡先・為替などは変わることがあります。
    渡航前に必ず外務省「海外安全ホームページ」や各国の公式情報で最新をご確認ください。為替の最新レートのみオンライン取得です。
  </div>
  <div style="margin-top:18px">© たびまえ ／ 情報更新：2026年6月</div>
</footer>`;

/* ---------- ホーム生成 ---------- */
renderHome();
const homeGrid = store.countryList.innerHTML; // BASE='' なので各カードは <id>/ へリンク
const homeJsonLd = JSON.stringify({'@context':'https://schema.org','@type':'WebSite',
  name:'たびまえ', url:SITE, inLanguage:'ja',
  description:'はじめての海外旅行の準備・現地情報を50カ国分まとめた無料サイト。'})
  + '</script>\n<script type="application/ld+json">' + faqJsonLd;
const homeHTML = head({ base:'', canonical:SITE,
  title:'たびまえ｜はじめての海外旅行の準備・現地情報（50カ国）',
  desc:'出発前の準備からビザ・お金・治安・現地のひとこと（音声つき）・もしもの対処まで、初めての海外旅行に必要なことを50カ国分まとめた無料サイト。',
  jsonld: homeJsonLd })
+ `\n<body>
<header><div class="wrap hbar"><a class="logo" href="./">${LOGO_SVG}</a></div></header>
<main id="home"><div class="wrap">
  <div class="hero">
    <span class="eyebrow">${PLANE_SVG}渡航前にサッと確認</span>
    <h1>はじめての海外でも<br>迷わない・<span class="g">不安をなくす</span></h1>
    <p>出発前の準備からビザ・お金・治安・現地のひとこと（音声つき）・もしもの対処まで、<b>初めての海外旅行に必要なこと</b>を国別にまとめました。まず行く国を選んでください。</p>
    <div class="herotrust">情報は2026年6月時点の目安。最終確認は各国公式・外務省でお願いします。</div>
  </div>
  <div class="homesearch"><span class="hsicon">🔍</span>
    <input id="homeq" type="text" inputmode="search" placeholder="国名で検索（例：タイ / Thailand）" oninput="filterHome(this.value)"></div>
  <div id="countryList">${homeGrid}</div>
  <div id="noHit" class="nohit" style="display:none">該当する国が見つかりませんでした。</div>
  <div class="sectitle">❓ はじめての海外旅行Q&A</div>
  <div class="faq">
      ${faqHTML}
  </div>
</div></main>
<main id="country" class="wrap" style="display:none"></main>
<div class="toast" id="toast">コピーしました</div>
${footer}
${dataScripts('')}
<script>window.__BASE__='';</script>
<script src="assets/app.js"></script>
</body>
</html>`;
fs.writeFileSync('index.html', homeHTML);

/* ---------- 国別ページ生成 ---------- */
let n=0;
for(const id of ORDER){
  const c=T[id]; if(!c) continue;
  renderCountry(id);
  const inner = store.country.innerHTML;
  const canonical = SITE+id+'/';
  const title = `${c.name}の旅行ガイド｜ビザ・治安・為替・フレーズ｜たびまえ`;
  const desc = `${c.name}（${c.nameEn}）への渡航前まとめ。ビザ・入国、為替、治安・詐欺・マナー、場面別フレーズ（音声つき）、緊急連絡先、予算の目安まで。${c.tagline}`.slice(0,150);
  const jsonld = JSON.stringify({'@context':'https://schema.org','@type':'WebPage',
    name:title, description:desc, url:canonical, inLanguage:'ja',
    isPartOf:{'@type':'WebSite',name:'たびまえ',url:SITE},
    breadcrumb:{'@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'たびまえ',item:SITE},
      {'@type':'ListItem',position:2,name:c.name,item:canonical}]}});
  const pg = head({base:'../', title, desc, canonical, jsonld})
  + `\n<body>
<header><div class="wrap hbar"><a class="logo" href="../">${LOGO_SVG}</a><a class="back" href="../" style="display:flex">← 国一覧</a></div></header>
<main id="home" style="display:none"></main>
<main id="country" class="wrap">${inner}</main>
<div class="toast" id="toast">コピーしました</div>
${footer}
${dataScripts('../')}
<script>window.__BASE__='../';window.__COUNTRY__='${id}';</script>
<script src="../assets/app.js"></script>
</body>
</html>`;
  fs.mkdirSync(id,{recursive:true});
  fs.writeFileSync(id+'/index.html', pg);
  n++;
}

/* ---------- sitemap.xml ---------- */
const urls = [SITE, ...ORDER.map(id=>SITE+id+'/')];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`  <url><loc>${u}</loc><lastmod>2026-06-19</lastmod><changefreq>monthly</changefreq><priority>${u===SITE?'1.0':'0.8'}</priority></url>`).join('\n')}
</urlset>`;
fs.writeFileSync('sitemap.xml', sitemap);

/* ---------- sw.js（精密プリキャッシュ） ---------- */
const shell = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","assets/style.css","assets/app.js",
  ...ORDER.map(id=>`data/${id}.js`),"data/landmarks.js",...exFiles.map(f=>`data/${f}`),
  ...ORDER.map(id=>`${id}/`)];
const sw = `// たびまえ Service Worker（自動生成 by build.mjs）
const CACHE='tabimae-v3';
const SHELL=${JSON.stringify(shell)};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
  if(/coinbase\\.com|open\\.er-api\\.com|tradingview/.test(url.host)){e.respondWith(fetch(req).catch(()=>new Response('',{status:504})));return;}
  e.respondWith(caches.match(req).then(hit=>{const net=fetch(req).then(res=>{if(res&&res.status===200&&(url.origin===location.origin||/gstatic|googleapis/.test(url.host))){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;}).catch(()=>hit);return hit||net;}));});
`;
fs.writeFileSync('sw.js', sw);

console.log('生成完了: index.html + '+n+'国ページ + sitemap.xml('+urls.length+'URL) + sw.js');
