import CustomNotification from "./CustomNotification";
import Navbar from "./Navbar";

const AppStructure = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <CustomNotification />
        </>
    );
};

export default AppStructure;
