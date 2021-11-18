import React from 'react';
import {
    Background,
    Percentage,
    ShuffleAnimation,
    useInstructions,
    Value
    } from '@tarot-viii/ui';
import {
    Platform,
    StyleSheet,
    Text,
    View
    } from 'react-native';


const instructionTextSize = Platform.OS === 'web' ? Value(10) : Percentage(2.5);

const Reading = () => {
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
        deck: {
            alignSelf: 'center',
            paddingTop: 100,
            paddingBottom: 100,
            paddingLeft: 40,
            paddingRight: 40
        }
    });

    const { count, instruction, next } = useInstructions();

    return (
        <Background>
            <View style={styles.instructionWrapper}>
                <Text style={styles.instructions}>{instruction}</Text>
            </View>
            <ShuffleAnimation nextInstruction={next} instructionCount={count} />
        </Background>
    );
};

export default Reading;
