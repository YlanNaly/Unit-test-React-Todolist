import Tbutton from "./InterfaceButton";
import { FC } from "react";
import React from "react";
const TasksButtonToDo :FC<Tbutton> = ( { task, deleteTask }) => {

    return (
        <div>
            <li className="list-group-item"
                data-testid="list">
                {task.text}
                <span
        className="forme"
        onClick={() => deleteTask(task.id)}
        role="button"
        data-testid="deleteTask"
        style={{ padding: "5px", marginLeft: "20px" , fontSize:"20px" }}>
        <input
            type="checkbox"
            data-testid="x"
            checked={false}
        />
            </span>
            </li>
        </div>

);
};

export default TasksButtonToDo;