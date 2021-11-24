import LoginScreen from '../screens/login';
import PasswordReset from '../screens/password-reset';
import React from 'react';
import ReadingScreen from '../screens/reading';
import StartScreen from '../screens/start';
import { Colors, LogOutButton } from '@tarot-viii/ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useAuth } from '../hooks';


const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.silver_sand.base
    }
});

const AppEntry = () => {
    const { logout } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: styles.headerStyle,
                    headerShadowVisible: false
                }}>
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
                        headerTintColor: Colors.smoky_black.base,

                        headerRight: () => (
                            <LogOutButton
                                onPress={() => {
                                    logout();
                                    navigation.navigate('login');
                                }}
                            />
                        )
                    })}
                />
                <Stack.Screen component={PasswordReset} name="password" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
