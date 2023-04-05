import { useContext } from "react";
import CustomNotification from "./CustomNotification";
import { appContext } from "../context/AppContext";

const AppStructure = ({ children }) => {
    const { showNotification, notificationMessage } = useContext(appContext);

    return (
        <>
            {children}
            {showNotification && (
                <CustomNotification>{notificationMessage}</CustomNotification>
            )}
        </>
    );
};

export default AppStructure;
