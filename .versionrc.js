const sdkVersion = '43.0.0'

module.exports = {
    bumpFiles:  [
        {
            filename: 'package.json'
        },
        {
            filename: 'packages/app/package.json'
        },
        {
            filename: 'packages/expo/package.json'
        },
        {
            filename: 'packages/expo/app.json',
            updater: require.resolve('standard-version-expo')
        },
        {
            filename: 'packages/expo/app.json',
            updater: require.resolve('standard-version-expo/android')
        },
        {
            filename: 'packages/expo/app.json',
            updater: require.resolve('standard-version-expo/ios')
        },
        {
            filename: 'packages/expo/ios/simplestarot/Info.plist',
            updater: require.resolve('@brettdh/standard-version-expo/ios/native/app-version')
        },
        {
            filename: 'packages/expo/ios/simplestarot/Info.plist',
            updater: require.resolve('@brettdh/standard-version-expo/ios/native/buildnum/increment')
        },
        {
            filename: 'packages/expo/android/app/build.gradle',
            updater: require.resolve('@brettdh/standard-version-expo/android/native/app-version')
        },
        {
            filename: 'packages/expo/android/app/build.gradle',
            updater: require('@brettdh/standard-version-expo/android/native/buildnum/code')(
                sdkVersion
            )
        },
        {
            filename: 'packages/next/package.json'
        },
        {
            filename: 'packages/ui/package.json'
        }
    ]
}
