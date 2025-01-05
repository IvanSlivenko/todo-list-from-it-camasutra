import React, { useState } from 'react';
import './App.css';
import {TaskType, Todolist} from "./Components/Todolist.tsx";

function App() {



    let tasks1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true, rating: 7 },
        { id: 2, title: "JS", isDone: false, rating: 8 },
        { id: 3, title: "React", isDone: true, rating: 8.5 },
        { id: 4, title: "Redux", isDone: false, rating: 9 }
    ]

    // let tasks2: Array<TaskType> = [
    //     { id: 1, title: "Movie 1", isDone: true, rating: 7 },
    //     { id: 2, title: "Movie 2",  isDone: false, rating: 8 },
    //     { id: 3, title: "Movie 3", isDone: false, rating: 9 }
    // ]


    function removeTask(id: number) {
        let resultTasks: Array<TaskType> = tasks1.filter((t)=>t.id !==id)
        // let resultTasks = tasks1.filter(()=>{return true})
        console.log('resultTasks',resultTasks)
    }
//--------------------------------------------------------------------------
    // const [tasks1, setTasks] = useState<Array<TaskType>>([
    //     { id: 1, title: "CSS", isDone: true, rating: 7 },
    //     { id: 2, title: "JS", isDone: false, rating: 8 },
    //     { id: 3, title: "React", isDone: true, rating: 8.5 },
    //     { id: 4, title: "Redux", isDone: false, rating: 9 }
    // ]);
    //
    // const removeTask = (id: number) => {
    //     setTasks(tasks1.filter((t) => t.id !== id));
    // };
// ------------------------------------------------------------------------
    return (
        <div className="App App-header">
            <Todolist
                title="What to lern"
                tasks={tasks1}
                removeTask = {removeTask}
            />
            {/*<Todolist title='Movies' tasks={tasks2}/>*/}

            {/*<input className="input-checkbox" type="checkbox"/>*/}
            {/*<input className="input-date" type="date"/>*/}
            {/*<input className="input-date" placeholder={"text"}/>*/}
        </div>
    );
}

export default App;
