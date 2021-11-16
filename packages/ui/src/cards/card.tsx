import React from 'react';
import useSvgCards from './svg/use-svg-cards';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { vmin } from 'react-native-expo-viewport-units';


export type CardProps = {
    cardIndex: number;
    face?: boolean;
    styleProps?: any;
    onPress?: () => void;
};

const width = vmin(9);
const height = vmin(18);

const styles = StyleSheet.create({
    card: {
        width: width,
        height: height,
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'white'
    }
});

export default function Card({
    cardIndex,
    styleProps,
    face = false,
    onPress
}: CardProps) {
    const svgImage = useSvgCards(cardIndex, {
        ...{ width, height }
    });

    const cardImage = face ? (
        svgImage
    ) : (
        <Image
            style={styles.card}
            source={require('../../assets/images/cards/smith-waite/deck.jpg')}
            width={width}
            height={height}
        />
    );

    const cb = onPress ? onPress : () => ({});

    return (
        <TouchableOpacity style={[styles.card, styleProps]} onPress={cb}>
            {cardImage}
        </TouchableOpacity>
    );
}
