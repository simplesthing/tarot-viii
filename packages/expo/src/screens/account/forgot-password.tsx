import { ForgotPassword } from '@tarot-viii/ui';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useAuth } from '../../hooks';
import { useRouter } from 'solito/router';

const ForgotPasswordScreen = () => {
    const { error, forgotPassword } = useAuth();
    const { push } = useRouter();

    const resetEmail = ({ email }) => {
        forgotPassword(email).then(res => {
            push({
                pathname: ROUTES.screens.PASSWORD_RESET.path,
                query: { emailAddress: email }
            });
        });
    };

    return <ForgotPassword resetPassword={resetEmail} error={error} />;
};

export default ForgotPasswordScreen;
