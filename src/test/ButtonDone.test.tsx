import React from "react";
import {fireEvent, render} from "@testing-library/react";
import TasksButtonDone from "../todolist/ButtonDone";
import TasksButtonToDo from "../todolist/TaskButtonTodo";


it("render input done in snapshot" , ()=>{
    const task = [{ id: 1, text: "Manger!", done: true }]
    const tree = render(<TasksButtonDone deleteTask={jest.fn().mock} task={task} toggleTask={null}/>) ;

    const input = tree.getByTestId("listing");

    expect(input).toMatchSnapshot();
})

it("render onchange method" , ()=>{
    const value = {id:1 , text:"mada"};
    const tree = render(<TasksButtonDone task={value}/>);
    const input= tree.getByTestId("listing") as  HTMLInputElement;
    (fireEvent.change(input, {target: {value : value}}));
    expect(input.textContent).toEqual(value.text.concat("×"));
})
it("render onClick 'x' to delete task" , ()=>{
    const task = [{ id: 1, text: "Manger!", done: true }]
    const tree = render(<TasksButtonToDo addTasks={null} deleteTask3={null} task={task} toggleTask={null} deleteTask={()=>jest.fn()}/>) ;

    const x = tree.getByTestId("x");
    const list = tree.getByTestId("list") as HTMLSpanElement;
    fireEvent.click(x);
    expect(list.textContent).toBe("")
})
