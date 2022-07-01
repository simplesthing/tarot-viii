import { Background, Deal } from '@tarot-viii/ui';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import QuickNav from 'src/navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useFirestore } from '../../hooks';
import { useRouter } from 'solito/router';

const ReadingScreen = ({ navigation, route }) => {
    const [id] = useState(route?.params?.id);
    const [reading, setReading] = useState([]);
    const [data, setData] = useState();
    const { push } = useRouter();

    const { fetchReadingById } = useFirestore();

    useEffect(() => {
        fetchReadingById(id).then(data => {
            setReading(data?.reading);
            setData(data);
        });
    }, [id]);

    const openReadingDetail = spreadIndex => {
        push({
            pathname: ROUTES.screens.READING.path,
            query: {
                data: JSON.stringify(data),
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
