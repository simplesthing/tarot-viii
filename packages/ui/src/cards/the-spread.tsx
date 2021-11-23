import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';


type SpreadProps = {
    children: any;
};

const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

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

export default function TheSpread({ children }: SpreadProps) {
    return (
        <View style={styles.container}>
            <View style={styles.deck}>{children}</View>
        </View>
    );
}