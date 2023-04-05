export const initialState = {
    isAuthenticated: false,
    showNotification: false,
    notificationMessage: "",
    token: "",
    userId: "",
};

export const actionType = {
    SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
    CLOSE_NOTIFICATION: "CLOSE_NOTIFICATION",
    SIGNUP: "SIGNUP",
    SIGNIN: "SIGNIN",
};

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionType.SHOW_NOTIFICATION:
            return {
                ...state,
                showNotification: true,
                notificationMessage: payload.message,
            };

        case actionType.CLOSE_NOTIFICATION:
            return {
                ...state,
                showNotification: false,
            };

        case actionType.SIGNUP:
            return {
                ...state,
                showNotification: true,
                notificationMessage: payload.message,
            };

        case actionType.SIGNIN:
            return {
                ...state,
                showNotification: true,
                notificationMessage: payload.message,
                token: payload.token,
                userId: payload.id,
                isAuthenticated: true,
            };

        default:
            return state;
    }
};
