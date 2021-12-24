import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import React from 'react';
import useSvgCards from './svg/use-svg-cards';
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
        position: 'absolute',
        backgroundColor: 'white',
        opacity: 1
    },
    cardImage: {
        position: 'absolute',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'black'
    }
});

export default function Card({
    cardIndex,
    styleProps,
    face = false,
    onPress
}: CardProps) {
    const _width = styleProps ? styleProps.width : width;
    const _height = styleProps ? styleProps.height : height;
    const opacity = styleProps ? styleProps.opacity : 1;
    const svgImage = useSvgCards(cardIndex, {
        ...{ width: _width, height: _height, opacity }
    });

    const cardImage = face ? (
        svgImage
    ) : (
        <Image
            style={[styles.cardImage, { width: _width, height: _height }]}
            source={require('../../assets/images/cards/smith-waite/deck.jpg')}
            width={_width}
            height={_height}
        />
    );

    const cb = onPress ? onPress : () => ({});

    return (
        <TouchableOpacity style={[styles.card, styleProps]} onPress={cb}>
            {cardImage}
        </TouchableOpacity>
    );
}
