import React from 'react';
import {
    Field,
    FieldProps,
    Form,
    Formik,
    FormikHelpers,
    FormikProps
    } from 'formik';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

interface CardFormValues {
    arcana: string;
    before: string;
    beforeR: string;
    index: number;
    number: string;
}

const CardForm = () => {
    return (
        <View style={styles.container}>
            <Formik initialValues={{ name: '' }}></Formik>
        </View>
    );
};

export default CardForm;
