
var DV_CACHE='dv-verse-v1';
var DV_FILES=[
  './',
  './index.html',
  './styles.css',
  './app.js',
  './left-sidebar.html',
  './right-sidebar.html',
  './user.js',
  './search.js',
  './game.js',
  './verse-trans.js',
  './future-update.js',
  './manifest.json'
];
self.addEventListener('install',function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(DV_CACHE).then(function(c){ return c.addAll(DV_FILES); }));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==DV_CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch',function(e){
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(function(){ return caches.match('./index.html'); }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){ return r||fetch(e.request); }));
});
