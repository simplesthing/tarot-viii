import { ROUTES } from '../../navigation/config';
import React from 'react';
import { Start } from '@tarot-viii/app';
import analytics from '@react-native-firebase/analytics';
// import { useRouting } from 'expo-next-react-navigation';

const NewReading = () => {
    // const { navigate } = useRouting();

    const onStart = () => {
        try {
            analytics()
                .logLevelStart({ level: 0 })
                .then(() => {
                    // navigate({ routeName: ROUTES.screens.SHUFFLE_DEAL.name });
                });
        } catch (e) {
            //crashlytics record
        }
        return;
    };

    return <Start onStart={onStart} />;
};

export default NewReading;
