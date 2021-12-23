import { Background, ReadingCarousel } from '@tarot-viii/ui';
import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const ReadingDetailScreen = ({ navigation, route }) => {
    const data = route?.params?.data;
    const startFrom = route?.params?.startFrom;

    const [title, setTitle] = useState(data.title);
    const [notes, setNotes] = useState(data.notes);

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.carousel}>
                    <ReadingCarousel data={data} startFromIndex={startFrom} />
                </View>
            </View>
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    carousel: {
        width,
        height: height / 2,
        backgroundColor: 'orange'
    }
});
export default ReadingDetailScreen;
