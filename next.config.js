/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove assetPrefix and basePath for static export
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://thinkhome.org' : '',
  // basePath: '',
};

module.exports = nextConfig;
