/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  runtime: 'nodejs',
  swcMinify: true,
  images: {
    domains: ["https://backend.tibbiypsixologiya.uz", 'backend.tibbiypsixologiya.uz'],

  },
}

module.exports = nextConfig
