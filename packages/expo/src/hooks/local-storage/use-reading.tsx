import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReadingDoc } from '@tarot-viii/ui/types';

type UseReading = {
    save: (reading: ReadingDoc) => void;
    get: (id: string) => Promise<ReadingDoc>;
};

const useReading = (): UseReading => {
    const saveReading = async (reading: ReadingDoc) => {
        const { id } = reading;
        try {
            const jsonValue = JSON.stringify(reading);
            await AsyncStorage.setItem(`@${id}`, jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getReading = async (id: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(`@${id}`);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    return {
        save: saveReading,
        get: getReading
    };
};

export default useReading;
