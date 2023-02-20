import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Percentage, Value } from '../theme/fonts';
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

const { width } = Dimensions.get('window');
const web = Platform.OS === 'web';
const instructionTextSize = Platform.OS === 'web' ? Value(10) : Percentage(2.5);

export default function Shuffle({ done, cutDeck, shuffleDeck }) {
    const [isShuffling, setIsShuffling] = useState(true);
    const [cutCount, setCutCount] = useState(0);
    const [cutCardIndex, setCutCardIndex] = useState(0);
    const { instruction, next } = useInstructions();

    const cutCards = (selectedCardIndex: number) => {
        cutDeck(selectedCardIndex);
        setCutCardIndex(selectedCardIndex);
        setCutCount(cutCount + 1);
        if (cutCount < 2) {
            setIsShuffling(true);
            setTimeout(() => {
                next();
                shuffleDeck();
            }, 100);
        } else {
            next();
            done();
        }
    };

    const stopShuffle = () => {
        setIsShuffling(false);
        next();
    };

    return (
        <View style={styles.container}>
            <View style={styles.instructionWrapper}>
                <Text style={styles.instructions}>{instruction}</Text>
            </View>
            {isShuffling && <Pressable onPress={stopShuffle} style={styles.wrapper} />}
            <TheSpread>
                {CARD_ARRAY.map(index => {
                    return web ? (
                        <ShuffleCardWeb
                            cardIndex={index}
                            key={index}
                            isShuffling={isShuffling}
                            cutCards={cutCards}
                            cutCardIndex={cutCardIndex}
                            onPress={() => {}}
                        />
                    ) : (
                        <ShuffleCard
                            cardIndex={index}
                            key={index}
                            isShuffling={isShuffling}
                            cutCardIndex={cutCardIndex}
                            cutCards={cutCards}
                            onPress={() => {}}
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
    wrapper: {
        position: 'absolute',
        top: 60,
        left: 0,
        width,
        height: width * 1.5,
        zIndex: 10
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
