import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import Signup from "./Signup";
import UpdateProfile from "./UpdateProfile";

export const pageList = [
    { path: "/", element: <Home />, protected: true },
    { path: "/profile", element: <Profile />, protected: true },
    { path: "/update-profile", element: <UpdateProfile />, protected: true },
    { path: "/login", element: <Login />, protected: false },
    { path: "/sign-up", element: <Signup />, protected: false },
    { path: "*", element: <PageNotFound />, protected: false },
];
