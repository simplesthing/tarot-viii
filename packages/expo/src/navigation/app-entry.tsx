import * as Linking from 'expo-linking';

import { PATHS, SCREENS } from './config'
import React, { useEffect, useState } from 'react';

import AccountScreen from '../screens/account';
import { Colors } from '@tarot-viii/ui';
import HistoryScreen from '../screens/history';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import { NavigationContainer } from '@react-navigation/native';
import NewReading from '../screens/new-reading';
import PasswordReset from '../screens/password-reset';
import ReadingScreen from '../screens/reading';
import ShuffleDeal from '../screens/shuffle-deal';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.silver_sand.base
    }
});

const AppEntry = () => {
    const { user } = useAuth();
    const [signedIn, setSignedIn] = useState(!!user?.uid);

    useEffect(() => {
        setSignedIn(!!user?.uid);
    }, [user]);

    const prefix = Linking.createURL('/');
    const linking = {
        prefixes: [prefix]
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: styles.headerStyle,
                    headerShadowVisible: false
                }}>
                {signedIn ? (
                    <>
                        <Stack.Screen
                            component={HomeScreen}
                            name={SCREENS.screens.HOME.name}
                        />
                        <Stack.Screen
                            component={NewReading}
                            name={SCREENS.screens.NEW_READING.name}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            component={ShuffleDeal}
                            name={SCREENS.screens.SHUFFLE_DEAL.name} />
                        <Stack.Screen
                            component={ReadingScreen}
                            name={SCREENS.screens.READING.name} />
                        <Stack.Screen
                            component={HistoryScreen}
                            name={SCREENS.screens.HISTORY.name} />
                        <Stack.Screen
                            component={AccountScreen}
                            name={SCREENS.screens.ACCOUNT.name} />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            component={LoginScreen}
                            name="login"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            component={PasswordReset}
                            name="password"
                            options={{ headerShown: false }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
