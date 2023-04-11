import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContextProvider";
import TaskActionButton from "../components/TaskActionButton";
import TagComponent from "../components/TagComponent";
import EditTaskModal from "../components/EditTaskModal";

const taskSectionList = [
    {
        headingText: "Not Working",
        classList: "tasks not-working",
        status: "not working",
    },
    {
        headingText: "Working",
        classList: "tasks working",
        status: "working",
    },
    {
        headingText: "Done",
        classList: "tasks done",
        status: "done",
    },
];

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState({});
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.handleGetTask();
    }, []);

    return (
        <section className="home page">
            {showModal && (
                <EditTaskModal
                    currentTask={currentTask}
                    setShowModal={setShowModal}
                />
            )}
            <TaskActionButton />
            {taskSectionList.map((taskSection, key) => (
                <section className={taskSection.classList}>
                    <h1>{taskSection.headingText}</h1>
                    {state.taskList.length === 0 ? (
                        <span className="empty">Nothing here</span>
                    ) : (
                        state.taskList.map(
                            (taskItem, key) =>
                                taskItem.taskStatus === taskSection.status && (
                                    <TagComponent
                                        key={key}
                                        taskItem={taskItem}
                                        setShowModal={setShowModal}
                                        setCurrentTask={setCurrentTask}
                                    />
                                )
                        )
                    )}
                </section>
            ))}
        </section>
    );
};

export default Home;
