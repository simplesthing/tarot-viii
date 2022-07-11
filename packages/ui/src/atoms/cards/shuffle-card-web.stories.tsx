import ShuffleCardWeb, { ShuffleCardWebProps } from './shuffle-card-web';

import React from 'react';
import { default as colors } from '../../theme/colors';

export default {
    title: 'atoms/shuffleCardWeb',
    component: ShuffleCardWeb,
    argTypes: { onPress: { action: 'pressed' } },
    args: {
        cardIndex: 21,
        isShuffling: false,
        cutCards: () => ({}),
        cutCardIndex: 10,
        onPress: () => ({})
    },
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

export const Default = (args: ShuffleCardWebProps) => <ShuffleCardWeb {...args} />;
