// Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');
const { createMetroConfiguration } = require('expo-yarn-workspaces');
const path = require('path');

const config = createMetroConfiguration(__dirname);

// Monorepo
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPath = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules')
];

config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles']

module.exports = config;