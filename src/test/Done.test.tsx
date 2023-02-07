import { render } from "@testing-library/react";
import React from "react";
import Done from "../todolist/Done";

test("Renders all task list for Done", () => {
    const item = [
        { id: 1, text: "Manger!", done: true },
    ] ;
    const tree = render(<Done  deleteTask={null} tasks={item} toggleTask={1}/>);
    const table = tree.getAllByTestId("list");

    expect(table.length).toEqual(item.length)
    expect(table.map(e=>e.textContent)).toEqual(item.map((e)=> e.text.concat("×")));
});