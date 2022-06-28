import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { Background } from '@tarot-viii/ui';
import QuickNav from 'src/navigation/quickNav';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <Text>Home</Text>
            </Background>
            <QuickNav />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
