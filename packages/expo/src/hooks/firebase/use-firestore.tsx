import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ReadingProp } from '@tarot-viii/ui/types';
import uuid from 'react-native-uuid';

type UseFirestore = {
    fetchDeck: () => Promise<FirebaseFirestoreTypes.DocumentData[]>;
    fetchSpread: () => Promise<void | FirebaseFirestoreTypes.DocumentData | undefined>;
    fetchCardsInSpread: (indexes: string[]) => Promise<ReadingProp[]>;
    fetchUser: (
        uid: string
    ) => Promise<void | FirebaseFirestoreTypes.DocumentData | undefined>;
    generateReadingDocument: (
        userId: string,
        reading: Record<string, string>,
        notes?: string,
        title?: string
    ) => Promise<string | undefined>;
    generateUserDocument: (
        user: FirebaseAuthTypes.User,
        additionalData?: FirebaseAuthTypes.AdditionalUserInfo
    ) => void;
    updateReadingNotes: (documentId: string, notes: string) => Promise<boolean>;
    updateReadingTitle: (documentId: string, title: string) => Promise<boolean>;
    fetchReadingsForUser: (
        userId: string
    ) => Promise<FirebaseFirestoreTypes.DocumentData[]>;
    fetchReadingById: (
        id: string
    ) => Promise<void | FirebaseFirestoreTypes.DocumentData | undefined>;
    uploadData: (collectionName: string, data: any[], key: string) => void;
};

const useFirestore = (): UseFirestore => {
    // USER
    const generateUserDocument = async (user, additionalData) => {
        if (!user) return;
        firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then(documentSnapshot => {
                if (!documentSnapshot.exists) {
                    const { email, displayName, photoURL } = user;
                    const avatar = photoURL
                        ? photoURL
                        : 'https://loremflickr.com/320/240/tarot';
                    firestore()
                        .collection('users')
                        .doc(user.uid)
                        .set({
                            email,
                            displayName,
                            avatar,
                            ...additionalData
                        });
                }
            });
    };

    const fetchUser = async (uid: string) => {
        if (!uid) return;

        return firestore()
            .collection('users')
            .doc(uid)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    return documentSnapshot.data();
                }
                return;
            });
    };

    //READINGS
    const generateReadingDocument = async (userId, reading, notes = '', title) => {
        if (!userId || !reading) return;

        const documentId = uuid.v4().toString();
        const now = new Date();

        const document = {
            id: documentId,
            userId: userId,
            reading,
            notes,
            title: title || now.toString(),
            creationTime: now.toString()
        };

        return firestore()
            .collection('readings')
            .doc(documentId)
            .set(document)
            .then(() => {
                return documentId;
            });
    };

    const fetchReadingById = async (id: string) => {
        return firestore()
            .collection('readings')
            .doc(id)
            .get()
            .then(documentSnapshot => {
                return documentSnapshot.data();
            })
            .catch(e => {
                console.log('Error fetching reading ' + id, e);
                return;
            });
    };

    const fetchReadingsForUser = async userId => {
        if (!userId) return;

        return (
            firestore()
                .collection('readings')
                .where('userId', '==', userId)
                // .orderBy('creationTime', 'desc')
                .get()
                .then(querySnapshot => {
                    let readings: any = [];
                    querySnapshot.forEach(doc => {
                        readings.push(doc.data());
                    });
                    return readings;
                })
                .catch(e => {
                    console.log('Error getting cards collection', e);
                })
        );
    };

    const updateReadingTitle = async (documentId, title) => {
        return firestore()
            .collection('readings')
            .doc(documentId)
            .update({ title: title })
            .then(() => {
                console.log('title updated');
                return true;
            })
            .catch(e => {
                console.log('error updating ', e);
                return false;
            });
    };

    const updateReadingNotes = async (documentId, notes) => {
        return firestore()
            .collection('readings')
            .doc(documentId)
            .update({ notes: notes })
            .then(() => {
                console.log('notes updated');
                return true;
            })
            .catch(e => {
                console.log('error updating ', e);
                return false;
            });
    };

    //APP
    const fetchDeck = async () => {
        return firestore()
            .collection('newcards')
            .get()
            .then(querySnapshot => {
                let _cards: any = [];
                querySnapshot.forEach(doc => {
                    _cards.push(doc.data());
                });
                return _cards;
            })
            .catch(e => {
                console.log('Error getting cards collection');
            });
    };

    const fetchSpread = async () => {
        return firestore()
            .collection('spreads')
            .doc('463e6970-13f6-11eb-996f-c1aa3726603e')
            .get()
            .then(documentSnapshot => {
                return documentSnapshot.data();
            })
            .catch(e => {
                console.log('Error getting spread document');
            });
    };

    const fetchCardsInSpread = async (indexes: string[]) => {
        return firestore()
            .collection('newcards')
            .where('name', 'in', indexes)
            .get()
            .then(querySnapshot => {
                let _cards: any = [];
                querySnapshot.forEach(doc => {
                    _cards.push(doc.data());
                });
                return _cards;
            })
            .catch(e => {
                console.log('Error getting cards collection');
            });
    };

    const uploadData = (collectionName: string, data: any[], key: string) => {
        const collection = firestore().collection(collectionName);

        data.forEach(item => {
            collection.doc(item[key]).set(item);
        });
    };

    return {
        generateUserDocument,
        fetchUser,
        generateReadingDocument,
        fetchReadingById,
        fetchReadingsForUser,
        updateReadingNotes,
        updateReadingTitle,
        fetchDeck,
        fetchSpread,
        fetchCardsInSpread,
        uploadData
    };
};

export default useFirestore;
