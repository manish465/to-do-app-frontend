import { useEffect } from "react";
import { useAppContext } from "../context/AppContextProvider";
import TaskActionButton from "../components/TaskActionButton";
import TagComponent from "../components/TagComponent";

const Home = () => {
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.handleGetTask();
    }, []);

    return (
        <section className="home page">
            <TaskActionButton />
            <section className="tasks not-working">
                <h1>Not Working</h1>
                {state.taskList !== [] &&
                    state.taskList.map((taskItem, key) => (
                        <TagComponent key={key} taskItem={taskItem} />
                    ))}
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
