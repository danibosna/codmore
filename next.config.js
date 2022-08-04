/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
const withTM = require('next-transpile-modules')(['three', '@react-three/fiber', '@react-three/drei']);

const nextConfig = withTM({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
  assetPrefix: isDev ? 'http://localhost:3000' : '',
});

module.exports = nextConfig;
