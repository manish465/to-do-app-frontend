import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const Navbar = () => {
    const { state, actions } = useAppContext();

    return (
        <header className="navbar">
            <Link to="/">
                <h2 className="hero">My Goal List</h2>
            </Link>
            <ul className="links">
                {!state.isAuthenticated && (
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                )}
                {!state.isAuthenticated && (
                    <Link to="/sign-up">
                        <li>Sign up</li>
                    </Link>
                )}
                {state.isAuthenticated && (
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                )}
                {state.isAuthenticated && (
                    <Link to="/profile">
                        <li>Profile</li>
                    </Link>
                )}
                {state.isAuthenticated && (
                    <li onClick={actions.handleUserLogout}>Logout</li>
                )}
            </ul>
        </header>
    );
};

export default Navbar;
