import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import CardForm from './card-form';
import useFirebase from '../hooks/use-card-form';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
});

export default {
    title: 'pages/cardForm',
    component: CardForm,
    args: { cardName: 'Two of Coins' }
};

export const Default = ({ cardName }) => {
    const { getCard, card, saveCard } = useFirebase();

    useEffect(() => {
        getCard(cardName);
    }, [cardName]);

    const onSave = async values => {
        return await saveCard(cardName, values);
    };

    return (
        <View style={styles.container}>
            {card && <CardForm card={card} save={onSave} />}
        </View>
    );
};
