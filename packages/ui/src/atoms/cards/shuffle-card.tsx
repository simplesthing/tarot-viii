import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import { Dimensions, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { vh, vmin } from 'react-native-expo-viewport-units';

import Card from './card';

const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleCardProps = {
    cardIndex: number;
    isShuffling: boolean;
    cutCards: (index: number) => void;
    cutCardIndex: number;
    onPress: () => void;
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        width: vmin(9),
        height: vmin(18)
    }
});

const randomPosition = (factor: number) => {
    return Math.floor(Math.random() * factor);
};

const rotation = () => {
    return Math.floor(Math.random() * 360);
};

export default function ShuffleCard({
    cardIndex,
    onPress,
    isShuffling,
    cutCards,
    cutCardIndex
}: ShuffleCardProps) {
    const offset = useSharedValue({ x: 0, y: 0, r: 0 });

    // @ts-ignore
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(offset.value.x, {
                        duration: 100,
                        easing: Easing.linear
                    })
                },
                {
                    translateY: withTiming(offset.value.y, {
                        duration: 100,
                        easing: Easing.linear
                    })
                },
                {
                    rotate: withTiming(`${offset.value.r}deg`, {
                        duration: 100,
                        easing: Easing.linear
                    })
                }
            ]
        };
    });

    const updateShuffle = () => {
        offset.value = {
            x: randomPosition(viewWidth - vmin(10)),
            y: randomPosition(viewHeight / 2) - 60,
            r: rotation()
        };
    };

    const lineUpCards = () => {
        const left = (viewWidth - vmin(10)) / 78;
        const rotation = offset.value.r > 180 ? 180 : 0;
        offset.value = {
            x: cardIndex * left + vmin(1),
            y: vh(15),
            r: rotation
        };
    };

    const doCut = () => {
        const xPos =
            cardIndex < cutCardIndex
                ? vmin(1)
                : (cutCardIndex * (viewWidth - vmin(10))) / 78 + vmin(1);
        const rotation = offset.value.r;
        offset.value = {
            x: xPos,
            y: vh(15),
            r: rotation
        };
        setTimeout(() => {
            offset.value = {
                x: vmin(1),
                y: vh(15),
                r: rotation
            };
        }, 500);
    };

    const castEnergyToDeck = () => {
        cutCards(cardIndex);
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

    return (
        <Animated.View style={[styles.card, animatedStyles]}>
            <Card cardIndex={cardIndex} onPress={castEnergyToDeck} />
        </Animated.View>
    );
}
