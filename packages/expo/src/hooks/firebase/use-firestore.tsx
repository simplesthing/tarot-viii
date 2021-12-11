import cards from '../../../../ui/assets/data/cards.json';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';


type UseFirestore = {
    fetchDeck: () => Promise<FirebaseFirestoreTypes.DocumentData[]>;
    fetchSpread: () => Promise<void | FirebaseFirestoreTypes.DocumentData | undefined>;
    fetchUser: (
        uid: string
    ) => Promise<void | FirebaseFirestoreTypes.DocumentData | undefined>;
    generateReadingDocument: (userId: string, reading: Record<string, string>) => void;
    generateUserDocument: (
        user: FirebaseAuthTypes.User,
        additionalData?: FirebaseAuthTypes.AdditionalUserInfo
    ) => void;
};

const updateCards = async () => {
    // const cardsQuerySnapshot = await firestore().collection('cards2').get()

    const batch = firestore().collection('cards2');

    cards.forEach(card => {
        batch.add(card).then(() => {
            console.log('card added');
        });
    });
};

const useFirestore = (): UseFirestore => {
    const generateUserDocument = async (user, additionalData) => {
        if (!user) return;
        //updateCards();
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

    const generateReadingDocument = async (userId, reading) => {
        if (!userId || !reading) return;

        const documentId = uuid.v4().toString();
        const now = new Date();
        const document = {
            user: userId,
            reading,
            creationTime: now
        };

        firestore().collection('readings').doc(documentId).set(document);
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

    const fetchDeck = async () => {
        return (
            firestore()
                .collection('cards')
                // .where('index', 'in', cardIndex)
                // where in doesn't work with numbers on iOS
                // waiting for issue to be merged https://github.com/invertase/react-native-firebase/pull/5840
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
                })
        );
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

    return {
        fetchDeck,
        fetchSpread,
        fetchUser,
        generateReadingDocument,
        generateUserDocument
    };
};

export default useFirestore;
