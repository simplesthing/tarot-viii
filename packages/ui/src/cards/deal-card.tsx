import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming
    } from 'react-native-reanimated';
import Card from '../cards/card';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { vh, vmin, vw } from 'react-native-expo-viewport-units';


const SPREAD = [
    { displayName: 'Situation', coords: { x: 45, y: 21 } },
    { displayName: 'Challenges', coords: { x: 45, y: 22, r: 90 } },
    { displayName: 'Root', coords: { x: 45, y: 37 } },
    { displayName: 'Crown', coords: { x: 45, y: 5 } },
    { displayName: 'Past', coords: { x: 20, y: 21 } },
    { displayName: 'Future', coords: { x: 70, y: 21 } },
    { displayName: 'Self', coords: { x: 90, y: 50 } },
    { displayName: 'Influences', coords: { x: 90, y: 35 } },
    { displayName: 'Hopes and Fears', coords: { x: 90, y: 20 } },
    { displayName: 'Outcome', coords: { x: 90, y: 5 } }
];

export type DealCardProps = {
    cardIndex: number;
    spreadIndex: number;
    onPress: (index: number) => void;
};

const cardStyleProps = {
    width: vmin(15),
    height: vmin(30)
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        ...cardStyleProps
    }
});

export default function DealCard({ cardIndex, spreadIndex, onPress }: DealCardProps) {
    const offset = useSharedValue({ x: vmin(1), y: 0, r: 0 });
    const [hasBeenDealt, setHasBeenDealt] = useState(false);
    // @ts-ignore
    const animatedStyles = useAnimatedStyle(() => {
        return {
            zIndex: spreadIndex === 1 && !!hasBeenDealt ? 10 : 10 - spreadIndex,
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

    const castEnergyToDeck = () => {
        if (!hasBeenDealt) {
            onPress(spreadIndex);
            offset.value = {
                x: vw(SPREAD[spreadIndex].coords.x) - 40,
                y: vh(SPREAD[spreadIndex].coords.y),
                r: spreadIndex === 1 ? 90 : 0
            };
            setHasBeenDealt(true);
        }
    };

    return (
        <Animated.View style={[styles.card, animatedStyles]}>
            <Card
                cardIndex={cardIndex}
                styleProps={cardStyleProps}
                onPress={castEnergyToDeck}
                face={hasBeenDealt}
            />
        </Animated.View>
    );
}
