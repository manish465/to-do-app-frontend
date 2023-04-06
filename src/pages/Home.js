import { useEffect } from "react";
import { useAppContext } from "../context/AppContextProvider";

const Home = () => {
    const { actions } = useAppContext();

    useEffect(() => {
        actions.handleGetUserInfo();
    }, []);

    return <div>Home</div>;
};

export default Home;
