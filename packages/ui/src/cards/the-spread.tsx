import { Dimensions, StyleSheet, View } from 'react-native';

import React from 'react';

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
        paddingHorizontal: 40,
        width: viewWidth,
        height: viewHeight - 20,
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
