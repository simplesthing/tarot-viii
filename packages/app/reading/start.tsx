import React from 'react';
import {
    Arrow,
    Background,
    Colors,
    Deck
    } from '@tarot-viii/ui/src';
import {
    Dimensions,
    Platform,
    StyleSheet,
    View
    } from 'react-native';
import { Text } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';


type StartProps = {
    onStart: () => void;
};

const viewHeight = Dimensions.get('window').height;

const arrowTop = Platform.OS === 'web' ? 0 : -10;
const arrowRight = Platform.OS === 'web' ? -50 : 0;

const textLeft = Platform.OS == 'web' ? -10 : 10;
const textSize = Platform.OS === 'web' ? viewHeight * 0.035 : viewHeight * 0.029;

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        position: 'relative'
    },
    text: {
        position: 'relative',
        left: textLeft,
        fontSize: textSize,
        marginBottom: viewHeight * 0.05,
        zIndex: 10
    },
    arrow: {
        position: 'absolute',
        top: arrowTop,
        right: arrowRight,
        width: 'auto',
        height: 'auto',
        zIndex: 20
    }
});

const Start = ({ onStart }: StartProps) => {
    const { navigate } = useRouting();

    const onPress = () => {
        onStart();
        navigate({ routeName: 'shuffle' });
    };

    return (
        <Background>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Arrow
                        style={styles.arrow}
                        strokeWidth="4"
                        fill={Colors.smoky_black.base}
                    />
                    <Text style={styles.text}>Tap tarot card to start</Text>
                </View>
                <Deck onPress={onPress} />
            </View>
        </Background>
    );
};

export default Start;
