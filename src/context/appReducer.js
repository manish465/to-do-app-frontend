export const initialState = {
    isAuthenticated: false,
    showNotification: false,
    notificationMessage: "",
    token: "",
    userId: "",
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    taskList: [],
};

export const actionType = {
    SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
    CLOSE_NOTIFICATION: "CLOSE_NOTIFICATION",
    SIGNUP: "SIGNUP",
    SIGNIN: "SIGNIN",
    STOREUSERINFO: "STOREUSERINFO",
    USERLOGOUT: "USERLOGOUT",
    UPDATETASKLIST: "UPDATETASKLIST",
    EMPTYTASKLIST: "EMPTYTASKLIST",
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

        case actionType.STOREUSERINFO:
            return {
                ...state,
                userFirstName: payload.firstName,
                userLastName: payload.lastName,
                userEmail: payload.email,
            };

        case actionType.USERLOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: "",
                userId: "",
                userFirstName: "",
                userLastName: "",
                userEmail: "",
            };

        case actionType.UPDATETASKLIST:
            return {
                ...state,
                taskList: payload.tasks,
            };

        case actionType.EMPTYTASKLIST:
            return {
                ...state,
                taskList: [],
            };

        default:
            return state;
    }
};
