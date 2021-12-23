import ReadingCarousel, { ReadingCarouselProps } from './reading-carousel';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { default as colors } from '../theme/colors';
import { default as reading } from '../../assets/data/reading.json';

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
        <ReadingCarousel data={reading} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        width: '100vw'
    }
});
