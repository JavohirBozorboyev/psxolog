/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
  dest: 'public',
  skipWaiting: true,
  
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://backend.tibbiypsihologiya.uz", 'backend.tibbiypsihologiya.uz'],

  },
})
