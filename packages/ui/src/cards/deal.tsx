import React, { useState } from 'react';

import DealCard from './deal-card';
import DealCardWeb from './deal-card-web';
import { Platform } from 'react-native';
import { ReadingProp } from '@tarot-viii/ui/src/hooks/use-reading';
import TheSpread from './the-spread';

type DealProps = {
    reading?: ReadingProp[];
    done?: () => void;
};

const web = Platform.OS === 'web';
const POSITIONS = Array.from(Array(10).keys());

export default function Deal({ reading, done }: DealProps) {
    const [dealtCards, setDealtCards] = useState(POSITIONS);
    const [dealDone] = useState(false);

    const castEnergyToDeck = (index: number) => {
        if (!!done && !dealDone) {
            const updated = dealtCards.filter(item => item !== index);
            setDealtCards(updated);
            if (updated.length === 0) {
                done();
            }
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
                        />
                    ) : (
                        <DealCard
                            key={index}
                            card={card}
                            cardIndex={card?.index}
                            spreadIndex={index}
                            reversed={card.reversed}
                            onPress={castEnergyToDeck}
                        />
                    );
                })}
        </TheSpread>
    );
}
