/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://backend.tibbiypsixologiya.uz", 'backend.tibbiypsixologiya.uz'],

  },
}

module.exports = nextConfig
