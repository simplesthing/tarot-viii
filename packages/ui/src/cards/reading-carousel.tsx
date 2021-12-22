import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';

import { Dimensions } from 'react-native';
import ReadCard from './read-card';
import { ReadingCard } from './read-card';
import { ReadingProp } from '../hooks/use-reading';
import SideSwipe from 'react-native-sideswipe';

export type ReadingCarouselProps = {
    data: ReadingProp[];
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: 'black'
    },
    fill: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width
    }
});

const ReadingCarousel = ({ data }: ReadingCarouselProps) => {
    const [index, setIndex] = useState(0);
    const cardWidth = vw(40);
    const contentOffset = (width - cardWidth) / 2;
    console.log('data ', index);
    return (
        <View style={styles.container}>
            <SideSwipe
                data={data}
                shouldCapture={() => true}
                style={styles.fill}
                contentContainerStyle={{ paddingTop: 100 }}
                itemWidth={cardWidth}
                threshold={cardWidth / 4}
                extractKey={item => item.positionName}
                contentOffset={contentOffset}
                onIndexChange={idx => setIndex(idx)}
                renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                    <ReadCard
                        card={item}
                        index={itemIndex}
                        currentIndex={currentIndex}
                        animatedValue={animatedValue}
                    />
                )}
            />
        </View>
    );
};

export default ReadingCarousel;
