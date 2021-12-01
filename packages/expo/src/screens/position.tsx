import React from 'react';
import ReadCard from '@tarot-viii/ui/src/cards/read-card';

const PositionScreen = ({ navigation, route }) => {
    const card = route?.params?.card;

    return <ReadCard card={card} />;
};

export default PositionScreen;
