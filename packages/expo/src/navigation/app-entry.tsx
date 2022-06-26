import * as Linking from 'expo-linking';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import HomeScreen from '../screens/home';
import { ROUTES } from './config';
import colors from '@tarot-viii/ui/src/theme/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppEntry = () => {
    const [signedIn, setSignedIn] = useState(true);

    const prefix = Linking.createURL('/');
    const linking = {
        prefixes: [prefix]
    };

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: colors.silver_sand.base
        }
    };

    const Stack = createNativeStackNavigator();
    console.log(ROUTES.screens.HOME.name);

    return (
        <NavigationContainer>
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
                                component={HomeScreen}
                                name={ROUTES.screens.HOME.name}
                            />
                        </Stack.Group>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
