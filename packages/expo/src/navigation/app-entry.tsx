import * as Linking from 'expo-linking';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { PATHS, ROUTES } from './config';
import React, { useEffect, useState } from 'react';

import ForgotPasswordScreen from '../screens/account/forgot-password';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/account/login';
import PasswordReset from '../screens/account/password-reset';
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
        prefixes: [prefix],
        config: { screens: PATHS }
    };

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: colors.silver_sand.base
        }
    };

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer theme={MyTheme} linking={linking}>
            <Stack.Navigator>
                {signedIn ? (
                    <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                component={HomeScreen}
                                name={ROUTES.screens.HOME.name}
                            />
                        </Stack.Group>
                    </>
                ) : (
                    <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                component={LoginScreen}
                                name={ROUTES.screens.LOGIN.name}
                            />
                        </Stack.Group>
                        <Stack.Group
                            screenOptions={{
                                headerTitle: '',
                                headerBackTitle: '',
                                headerTintColor: colors.smoky_black.base,
                                headerStyle: { backgroundColor: colors.silver_sand.base },
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
