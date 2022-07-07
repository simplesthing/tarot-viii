module.exports = {
    addons: ['@storybook/addon-essentials', {
        name: '@storybook/addon-react-native-web',
        options: {
            modulesToTranspile: ['@rneui/base', '@rneui//themed'],
        },
    },],
    stories: ['../src/**/*.stories.tsx']
};
