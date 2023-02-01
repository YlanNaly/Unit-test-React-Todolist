import React, {Key, useState} from "react";
import TasksButtonToDo from "./TaskButtonTodo";

export default function Todo(props: { tasks: any[]; toggleTask: any; deleteTask: any; }){

    return(
        <>
            {props.tasks.map((t, index) => (
                <TasksButtonToDo
                    task={t}
                    key={t.id}
                    toggleTask={props.toggleTask}
                    deleteTask={() => props.deleteTask(index)} addTasks={undefined} deleteTask3={undefined}        />
            ))}

        </>
    )
}