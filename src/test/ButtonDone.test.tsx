import React from "react";
import {fireEvent, render} from "@testing-library/react";
import TasksButtonDone from "../todolist/ButtonDone";
import AddTask from "../todolist/Ajout";


it("render input done in snapshot" , ()=>{
    const task = [{ id: 1, text: "Manger!", done: true }]
    const tree = render(<TasksButtonDone deleteTask={jest.fn().mock} task={task} toggleTask={null}/>) ;

    const input = tree.getByTestId("listing");

    expect(input).toMatchSnapshot();
})

it("render onchange method ok" , ()=>{
    const value = {id:1 , text:"mada"};
    const tree = render(<TasksButtonDone task={value}/>);
    const input= tree.getByTestId("listing") as  HTMLInputElement;
    (fireEvent.change(input, {target: {value : value}}));
    expect(input.textContent).toEqual(value.text.concat("×"));
})
//TODO
/*
it("render onchange method ko" , ()=>{
    const value = {id:1 , text:"mada"};
    const tree = render(<TasksButtonDone task={value}/>);
    const input= tree.getByTestId("listing") as  HTMLInputElement;
    const checkbox = tree.getByTestId("checkbox") as HTMLInputElement;
    !checkbox.checked;
    (fireEvent.change(input, {target: {value : value}}));
    expect(input.textContent).toEqual("");
})
*/
//TODO
/*
it("render onClick method " , ()=>{
    const value = {id:1 , text:"mada"};
    const tree = render(<TasksButtonDone task={value} deleteTask={value.id}/>);
    const input= tree.getByTestId("listing") as  HTMLInputElement;
    // @ts-ignore
    fireEvent.change(input.getElementsByClassName("forme").item(0) , "");

    expect(input.textContent).toEqual("");
})
*/
