import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { appContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(appContext);

    return isAuthenticated ? children : <Navigate to="/sign-up" replace />;
};

export default ProtectedRoute;
