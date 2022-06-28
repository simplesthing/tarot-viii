import React, { useState } from 'react';

import { ROUTES } from './config';
import { SpeedDial } from '@rneui/themed';
import { useRouter } from 'solito/router';

const QuickNav = () => {
    const [open, setOpen] = useState(false);

    const { push } = useRouter();

    const openProfile = () => {
        push({ pathname: ROUTES.screens.ACCOUNT.path });
    };

    const goToHistory = () => {
        push({ pathname: ROUTES.screens.HISTORY.path });
    };

    const startNewReading = () => {
        push({ pathname: ROUTES.screens.NEW_READING.path });
    };

    return (
        <SpeedDial
            color={open ? 'white' : 'black'}
            isOpen={open}
            icon={{ name: 'navigation', color: 'white' }}
            openIcon={{ name: 'close', color: 'black' }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
                color="white"
                icon={{ type: 'material-community', name: 'account', color: '#000' }}
                title="Profile"
                onPress={openProfile}
            />

            <SpeedDial.Action
                color="white"
                icon={{ type: 'material-community', name: 'history', color: '#000' }}
                title="History"
                onPress={goToHistory}
            />
            <SpeedDial.Action
                color="white"
                icon={{
                    type: 'material-community',
                    name: 'cards-outline',
                    color: '#000'
                }}
                title="New Reading"
                onPress={startNewReading}
            />
        </SpeedDial>
    );
};

export default QuickNav;
