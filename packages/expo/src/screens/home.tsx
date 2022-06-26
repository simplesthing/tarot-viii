import { Dimensions, Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const height = screenHeight;
const width = screenHeight * 0.707;

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
