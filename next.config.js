/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.manhwaland.cfd"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // output: "export",
};

module.exports = nextConfig;
