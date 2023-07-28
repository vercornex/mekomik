/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.manhwaland.cfd"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
