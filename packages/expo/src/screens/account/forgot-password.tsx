import { ForgotPassword } from '@tarot-viii/ui';
import React from 'react';
// import { useAuth } from '../../hooks';

const ForgotPasswordScreen = () => {
    // const { error, forgotPassword } = useAuth();
    return <ForgotPassword resetPassword={() => ({})} error={{ message: '' }} />;
};

export default ForgotPasswordScreen;
