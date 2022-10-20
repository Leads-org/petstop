/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["api.kontenbase.com"],
  },
};

module.exports = nextConfig;
