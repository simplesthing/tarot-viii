import { Background, Deal, ShuffleAnimation, useReading } from '@tarot-viii/ui';
import React, { useEffect, useState } from 'react';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ReadingProp } from '@tarot-viii/ui/src/hooks/use-reading';
import { cardList } from '@tarot-viii/ui';

type ShuffleDealProps = {
    cards?: Record<string, string>[];
    spread?: FirebaseFirestoreTypes.DocumentData;
    generateReadingDoc: (reading: Record<string, string>) => void;
    getCards: (index: string[]) => Promise<ReadingProp[]>;
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
            const reading = deck.slice(0, 10).map(index => cardList[index]);
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
            {shuffleDone && <Deal reading={dealt} />}
        </Background>
    );
};

export default ShuffleDeal;
