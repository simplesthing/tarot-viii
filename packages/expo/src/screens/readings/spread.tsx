import { Background, Deal } from '@tarot-viii/ui';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import QuickNav from 'src/navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import useDealer from '../../hooks/useDealer';
import { useRouter } from 'solito/router';

const ReadingScreen = ({ navigation, route }) => {
    const { dealer, cardMeanings } = useDealer();

    const id = route?.params?.id;
    dealer(id);

    const { push } = useRouter();
    const openReadingDetail = spreadIndex => {
        push({
            pathname: ROUTES.screens.READING.path,
            query: {
                reading: JSON.stringify(cardMeanings),
                startFrom: spreadIndex
            }
        });
    };

    const quickNavEvent = isOpen => {
        navigation.setOptions({ headerShown: !isOpen });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Background>
                {cardMeanings && (
                    <Deal
                        reading={cardMeanings}
                        dealt={true}
                        onPress={openReadingDetail}
                    />
                )}
            </Background>
            <QuickNav navigationEvent={quickNavEvent} />
        </SafeAreaView>
    );
};

export default ReadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
