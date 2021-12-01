import React from 'react';
import ReadCard, { ReadCardProps } from './read-card';
import readingJson from '../../assets/data/reading.json';


export default {
    title: 'cards/read',
    component: ReadCard,
    args: { card: readingJson[0] }
};

export const Default = (args: ReadCardProps) => <ReadCard {...args} />;
