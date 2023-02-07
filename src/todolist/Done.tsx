import React, {Key} from "react";
import TasksButtonDone from "./ButtonDone";

const DONE = (props: { tasks: any[]; toggleTask: any; deleteTask: any; }) => {

    return (
        <li data-testid="list">
            {props.tasks.map((t: { id: Key | undefined; }, index) => (
                <TasksButtonDone
                    task={t}
                    key={t.id}
                    toggleTask={props.toggleTask}
                    deleteTask={() => props.deleteTask(index)}
                />
            ))}

        </li>
    );
};

export default DONE;
