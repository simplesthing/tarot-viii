import { ROUTES } from '../../navigation/config';
import React from 'react';
import { Start } from '@tarot-viii/app';
import analytics from '@react-native-firebase/analytics';
import { useRouter } from 'solito/router';
const NewReading = () => {
    const { push } = useRouter();

    const onStart = () => {
        try {
            analytics()
                .logLevelStart({ level: 0 })
                .then(() => {
                    push({ pathname: ROUTES.screens.SHUFFLE_DEAL.path });
                });
        } catch (e) {
            //crashlytics record
        }
        return;
    };

    return <Start onStart={onStart} />;
};

export default NewReading;
