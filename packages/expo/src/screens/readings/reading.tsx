import { Background, ReadingCarousel } from '@tarot-viii/ui';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import QuickNav from '../../navigation/quickNav';

const { width } = Dimensions.get('window');

const ReadingDetailScreen = ({ navigation, route }) => {
    const data = route?.params?.data;
    const startFrom = route?.params?.startFrom;
    const jsonData = JSON.parse(data);

    const quickNavEvent = isOpen => {
        navigation.setOptions({ headerShown: !isOpen });
    };

    const index = startFrom ? parseInt(startFrom) : 0;

    useEffect(() => {
        navigation.setOptions({ headerTitle: jsonData.reading[index].displayName });
    }, [index]);

    const carouselNavEvent = (index: number) => {
        navigation.setOptions({ headerTitle: jsonData.reading[index].displayName });
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
