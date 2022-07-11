import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { COLLECTIONS } from '@tarot-viii/ui/src/atoms/cards/constants';
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
    updateUserInfo: (uuid: string, name: string, url: string) => Promise<boolean>;
    generateReadingDocument: (userId: string) => Promise<string | undefined>;
    generateUserDocument: (
        user: FirebaseAuthTypes.User,
        additionalData?: FirebaseAuthTypes.AdditionalUserInfo
    ) => void;
    updateReading: (documentId: string, reading: string) => Promise<boolean>;
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
            .collection(COLLECTIONS.USER)
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
            .collection(COLLECTIONS.USER)
            .doc(uid)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    return documentSnapshot.data();
                }
                return;
            });
    };

    const updateUserInfo = async (uid: string, name: string, url: string) => {
        if (!uid) return false;

        return firestore()
            .collection(COLLECTIONS.USER)
            .doc(uid)
            .update({ displayName: name, photoURL: url })
            .then(() => {
                return true;
            })
            .catch(e => {
                console.log('reading updating ', e);
                return false;
            });
    };

    //READINGS
    const generateReadingDocument = async userId => {
        if (!userId) return;

        const documentId = uuid.v4().toString();
        const now = new Date();

        const document = {
            id: documentId,
            userId: userId,
            reading: [],
            creationTime: now.toString()
        };

        return firestore()
            .collection(COLLECTIONS.READING)
            .doc(documentId)
            .set(document)
            .then(() => {
                return documentId;
            });
    };

    const fetchReadingById = async (id: string) => {
        return firestore()
            .collection(COLLECTIONS.READING)
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

        return firestore()
            .collection(COLLECTIONS.READING)
            .where('userId', '==', userId)
            .get()
            .then(querySnapshot => {
                let readings: any = [];
                querySnapshot.forEach(doc => {
                    readings.push(doc.data());
                });
                return readings
                    .filter(data => {
                        return !!data?.reading?.length && data?.reading?.length > 0;
                    })
                    .sort((a, b) => {
                        //ts fix for left hand assignment value https://github.com/microsoft/TypeScript/issues/5710
                        let start = +new Date(a.creationTime);
                        let elapsed = +new Date(b.creationTime) - start;
                        return elapsed;
                    });
            })
            .catch(e => {
                console.log('Error getting cards collection', e);
            });
    };

    const updateReading = async (documentId, reading) => {
        return firestore()
            .collection(COLLECTIONS.READING)
            .doc(documentId)
            .update({ reading: reading })
            .then(() => {
                return true;
            })
            .catch(e => {
                console.log('reading updating ', e);
                return false;
            });
    };

    const updateReadingTitle = async (documentId, title) => {
        return firestore()
            .collection(COLLECTIONS.READING)
            .doc(documentId)
            .update({ title: title })
            .then(() => {
                return true;
            })
            .catch(e => {
                console.log('error updating ', e);
                return false;
            });
    };

    const updateReadingNotes = async (documentId, notes) => {
        return firestore()
            .collection(COLLECTIONS.READING)
            .doc(documentId)
            .update({ notes: notes })
            .then(() => {
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
            .collection(COLLECTIONS.DECK)
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
            .collection(COLLECTIONS.SPREAD)
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
            .collection(COLLECTIONS.DECK)
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
        updateReading,
        updateReadingNotes,
        updateReadingTitle,
        fetchDeck,
        fetchSpread,
        fetchCardsInSpread,
        uploadData,
        updateUserInfo
    };
};

export default useFirestore;
