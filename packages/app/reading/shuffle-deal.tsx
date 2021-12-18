import { Background, Deal, ShuffleAnimation, useReading } from '@tarot-viii/ui';
import React, { useEffect, useState } from 'react';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

type ShuffleDealProps = {
    cards?: Record<string, string>[];
    spread?: FirebaseFirestoreTypes.DocumentData;
    generateReadingDoc: (reading: Record<string, string>) => void;
};

const ShuffleDeal = ({
    cards,
    spread,
    generateReadingDoc = () => ({})
}: ShuffleDealProps) => {
    const [shuffleDone, setShuffleDone] = useState(false);
    const [dealt, setDealt] = useState();

    const { cutDeck, shuffleDeck, deal } = useReading();

    useEffect(() => {
        shuffleDeck();
    }, []);

    useEffect(() => {
        if (!!shuffleDone) {
            const d = deal({ cards, spread });
            generateReadingDoc(d);
            setDealt(d);
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
