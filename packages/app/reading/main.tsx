import React, { useEffect, useState } from 'react';
import {
    Background,
    Deal,
    ShuffleAnimation,
    useReading
    } from '@tarot-viii/ui';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';


type ReadingProps = {
    cards?: Record<string, string>[];
    spread?: FirebaseFirestoreTypes.DocumentData;
    web?: boolean;
};

const Reading = ({ cards, spread, web }: ReadingProps) => {
    const [shuffleDone, setShuffleDone] = useState(false);
    // @ts-ignore
    const [dealDone, setDealDone] = useState(false);
    const [dealt, setDealt] = useState();

    const { cutDeck, shuffleDeck, deal } = useReading();

    useEffect(() => {
        shuffleDeck();
    }, []);

    useEffect(() => {
        if (!!shuffleDone) {
            const d = deal({ cards, spread });
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
                    web={web}
                />
            )}
            {shuffleDone && <Deal done={() => setDealDone(true)} reading={dealt} />}
        </Background>
    );
};

export default Reading;
