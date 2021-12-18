import { Background, Deal } from '@tarot-viii/ui';
import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Input } from 'react-native-elements';
import React from 'react';
import { ReadingProp } from '@tarot-viii/ui/src/hooks/use-reading';
import { useFirestore } from '../hooks';

type ReadingScreenProps = {
    navigation: any;
    route: any;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'stretch'
    },
    header: {
        flexBasis: 120
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        minHeight: 80,
        backgroundColor: 'rgba(151, 151, 151, 0.25)'
    },
    row: {
        marginHorizontal: 10,
        paddingEnd: 10
    }
});

const ReadingScreen = ({ navigation, route }) => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['10%', '50%'], []);

    const [readingId] = useState(route?.params?.reading);
    const [reading, setReading] = useState<ReadingProp[]>();
    const [title, setTitle] = useState<string>();
    const [notes, setNotes] = useState<string>();

    const { fetchReadingById, updateReadingTitle, updateReadingNotes } = useFirestore();

    useEffect(() => {
        if (readingId) {
            fetchReadingById(route.params.reading).then(readingDoc => {
                setReading(readingDoc?.reading);
                setTitle(readingDoc?.title);
                setNotes(readingDoc?.notes);
            });
        }
    }, [readingId]);

    const updateTitle = () => {
        if (readingId && title) {
            updateReadingTitle(readingId, title);
        }
    };

    const updateNotes = () => {
        if (readingId && notes) {
            updateReadingNotes(readingId, notes);
        }
    };

    return (
        <View style={styles.container}>
            <Background>
                <View style={styles.header}>
                    <Input
                        rightIcon={{
                            type: 'material-community',
                            name: 'pencil',
                            color: '#000'
                        }}
                        value={title}
                        onChangeText={setTitle}
                        onBlur={updateTitle}
                        autoCompleteType="off"
                    />
                </View>
                <Deal reading={reading} />
                <BottomSheet
                    ref={sheetRef}
                    index={1}
                    snapPoints={snapPoints}
                    keyboardBehavior="interactive"
                    keyboardBlurBehavior="restore">
                    <BottomSheetScrollView style={styles.scrollView}>
                        <View style={styles.row}>
                            <BottomSheetTextInput
                                style={styles.input}
                                keyboardType="default"
                                onChangeText={value => setNotes(value)}
                                onBlur={updateNotes}
                                multiline={true}
                                value={notes}
                                placeholder="what would you like to learn from this reading?"
                            />
                        </View>
                    </BottomSheetScrollView>
                </BottomSheet>
            </Background>
        </View>
    );
};

export default ReadingScreen;
