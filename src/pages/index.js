import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import Signup from "./Signup";
import UpdateProfile from "./UpdateProfile";
import AddTask from "./AddTask";

export const pageList = [
    { path: "/", element: <Home />, protected: true },
    { path: "/add-task", element: <AddTask />, protected: true },
    { path: "/profile", element: <Profile />, protected: true },
    { path: "/update-profile", element: <UpdateProfile />, protected: true },
    { path: "/login", element: <Login />, protected: false },
    { path: "/sign-up", element: <Signup />, protected: false },
    { path: "*", element: <PageNotFound />, protected: false },
];
