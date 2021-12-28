import { default as colors } from './colors';
//https://reactnativeelements.com/docs/customization

const theme: any = {
    colors: {
        background: colors.spanish_gray.base,
        primary: colors.smoky_black.base,
        secondary: '#fff',
        white: colors.spanish_white.base,
        black: colors.smoky_black.base,
        grey0: colors.silver_sand.light,
        grey1: colors.silver_sand.base,
        grey2: colors.silver_sand.muted,
        grey3: colors.spanish_gray.muted,
        grey4: colors.spanish_gray.base,
        grey5: colors.spanish_gray.shadow,
        greyOutline: colors.silver_sand.muted,
        searchBg: colors.spanish_gray.light,
        success: colors.medium_aquamarine.base,
        warning: colors.lemon.base,
        error: colors.electric_orange.base
    },
    Button: {
        buttonStyle: {
            height: 40,
            paddingLeft: 20,
            paddingRight: 20
        },
        titleStyle: {
            color: '#fff',
            fontWeight: 'bold'
        }
    }
};

export default theme;
