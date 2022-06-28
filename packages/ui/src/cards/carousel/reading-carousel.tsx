import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ReadingDoc, ReadingProp } from '@tarot-viii/ui/types';

import CardDetail from './card-details';
import ReadCard from './read-card';
import SideSwipe from 'react-native-sideswipe';

const { width: windowWidth } = Dimensions.get('window');

export type ReadingCarouselProps = {
    data: ReadingDoc;
    startFromIndex?: number;
    width?: number;
    height?: number;
};

const _height = (windowWidth / 2) * 1.65;

const ReadingCarousel = ({
    data,
    startFromIndex = 0,
    width = windowWidth,
    height = _height
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const CARD_WIDTH = width / 3;
    const OFFSET = (width - width / 2) / 2;

    useEffect(() => {
        const index = startFromIndex || 0;
        setTimeout(() => {
            setCurrentIndex(index);
        }, 100);
    }, []);

    const svRef = useRef<ScrollView>(null);

    const selectCard = index => {
        svRef.current?.scrollTo({ y: 0, x: 0, animated: true });
        setCurrentIndex(index);
    };

    return (
        <ScrollView ref={svRef} style={styles.container}>
            {data.reading && (
                <>
                    <SideSwipe
                        data={data.reading}
                        index={currentIndex}
                        style={[styles.fill, { width, height: width }]}
                        itemWidth={CARD_WIDTH}
                        threshold={CARD_WIDTH}
                        extractKey={(item: ReadingProp) => item.cardName}
                        contentOffset={OFFSET}
                        onIndexChange={index => setCurrentIndex(index)}
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
                    <CardDetail
                        card={data.reading[currentIndex]}
                        height={(width / 2) * 1.75}
                        width={width}
                    />
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: _height,
        position: 'relative',
        zIndex: 1
    },
    fill: {
        position: 'absolute',
        top: 50,
        left: 10,
        right: 10,
        bottom: 10,
        zIndex: 10
    }
});

export default ReadingCarousel;
