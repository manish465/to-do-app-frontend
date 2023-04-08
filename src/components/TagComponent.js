const TagComponent = ({ taskItem }) => {
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
                <button className="orenge">EDIT</button>
                <button className="red">REMOVE</button>
            </div>
        </article>
    );
};

export default TagComponent;
