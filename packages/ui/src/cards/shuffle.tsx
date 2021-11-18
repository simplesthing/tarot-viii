import React, { useState } from 'react';
import ShuffleCard from './shuffle-card';
import { CARDS } from './constants';
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View
    } from 'react-native';


const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

export type ShuffleProps = {
    nextInstruction: () => void;
    instructionCount: number;
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

export default function Shuffle({ nextInstruction }) {
    const [isShuffling, setIsShuffling] = useState(true);
    const [cutCount, setCutCount] = useState(0);
    const [cutCardIndex, setCutCardIndex] = useState(0);

    const castEnergyToDeck = () => {
        setIsShuffling(false);
        nextInstruction();
    };

    const cutCards = (cutCardIndex: number) => {
        setCutCardIndex(cutCardIndex);
        setCutCount(cutCount + 1);
        if (cutCount < 2) {
            setTimeout(() => {
                nextInstruction();
                setIsShuffling(true);
            }, 800);
        } else {
            // deal
            nextInstruction();
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={castEnergyToDeck}>
            <View style={styles.deck}>
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
            </View>
        </TouchableOpacity>
    );
}
