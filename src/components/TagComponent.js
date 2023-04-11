import { useAppContext } from "../context/AppContextProvider";

const TagComponent = ({ taskItem, setShowModal, setCurrentTask }) => {
    const { actions } = useAppContext();

    return (
        <article className="task">
            <h1 className="task-title">{taskItem.taskName}</h1>
            <div className="task-tags">
                {taskItem.tags.map((tag, key) => (
                    <div key={key} className="task-tag">
                        {"#" + tag}
                    </div>
                ))}
            </div>
            <div className="button-group">
                <button
                    className="orenge"
                    onClick={() => {
                        setShowModal(true);
                        setCurrentTask(taskItem);
                    }}
                >
                    EDIT
                </button>
                <button
                    className="red"
                    onClick={() => actions.handleTaskDelete(taskItem._id)}
                >
                    REMOVE
                </button>
            </div>
        </article>
    );
};

export default TagComponent;
