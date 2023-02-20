import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useAuth, useFirestore } from '../../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import QuickNav from 'src/navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import { ShuffleDeal } from '@tarot-viii/app';
import useDealer from '../../hooks/useDealer';
import { useRouter } from 'solito/router';

const ShuffleDealScreen = ({ navigation }) => {
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();
    const [documentId, setDocumentId] = useState<string>();
    const { push } = useRouter();
    const { dealer, cardMeanings } = useDealer();

    const { fetchCardsInSpread, fetchSpread, generateReadingDocument, updateReading } =
        useFirestore();

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

    const getCards = async (readingIndexes, reversals) => {
        return fetchCardsInSpread(readingIndexes, reversals).then(c => {
            return c;
        });
    };

    const updateReadingDoc = (reading, reversals) => {
        if (user?.uid && documentId && reading && reversals) {
            updateReading(documentId, reading, reversals);
            dealer(documentId);
        }
    };

    const openReading = (index: number) => {
        if (cardMeanings) {
            push({
                pathname: ROUTES.screens.READING.path,
                query: { reading: JSON.stringify(cardMeanings), startFrom: 0 }
            });
        }
    };

    const quickNavEvent = isOpen => {
        navigation.setOptions({ headerShown: !isOpen });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ShuffleDeal
                getCards={getCards}
                spread={spread}
                addDealtReading={updateReadingDoc}
                openReading={openReading}
            />
            <QuickNav navigationEvent={quickNavEvent} />
        </SafeAreaView>
    );
};

export default ShuffleDealScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
