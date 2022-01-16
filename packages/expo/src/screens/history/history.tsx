import { Background, Colors, Value } from '@tarot-viii/ui';
import { Button, Text } from 'react-native-elements';
import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth, useFirestore } from '../../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ROUTES } from '../../navigation/config';
import { Timeline } from 'react-native-just-timeline';
import { useRouting } from 'expo-next-react-navigation';

const { width } = Dimensions.get('window');

const HistoryScreen = () => {
    const { user } = useAuth();
    const { fetchReadingsForUser } = useFirestore();
    const [history, setHistory] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [timeline, setTimeline] = useState<unknown>();
    const { navigate } = useRouting();

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
                navigate({
                    routeName: ROUTES.screens.SPREAD.name,
                    params: {
                        data: data
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

    const newReading = () => {
        navigate({ routeName: ROUTES.screens.NEW_READING.name });
    };

    return (
        <View style={styles.backgroundWrapper}>
            <Background>
                <View style={styles.container}>
                    <View style={styles.timelineWrapper}>
                        {!history?.length && (
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
        </View>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    backgroundWrapper: {
        flex: 1
    },
    container: {
        flexDirection: 'row',
        flex: 1
    },
    timelineWrapper: { width: '100%', paddingTop: 100 },
    message: { alignSelf: 'center' },
    text: { fontSize: Value(16), marginVertical: Value(16) }
});
