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
    const snapPoints = useMemo(() => ['10%', '50%'], []);

    const [cards, setCards] = useState<FirebaseFirestoreTypes.DocumentData[]>();
    const [spread, setSpread] = useState<FirebaseFirestoreTypes.DocumentData>();

    const {
        fetchDeck,
        fetchSpread,
        generateReadingDocument,
        updateReadingTitle,
        updateReadingNotes
    } = useFirestore();

    const { user } = useAuth();

    const [readingId, setReadingId] = useState<string>();
    const [title, setTitle] = useState('Untitled');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const fetch = async () => {
            fetchDeck().then(c => setCards(c));
            fetchSpread().then((s: FirebaseFirestoreTypes.DocumentData) => setSpread(s));
        };
        fetch();
    }, []);

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
        if (readingId) {
            updateReadingTitle(readingId, title);
        }
    };

    const updateNotes = () => {
        if (readingId) {
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
                        color: Colors.silver_sand.muted
                    }}
                    value={title}
                    onChangeText={setTitle}
                    onBlur={updateTitle}
                    autoCompleteType="off"
                    inputContainerStyle={styles.header}
                />
                <ShuffleDeal
                    cards={cards}
                    spread={spread}
                    generateReadingDoc={genReading}
                />
            </Background>
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
        </View>
    );
};

export default ShuffleDealScreen;
