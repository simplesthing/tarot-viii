import { Avatar } from '@rneui/themed';
import React from 'react';

type AvatarButtonProps = {
    onPress?: any;
    size?: number;
};

const DEFAULT_AVATAR_IMAGE_URL = 'https://loremflickr.com/*/*/tarot';

const AvatarButton = ({ onPress = () => ({}), size = 100 }: AvatarButtonProps) => {
    const source = DEFAULT_AVATAR_IMAGE_URL.replace(/\*/g, size.toString());
    return (
        <Avatar
            rounded
            imageProps={{
                resizeMode: 'cover',
                containerStyle: {
                    padding: 10
                }
            }}
            size={size}
            title="avatar image"
            onPress={onPress}
            source={{ uri: source }}
        />
    );
};

export default AvatarButton;
