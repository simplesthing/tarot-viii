import Start from '@tarot-vii/app/reading/start';
import useFirebase from '../hooks/use-firebase';
import { logEvent } from 'firebase/analytics';

export default function Page() {
    const fb = useFirebase();

    const onStart = () => {
        logEvent(fb.analytics, 'test event from next app');
    };

    return <Start onStart={onStart} />;
}
