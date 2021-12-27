import {
    DocumentData,
    doc,
    getDoc,
    getFirestore,
    setDoc
} from '@firebase/firestore/lite';

import firebaseConfig from '../../firebase.config';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';

const useFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const [card, setCard] = useState<DocumentData>();
    const firestore = getFirestore(app);

    const getCard = async cardName => {
        const docRef = doc(firestore, `cards/${cardName}`);
        return await getDoc(docRef)
            .then(docRef => {
                setCard(docRef.data());
            })
            .catch(e => {
                console.log('error', e);
            });
    };

    const saveCard = async (cardName, updatedValues) => {
        const docRef = doc(firestore, `cards/${cardName}`);
        return await setDoc(docRef, updatedValues).catch(e =>
            console.log('update error ', e)
        );
    };

    return {
        getCard,
        card,
        saveCard
    };
};

export default useFirebase;
