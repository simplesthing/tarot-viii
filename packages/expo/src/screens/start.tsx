import analytics from '@react-native-firebase/analytics';
import React from 'react';
import Start from '@tarot-vii/app/reading/start';

const StartScreen = () => {
    const onStart = () => [analytics().logLevelStart({ level: 0 })];
    return <Start onStart={onStart} />;
};

export default StartScreen;
