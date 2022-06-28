import { Background, ReadingCarousel } from '@tarot-viii/ui';

import { Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const ReadingDetailScreen = ({ navigation, route }) => {
    const data = route?.params?.data;
    const startFrom = route?.params?.startFrom;

    return (
        <Background>
            <ReadingCarousel
                data={JSON.parse(data)}
                startFromIndex={startFrom}
                width={width}
            />
        </Background>
    );
};

export default ReadingDetailScreen;
