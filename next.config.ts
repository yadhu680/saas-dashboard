/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // Important: enables static HTML export
  basePath: isProd ? '/saas-dashboard' : '',
  assetPrefix: isProd ? '/saas-dashboard/' : '',
  reactStrictMode: true,
}

module.exports = nextConfig
