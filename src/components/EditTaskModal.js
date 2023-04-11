import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const EditTaskModal = ({ currentTask, setShowModal }) => {
    const { actions } = useAppContext();

    const [taskName, setTaskName] = useState(currentTask.taskName);
    const [tags, setTags] = useState(currentTask.tags);
    const [status, setStatus] = useState(currentTask.taskStatus);

    const handleChange = (event, changeFunction) => {
        changeFunction(event.target.value);
    };

    const handleTagChange = (event, index) => {
        const newTags = [...tags];
        newTags[index] = event.target.value;
        setTags(newTags);
    };

    const handleTagRemove = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const handleSubmit = () => {
        if (!tags.includes("") && taskName !== "") {
            actions.handleAddUpdate(currentTask._id, {
                taskName,
                tags,
                taskStatus: status,
            });
            setShowModal(false);
        } else actions.showNotification("Enter all the fields");
    };

    return (
        <>
            <section
                className="backdrop"
                onClick={() => setShowModal(false)}
            ></section>
            <section className="modal form manage-task">
                <article>
                    <h1>Edit Task</h1>
                    <input
                        type="text"
                        name="task-name"
                        id="task-name"
                        placeholder="Enter Task Name"
                        value={taskName}
                        onChange={(event) => handleChange(event, setTaskName)}
                    />
                    <select
                        name="status"
                        id="status"
                        value={status}
                        onChange={(event) => handleChange(event, setStatus)}
                    >
                        <option value="not working">Not Working</option>
                        <option value="working">Working</option>
                        <option value="done">Done</option>
                    </select>
                    {tags.map((tag, key) => (
                        <div key={key} className="tag-input">
                            <input
                                type="text"
                                name="task-name"
                                id="task-name"
                                placeholder="Enter Tag Name"
                                value={tag}
                                onChange={(event) =>
                                    handleTagChange(event, key)
                                }
                            />
                            <button onClick={() => handleTagRemove(key)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        className="add-tag"
                        onClick={() => setTags([...tags, ""])}
                    >
                        Add a tag
                    </button>
                    <div className="button-group" onClick={handleSubmit}>
                        <button className="primary">Submit</button>
                    </div>
                </article>
            </section>
        </>
    );
};

export default EditTaskModal;
