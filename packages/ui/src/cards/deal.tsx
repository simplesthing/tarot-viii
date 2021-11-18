import DealCard from './deal-card';
import React, { useState } from 'react';
import TheSpread from './the-spread';
import { CARDS } from './constants';
import { StyleSheet, View } from 'react-native';


const DEALER = CARDS.slice(0, 10);

export type DealProps = {
    done: () => void;
};

const POSITIONS = Array.from(Array(10).keys());

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'stretch'
    },
    header: {
        flexBasis: 120
    }
});

export default function Deal({ done }: DealProps) {
    const [dealtCards, setDealtCards] = useState(POSITIONS);
    const [dealDone, setDealDone] = useState(false);

    const castEnergyToDeck = (index: number) => {
        if (!dealDone) {
            const updated = dealtCards.filter(item => item !== index);
            setDealtCards(updated);
            if (updated.length === 0) {
                setDealDone(true);
                done();
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <TheSpread>
                {DEALER.map((card, index) => (
                    <DealCard
                        key={index}
                        cardIndex={card}
                        spreadIndex={index}
                        onPress={castEnergyToDeck}
                    />
                ))}
            </TheSpread>
        </View>
    );
}
