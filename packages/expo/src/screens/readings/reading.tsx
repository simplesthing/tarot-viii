import { Background, ReadingCarousel } from '@tarot-viii/ui';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';

import QuickNav from 'src/navigation/quickNav';
import React from 'react';

const { width } = Dimensions.get('window');

const ReadingDetailScreen = ({ navigation, route }) => {
    const data = route?.params?.data;
    const startFrom = route?.params?.startFrom;
    const quickNavEvent = isOpen => {
        navigation.setOptions({ headerShown: !isOpen });
    };

    const index = startFrom ? parseInt(startFrom) : 0;

    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <ReadingCarousel
                    data={JSON.parse(data)}
                    startFromIndex={index}
                    width={width}
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
