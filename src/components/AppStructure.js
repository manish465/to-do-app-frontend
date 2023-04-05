import CustomNotification from "./CustomNotification";
import { useAppContext } from "../context/AppContextProvider";

const AppStructure = ({ children }) => {
    const { state } = useAppContext();

    return (
        <>
            {children}
            {state.showNotification && (
                <CustomNotification>
                    {state.notificationMessage}
                </CustomNotification>
            )}
        </>
    );
};

export default AppStructure;
