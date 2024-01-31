/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    distDir: 'dist',
    images: {
      unoptimized: true,
    },
  };
  
  if (process.env.NODE_ENV === 'production') {
    nextConfig.output = 'export';
  }
  
  module.exports = nextConfig;
  