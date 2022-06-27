import { ForgotPassword } from '@tarot-viii/ui';
import { ROUTES } from '../../navigation/config';
import React from 'react';
import { useAuth } from '../../hooks';
import { useRouter } from 'solito/router';

const ForgotPasswordScreen = () => {
    const { error, forgotPassword } = useAuth();
    const { push } = useRouter();

    // const register = () => {
    //     push({ pathname: ROUTES.screens.SIGNUP.path });
    // };

    return <ForgotPassword resetPassword={forgotPassword} error={error} />;
};

export default ForgotPasswordScreen;
