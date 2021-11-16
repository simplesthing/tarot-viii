import Card, { CardProps } from './card';
import React from 'react';


export default {
    title: 'cards/card',
    component: Card,
    args: { cardIndex: 0, face: true }
};

export const Default = (args: CardProps) => <Card {...args} />;
