import { Percentage, Value } from '../theme/fonts';
import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { CARD_ARRAY } from './constants';
import ShuffleCard from './shuffle-card';
import ShuffleCardWeb from './shuffle-card-web';
import TheSpread from './the-spread';
import useInstructions from '../hooks/use-instructions';

export type ShuffleProps = {
    done: () => void;
    shuffleDeck: () => void;
    cutDeck: () => void;
};
const web = Platform.OS === 'web';
const instructionTextSize = Platform.OS === 'web' ? Value(10) : Percentage(2.5);

export default function Shuffle({ done, cutDeck, shuffleDeck }) {
    const [isShuffling, setIsShuffling] = useState(true);
    const [cutCount, setCutCount] = useState(0);
    const [cutCardIndex, setCutCardIndex] = useState(0);
    const { instruction, next } = useInstructions();

    const castEnergyToDeck = () => {
        setIsShuffling(false);
        next();
    };

    const cutCards = (cutCardIndex: number) => {
        cutDeck(cutCardIndex);
        setCutCardIndex(cutCardIndex);
        setCutCount(cutCount + 1);
        if (cutCount < 2) {
            setTimeout(() => {
                next();
                shuffleDeck();
                setIsShuffling(true);
            }, 800);
        } else {
            next();
            done();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.instructionWrapper}>
                <Text style={styles.instructions}>{instruction}</Text>
            </View>
            <TheSpread>
                {CARD_ARRAY.map(index => {
                    return web ? (
                        <ShuffleCardWeb
                            cardIndex={index}
                            key={index}
                            isShuffling={isShuffling}
                            cutCards={cutCards}
                            cutCardIndex={cutCardIndex}
                            onPress={castEnergyToDeck}
                        />
                    ) : (
                        <ShuffleCard
                            cardIndex={index}
                            key={index}
                            isShuffling={isShuffling}
                            cutCards={cutCards}
                            cutCardIndex={cutCardIndex}
                            onPress={castEnergyToDeck}
                        />
                    );
                })}
            </TheSpread>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    instructionWrapper: {
        flexBasis: 120,
        paddingHorizontal: 10
    },
    instructions: {
        fontSize: instructionTextSize,
        textAlign: 'center'
    }
});
