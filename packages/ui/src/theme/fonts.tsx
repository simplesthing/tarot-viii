import { Dimensions, Platform, StatusBar } from 'react-native';

export function Percentage(percent: number) {
    const { height, width } = Dimensions.get('window');
    const standardLength = width > height ? width : height;
    const offset =
        width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight || 78;

    const deviceHeight =
        Platform.OS === 'android' ? standardLength - offset : standardLength;
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function Value(fontSize: number, standardScreenHeight: number = 680) {
    const { height, width } = Dimensions.get('window');

    const standardLength = width > height ? width : height;
    const offset =
        width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight || 78;

    const deviceHeight =
        Platform.OS === 'android' ? standardLength - offset : standardLength;

    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;

    return Math.round(heightPercent);
}
