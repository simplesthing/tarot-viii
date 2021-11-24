import Card from '../cards/card';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { vmin } from 'react-native-expo-viewport-units';


const SPREAD = [
    { displayName: 'Situation', coords: { left: 21, top: 45 } },
    { displayName: 'Challenges', coords: { left: 21, top: 45, r: 90 } },
    { displayName: 'Root', coords: { left: 21, top: 70 } },
    { displayName: 'Crown', coords: { left: 21, top: 20 } },
    { displayName: 'Past', coords: { left: 5, top: 45 } },
    { displayName: 'Future', coords: { left: 37, top: 45 } },
    { displayName: 'Self', coords: { left: 50, top: 72 } },
    { displayName: 'Influences', coords: { left: 50, top: 50 } },
    { displayName: 'Hopes and Fears', coords: { left: 50, top: 27 } },
    { displayName: 'Outcome', coords: { left: 50, top: 5 } }
];

export type DealCardProps = {
    cardIndex: number;
    spreadIndex: number;
    reversed: boolean;
    onPress: (index: number) => void;
};

const cardStyleProps = {
    width: vmin(10),
    height: vmin(20)
};

export default function DealCardWeb({
    cardIndex,
    spreadIndex,
    reversed,
    onPress
}: DealCardProps) {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const [hasBeenDealt, setHasBeenDealt] = useState(false);

    const castEnergyToDeck = () => {
        if (!hasBeenDealt) {
            onPress(spreadIndex);
            setTop(SPREAD[spreadIndex].coords.top);
            setLeft(SPREAD[spreadIndex].coords.left);
            setHasBeenDealt(true);
        }
    };

    const styles = StyleSheet.create({
        card: {
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            width: cardStyleProps.width,
            height: cardStyleProps.height,
            zIndex: spreadIndex === 1 && !!hasBeenDealt ? 10 : 10 - spreadIndex,
            transform: [
                {
                    rotate:
                        spreadIndex === 1 && !!hasBeenDealt
                            ? '90deg'
                            : reversed
                            ? '180deg'
                            : '0deg'
                }
            ]
        }
    });

    return (
        <View style={styles.card}>
            <Card
                cardIndex={cardIndex}
                styleProps={cardStyleProps}
                onPress={castEnergyToDeck}
                face={hasBeenDealt}
            />
        </View>
    );
}
