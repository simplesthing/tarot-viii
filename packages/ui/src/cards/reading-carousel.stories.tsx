import { Dimensions, StyleSheet, View } from 'react-native';
import ReadingCarousel, { ReadingCarouselProps } from './reading-carousel';

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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const width = screenWidth / 2 - 20;
const height = screenHeight / 2 - 20;

export const Default = (args: ReadingCarouselProps) => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <ReadingCarousel data={reading} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height
    },
    wrapper: {
        position: 'relative',
        width,
        height: '120%',
        overflow: 'hidden'
    }
});
