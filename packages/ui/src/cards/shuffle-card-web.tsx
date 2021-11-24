import Card from '../cards/card';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { vmin } from 'react-native-expo-viewport-units';


export type ShuffleCardWebProps = {
    cardIndex: number;
    isShuffling: boolean;
    cutCards: (index: number) => void;
    cutCardIndex: number;
    onPress: () => void;
};

const randomPosition = (factor: number) => {
    return Math.floor(Math.random() * factor);
};

const rotation = () => {
    return Math.floor(Math.random() * 360);
};

export default function ShuffleCardWeb({
    cardIndex,
    onPress,
    isShuffling,
    cutCards,
    cutCardIndex
}: ShuffleCardWebProps) {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const updateShuffle = () => {
        setTop(randomPosition(80));
        setLeft(randomPosition(80) + 12);
    };

    const lineUpCards = () => {
        setTop(15);
        setLeft(cardIndex + 10);
    };

    const doCut = () => {
        const left = cardIndex < cutCardIndex ? 10 : cutCardIndex + 10;
        setLeft(left);

        setTimeout(() => {
            setLeft(10);
        }, 500);
    };

    useEffect(() => {
        const shuffleAnim = setInterval(() => {
            updateShuffle();
        }, 500);

        if (!isShuffling) {
            lineUpCards();
            clearInterval(shuffleAnim);
        }

        return () => clearInterval(shuffleAnim);
    }, [isShuffling]);

    useEffect(() => {
        if (!isShuffling) {
            doCut();
        }
    }, [cutCardIndex]);

    const castEnergyToDeck = () => {
        if (isShuffling) {
            onPress();
        } else {
            cutCards(cardIndex);
        }
    };

    const styles = StyleSheet.create({
        card: {
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            transform: [{ rotate: isShuffling ? rotation() + 'deg' : '0deg' }],
            width: vmin(9),
            height: vmin(18)
        }
    });

    return (
        <View style={styles.card}>
            <Card cardIndex={cardIndex} onPress={castEnergyToDeck} />
        </View>
    );
}
