self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/index.css',
          '/css/header.css',
          '/login_cadastro/login.html',
          '/login_cadastro/cadastro.html',
          '/login_cadastro/login_cadastro.css',
          '/user/telaLanchonetes.html',
          '/user/lanchonete1/lanchonete1.html',
          '/images'
        ]);
      })
    );
  });
  
  //self.addEventListener('fetch', event => {
  //  event.respondWith(
  //    caches.match(event.request).then(response => {
  //      return response || fetch(event.request);
  //    })
  // );
  //});