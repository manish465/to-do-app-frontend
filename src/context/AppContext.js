import { createContext, useState } from "react";

export const appContext = createContext();

const AppContext = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <appContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </appContext.Provider>
    );
};

export default AppContext;
