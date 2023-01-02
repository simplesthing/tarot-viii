import { useEffect, useState } from 'react';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { useFirestore } from 'src/hooks';
import { useReading } from '@tarot-viii/ui';

const useDealer = () => {
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();
    const [cardMeanings, setCardMeanings] = useState();

    const { fetchReadingById, fetchSpread, fetchCardsInSpread } = useFirestore();
    const { deal } = useReading();

    useEffect(() => {
        const fetch = async () => {
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

    const getCards = async (readingIndexes, reversals) => {
        return fetchCardsInSpread(readingIndexes, reversals).then(c => {
            return c;
        });
    };

    const dealer = id => {
        if (id) {
            fetchReadingById(id).then(data => {
                if (data) {
                    getCards(data.reading, data.reversals).then(cards => {
                        const d = deal({ cards, spread });
                        setCardMeanings(d);
                    });
                }
            });
        }
    };
    return {
        cardMeanings,
        dealer
    };
};

export default useDealer;
