import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

type UseFirestore = {
    fetchDeck: () => Promise<FirebaseFirestoreTypes.DocumentData[]>;
    fetchSpread: () => Promise<void | FirebaseFirestoreTypes.DocumentData | undefined>;
};

const useFirestore = (): UseFirestore => {
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
        fetchSpread
    };
};

export default useFirestore;
