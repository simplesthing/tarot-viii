import { Background, Deal, ShuffleAnimation, useReading } from '@tarot-viii/ui';
import React, { useEffect, useState } from 'react';

import { CARD_NAME_INDEXES } from '@tarot-viii/ui';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ReadingProp } from '@tarot-viii/expo/src/types/firestore';

type ShuffleDealProps = {
    cards?: Record<string, string>[];
    spread?: FirebaseFirestoreTypes.DocumentData;
    generateReadingDoc: (reading: Record<string, string>) => void;
    getCards: (index: string[]) => Promise<ReadingProp[] | {}[]>;
};

const ShuffleDeal = ({ spread, generateReadingDoc, getCards }: ShuffleDealProps) => {
    const [shuffleDone, setShuffleDone] = useState(false);
    const [dealt, setDealt] = useState();

    const { cutDeck, shuffleDeck, deal, deck } = useReading();

    useEffect(() => {
        shuffleDeck();
    }, []);

    useEffect(() => {
        if (!!shuffleDone) {
            const reading = deck.slice(0, 10).map(index => CARD_NAME_INDEXES[index]);
            getCards(reading).then(cards => {
                const d = deal({ cards, spread });
                generateReadingDoc(d);
                setDealt(d);
            });
        }
    }, [shuffleDone]);

    return (
        <Background>
            {!shuffleDone && (
                <ShuffleAnimation
                    done={() => setShuffleDone(true)}
                    shuffleDeck={shuffleDeck}
                    cutDeck={cutDeck}
                />
            )}
            {shuffleDone && dealt && <Deal reading={dealt} />}
        </Background>
    );
};

export default ShuffleDeal;
