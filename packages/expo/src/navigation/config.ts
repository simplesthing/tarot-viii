export const PATHS = {
    ACCOUNT: '/account',
    CARDS: '/cards',
    FORGOT_PASSWORD: '/forgot-password',
    HISTORY: '/history',
    HOME: '/',
    LOGIN: '/login',
    NEW_READING: '/new',
    PASSWORD_RESET: '/password-reset',
    READING: '/reading',
    SHUFFLE_DEAL: '/shuffle',
    SIGNUP: '/signup',
    SPREAD: '/spread'
};

export const ROUTES = {
    screens: {
        HOME: {
            path: PATHS['HOME'],
            name: 'HOME'
        },
        NEW_READING: {
            path: PATHS['NEW_READING'],
            name: 'NEW_READING'
        },
        SHUFFLE_DEAL: {
            path: PATHS['SHUFFLE_DEAL'],
            name: 'SHUFFLE_DEAL'
        },
        SPREAD: {
            path: PATHS['SPREAD'],
            name: 'SPREAD'
        },
        READING: {
            path: PATHS['READING'],
            name: 'READING'
        },
        CARDS: {
            path: PATHS['CARDS'],
            name: 'CARDS'
        },
        HISTORY: {
            path: PATHS['HISTORY'],
            name: 'HISTORY'
        },
        ACCOUNT: {
            path: PATHS['ACCOUNT'],
            name: 'ACCOUNT'
        },
        FORGOT_PASSWORD: {
            path: PATHS['FORGOT_PASSWORD'],
            name: 'FORGOT_PASSWORD'
        },
        PASSWORD_RESET: {
            path: PATHS['PASSWORD_RESET'],
            name: 'PASSWORD_RESET'
        },
        LOGIN: {
            path: PATHS['LOGIN'],
            name: 'LOGIN'
        },
        SIGNUP: {
            path: PATHS['SIGNUP'],
            name: 'SIGNUP'
        }
    }
};
