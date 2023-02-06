import { render } from "@testing-library/react";
import React from "react";
import Todo from "../todolist/Todo";

test("Renders all task list", () => {
    const item = [
        { id: 1, text: "Manger!", done: true },
    ] ;
    const tree = render(<Todo  deleteTask={null} tasks={item} toggleTask={null}/>);
    const table = tree.getAllByTestId("list");

    //parce que y a un donnée statique
    expect(table.length).toEqual(item.length+1)
    expect(table.map(e=>e.textContent)).toEqual(item.map((e)=> e.text).concat(item.map((e)=> e.text)));
});