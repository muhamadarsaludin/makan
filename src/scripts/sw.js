import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const {
  assets,
} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  // console.log('Installing Service Worker...');

  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  // console.log('Activating Service Worker...');

  // TODO: Delete Old Caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
