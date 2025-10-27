/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/saas-dashboard', // 👈 your repo name
  assetPrefix: '/saas-dashboard/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
