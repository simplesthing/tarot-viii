import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import ReadCard from './read-card';
import { ReadingDoc } from '@tarot-viii/expo/src/types/firestore';
import { ReadingProp } from '../../../expo/src/types/firestore';
import SideSwipe from 'react-native-sideswipe';
import { Text } from 'react-native-elements';

const { width: windowWidth } = Dimensions.get('window');

export type ReadingCarouselProps = {
    data: ReadingDoc;
    startFromIndex?: number;
    width?: number;
};

const ReadingCarousel = ({ data, startFromIndex = 0, width = windowWidth }) => {
    console.log(width);
    const [currentIndex, setCurrentIndex] = useState(0);
    const CARD_WIDTH = width / 3;
    const OFFSET = (width - width / 2) / 2;

    useEffect(() => {
        if (startFromIndex) {
            setTimeout(() => {
                setCurrentIndex(startFromIndex);
            }, 100);
        }
    }, []);

    const selectCard = index => {
        setCurrentIndex(index);
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
                useVelocityForIndex={false}
                renderItem={({ itemIndex, item, animatedValue }) => {
                    return (
                        <View style={{ opacity: currentIndex === itemIndex ? 1 : 0.4 }}>
                            <ReadCard
                                card={item}
                                itemIndex={itemIndex}
                                currentIndex={currentIndex}
                                onPress={() => selectCard(itemIndex)}
                                width={width}
                            />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden'
    },
    fill: {
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default ReadingCarousel;
