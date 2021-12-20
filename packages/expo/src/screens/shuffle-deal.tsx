import { Background, Colors } from '@tarot-viii/ui';
import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuth, useFirestore } from '../hooks';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Input } from 'react-native-elements';
import { ShuffleDeal } from '@tarot-viii/app';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'stretch'
    },
    header: { paddingHorizontal: 20 },

    scrollView: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        lineHeight: 20,
        padding: 10,
        backgroundColor: 'rgba(151, 151, 151, 0.25)'
    },
    row: {
        marginHorizontal: 10,
        paddingEnd: 10
    }
});

const ShuffleDealScreen = () => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['10%', '25%', '50%'], []);

    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();
    const [readingId, setReadingId] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [notes, setNotes] = useState<string>();

    const {
        fetchCardsInSpread,
        fetchSpread,
        generateReadingDocument,
        updateReadingTitle,
        updateReadingNotes
    } = useFirestore();

    const { user } = useAuth();

    useEffect(() => {
        const fetch = async () => {
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

    const getCards = async readingIndexes => {
        return fetchCardsInSpread(readingIndexes).then(c => {
            return c;
        });
    };

    const genReading = reading => {
        if (user?.uid) {
            generateReadingDocument(user.uid, reading, notes, title).then(docID => {
                if (docID) {
                    setReadingId(docID);
                }
            });
        }
    };

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
                <Input
                    rightIcon={{
                        type: 'material-community',
                        name: 'pencil',
                        color: !!title
                            ? Colors.silver_sand.base
                            : Colors.silver_sand.muted
                    }}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Query"
                    onBlur={updateTitle}
                    autoCompleteType="off"
                    inputContainerStyle={styles.header}
                />
                <ShuffleDeal
                    getCards={getCards}
                    spread={spread}
                    generateReadingDoc={genReading}
                />
            </Background>
            <BottomSheet
                ref={sheetRef}
                index={0}
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
                            placeholder="Notes: "
                        />
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
};

export default ShuffleDealScreen;
