import { Deal } from '@tarot-viii/ui';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import ReadingNotes from '../../components/ReadingNotes/index';
import { ScrollView } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';
import { useState } from 'react';

const ReadingScreen = ({ navigation, route }) => {
    const [data] = useState(route?.params?.data);
    const [reading] = useState(route?.params?.data?.reading);

    const { navigate } = useRouting();

    const openReadingDetail = spreadIndex => {
        navigate({
            routeName: ROUTES.screens.READING.name,
            params: {
                data: data,
                startFrom: spreadIndex
            }
        });
    };

    return (
        <ScrollView>
            <ReadingNotes data={data} snapToIndex={1}>
                <Deal reading={reading} dealt={true} onPress={openReadingDetail} />
            </ReadingNotes>
        </ScrollView>
    );
};

export default ReadingScreen;
