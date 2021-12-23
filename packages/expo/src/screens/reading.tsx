import { Background, Colors, Deal } from '@tarot-viii/ui';
import BottomSheet, {
    BottomSheetScrollView,
    BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import { useMemo, useRef, useState } from 'react';

import { Input } from 'react-native-elements';
import { ROUTES } from '../navigation/config';
import React from 'react';
import { useFirestore } from '../hooks';
import { useRouting } from 'expo-next-react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    const [data] = useState(route?.params?.data);
    const [reading] = useState(route?.params?.data?.reading);
    const [title, setTitle] = useState<string>(route?.params?.data?.title);
    const [notes, setNotes] = useState<string>(route?.params?.data?.notes);

    const { updateReadingTitle, updateReadingNotes } = useFirestore();

    const { navigate } = useRouting();

    const updateTitle = () => {
        if (title) {
            updateReadingTitle(reading.id, title);
        }
    };

    const updateNotes = () => {
        if (notes) {
            updateReadingNotes(reading.id, notes);
        }
    };

    const openReadingDetail = spreadIndex => {
        navigate({
            routeName: ROUTES.screens.READING_DEATIL.name,
            params: {
                data: data,
                startFrom: spreadIndex
            }
        });
    };

    return (
        <View style={styles.container}>
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
            <Background>
                <Deal reading={reading} dealt={true} onPress={openReadingDetail} />
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

export default ReadingScreen;
