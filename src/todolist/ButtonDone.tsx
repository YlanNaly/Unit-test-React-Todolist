import React from "react";
const TasksButtonDone = (props : {task : any, toggleTask:any, deleteTask: any}) => {

    return (
        <div>
            <li className="list-group-item" data-testid="listing">
                <input
                    type="checkbox"
                    data-testid="checkbox"
                    checked={true}
                    onChange={() => props.toggleTask(props.task.id)}
                />
                {props.task.text}
                <span
                    className="forme"
                    onClick={() => props.deleteTask(props.task.id)}
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