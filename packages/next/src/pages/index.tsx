import dynamic from 'next/dynamic';
import { logEvent } from 'firebase/analytics';
import useFirebase from '../hooks/use-firebase';

const Start = dynamic(() => import('@tarot-viii/app/reading/start'), {
    ssr: false
});

export default function Page() {
    const fb = useFirebase();
    const { navigate } = useRouting();

    const onStart = () => {
        logEvent(fb.analytics, 'test event from next app');
        navigate({ routeName: 'reading' });
    };

    return <Start onStart={onStart} />;
}
