import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const AddTask = () => {
    const { actions } = useAppContext();

    const [taskName, setTaskName] = useState("");
    const [tags, setTags] = useState([]);

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
            actions.handleAddTask({ taskName, tags });
        } else actions.showNotification("Enter all the fields");
    };

    return (
        <section className="page form add-task">
            <article>
                <h1>Add Task</h1>
                <input
                    type="text"
                    name="task-name"
                    id="task-name"
                    placeholder="Enter Task Name"
                    value={taskName}
                    onChange={(event) => handleChange(event, setTaskName)}
                />
                {tags.map((tag, key) => (
                    <div key={key} className="tag-input">
                        <input
                            type="text"
                            name="task-name"
                            id="task-name"
                            placeholder="Enter Tag Name"
                            value={tag}
                            onChange={(event) => handleTagChange(event, key)}
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
    );
};

export default AddTask;
