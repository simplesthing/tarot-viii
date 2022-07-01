import React, { useState } from 'react';

import { ROUTES } from './config';
import { SpeedDial } from '@rneui/themed';
import { useRouter } from 'solito/router';

type QuickNavProps = {
    navigationEvent?: (navOpen: boolean) => void;
};

const QuickNav = ({ navigationEvent }: QuickNavProps) => {
    const [open, setOpen] = useState(false);

    const { push } = useRouter();

    const onOpen = () => {
        if (navigationEvent) {
            navigationEvent(true);
        }
        setOpen(true);
    };

    const onClose = () => {
        if (navigationEvent) {
            navigationEvent(false);
        }
        setOpen(false);
    };

    const openProfile = () => {
        push({ pathname: ROUTES.screens.ACCOUNT.path });
        setOpen(false);
    };

    const goToHistory = () => {
        push({ pathname: ROUTES.screens.HISTORY.path });
        setOpen(false);
    };

    const startNewReading = () => {
        push({ pathname: ROUTES.screens.NEW_READING.path });
        setOpen(false);
    };

    return (
        <SpeedDial
            color={open ? 'white' : 'black'}
            isOpen={open}
            icon={{ name: 'navigation', color: 'white' }}
            openIcon={{ name: 'close', color: 'black' }}
            onOpen={onOpen}
            onClose={onClose}>
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
