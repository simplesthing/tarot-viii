import ReadingCarousel, { ReadingCarouselProps } from './reading-carousel';
import { StyleSheet, View } from 'react-native';

import ExApp from '../example/ExApp';
import React from 'react';
import { default as colors } from '../theme/colors';
import reading from '../../assets/data/reading.json';

const styles = StyleSheet.create({
    container: {}
});

export default {
    title: 'cards/reading',
    component: ReadingCarousel,
    argTypes: { onPress: { action: 'pressed' } },
    parameters: {
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: colors.silver_sand.shadow
                }
            ]
        }
    }
};

export const Default = (args: ReadingCarouselProps) => (
    <View style={styles.container}>
        <ExApp />
    </View>
);
