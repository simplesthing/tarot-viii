import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Card from './card';
import { vmin } from 'react-native-expo-viewport-units';

const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleCardWebProps = {
    cardIndex: number;
    isShuffling: boolean;
    cutCards: (index: number) => void;
    cutCardIndex: number;
    onPress: () => void;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'stretch'
    },
    deck: {
        alignSelf: 'center',
        padding: 40,
        width: viewWidth,
        height: viewHeight,
        position: 'relative'
    }
});

const randomPosition = (factor: number) => {
    return Math.floor(Math.random() * factor);
};

const rotation = () => {
    return Math.floor(Math.random() * 360);
};

function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export default function ShuffleCardWeb({
    cardIndex,
    onPress,
    isShuffling,
    cutCards,
    cutCardIndex
}: ShuffleCardWebProps) {
    const updateShuffle = () => ({
        width: vmin(9),
        height: vmin(18),
        left: randomPosition(viewWidth) + 'px',
        top: randomPosition(viewHeight) + 'px',
        transform: [{ rotate: `${rotation()}deg` }],
        transition: 'all 0.5s ease',
        zIndex: randomBetween(10, 87)
    });
    const [style, setStyle] = useState(updateShuffle());

    const castEnergyToDeck = () => {
        if (isShuffling) {
            onPress();
        } else {
            // cutCards(cardIndex);
        }
    };

    useEffect(() => {
        const shuffleAnim = setInterval(() => {
            setStyle(updateShuffle());
        }, 500);

        if (!isShuffling) {
            // lineUpCards();
            clearInterval(shuffleAnim);
        }

        return () => clearInterval(shuffleAnim);
    }, [isShuffling]);

    return (
        <View style={styles.container}>
            <Card cardIndex={cardIndex} styleProps={style} onPress={castEnergyToDeck} />
        </View>
    );
}
