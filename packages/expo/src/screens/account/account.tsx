import { Account } from '@tarot-viii/app';
import { Background } from '@tarot-viii/ui';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import { useAuth } from '../../hooks/';
import { useRouter } from 'solito/router';

const AccountScreen = () => {
    const { forgotPassword, user, logout } = useAuth();
    const { push } = useRouter();

    const resetPassword = () => {
        if (user?.email) {
            forgotPassword(user?.email)
                .catch(e => crashlytics().recordError(e))
                .finally(() => {
                    push({
                        pathname: ROUTES.screens.PASSWORD_RESET.path,
                        query: {
                            emailAddress: user?.email,
                            message: 'A password reset link has been sent.'
                        }
                    });
                });
        }
    };

    return (
        <Background>
            <Account
                username={user?.email || ''}
                resetPassword={resetPassword}
                logout={logout}
            />
        </Background>
    );
};

export default AccountScreen;
