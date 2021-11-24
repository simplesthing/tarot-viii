import React, { useEffect, useState } from 'react';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Reading } from '@tarot-viii/app';
import { useAuth, useFirestore } from '../hooks';


const ReadingScreen = () => {
    const [cards, setCards] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();

    const { fetchDeck, fetchSpread, generateReadingDocument } = useFirestore();
    const { user } = useAuth();

    useEffect(() => {
        const fetch = async () => {
            fetchDeck().then(c => setCards(c));
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

    const genReading = reading => {
        if (user?.uid) {
            generateReadingDocument(user.uid, reading);
        }
    };

    return <Reading cards={cards} spread={spread} generateReadingDoc={genReading} />;
};

export default ReadingScreen;
