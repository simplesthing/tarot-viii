import { Background, Deal } from '@tarot-viii/ui';
import { useAuth, useFirestore } from '../../hooks';
import { useEffect, useState } from 'react';

import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useRouter } from 'solito/router';

const ReadingScreen = ({ navigation, route }) => {
    const [id] = useState(route?.params?.id);
    const [reading, setReading] = useState();
    const { push } = useRouter();
    console.log('ID', id);

    const { fetchReadingById } = useFirestore();

    useEffect(() => {
        fetchReadingById(id).then(data => {
            console.log(data);
            setReading(data.reading);
        });
    }, [id]);

    const openReadingDetail = spreadIndex => {
        push({
            pathname: ROUTES.screens.READING.name,
            query: {
                id: id,
                startFrom: spreadIndex
            }
        });
    };
    return (
        <Background>
            <Deal reading={reading} dealt={true} onPress={openReadingDetail} />
        </Background>
    );
};

export default ReadingScreen;
