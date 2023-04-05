import CustomNotification from "./CustomNotification";

const AppStructure = ({ children }) => {
    return (
        <>
            {children}
            <CustomNotification />
        </>
    );
};

export default AppStructure;
