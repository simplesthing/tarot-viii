import React, { useEffect, useState } from 'react';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Reading } from '@tarot-viii/app';
import { useFirestore } from '../hooks';


const ReadingScreen = () => {
    const [cards, setCards] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();

    const { fetchDeck, fetchSpread } = useFirestore();

    useEffect(() => {
        const fetch = async () => {
            fetchDeck().then(c => setCards(c));
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

    return <Reading cards={cards} spread={spread} />;
};

export default ReadingScreen;
