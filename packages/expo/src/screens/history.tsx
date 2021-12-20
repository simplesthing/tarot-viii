import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuth, useFirestore } from '../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Timeline } from 'react-native-just-timeline';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 60
    },
    timelineWrapper: { width: '100%' }
});

const timelineData = history => {
    return {
        title: {
            content: history.title || 'Untitled'
        },
        description: {
            content: history.notes
        },
        time: {
            content: new Date(history.creationTime).toDateString().slice(0, 10)
        }
    };
};
const HistoryScreen = () => {
    const { user } = useAuth();
    const { fetchReadingsForUser } = useFirestore();
    const [history, setHistory] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [timeline, setTimeline] = useState<unknown>();

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
            <View style={styles.timelineWrapper}>
                <Timeline data={timeline} />
            </View>
        </View>
    );
};

export default HistoryScreen;
