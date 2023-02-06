import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import AddTask from "../todolist/Ajout";

it("render input add task" , () =>{
    const tree = render(<AddTask addTask={jest.fn} />);
    const input= tree.getByPlaceholderText("Ajouter une tâche");

    expect(input).toMatchSnapshot();
});

test("render function onchange on add task component" , ()=>{
    const value = "test";
    const tree = render(<AddTask addTask={jest.fn()} />);
    const input= tree.getByPlaceholderText("Ajouter une tâche") as  HTMLInputElement;
    fireEvent.change(input, {target: {value :value}})
    expect(input.value).toEqual("test");
})