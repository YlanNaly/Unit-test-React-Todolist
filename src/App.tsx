import {useState} from "react";
import AddTask from "./todolist/Ajout";
import Todo from "./todolist/Todo";
import DONE from "./todolist/Done";

function App() {

    const [tasks, setTasks] = useState([
        { id: 1, text: "Manger!", done: true },
    ]);
    const addTask = (text: any) => {
        const newTask = {
            text,
            id: Date.now(),
            done: false,
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id:number ) => {
        const realTask = tasks.find((t: { id: number; }) => t.id === id);
        const index = tasks.findIndex((t: { id: number; }) => t.id === id);
        const taskCopy = { ...realTask };
        const tasksListCopy :any = [...tasks];

        tasksListCopy[index] = taskCopy;
        setTasks(tasksListCopy);
    };

    const [done, setDone] = useState([
        {}
    ]);
    const addToDone = (index: number) => {
        setDone([...done, tasks[index]]);
        const tmp = [...tasks];
        tmp.splice(index, 1);
        setTasks(tmp);
    }

    const deleteTask3 = (id: number) => {
        const tmp = [...done];
        tmp.splice(id, 1);
        setDone(tmp);
    }

    return (
        <>
        <AddTask addTask={addTask} />
        <div className="App">
            <div className="todo" style={{width: "18rem"}}>
                <div className="Todo-header">TO DO</div>
                <ul className="list-group list-group-flush">
                    <Todo tasks={tasks} toggleTask={toggleTask} deleteTask={addToDone}/>
                </ul>
            </div>
            <div className="done" style={{width: "18rem"}}>
                <div className="Done-header">DONE</div>
                <ul className="list-group list-group-flush">
                    <DONE tasks={done} toggleTask={toggleTask} deleteTask={deleteTask3}/>
                </ul>
            </div>
        </div></>


    );
}

export default App;


