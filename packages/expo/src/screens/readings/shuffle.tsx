import React, { useEffect, useState } from 'react';
import { useAuth, useFirestore } from '../../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ROUTES } from '../../navigation/config';
import ReadingNotes from '../../components/ReadingNotes';
import { ShuffleDeal } from '@tarot-viii/app';
import { useRouting } from 'expo-next-react-navigation';

const ShuffleDealScreen = () => {
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();
    const [documentId, setDocumentId] = useState<string>();
    const { navigate } = useRouting();

    const {
        fetchCardsInSpread,
        fetchSpread,
        generateReadingDocument,
        updateReading,
        fetchReadingById
    } = useFirestore();

    const { user } = useAuth();

    useEffect(() => {
        const fetch = async () => {
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

    useEffect(() => {
        if (user?.uid) {
            generateReadingDocument(user.uid)
                .then(docID => {
                    if (docID) {
                        setDocumentId(docID);
                    }
                })
                .catch(e => {
                    console.log('error ', e);
                });
        }
    }, [user]);

    const getCards = async readingIndexes => {
        return fetchCardsInSpread(readingIndexes).then(c => {
            return c;
        });
    };

    const updateReadingDoc = reading => {
        if (user?.uid && documentId && reading) {
            updateReading(documentId, reading);
        }
    };

    const openReading = (index: number) => {
        if (documentId) {
            fetchReadingById(documentId).then(data => {
                navigate({
                    routeName: ROUTES.screens.READING.name,
                    params: { data: data, startFrom: index }
                });
            });
        }
    };

    return (
        <ReadingNotes data={{ documentId }} snapToIndex={1}>
            <ShuffleDeal
                getCards={getCards}
                spread={spread}
                updateReading={updateReadingDoc}
                openReading={openReading}
            />
        </ReadingNotes>
    );
};

export default ShuffleDealScreen;
