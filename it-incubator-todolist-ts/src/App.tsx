import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Components/Todolist.tsx";

function App() {

    let tasks1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS",  isDone: false },
        { id: 3, title: "React", isDone: true }
    ]

    let tasks2: Array<TaskType> = [
        { id: 1, title: "text1", isDone: true },
        { id: 2, title: "text2",  isDone: false },
        { id: 3, title: "text3", isDone: true }
    ]

    return (
        <div className="App App-header">
            <Todolist title="What to lern" tasks={tasks1} duration={1.1}/>
            <Todolist title='Movies' tasks={tasks2} duration={1.2}/>

            {/*<input className="input-checkbox" type="checkbox"/>*/}
            {/*<input className="input-date" type="date"/>*/}
            {/*<input className="input-date" placeholder={"text"}/>*/}
        </div>
    );
}

export default App;
