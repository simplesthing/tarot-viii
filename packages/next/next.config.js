/** @type {import('next').NextConfig} */

const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-images');

const withPlugins = require('next-compose-plugins');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// });
// const withTM = require('next-transpile-modules')(['app', 'react-native-ratings', 'solito']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true
  }
};


module.exports = withPlugins(
  [
    [withImages, { projectRoot: __dirname + '/../..' }],
    [withExpo, { projectRoot: __dirname + '/../..' }]
  ],
  nextConfig
);
