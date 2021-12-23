import {
    Dimensions,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { useState } from 'react';

import { ReadingProp } from 'src/hooks/use-reading';
import SideSwipe from 'react-native-sideswipe';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const width = screenWidth - 20;
const height = screenHeight - 60;

const planets = [
    { title: 'Sun', value: 'sun', abbr: 'SUN' },
    { title: 'Mercury', value: 'mercury', abbr: 'MRC' },
    { title: 'Venus', value: 'venus', abbr: 'VNS' },
    { title: 'Earth', value: 'earth', abbr: 'ERH' },
    { title: 'Tesla', value: 'tesla', abbr: 'TSL' },
    { title: 'Moon', value: 'moon', abbr: 'MON' },
    { title: 'Mars', value: 'mars', abbr: 'MAR' },
    { title: 'Jupiter', value: 'jupiter', abbr: 'JYT' },
    { title: 'Saturn', value: 'saturn', abbr: 'SAT' },
    { title: 'Uranus', value: 'uranus', abbr: 'UNS' },
    { title: 'Neptune', value: 'neptune', abbr: 'NEP' }
];

export type ReadingCarouselProps = {
    data: ReadingProp[];
};

const ReadingCarousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const offset = screenWidth - width / 3;
    return (
        <View style={styles.container}>
            <SideSwipe
                data={data}
                shouldCapture={() => true}
                style={[styles.fill, { width }]}
                contentContainerStyle={{ paddingTop: 100 }}
                itemWidth={screenWidth / 3}
                threshold={screenWidth / 3}
                extractKey={item => item.value}
                contentOffset={offset}
                onIndexChange={index => setCurrentIndex(index)}
                renderItem={({ itemIndex, currentIndex, item, animatedValue }) => {
                    console.log(itemIndex);
                    return (
                        <View style={styles.centerCard}>
                            <View style={styles.card}>
                                <Text style={{ marginTop: 10 }}>
                                    {item.positionName}
                                    <br />
                                    {item.cardName}
                                    <br />
                                    {item.positionDescription}
                                    <br />
                                    {itemIndex}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
            <Text style={[styles.title, styles.titlePlatformSpecific]}>SPACED</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: 'pink'
    },
    fill: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    centerCard: {},
    card: {
        width: width / 3,
        height: height,
        backgroundColor: 'rgba(255,255,255,.5)'
    },
    title: {
        fontSize: 32,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1.6,
        zIndex: 2,
        alignSelf: 'center'
    },
    titlePlatformSpecific: {
        marginBottom: 0
    }
});

export default ReadingCarousel;
