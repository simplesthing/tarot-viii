import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useAuth, useFirestore } from '../../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import QuickNav from '../../navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import { ShuffleDeal } from '@tarot-viii/ui';
import { useRouter } from 'solito/router';

const ShuffleDealScreen = ({ navigation }) => {
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();
    const [documentId, setDocumentId] = useState<string>();
    const { push } = useRouter();

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
                push({
                    pathname: ROUTES.screens.READING.path,
                    query: { data: JSON.stringify(data), startFrom: index }
                });
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
                updateReading={updateReadingDoc}
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
