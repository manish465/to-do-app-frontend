import { createContext, useContext, useEffect, useReducer } from "react";
import { actionType, initialState, reducer } from "./appReducer";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(initialState);

const url = "https://to-do-app-node-server.onrender.com";

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    useEffect(() => {
        if (state.showNotification) {
            setTimeout(() => {
                dispatch({ type: actionType.CLOSE_NOTIFICATION });
            }, 2000);
        }
    }, [state.showNotification]);

    const showNotification = (message) => {
        dispatch({
            type: actionType.SHOW_NOTIFICATION,
            payload: { message },
        });
    };

    const handleSignUp = (data) => {
        fetch(url + "/api/v1/user/add-user", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    dispatch({
                        type: actionType.SIGNUP,
                        payload: { message: data.message },
                    });
                    navigate("/login");
                } else showNotification(data.error);
            })
            .catch((error) => showNotification(error.message));
    };

    const handleSignIn = (data) => {
        fetch(url + "/api/v1/user/sign-in", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    dispatch({
                        type: actionType.SIGNIN,
                        payload: {
                            token: data.token,
                            id: data.id,
                            message: data.message,
                        },
                    });
                    navigate("/");
                } else showNotification(data.error);
            })
            .catch((error) => showNotification(error.message));
    };

    const handleGetUserInfo = () => {
        fetch(url + "/api/v1/user/" + state.userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.user) {
                    dispatch({
                        type: actionType.STOREUSERINFO,
                        payload: {
                            firstName: data.user.firstName,
                            lastName: data.user.lastName,
                            email: data.user.email,
                        },
                    });
                } else showNotification(data.error);
            })
            .catch((error) => showNotification(error.message));
    };

    const handleChangeUserInfo = (data) => {
        fetch(url + "/api/v1/user/" + state.userId, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.user) {
                    dispatch({
                        type: actionType.STOREUSERINFO,
                        payload: {
                            firstName: data.user.firstName,
                            lastName: data.user.lastName,
                            email: data.user.email,
                        },
                    });
                    showNotification(data.message);
                    navigate("/profile");
                } else showNotification(data.error);
            })
            .catch((error) => showNotification(error.message));
    };

    const handleUserDelete = () => {
        fetch(url + "/api/v1/user/" + state.userId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    navigate("/login");
                    dispatch({ type: actionType.USERLOGOUT });
                    showNotification(data.message);
                } else showNotification(data.error);
            })
            .catch((error) => showNotification(error.message));
    };

    const handleUserLogout = () => {
        navigate("/login");
        dispatch({ type: actionType.USERLOGOUT });
        showNotification("User Logged Out");
    };

    const actions = {
        showNotification,
        handleSignUp,
        handleSignIn,
        handleGetUserInfo,
        handleChangeUserInfo,
        handleUserDelete,
        handleUserLogout,
    };

    return (
        <AppContext.Provider value={{ state, actions }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined)
        throw new Error("useAppContext must be used within AppContextProvider");

    return context;
};
