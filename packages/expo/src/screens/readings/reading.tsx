import { Dimensions } from 'react-native';
import React from 'react';
import { ReadingCarousel } from '@tarot-viii/ui';
import ReadingNotes from '../../components/ReadingNotes';

const { width } = Dimensions.get('window');

const ReadingDetailScreen = ({ navigation, route }) => {
    const data = route?.params?.data;
    const startFrom = route?.params?.startFrom;

    return (
        <ReadingNotes data={data}>
            <ReadingCarousel data={data} startFromIndex={startFrom} width={width} />
        </ReadingNotes>
    );
};

export default ReadingDetailScreen;
