import Card, { CardProps } from '../cards/card';

import React from 'react';
import { vmin } from 'react-native-expo-viewport-units';

const styleProps = {
    width: vmin(50),
    height: vmin(100)
};

export default {
    title: 'cards/card',
    component: Card,
    args: { cardIndex: 0, face: true, styleProps }
};

export const Default = (args: CardProps) => <Card {...args} />;
