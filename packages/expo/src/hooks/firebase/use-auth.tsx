import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import useFirestore from './use-firestore';
import uuid from 'react-native-uuid';
import { useEffect, useState } from 'react';


export type LoginWithEmailAndPasswordProps = {
    email: string;
    password: string;
};

type ErrorProps = {
    type?: string;
    message: string;
};

type UseAuth = {
    createLoginWithEmailAndPassword: ({
        email,
        password
    }: LoginWithEmailAndPasswordProps) => void;
    error: ErrorProps;
    forgotPassword: (email: string) => Promise<void>;
    initializing: boolean;
    loginAnonymously: () => void;
    loginWithEmailAndPassword: ({
        email,
        password
    }: LoginWithEmailAndPasswordProps) => void;
    logout: () => Promise<void>;
    user: FirebaseAuthTypes.User | undefined;
};

const useAuth = (): UseAuth => {
    const { generateUserDocument } = useFirestore();

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();
    const [error, setError] = useState<ErrorProps>({
        message: ''
    });

    function onAuthStateChanged(user) {
        setUser(user);
        generateUserDocument(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const createLoginWithEmailAndPassword = ({
        email,
        password
    }: LoginWithEmailAndPasswordProps) => {
        setError({ message: '' });
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                setError({
                    message: 'oops, something went wrong, check your entry and try again'
                });
            });
    };

    const loginWithEmailAndPassword = ({
        email,
        password
    }: LoginWithEmailAndPasswordProps) => {
        setError({ message: '' });
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                setError({
                    message: 'oops, something went wrong, check your entry and try again'
                });
            });
    };

    const loginAnonymously = () => {
        setError({ message: '' });

        const userId = uuid.v4();
        const regex = /-/g;
        const displayName = userId.toString().replace(regex, '').substring(0, 8);
        const email = `${displayName}@anon.com`;
        const password = 'anonymous';
        console.log(email);
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log('User account created & signed in!', user);
            })
            .catch(error => {
                setError({
                    message: 'oops, something went wrong, check your entry and try again'
                });
            });
    };

    const logout = () => {
        return auth().signOut();
    };

    const forgotPassword = (emailAddress: string) => {
        return auth().sendPasswordResetEmail(emailAddress);
    };
    return {
        createLoginWithEmailAndPassword,
        error,
        forgotPassword,
        initializing,
        loginAnonymously,
        loginWithEmailAndPassword,
        logout,
        user
    };
};

export default useAuth;
