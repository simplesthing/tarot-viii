import { ExApp, MDetailView } from '@tarot-viii/ui/';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuth, useFirestore } from '../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ROUTES } from '../navigation/config';
import { Timeline } from 'react-native-just-timeline';
import { useRouting } from 'expo-next-react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 60
    },
    timelineWrapper: { width: '100%' }
});

const HistoryScreen = () => {
    const { user } = useAuth();
    const { fetchReadingsForUser } = useFirestore();
    const [history, setHistory] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [timeline, setTimeline] = useState<unknown>();
    const { navigate } = useRouting();

    const timelineData = data => {
        return {
            title: {
                content: data.title || 'Untitled'
            },
            description: {
                content: data.notes
            },
            time: {
                content: new Date(data.creationTime).toDateString().slice(0, 10)
            },
            pressAction: () =>
                navigate({
                    routeName: ROUTES.screens.READING.name,
                    params: {
                        reading: data.id
                    }
                })
        };
    };

    useEffect(() => {
        if (user?.uid) {
            fetchReadingsForUser(user.uid).then(historyDocs => {
                setHistory(historyDocs);
            });
        }
    }, [user]);

    useEffect(() => {
        if (history) {
            const tl = history.map(doc => timelineData(doc));
            setTimeline(tl);
        }
    }, [history]);

    return (
        <View style={styles.container}>
            {/* <View style={styles.timelineWrapper}>
                <Timeline data={timeline} />
            </View> */}

            <ExApp />
        </View>
    );
};

export default HistoryScreen;
