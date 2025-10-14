/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // enable static export
  basePath: isProd ? '/saas-dashboard' : '', // your repo name
  assetPrefix: isProd ? '/saas-dashboard/' : '', // ensures _next files are served correctly
  reactStrictMode: true,
};
