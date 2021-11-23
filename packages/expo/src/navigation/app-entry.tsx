import LoginScreen from '../screens/login';
import PasswordReset from '../screens/password-reset';
import React from 'react';
import ReadingScreen from '../screens/reading';
import StartScreen from '../screens/start';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { useAuth } from '../hooks';

const Stack = createNativeStackNavigator();

const AppEntry = () => {
    const { logout } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={LoginScreen} name="login" />
                <Stack.Screen
                    component={StartScreen}
                    name="start"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={ReadingScreen}
                    name="reading"
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Text
                                onPress={() => {
                                    logout();
                                    navigation.navigate('login');
                                }}>
                                Log out
                            </Text>
                        )
                    })}
                />
                <Stack.Screen component={PasswordReset} name="password" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
