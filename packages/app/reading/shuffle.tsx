import React from 'react';
import {
    Background,
    Percentage,
    ShuffleAnimation,
    useInstructions,
    Value
    } from '@tarot-viii/ui';
import { Platform, StyleSheet, Text } from 'react-native';


const instructionTextSize = Platform.OS === 'web' ? Value(10) : Percentage(2.5);

const Shuffle = () => {
    const styles = StyleSheet.create({
        instructions: {
            fontSize: instructionTextSize,
            textAlign: 'center',
            marginTop: 40
        },
        deck: {
            alignSelf: 'center',
            paddingTop: 100,
            paddingBottom: 100,
            paddingLeft: 40,
            paddingRight: 40
        }
    });

    const { count, instruction, next } = useInstructions();

    const actWithIntent = () => {
        if (count === 5) {
            console.log('open new page');
        }
        next();
    };

    return (
        <Background>
            <Text style={styles.instructions}>{instruction}</Text>
            <ShuffleAnimation onPress={actWithIntent} />
        </Background>
    );
};

export default Shuffle;
