import { createContext, useEffect, useState } from "react";

export const appContext = createContext();

const AppContext = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    useEffect(() => {
        if (showNotification) {
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage("");
            }, 5000);
        }
    }, [showNotification]);

    return (
        <appContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                showNotification,
                setShowNotification,
                notificationMessage,
                setNotificationMessage,
            }}
        >
            {children}
        </appContext.Provider>
    );
};

export default AppContext;
