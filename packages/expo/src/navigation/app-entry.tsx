import LoginScreen from '../screens/login';
import PasswordReset from '../screens/password-reset';
import React, { useEffect, useState } from 'react';
import ReadingScreen from '../screens/reading';
import StartScreen from '../screens/start';
import { Colors, LogOutButton } from '@tarot-viii/ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useAuth } from '../hooks/';


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.silver_sand.base
    }
});

const AppEntry = () => {
    const { user, logout } = useAuth();
    const [signedIn, setSignedIn] = useState(!!user?.uid);

    useEffect(() => {
        setSignedIn(!!user?.uid);
    }, [user]);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: styles.headerStyle,
                    headerShadowVisible: false
                }}>
                {signedIn ? (
                    <>
                        <Stack.Screen
                            component={StartScreen}
                            name="start"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            component={ReadingScreen}
                            name="reading"
                            options={({ navigation }) => ({
                                headerTintColor: Colors.smoky_black.base,
                                headerTitleStyle: { color: Colors.silver_sand.base },
                                headerRight: () => (
                                    <LogOutButton
                                        onPress={() => {
                                            logout();
                                        }}
                                    />
                                )
                            })}
                        />
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
