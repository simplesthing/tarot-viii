import {
    Background,
    CARD_NAME_INDEXES,
    Deal,
    ShuffleAnimation,
    useReading
} from '@tarot-viii/ui';
import React, { useEffect, useState } from 'react';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ReadingProp } from '@tarot-viii/ui/types';

type ShuffleDealProps = {
    cards?: Record<string, string>[];
    spread?: FirebaseFirestoreTypes.DocumentData;
    updateReading: (reading: Record<string, string>) => void;
    getCards: (index: string[]) => Promise<ReadingProp[] | {}[]>;
    openReading: (index: number) => void;
};

const ShuffleDeal = ({
    spread,
    updateReading,
    getCards,
    openReading
}: ShuffleDealProps) => {
    const [shuffleDone, setShuffleDone] = useState(false);
    const [dealt, setDealt] = useState();

    const { cutDeck, shuffleDeck, deal, deck } = useReading();

    useEffect(() => {
        shuffleDeck();
    }, []);

    useEffect(() => {
        if (!!shuffleDone) {
            const reading = deck.slice(0, 10).map(index => CARD_NAME_INDEXES[index]);
            updateReading(reading);
            getCards(reading).then(cards => {
                const d = deal({ cards, spread });
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
