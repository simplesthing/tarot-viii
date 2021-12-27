import { Background, Colors } from '@tarot-viii/ui';
import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useMemo, useRef, useState } from 'react';

import React from 'react';
import { useFirestore } from '../../hooks';

const { height } = Dimensions.get('window');

const ReadingNotes = ({ children, data, snapToIndex = 0 }) => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['10%', '20%', '50%', '80%'], []);
    const [title, setTitle] = useState<string>(data?.title);
    const [notes, setNotes] = useState<string>(data?.notes);
    console.log(data);
    const { updateReadingTitle, updateReadingNotes } = useFirestore();

    const updateTitle = () => {
        updateReadingTitle(data.documentId, title);
    };

    const updateNotes = () => {
        updateReadingNotes(data.documentId, notes);
    };

    return (
        <View style={styles.container}>
            <Background>{children}</Background>
            <BottomSheet
                ref={sheetRef}
                index={snapToIndex}
                snapPoints={snapPoints}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore">
                <BottomSheetScrollView style={styles.scrollView}>
                    <View style={styles.row}>
                        <BottomSheetTextInput
                            style={styles.input}
                            keyboardType="default"
                            onChangeText={value => setTitle(value)}
                            onBlur={updateTitle}
                            multiline={false}
                            value={title}
                            placeholder="title:"
                        />
                        <BottomSheetTextInput
                            style={[
                                styles.input,
                                { minHeight: 80, maxHeight: height / 3 }
                            ]}
                            keyboardType="default"
                            onChangeText={value => setNotes(value)}
                            onBlur={updateNotes}
                            multiline={true}
                            value={notes}
                            placeholder="notes:"
                        />
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
};

export default ReadingNotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height - 100,
        flexDirection: 'column',
        alignContent: 'stretch',
        backgroundColor: Colors.silver_sand.base
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
        padding: 8,
        backgroundColor: 'rgba(151, 151, 151, 0.25)'
    },
    row: {
        marginHorizontal: 10,
        paddingEnd: 10
    }
});
