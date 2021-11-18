import React from 'react';
import ReadingScreen from '../screens/reading';
import Start from '../screens/start';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppEntry = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={Start}
                    name="start"
                    options={{ headerShown: false }}
                />
                <Stack.Screen component={ReadingScreen} name="reading" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
