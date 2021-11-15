import React from 'react';
import { default as colors } from '../theme/colors';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';


export type DeckProps = {
    onPress: () => void;
};

const viewHeight = Dimensions.get('window').height;
const basis = viewHeight - 100;
const imgWidth = basis * 0.4;
const imgHeight = basis * 0.71;

const styles = StyleSheet.create({
    deck: {
        marginTop: 10,
        shadowColor: colors.cambridge_blue.accent1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 150,
        shadowOpacity: 0.95
    },
    image: {
        width: imgWidth,
        height: imgHeight
    }
});

export default function Deck({ onPress }: DeckProps) {
    return (
        <TouchableOpacity style={[styles.deck, styles.image]} onPress={onPress}>
            <Image
                style={styles.image}
                source={require('../../assets/images/cards/smith-waite/deck.jpg')}
                width={imgWidth}
                height={imgHeight}
            />
        </TouchableOpacity>
    );
}
