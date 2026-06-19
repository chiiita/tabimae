// たびまえ Service Worker — オフライン対応
// 注意点・フレーズ・緊急番号・ビザ等はネット無しで閲覧可（為替の最新レートのみ通信要）
const CACHE = 'tabimae-v1';
const SHELL = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  "data/australia.js","data/austria.js","data/belgium.js","data/brazil.js","data/cambodia.js","data/canada.js","data/china.js","data/croatia.js","data/czech.js","data/denmark.js","data/egypt.js","data/fiji.js","data/finland.js","data/france.js","data/germany.js","data/greece.js","data/guam.js","data/hongkong.js","data/hungary.js","data/india.js","data/indonesia.js","data/ireland.js","data/italy.js","data/korea.js","data/landmarks.js","data/laos.js","data/malaysia.js","data/mexico.js","data/mongolia.js","data/morocco.js","data/nepal.js","data/netherlands.js","data/newzealand.js","data/norway.js","data/philippines.js","data/poland.js","data/portugal.js","data/saipan.js","data/singapore.js","data/southafrica.js","data/spain.js","data/srilanka.js","data/sweden.js","data/switzerland.js","data/taiwan.js","data/thailand.js","data/turkey.js","data/uae.js","data/uk.js","data/usa.js","data/vietnam.js"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // 為替API・TradingViewは常にネット（キャッシュしない＝最新を取りに行く）
  if (/coinbase\.com|open\.er-api\.com|tradingview/.test(url.host)) {
    e.respondWith(fetch(req).catch(() => new Response('', { status: 504 })));
    return;
  }
  // Googleフォント等はstale-while-revalidate、それ以外(自サイト)はcache-first
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res && res.status === 200 && (url.origin === location.origin || /gstatic|googleapis/.test(url.host))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
