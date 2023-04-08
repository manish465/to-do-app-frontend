import { Link } from "react-router-dom";

const TaskActionButton = () => {
    return (
        <div className="task-action">
            <Link to="/add-task">
                <button className="add-button">
                    <span></span>
                    <span></span>
                </button>
            </Link>
        </div>
    );
};

export default TaskActionButton;
