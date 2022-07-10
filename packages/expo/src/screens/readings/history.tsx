import { Background, Colors, Value } from '@tarot-viii/ui';
import { Button, Text } from '@rneui/themed';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth, useFirestore } from '../../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import QuickNav from '../../navigation/quickNav';
import { ROUTES } from '../../navigation/config';
import { Timeline } from 'react-native-just-timeline';
import { useRouter } from 'solito/router';

const HistoryScreen = () => {
    const { user } = useAuth();
    const { fetchReadingsForUser } = useFirestore();
    const [loaded, setLoaded] = useState(false);
    const [history, setHistory] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [timeline, setTimeline] = useState<unknown>();
    const { push } = useRouter();

    const timelineData = data => {
        return {
            title: {
                content: data.title || 'Untitled',
                style: {
                    color: Colors.spanish_gray.shadow
                }
            },
            description: {
                content: data.notes
            },
            time: {
                content: new Date(data.creationTime).toDateString().slice(0, 10),
                style: {
                    color: Colors.smoky_black.base
                }
            },
            icon: {
                style: {
                    backgroundColor: Colors.cambridge_blue.base,
                    borderColor: Colors.cambridge_blue.accent1
                }
            },
            pressAction: () =>
                push({
                    pathname: ROUTES.screens.SPREAD.path,
                    query: {
                        id: data.id
                    }
                })
        };
    };

    useEffect(() => {
        if (user?.uid) {
            fetchReadingsForUser(user.uid).then(historyDocs => {
                setHistory(historyDocs);
                setLoaded(true);
            });
        }
    }, [user]);

    useEffect(() => {
        if (history) {
            const tl = history.map(doc => timelineData(doc));
            setTimeline(tl);
        }
    }, [history]);

    const newReading = () => {
        push({ pathname: ROUTES.screens.NEW_READING.path });
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <Background>
                    <View style={styles.screen}>
                        <View style={styles.timelineWrapper}>
                            {!history?.length && !!loaded && (
                                <View style={styles.message}>
                                    <Text style={styles.text}>
                                        You have no reading history.{' '}
                                    </Text>
                                    <Button title="New Reading" onPress={newReading} />
                                </View>
                            )}
                            <Timeline data={timeline} />
                        </View>
                    </View>
                </Background>
                <QuickNav />
            </SafeAreaView>
        </>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        flexDirection: 'row',
        flex: 1
    },
    timelineWrapper: { width: '100%', paddingTop: Platform.OS === 'android' ? 60 : 0 },
    message: { alignSelf: 'center' },
    text: { fontSize: Value(16), marginVertical: Value(16) }
});
