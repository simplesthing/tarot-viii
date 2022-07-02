import { Background, ReadingCarousel, useReading } from '@tarot-viii/ui';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import QuickNav from 'src/navigation/quickNav';
import { useFirestore } from 'src/hooks';

const { width } = Dimensions.get('window');
const ReadingDetailScreen = ({ navigation, route }) => {
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();
    const reading = route?.params?.reading;
    const startFrom = route?.params?.startFrom;
    const [cardMeanings, setCardMeanings] = useState();
    const { fetchCardsInSpread, fetchSpread } = useFirestore();
    const { cutDeck, shuffleDeck, deal, deck } = useReading();

    const getCards = async readingIndexes => {
        return fetchCardsInSpread(readingIndexes).then(c => {
            return c;
        });
    };

    const quickNavEvent = isOpen => {
        // navigation.setOptions({ headerShown: !isOpen });
    };

    const index = startFrom ? parseInt(startFrom) : 0;

    useEffect(() => {
        if (spread) {
            const _reading = reading.split(',');
            getCards(_reading).then(cards => {
                const d = deal({ cards, spread });
                setCardMeanings(d);
                navigation.setOptions({ headerTitle: d[index].cardName });
            });
        }
    }, [spread]);

    const carouselNavEvent = (index: number) => {
        if (cardMeanings) {
            navigation.setOptions({ headerTitle: cardMeanings[index].cardName });
        }
    };

    useEffect(() => {
        const fetch = async () => {
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <ReadingCarousel
                    data={cardMeanings}
                    startFromIndex={index}
                    width={width}
                    navigationEvent={carouselNavEvent}
                />
            </Background>
            <QuickNav navigationEvent={quickNavEvent} />
        </SafeAreaView>
    );
};

export default ReadingDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
