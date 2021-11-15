import Card from '../cards/card';
import React from 'react';
import { CARDS } from './constants';
import {
    Dimensions,
    Platform,
    StyleSheet,
    View
    } from 'react-native';
import { vmin } from 'react-native-expo-viewport-units';


const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleProps = {
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

export default function Shuffle({ onPress }: ShuffleProps) {
    // shuffle cards UI
    // shuffle card data
    // stop shuffle, then line up cards
    // cut at clicked upon index, then start shuffle
    return (
        <View style={styles.container}>
            <View style={styles.deck}>
                {CARDS.map(index => {
                    const left =
                        Platform.OS === 'web'
                            ? randomPosition(viewWidth - vmin(9)) + 'px'
                            : randomPosition(viewWidth - vmin(9));

                    const top =
                        Platform.OS === 'web'
                            ? randomPosition(viewHeight - vmin(18) - 220) + 'px'
                            : randomPosition(viewHeight - vmin(18) - 220);

                    const rot = rotation();

                    const styleProps = {
                        left: left,
                        top: top,
                        transform: [{ rotate: `${rot}deg` }],
                        zIndex: randomBetween(10, 87)
                    };

                    return (
                        <Card
                            cardIndex={index}
                            key={index}
                            styleProps={styleProps}
                            face={false}
                        />
                    );
                })}
            </View>
        </View>
    );
}
