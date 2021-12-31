import * as Linking from 'expo-linking';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import AccountScreen from '../screens/account/account';
import CloseScreen from '../navigation/close-screen';
import { Colors } from '@tarot-viii/ui';
import ForgotPasswordScreen from '../screens/account/forgot-password';
import HistoryScreen from '../screens/history/history';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/account/login';
import NewReading from '../screens/readings/new';
import PasswordReset from '../screens/account/password-reset';
import { ROUTES } from '@tarot-viii/expo/src/navigation/config';
import ReadingDetailScreen from '../screens/readings/reading';
import ReadingScreen from '../screens/readings/spread';
import ShuffleDealScreen from '../screens/readings/shuffle';
import SignupScreen from '../screens/account/signup';
import colors from '@tarot-viii/ui/src/theme/colors';
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

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: colors.silver_sand.base
        }
    };

    return (
        <NavigationContainer linking={linking} theme={MyTheme}>
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
                                name={ROUTES.screens.SPREAD.name}
                            />
                            <Stack.Screen
                                component={ReadingDetailScreen}
                                name={ROUTES.screens.READING.name}
                            />
                            <Stack.Screen
                                component={ForgotPasswordScreen}
                                name={ROUTES.screens.FORGOT_PASSWORD.name}
                            />
                            <Stack.Screen
                                component={PasswordReset}
                                name={ROUTES.screens.PASSWORD_RESET.name}
                                options={{ headerShown: false }}
                            />
                        </Stack.Group>
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            component={LoginScreen}
                            name={ROUTES.screens.LOGIN.name}
                            options={{ headerShown: false }}
                        />
                        <Stack.Group
                            screenOptions={{
                                headerTitle: '',
                                headerBackTitle: '',
                                headerTintColor: Colors.smoky_black.base,
                                headerStyle: { backgroundColor: Colors.silver_sand.base },
                                headerShadowVisible: false
                            }}>
                            <Stack.Screen
                                component={SignupScreen}
                                name={ROUTES.screens.SIGNUP.name}
                            />
                            <Stack.Screen
                                component={ForgotPasswordScreen}
                                name={ROUTES.screens.FORGOT_PASSWORD.name}
                            />
                            <Stack.Screen
                                component={PasswordReset}
                                name={ROUTES.screens.PASSWORD_RESET.name}
                                options={{ headerShown: false }}
                            />
                        </Stack.Group>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
