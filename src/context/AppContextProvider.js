import { createContext, useContext, useEffect, useReducer } from "react";
import { actionType, initialState, reducer } from "./appReducer";

export const AppContext = createContext(initialState);

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
        fetch(
            "https://to-do-app-node-server.onrender.com/api/v1/user/add-user",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => actions.showNotification(data.message))
            .catch((error) => actions.showNotification(error.message));
    };

    const handleSignIn = (data) => {
        fetch(
            "https://to-do-app-node-server.onrender.com/api/v1/user/sign-in",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => actions.showNotification(data.message))
            .catch((error) => actions.showNotification(error.message));
    };

    const actions = {
        showNotification,
        handleSignUp,
        handleSignIn,
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