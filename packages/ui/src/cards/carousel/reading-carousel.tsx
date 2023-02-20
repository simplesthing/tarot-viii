import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ReadingDoc, ReadingProp } from '@tarot-viii/ui/types';

import { CAROUSEL_HEIGHT_RATIO } from './constants';
import CardDetail from './card-details';
import ReadCard from './read-card';
import SideSwipe from 'react-native-sideswipe';

const { width: windowWidth } = Dimensions.get('window');

export type ReadingCarouselProps = {
    data: ReadingDoc;
    startFromIndex: number;
    width?: number;
    height?: number;
    navigationEvent: (cardTitle: string) => void;
};

const _height = (windowWidth / 2) * CAROUSEL_HEIGHT_RATIO;

const ReadingCarousel = ({
    data,
    startFromIndex,
    width = windowWidth,
    navigationEvent
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const CARD_WIDTH = width / 3;
    const OFFSET = (width - width / 2) / 2;

    useEffect(() => {
        const index = startFromIndex;
        setTimeout(() => {
            selectCard(index);
        }, 500);
    }, []);

    const selectCard = index => {
        setCurrentIndex(index);
        navigationEvent(index);
    };

    return (
        <View style={styles.container}>
            {data && (
                <>
                    <SideSwipe
                        data={data}
                        index={currentIndex}
                        style={[styles.fill, { width, height: width }]}
                        itemWidth={CARD_WIDTH}
                        threshold={CARD_WIDTH}
                        extractKey={(item: ReadingProp) => item.cardName}
                        contentOffset={OFFSET}
                        onIndexChange={index => selectCard(index)}
                        useVelocityForIndex={false}
                        renderItem={({ itemIndex, item, animatedValue }) => {
                            return (
                                <View
                                    style={{
                                        opacity: currentIndex === itemIndex ? 1 : 0.4
                                    }}>
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
                    <View style={styles.spacer} />
                    <CardDetail
                        card={data[currentIndex]}
                        height={(width / 2) * 1.55}
                        width={width}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: _height,
        position: 'relative',
        top: 0,
        zIndex: 1
    },
    spacer: {
        height: _height
    },
    fill: {
        position: 'absolute',
        top: -35,
        left: 10,
        right: 10,
        zIndex: 10
    }
});

export default ReadingCarousel;
