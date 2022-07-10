# Tarot VIII

React, React Native and React Native Web shared component monorepo.

[Expo](https://docs.expo.dev/versions/latest/) manages the mobile app using Expo tools for distribution

[Next](https://nextjs.org/docs) manages the web app using Vercel tools for distribution

[Storybook UI](https://storybook.js.org/docs/react/api/csf) shared component library

# Architecture

## Root

> [Yarn Workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) root

-   Project wide babel, tsconfig, eslint and prettier settings and `yarn.lock` ([read](https://valcker.medium.com/configuring-typescript-monorepo-with-eslint-prettier-and-webstorm-61a71f218104))

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

> React Native UI components

-   Add **storybook-only packages**, as dev dependencies, here

-   Add all your static assets here `/ui/assets/...`

`yarn storybook`

# Copyright

The [Rider Waite](https://sacred-texts.com/tarot/faq.htm#uscopyright) cards used in this application are in the public domain; svg pictorial keys were obtained under [Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/) open source licensing.

The code in this repository is open for personal use but not for distributing.
