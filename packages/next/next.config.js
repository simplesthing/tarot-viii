const { withExpo } = require('@expo/next-adapter');
const withFonts = require('nextjs-fonts');
const withImages = require('next-images');

const withPlugins = require('next-compose-plugins');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// });
const withTM = require('next-transpile-modules')(['app', 'react-native-ratings', 'solito']);

const nextConfig = {
    images: {
        disableStaticImages: true
    }
};

module.exports = withPlugins(
    [
        withTM,
        [withImages, { projectRoot: __dirname + '/../..' }],
        [withFonts, { projectRoot: __dirname + '/../..' }],
        [withExpo, { projectRoot: __dirname + '/../..' }]
    ],
    nextConfig
);
