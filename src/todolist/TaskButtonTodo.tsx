import Tbutton from "./InterfaceButton";
import { FC } from "react";
import React from "react";
const TasksButtonToDo :FC<Tbutton> = ( { task, deleteTask }) => {

    return (
        <div>
            <li className="list-group-item">
            {task.text}
            <span
    className="forme"
    onClick={() => deleteTask(task.id)}
    role="button"
    style={{ padding: "5px", marginLeft: "20px" , fontSize:"20px" }}
>
    <input
        type="checkbox"
        checked={true}
    />
        </span>
        </li>
        </div>

);
};

export default TasksButtonToDo;