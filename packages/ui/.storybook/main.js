module.exports = {
    addons: ['@storybook/addon-essentials', '@storybook/addon-docs', {
        name: '@storybook/addon-react-native-web',
        options: {
            modulesToTranspile: ['@rneui/base', '@rneui/themed', 'react-native-reanimated'],
            babelPlugins: ['react-native-reanimated/plugin']
        },
    },],
    stories: ['../src/**/*.stories.@(tsx|mdx)']
};
