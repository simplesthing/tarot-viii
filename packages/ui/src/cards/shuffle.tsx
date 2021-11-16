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
    actWithIntent: () => void;
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

export default function Shuffle({ actWithIntent }) {
    const [isShuffling, setIsShuffling] = useState(true);

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
        actWithIntent();
    };

    return (
        <TouchableOpacity style={styles.container} onPress={toggleShuffle}>
            <View style={styles.deck}>
                {CARDS.map(index => (
                    <ShuffleCard
                        cardIndex={index}
                        key={index}
                        isShuffling={isShuffling}
                        onPress={toggleShuffle}
                    />
                ))}
            </View>
        </TouchableOpacity>
    );
}
