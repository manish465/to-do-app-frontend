import { useAppContext } from "../context/AppContextProvider";

const CustomNotification = () => {
    const { state } = useAppContext();

    return (
        <aside
            className={
                state.showNotification ? "notification show" : "notification"
            }
        >
            {state.notificationMessage}
        </aside>
    );
};

export default CustomNotification;
