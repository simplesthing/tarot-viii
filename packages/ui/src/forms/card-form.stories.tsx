import CardForm from './card-form';
import React from 'react';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

export default {
    title: 'forms/cardForm',
    component: CardForm
};

export const Default = args => (
    <View style={styles.container}>
        <CardForm />
    </View>
);
