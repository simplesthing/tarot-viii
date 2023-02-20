import { Background, ReadingCarousel } from '@tarot-viii/ui';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import QuickNav from 'src/navigation/quickNav';

const { width } = Dimensions.get('window');

const ReadingDetailScreen = ({ navigation, route }) => {
    const reading = route?.params?.reading;
    const startFrom = route?.params?.startFrom;
    const jsonData = reading ? JSON.parse(reading) : [];

    const quickNavEvent = isOpen => {
        navigation.setOptions({ headerShown: !isOpen });
    };

    const index = startFrom ? parseInt(startFrom) : 0;

    useEffect(() => {
        navigation.setOptions({ headerTitle: jsonData[index].cardName });
    }, [index]);

    const carouselNavEvent = (index: number) => {
        navigation.setOptions({ headerTitle: jsonData[index].cardName });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <ReadingCarousel
                    data={jsonData}
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
