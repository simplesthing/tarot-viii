# Tarot VIII

React Native monorepo.

[Expo](https://docs.expo.dev/versions/latest/) manages the mobile app using Expo tools for distribution

[Storybook UI](https://storybook.js.org/docs/react/api/csf) shared component library

# Architecture

## Root

> [Yarn Workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) root

-   Project wide babel, tsconfig, eslint and prettier settings and `yarn.lock` ([read](https://valcker.medium.com/configuring-typescript-monorepo-with-eslint-prettier-and-webstorm-61a71f218104))

## Expo

> Native App components only

-   Add all your **react-native shared packages** here

`yarn start`

`yarn ios`

## UI

> React Native UI components

-   Add **storybook-only packages**, as dev dependencies, here

-   Add all your static assets here `/ui/assets/...`

`yarn storybook`

# Copyright

The [Rider Waite](https://sacred-texts.com/tarot/faq.htm#uscopyright) cards used in this application are in the public domain; svg pictorial keys were obtained under [Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/) open source licensing.

The code in this repository is open for personal use but not for distributing.

## DEPRECATED

-   Web app from RN parts using next is not being maintained at this time.

-   Mobile Android app is not being maintained at this time.

Holding focus on the ios app keeping it up to date and coming back to web and Android when there is a reason to do so.

[Next](https://nextjs.org/docs) manages the web app using Vercel tools for distribution
