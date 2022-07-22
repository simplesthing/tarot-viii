import { Background, Deal } from '@tarot-viii/ui';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useFirestore, useReading } from '../../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import QuickNav from '../../navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useRouter } from 'solito/router';

const ReadingScreen = ({ navigation, route }) => {
    const [id] = useState(route?.params?.id);
    const [reading, setReading] = useState([]);
    const { push } = useRouter();

    const { fetchReadingById } = useFirestore();

    useEffect(() => {
        fetchReadingById(id).then(data => {
            console.log(data);
            setReading(data?.reading);
        });
    }, [id]);

    const openReadingDetail = spreadIndex => {
        push({
            pathname: ROUTES.screens.READING.path,
            query: {
                data: JSON.stringify(reading),
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
                <Deal reading={reading} dealt={true} onPress={openReadingDetail} />
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
