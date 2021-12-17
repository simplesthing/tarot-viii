import { Dimensions, StyleSheet, View } from 'react-native';

import { default as Colors } from './colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

const Background = ({ children }: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            width: viewWidth,
            minHeight: viewHeight,
            justifyContent: 'center',
            alignItems: 'stretch',
            backgroundColor: Colors.silver_sand.base
        },
        background: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 500,
            paddingTop: viewHeight - 500,
            zIndex: 0
        },
        foreground: {
            zIndex: 10
        }
    });

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[Colors.silver_sand.base, Colors.spanish_gray.base]}
                locations={[0.7, 1]}
                style={styles.background}
            />
            <View style={styles.foreground}>{children}</View>
        </View>
    );
};

export default Background;
