# Tarot VIII

React, React Native and React Native Web shared component monorepo.

[Expo](https://docs.expo.dev/versions/latest/) manages the mobile app

[Next](https://nextjs.org/docs) manages the web app

[Storybook UI](https://storybook.js.org/docs/react/api/csf) shared component library

[expo-next-react-navigation](https://github.com/nandorojo/expo-next-react-navigation) shared routing

-   React Native for iOS and Android
    -   Bare Expo 43
-   React Native for Web
    -   Next.js 11
-   Storybook UI
-   TypeScript
-   Babel config that works for Expo and Next.js in a monorepo

# Architecture

## Root

> [Yarn Workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) root

-   Project wide babel, tsconfig, eslint and prettier settings and `yarn.lock` ([read](https://valcker.medium.com/configuring-typescript-monorepo-with-eslint-prettier-and-webstorm-61a71f218104))

## App

> Shared _composite_ components

-   No packages installed here

## Expo

> Native App components only

-   Add all your **react-native shared packages** here

`yarn start`

`yarn ios` or `yarn android` in separate process

## Next.js

> Web app components only

-   Add your **web-only packages** here

`yarn next`

## UI

> Shared _atomic_ components

-   Add **storybook-only packages**, as dev dependencies, here

-   Add all your static assets here `/ui/assets/...`

`yarn storybook`
