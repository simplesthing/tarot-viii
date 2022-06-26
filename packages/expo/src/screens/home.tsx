import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const height = screenHeight;
const width = screenHeight * 0.707;

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
