import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const ProtectedRoute = ({ children }) => {
    const { state } = useContext(AppContext);

    return state.isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
