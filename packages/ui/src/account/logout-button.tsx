import React from 'react';
import { Button } from 'react-native-elements';

type LoginButtonProps = {
    onPress: () => void;
    type?: 'solid' | 'clear' | 'outline' | undefined;
};

const LogOutButton = ({ onPress, type = 'clear' }: LoginButtonProps) => {
    const onLogOut = () => {
        onPress();
    };

    return <Button title="Logout" onPress={onLogOut} type={type} />;
};

export default LogOutButton;
