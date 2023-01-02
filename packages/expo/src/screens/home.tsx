import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native';

import { Background } from '@tarot-viii/ui';
import QuickNav from 'src/navigation/quickNav';
import React from 'react';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const height = screenHeight;
const width = screenHeight * 0.707;

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Background>
                <Image
                    style={{ width, height }}
                    source={require('../../../ui/assets/images/Tree_Of_Life.jpg')}
                />
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
