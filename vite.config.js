import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
export default defineConfig({
base: '/rpp/',
plugins: [
react(),
VitePWA({
registerType: 'autoUpdate',
includeAssets: [
'favicon.ico',
'robots.txt',
'icons/icon-192.png',
'icons/icon-512.png'
],
manifest: {
name: 'Rosario',
short_name: 'Rosario',
description: 'Aplicação React com suporte a PWA',
start_url: '/rpp/',
scope: '/rpp/',
display: 'standalone',
background_color: "#87CEFA",
theme_color: "#87CEFA",
icons: [
{ src: '/rpp/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
{ src: '/rpp/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
]
},
workbox: {
maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
globPatterns: [
'**/*.{js,css,html,ico,png,jpg,jpeg,svg,json,mp3,m4a}'
],
runtimeCaching: [
{
urlPattern: /\.(?:mp3|m4a|jpe?g|png)$/i,
handler: 'CacheFirst',
options: {
cacheName: 'media-cache',
expiration: {
maxEntries: 300,
maxAgeSeconds: 60 * 60 * 24 * 60
}
}
}
]
}
})
],
assetsInclude: ['**/*.m4a', '**/*.mp3', '**/*.jpg', '**/*.png', '**/*.jpeg'],
resolve: {
alias: {
'@': path.resolve(__dirname, './src')
}
}
});
