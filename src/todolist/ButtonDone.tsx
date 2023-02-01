import React from "react";
const TasksButtonDone = (props :any) => {

    const { task, toggleTask, deleteTask } = props;

    return (
        <div>
            <li className="list-group-item">
                <input
                    type="checkbox"
                    checked={true}
                    onChange={() => toggleTask(task.id)}
                />
                {task.text}

                <span
                    className="forme"
                    onClick={() => deleteTask(task.id)}
                    role="button"
                    style={{ padding: "5px", marginLeft: "20px" , fontSize:"20px" }}
                >
            &times;
          </span>
            </li>
        </div>

    );
};

export default TasksButtonDone;