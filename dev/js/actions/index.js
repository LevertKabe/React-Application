export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const signupUser = (user) => {
    return {
        type: 'USER_REGISTER',
        payload: user
    }
};

