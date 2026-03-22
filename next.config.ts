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
  images: { formats: ['image/avif', 'image/webp'], qualities: [75, 90] },
};

export default nextConfig;
