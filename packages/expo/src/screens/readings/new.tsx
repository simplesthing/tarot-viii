import { SafeAreaView, StyleSheet } from 'react-native';

import QuickNav from '../../navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { Start } from '@tarot-viii/ui';
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

    return (
        <SafeAreaView style={styles.container}>
            <Start onStart={onStart} />
            <QuickNav />
        </SafeAreaView>
    );
};

export default NewReading;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
