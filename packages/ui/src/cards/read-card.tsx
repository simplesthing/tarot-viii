import Card from './card';
import colors from '../theme/colors';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Background } from '@tarot-viii/ui';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { vh, vw } from 'react-native-expo-viewport-units';


export type ReadingCard = {
    cardName: string;
    cardNumber: string;
    cardDescription: string;
    displayName: string;
    hex: string;
    index: number;
    positionDescription: string;
    reversed: boolean;
};

export type ReadCardProps = {
    card: ReadingCard;
    onPress?: () => void;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: vw(90),
        maxHeight: vh(75),
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center',
        borderColor: colors.smoky_black.base,
        borderWidth: vw(0.25),
        borderRadius: 5,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    readingContainer: {
        flex: 1,
        marginHorizontal: vw(5)
    },
    section: {
        marginTop: vh(2)
    },
    title: {
        fontSize: vw(7.5),
        fontWeight: '700'
    },
    text: {
        fontSize: vw(5),
        marginTop: vh(2)
    },
    flipButton: {
        alignSelf: 'center',
        width: vw(30),
        height: 60,
        marginBottom: 40,
        borderColor: colors.smoky_black.base,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default function ReadCard({ card, onPress }: ReadCardProps) {
    const [cardFace, setCardFace] = useState(true);
    const rot = !!card.reversed ? '180deg' : '0deg';
    const cb = onPress
        ? onPress
        : () => {
              setCardFace(!cardFace);
          };
    return (
        <Background>
            <View style={styles.container}>
                {cardFace ? (
                    <Card
                        cardIndex={card.index}
                        face={true}
                        styleProps={{
                            width: vw(89),
                            height: vh(70),
                            alignSelf: 'center',
                            transform: [
                                { rotate: card.cardName === 'challenge' ? '0deg' : rot }
                            ]
                        }}
                    />
                ) : (
                    <View style={styles.readingContainer}>
                        <View style={styles.section}>
                            <Text style={styles.title}> {card.displayName}</Text>
                            <Text style={styles.text}>{card.positionDescription}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>{card.cardName}</Text>
                            <Text style={styles.text}>{card.cardDescription}</Text>
                        </View>
                    </View>
                )}
            </View>
            <TouchableOpacity style={styles.flipButton} onPress={cb}>
                <AntDesign name="swap" size={45} color="black" />
            </TouchableOpacity>
        </Background>
    );
}
