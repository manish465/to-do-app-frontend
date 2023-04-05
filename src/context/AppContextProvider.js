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

    const actions = {
        showNotification: (message) => {
            dispatch({
                type: actionType.SHOW_NOTIFICATION,
                payload: { message },
            });
        },
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
