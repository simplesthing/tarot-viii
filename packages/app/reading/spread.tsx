import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import { Deal } from '@tarot-viii/ui';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import React from 'react';
import { ReadingDoc } from '../types/firestore';
import { ReadingProp } from '../../../ui/src/hooks/use-reading';
import { useFirestore } from '../hooks';

type ReadingScreenProps = {
    navigation: any;
    route: any;
};

const ReadingScreen = ({ navigation, route }: ReadingScreenProps) => {
    const [reading, setReading] = useState<ReadingProp[]>();
    const [id, setId] = useState<string>();
    const [notes, setNotes] = useState<string>();
    const [title, setTitle] = useState<string>();

    const { fetchReadingById } = useFirestore();

    const onUpdateTitle = () => {
        updateTitle();
    };

    useEffect(() => {
        if (route?.params?.reading) {
            fetchReadingById(route.params.reading).then(readingDoc => {
                setReading(readingDoc?.reading);
                setId(readingDoc?.id);
                setNotes(readingDoc?.notes);
                setTitle(readingDoc?.title);
            });
        }
    }, [route]);

    return (
        <View>
            <View style={styles.header}>
                <Input
                    value={title}
                    onChangeText={value => setTitle(value)}
                    onBlur={onUpdateTitle}
                    autoCompleteType="off"
                />
            </View>
            <Deal reading={reading} />
        </View>
    );
};

export default ReadingScreen;
