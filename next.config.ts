import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    remotePatterns: [
      new URL('https://cdn.pixabay.com/photo/**'),
      new URL('https://images.silpo.ua/v2/products/**'),
      new URL('https://static.silpo.ua/content/**'),
    ],
  },
};

export default nextConfig;
