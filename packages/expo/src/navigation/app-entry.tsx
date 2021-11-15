import React from 'react';
import Shuffle from '../screens/shuffle';
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
                <Stack.Screen component={Shuffle} name="shuffle" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
