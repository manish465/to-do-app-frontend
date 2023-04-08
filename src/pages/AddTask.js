import { useState } from "react";

const AddTask = () => {
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

    const handleSubmit = () => {};

    return (
        <section className="page form">
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
                <div className="button-group">
                    <button onClick={() => setTags([...tags, ""])}>
                        Add a tag
                    </button>
                </div>
                <div className="button-group">
                    <button className="primary">Submit</button>
                </div>
            </article>
        </section>
    );
};

export default AddTask;
