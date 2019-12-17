const cacheName = 'boilerplate'
const HOME_URL = '/'
const OFFLINE_URL = '/offline'

const staticAssets = [
  HOME_URL,
  OFFLINE_URL,
  '/css/brand.css',
]

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName)
  await cache.addAll(staticAssets)
  return self.skipWaiting()
})

self.addEventListener('activate', e => {
  self.clients.claim()
})

self.addEventListener('fetch', async e => {
  const req = e.request
  e.respondWith(networkAndCache(req))
  /*
  const url = new URL(req.url)
  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req))
  } else {
    e.respondWith(networkAndCache(req))
  }
  */
})

async function cacheFirst(req) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(req)
  return cached || fetch(req)
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName)
  try {
    const fresh = await fetch(req)
    await cache.put(req, fresh.clone())
    return fresh
  } catch (e) {
    const cached = await cache.match(req)
    if (!cached) {
      // We know a request was intercepted
      // here if for some res = await fetch(url),
      // res.url === <protocol>://<origin>/offline
      // and not the actual url that was intended
      return await cache.match(OFFLINE_URL)
    }
    return cached
  }
}