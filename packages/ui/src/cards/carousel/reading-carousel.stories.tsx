import ReadingCarousel, { ReadingCarouselProps } from './reading-carousel';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { default as colors } from '../../theme/colors';
import { default as reading } from '../../../assets/data/reading.json';

export default {
    title: 'cards/carousel',
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

const width = 720;
const height = 695;

const data = {
    title: 'Storybook reading',
    notes: 'Taking notes',
    creationTme: 'Fri Dec 17 2021 13:32:04 GMT-0800 (PST)',
    reading: reading
};

export const Default = (args: ReadingCarouselProps) => (
    <View style={styles.container}>
        <ReadingCarousel data={data} startFromIndex={3} width={width} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height,
        width
    }
});
