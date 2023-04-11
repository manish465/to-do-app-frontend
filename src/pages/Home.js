import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContextProvider";
import TaskActionButton from "../components/TaskActionButton";
import TagComponent from "../components/TagComponent";
import EditTaskModal from "../components/EditTaskModal";

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
            <section className="tasks not-working">
                <h1>Not Working</h1>
                {state.taskList.length === 0 ? (
                    <span className="empty">Nothing here</span>
                ) : (
                    state.taskList.map((taskItem, key) => (
                        <TagComponent
                            key={key}
                            taskItem={taskItem}
                            setShowModal={setShowModal}
                            setCurrentTask={setCurrentTask}
                        />
                    ))
                )}
            </section>
            <section className="tasks working">
                <h1>Working</h1>
            </section>
            <section className="tasks done">
                <h1>Done</h1>
            </section>
        </section>
    );
};

export default Home;
