#!/usr/bin/env bash

echo " - Ruby: " `ruby -v`
echo " - Gem: " `gem -v`
echo " - Node: " `node -v`
echo " - NPM: " `npm -v`
echo " - Cocoapods: " `pod --version`
echo " - Expo: " `expo --version`

echo "Clearing watchman watches" && \
watchman watch-del-all

echo "Cleaning node modules" && \
rm -rf node_modules/ && \
rm -rf packages/expo/node_modules && \
rm -rf packages/next/node_modules && \
rm -rf packages/ui/node_modules && \

echo "Cleaning types" && \
rm -rf dist/ && \
rm -rf packages/app/dist && \
rm -rf packages/expo/dist && \
rm -rf packages/next/dist && \
rm -rf packages/ui/dist && \

echo "Cleaning up XCode" && \
rm -rf ~/Library/Developer/XCode/DerivedData && \ 

echo "Clearing metro cache" && \
rm -rf /tmp/metro-*

echo "Cleaning expo" && \
rm -rf packages/expo/.expo && \

echo "Cleaning next" && \
rm -rf packages/next/.next && \

echo "Cleaning ui" && \
rm rf packages/ui/.expo

echo "Reinstall packages" && \
yarn install

echo "Cocoa pods" && \
cd packages/expo/ios && pod install

