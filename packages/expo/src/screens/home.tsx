import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import ImageZoom from 'react-native-image-pan-zoom';
import { ROUTES } from '../navigation/config';
import { SpeedDial } from 'react-native-elements';
import { useRouting } from 'expo-next-react-navigation';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const height = screenHeight;
const width = screenHeight * 0.707;

const HomeScreen = () => {
    const [open, setOpen] = useState(false);
    const { navigate } = useRouting();

    const startNewReading = () => {
        navigate({ routeName: ROUTES.screens.NEW_READING.name });
    };

    const goToHistory = () => {
        navigate({ routeName: ROUTES.screens.HISTORY.name });
    };

    const openProfile = () => {
        navigate({ routeName: ROUTES.screens.ACCOUNT.name });
    };

    return (
        <View style={styles.container}>
            <ImageZoom
                cropHeight={screenHeight}
                cropWidth={screenWidth}
                imageHeight={height}
                imageWidth={width}
                minScale={1}>
                <Image
                    style={{ width, height }}
                    source={require('../../../ui/assets/images/Tree_Of_Life.jpg')}
                />
            </ImageZoom>
            <SpeedDial
                color={open ? 'white' : 'black'}
                isOpen={open}
                icon={{ name: 'navigation', color: 'white' }}
                openIcon={{ name: 'close', color: 'black' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}>
                <SpeedDial.Action
                    color="white"
                    icon={{ type: 'material-community', name: 'account', color: '#000' }}
                    title="Profile"
                    onPress={openProfile}
                />

                <SpeedDial.Action
                    color="white"
                    icon={{ type: 'material-community', name: 'history', color: '#000' }}
                    title="History"
                    onPress={goToHistory}
                />
                <SpeedDial.Action
                    color="white"
                    icon={{
                        type: 'material-community',
                        name: 'cards-outline',
                        color: '#000'
                    }}
                    title="New Reading"
                    onPress={startNewReading}
                />
            </SpeedDial>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
