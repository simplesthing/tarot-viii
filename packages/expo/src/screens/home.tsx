import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ROUTES } from '../navigation/config'
import { SpeedDial } from 'react-native-elements';
import { useRouting } from 'expo-next-react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})

const HomeScreen = () => {
    const [open, setOpen] = useState(false)
    const { navigate } = useRouting();

    const startNewReading = () => {
        navigate({ routeName: ROUTES.screens.NEW_READING.name })
    }

    const goToHistory = () => {
        navigate({ routeName: ROUTES.screens.HISTORY.name })
    }

    const openProfile = () => {
        navigate({ routeName: ROUTES.screens.ACCOUNT.name })
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <SpeedDial
                color='white'
                isOpen={open}
                icon={{ name: 'navigation', color: '#000' }}
                openIcon={{ name: 'close', color: '#000' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    color='white'
                    icon={{ type: 'material-community', name: 'account', color: '#000' }}
                    title="Profile"
                    onPress={openProfile}
                />

                <SpeedDial.Action
                    color='white'
                    icon={{ type: 'material-community', name: 'history', color: '#000' }}
                    title="History"
                    onPress={goToHistory}
                />
                <SpeedDial.Action
                    color='white'
                    icon={{ type: 'material-community', name: 'cards-outline', color: '#000' }}
                    title="New Reading"
                    onPress={startNewReading}
                />
            </SpeedDial>
        </View>
    );
};

export default HomeScreen;
