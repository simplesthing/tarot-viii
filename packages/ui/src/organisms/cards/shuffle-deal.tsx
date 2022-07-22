import React, { useEffect, useState } from 'react';

import Background from '../../theme/background';
import { CARD_NAME_INDEXES } from '../../atoms/cards/constants';
import Deal from '../../molecules/cards/deal';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ReadingProp } from '../../../types/firestore';
import { default as ShuffleAnimation } from '../../molecules/cards/shuffle';
import useReading from '../../hooks/use-reading';

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
            getCards(reading).then(cards => {
                const d = deal({ cards, spread });
                updateReading(d);
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
            {shuffleDone && dealt && <Deal reading={dealt} onPress={openReading} />}
        </Background>
    );
};

export default ShuffleDeal;
