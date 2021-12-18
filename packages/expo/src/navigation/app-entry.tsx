import * as Linking from 'expo-linking';

import React, { useEffect, useState } from 'react';

import AccountScreen from '../screens/account';
import CloseScreen from '../navigation/close-screen';
import { Colors } from '@tarot-viii/ui';
import HistoryScreen from '../screens/history';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import { NavigationContainer } from '@react-navigation/native';
import NewReading from '../screens/new-reading';
import PasswordReset from '../screens/password-reset';
import { ROUTES } from '@tarot-viii/expo/src/navigation/config';
import ReadingScreen from '../screens/reading';
import ShuffleDealScreen from '../screens/shuffle-deal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/';

const AppEntry = () => {
    const { user } = useAuth();
    const [signedIn, setSignedIn] = useState(!!user?.uid);

    useEffect(() => {
        setSignedIn(!!user?.uid);
    }, [user]);

    const prefix = Linking.createURL('/');
    const linking = {
        prefixes: [prefix]
    };

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                {signedIn ? (
                    <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                component={HomeScreen}
                                name={ROUTES.screens.HOME.name}
                            />
                        </Stack.Group>

                        <Stack.Group
                            screenOptions={({ navigation, route }) => {
                                return {
                                    headerTransparent: true,
                                    headerShadowVisible: false,
                                    headerLeft: () => (
                                        <CloseScreen navigation={navigation} />
                                    ),
                                    headerTitle: ''
                                };
                            }}>
                            <Stack.Screen
                                component={NewReading}
                                name={ROUTES.screens.NEW_READING.name}
                            />
                            <Stack.Screen
                                component={HistoryScreen}
                                name={ROUTES.screens.HISTORY.name}
                            />
                            <Stack.Screen
                                component={AccountScreen}
                                name={ROUTES.screens.ACCOUNT.name}
                            />
                        </Stack.Group>

                        <Stack.Group
                            screenOptions={{
                                headerTitle: '',
                                headerBackTitle: '',
                                headerTintColor: Colors.smoky_black.base,
                                headerStyle: { backgroundColor: Colors.silver_sand.base },
                                headerShadowVisible: false
                            }}>
                            <Stack.Screen
                                component={ShuffleDealScreen}
                                name={ROUTES.screens.SHUFFLE_DEAL.name}
                            />

                            <Stack.Screen
                                component={ReadingScreen}
                                name={ROUTES.screens.READING.name}
                            />
                        </Stack.Group>
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
