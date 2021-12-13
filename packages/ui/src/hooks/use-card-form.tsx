import firebaseConfig from '../../firebase.config';
import {
    doc,
    DocumentData,
    getDoc,
    getFirestore,
    setDoc
    } from '@firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';


const useFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const [card, setCard] = useState<DocumentData>();
    const firestore = getFirestore(app);

    const getCard = async cardName => {
        const docRef = doc(firestore, `newcards/${cardName}`);
        return await getDoc(docRef)
            .then(docRef => {
                setCard(docRef.data());
            })
            .catch(e => {
                console.log('error', e);
            });
    };

    const saveCard = async (cardName, updatedValues) => {
        const docRef = doc(firestore, `newcards/${cardName}`);
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
