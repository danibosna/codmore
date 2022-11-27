/** @type {import('next').NextConfig} */
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
});

module.exports = nextConfig;
