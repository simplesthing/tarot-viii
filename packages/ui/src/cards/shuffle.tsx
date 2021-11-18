import React, { useState } from 'react';
import ShuffleCard from './shuffle-card';
import TheSpread from './the-spread';
import useInstructions from '../hooks/use-instructions';
import { CARDS } from './constants';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    View
    } from 'react-native';
import { Percentage, Value } from '../theme/fonts';


const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleProps = {};
const instructionTextSize = Platform.OS === 'web' ? Value(10) : Percentage(2.5);

const styles = StyleSheet.create({
    instructionWrapper: {
        flexBasis: 120,
        paddingHorizontal: 10
    },
    instructions: {
        fontSize: instructionTextSize,
        textAlign: 'center',
        marginTop: 20
    },
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

export default function Shuffle() {
    const [isShuffling, setIsShuffling] = useState(true);
    const [cutCount, setCutCount] = useState(0);
    const [cutCardIndex, setCutCardIndex] = useState(0);
    const { instruction, next } = useInstructions();

    const castEnergyToDeck = () => {
        setIsShuffling(false);
        next();
    };

    const cutCards = (cutCardIndex: number) => {
        setCutCardIndex(cutCardIndex);
        setCutCount(cutCount + 1);
        if (cutCount < 2) {
            setTimeout(() => {
                next();
                setIsShuffling(true);
            }, 800);
        } else {
            // deal
            next();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.instructionWrapper}>
                <Text style={styles.instructions}>{instruction}</Text>
            </View>
            <TheSpread>
                {CARDS.map(index => (
                    <ShuffleCard
                        cardIndex={index}
                        key={index}
                        isShuffling={isShuffling}
                        cutCards={cutCards}
                        cutCardIndex={cutCardIndex}
                        onPress={castEnergyToDeck}
                    />
                ))}
            </TheSpread>
        </View>
    );
}
