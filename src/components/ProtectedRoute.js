import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const ProtectedRoute = ({ children }) => {
    const { state } = useAppContext();

    return state.isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
