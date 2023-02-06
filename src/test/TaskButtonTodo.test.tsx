import React from "react";
import TasksButtonToDo from "../todolist/TaskButtonTodo";
import {render} from "@testing-library/react";


it("render input in snapshot" , ()=>{
    const task = [{ id: 1, text: "Manger!", done: true }]
    const tree = render(<TasksButtonToDo addTasks={null} deleteTask={jest.fn().mock} deleteTask3={null} task={task} toggleTask={null}/>) ;

    const input = tree.getByTestId("deleteTask");

    expect(input).toMatchSnapshot();
})