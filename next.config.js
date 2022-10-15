/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.kontenbase.com"],
  },
};

module.exports = nextConfig;
