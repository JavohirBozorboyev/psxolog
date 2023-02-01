/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://backend.tibbiypsihologiya.uz", 'backend.tibbiypsihologiya.uz'],

  },
};

module.exports = nextConfig;
