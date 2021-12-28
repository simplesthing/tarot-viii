import { Account } from '@tarot-viii/app';
import { Background } from '@tarot-viii/ui';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useAuth } from '../../hooks/';
import { useRouting } from 'expo-next-react-navigation';

const AccountScreen = () => {
    const { forgotPassword, user, logout } = useAuth();
    const { navigate } = useRouting();

    const resetPassword = () => {
        if (user?.email) {
            forgotPassword(user.email).then(() => {
                navigate({
                    routeName: ROUTES.screens.PASSWORD_RESET.name,
                    params: { emailAddress: user.email }
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
