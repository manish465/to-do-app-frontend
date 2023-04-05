import CustomNotification from "./CustomNotification";

const AppStructure = ({ children }) => {
    return (
        <>
            {children}
            <CustomNotification>Notification</CustomNotification>
        </>
    );
};

export default AppStructure;
