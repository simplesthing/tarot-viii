import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';
import { vh, vmin, vw } from 'react-native-expo-viewport-units';

import Card from './card';
import { StyleSheet } from 'react-native';

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
    card: any;
    cardIndex: number;
    dealt?: boolean;
    spreadIndex: number;
    reversed: boolean;
    onPress: (index: number) => void;
};

const cardStyleProps = {
    width: vmin(15),
    height: vmin(25)
};

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        ...cardStyleProps
    }
});

export default function DealCard({
    card,
    cardIndex,
    spreadIndex,
    reversed,
    onPress,
    dealt = false
}: DealCardProps) {
    const offset = useSharedValue({ x: vmin(1), y: 0, r: 0 });
    const [hasBeenDealt, setHasBeenDealt] = useState(dealt);
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

    useEffect(() => {
        if (hasBeenDealt) {
            offset.value = {
                x: vw(SPREAD[spreadIndex].coords.x) - 40,
                y: vh(SPREAD[spreadIndex].coords.y),
                r: !!reversed ? 180 : 0
            };
        }
    }, []);

    useEffect(() => {
        if (spreadIndex === 1 && !!hasBeenDealt) {
            offset.value = {
                x: vw(SPREAD[spreadIndex].coords.x) - 40,
                y: vh(SPREAD[spreadIndex].coords.y),
                r: 90
            };
        }
    }, [hasBeenDealt]);

    const castEnergyToDeck = () => {
        if (!hasBeenDealt) {
            offset.value = {
                x: vw(SPREAD[spreadIndex].coords.x) - 40,
                y: vh(SPREAD[spreadIndex].coords.y),
                r: !!reversed ? 180 : 0
            };
            setHasBeenDealt(true);
        }
        onPress(spreadIndex);
    };

    return (
        <Animated.View style={[styles.card, animatedStyles]}>
            <Card
                cardIndex={cardIndex}
                styleProps={{
                    ...cardStyleProps,
                    ...{ zIndex: spreadIndex === 1 ? 10 : 1 }
                }}
                onPress={castEnergyToDeck}
                face={hasBeenDealt}
            />
        </Animated.View>
    );
}
