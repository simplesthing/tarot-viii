import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import ReadCard from './read-card';
import { ReadingDoc } from '@tarot-viii/expo/src/types/firestore';
import { ReadingProp } from '../../../expo/src/types/firestore';
import SideSwipe from 'react-native-sideswipe';
import { Text } from 'react-native-elements';

const { width } = Dimensions.get('window');

export type ReadingCarouselProps = {
    data: ReadingDoc;
    startFromIndex?: number;
};

const ReadingCarousel = ({ data, startFromIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(startFromIndex);
    const CARD_WIDTH = width / 3;
    const OFFSET = (width - CARD_WIDTH) / 2;

    const selectCard = index => {
        if (currentIndex === index && index < data.reading.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(index);
        }
    };

    return (
        <View style={styles.container}>
            <Text h1 h1Style={{ fontSize: 24, fontWeight: 'bold' }}>
                {data.reading[currentIndex].cardName}
            </Text>
            <SideSwipe
                data={data.reading}
                index={currentIndex}
                style={[styles.fill, { width }]}
                contentContainerStyle={{ paddingTop: 10 }}
                itemWidth={CARD_WIDTH}
                threshold={CARD_WIDTH}
                extractKey={(item: ReadingProp) => item.cardName}
                contentOffset={OFFSET}
                onIndexChange={index => setCurrentIndex(index)}
                useVelocityForIndex={true}
                renderItem={({ itemIndex, item, animatedValue }) => {
                    return (
                        <ReadCard
                            card={item}
                            itemIndex={itemIndex}
                            currentIndex={currentIndex}
                            onPress={() => selectCard(itemIndex)}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        marginLeft: 6,
        alignItems: 'center',
        overflow: 'hidden'
    },
    fill: {
        position: 'absolute',
        top: 80,
        left: -12,
        right: 0,
        bottom: 0
    }
});

export default ReadingCarousel;
