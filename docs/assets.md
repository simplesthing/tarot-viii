# Assets

## Images

Static images are saved in UI package `@tarot-viii/ui/assets/images`

### svg's

Static svg's are converted into react components using [SVGR cli](https://react-svgr.com/docs/cli/)

i.e. `npx @svgr/cli -d src/cards/svg/swords/Swords1.js assets/svg/cards/smith-waite/swords/sword_1.svg --native`

npx @svgr/cli -d src/cards/svg/major-arcana/Arcana17Stars.js assets/svg/cards/smith-waite/major-arcana/arcana_17_star.svg --native
