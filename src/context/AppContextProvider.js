import { createContext, useContext, useEffect, useReducer } from "react";
import { actionType, initialState, reducer } from "./appReducer";

export const AppContext = createContext(initialState);

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.showNotification) {
            setTimeout(() => {
                dispatch({ type: actionType.CLOSE_NOTIFICATION });
            }, 1500);
        }
    }, [state.showNotification]);

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
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
