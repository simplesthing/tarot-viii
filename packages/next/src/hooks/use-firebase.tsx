import firebaseConfig from '../../firebase.config';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';

const useFirebase = () => {
    const [app] = useState(initializeApp(firebaseConfig));
    const [analytics] = useState(getAnalytics(app));

    return {
        app,
        analytics
    };
};

export default useFirebase;
