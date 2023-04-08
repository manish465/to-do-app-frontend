import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const Home = () => {
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.handleGetTask();
    }, []);

    return (
        <section className="home page">
            <div className="task-action">
                <Link to="/add-task">
                    <button className="add-button">
                        <span></span>
                        <span></span>
                    </button>
                </Link>
            </div>
            <section className="tasks not-working">
                <h1>Not Working</h1>
                {state.taskList !== [] &&
                    state.taskList.map((taskItem, key) => (
                        <article key={key} className="task">
                            <h1 className="task-title">{taskItem.taskName}</h1>
                            <div className="task-tags">
                                {taskItem.tags.map((tag, tagKey) => (
                                    <div key={tagKey} className="task-tag">
                                        {"#" + tag}
                                    </div>
                                ))}
                            </div>
                            <div className="button-group">
                                <button className="orenge">EDIT</button>
                                <button className="red">REMOVE</button>
                            </div>
                        </article>
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
