import Deal, { DealProps } from './deal';
import React from 'react';
import readingJson from '../../assets/data/reading.json';
import { default as colors } from '../theme/colors';
import { StyleSheet, View } from 'react-native';


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
    argTypes: { done: { action: 'done!' } },
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

export const Default = (args: DealProps) => (
    <View style={styles.container}>
        <Deal {...args} web={true} reading={readingJson} />
    </View>
);
