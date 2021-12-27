import { StyleSheet, View } from 'react-native';

import Deal from '../cards/deal';
import React from 'react';
import { ReadingProp } from '../../types/';
import { default as colors } from '../theme/colors';
import readingJson from '../../assets/data/reading.json';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

export default {
    title: 'cards/deal',
    component: Deal,
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

export const Default = args => (
    <View style={styles.container}>
        <Deal reading={readingJson as ReadingProp[]} onPress={() => {}} />
    </View>
);
