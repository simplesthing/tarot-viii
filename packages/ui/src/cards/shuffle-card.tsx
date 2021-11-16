import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming
    } from 'react-native-reanimated';
import Card from '../cards/card';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { vmin } from 'react-native-expo-viewport-units';


const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleCardProps = {
    cardIndex: number;
    isShuffling: boolean;
    onPress?: () => void;
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
    isShuffling,
    onPress
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

    const update = () => {
        offset.value = {
            x: randomPosition(viewWidth - vmin(20)),
            y: randomPosition(viewHeight / 2),
            r: rotation()
        };
    };

    useEffect(() => {
        const shuffleAnim = setInterval(() => {
            update();
        }, 500);

        if (!isShuffling) {
            clearInterval(shuffleAnim);
        }

        return () => clearInterval(shuffleAnim);
    }, [isShuffling]);

    return (
        <Animated.View style={[styles.card, animatedStyles]}>
            <Card cardIndex={cardIndex} face={false} onPress={onPress} />
        </Animated.View>
    );
}
