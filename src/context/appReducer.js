export const initialState = {
    isAuthenticated: false,
    showNotification: false,
    notificationMessage: "",
};

export const actionType = {
    SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
    CLOSE_NOTIFICATION: "CLOSE_NOTIFICATION",
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

        default:
            return state;
    }
};
