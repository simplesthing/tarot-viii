import React from 'react';
import { default as Colors } from './colors';
import { Dimensions, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


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
            alignItems: 'stretch'
        },
        background: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            paddingTop: viewHeight,
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
