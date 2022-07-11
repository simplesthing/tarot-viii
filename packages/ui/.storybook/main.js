module.exports = {
    addons: ['@storybook/addon-essentials', {
        name: '@storybook/addon-react-native-web',
        options: {
            modulesToTranspile: ['@rneui/base', '@rneui//themed', 'react-native-reanimated'],
            babelPlugins: ['react-native-reanimated/plugin']
        },
    },],
    stories: ['../src/atoms/**/*.stories.tsx']
};
