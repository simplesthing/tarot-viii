import React from 'react';
import { Start } from '@tarot-viii/app';
import analytics from '@react-native-firebase/analytics';

const NewReading = () => {
    
    const onStart = () => {
        try {
            analytics().logLevelStart({ level: 0 });
        } catch (e) {
            //crashlytics record
        }
        return;
    };
    
    return <Start onStart={onStart} />;
};

export default NewReading;
