import React, { useState } from 'react';

import DealCard from './deal-card';
import DealCardWeb from './deal-card-web';
import { Platform } from 'react-native';
import { ReadingProp } from '@tarot-viii/ui/types';
import TheSpread from './the-spread';

type DealProps = {
    reading: ReadingProp[];
    dealt?: boolean;
    onPress?: (spreadIndex: number) => void;
};

const web = Platform.OS === 'web';
const POSITIONS = Array.from(Array(10).keys());

export default function Deal({ reading, dealt = false, onPress }: DealProps) {
    const [dealtCards, setDealtCards] = useState(POSITIONS);
    const [dealDone] = useState(dealt);

    const castEnergyToDeck = (index: number) => {
        if (!dealDone) {
            const updated = dealtCards.filter(item => item !== index);
            setDealtCards(updated);
        }
        if (onPress) {
            onPress(index);
        }
    };

    return (
        <TheSpread>
            {reading &&
                reading.map((card, index) => {
                    return web ? (
                        <DealCardWeb
                            key={index}
                            cardIndex={card?.index}
                            spreadIndex={index}
                            onPress={castEnergyToDeck}
                            reversed={card.reversed}
                            dealt={dealDone}
                        />
                    ) : (
                        <DealCard
                            key={index}
                            card={card}
                            cardIndex={card?.index}
                            spreadIndex={index}
                            reversed={card.reversed}
                            onPress={castEnergyToDeck}
                            dealt={dealDone}
                        />
                    );
                })}
        </TheSpread>
    );
}
