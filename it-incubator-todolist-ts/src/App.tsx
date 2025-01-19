import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Components/Todolist.tsx";
import {v1} from "uuid";

export type FilterValuesType = "all" | "complited" | "active"
export type TodoListType = {
    id: string,
    title: string,
    filter: FilterValuesType


}

function App() {
    // let tasks1: Array<TaskType> = [
    //     { id: 1, title: "CSS", isDone: true, rating: 7 },
    //     { id: 2, title: "JS", isDone: false, rating: 8 },
    //     { id: 3, title: "React", isDone: true, rating: 8.5 },
    //     { id: 4, title: "Redux", isDone: false, rating: 9 }
    // ]
    //
    // // let tasks2: Array<TaskType> = [
    // //     { id: 1, title: "Movie 1", isDone: true, rating: 7 },
    // //     { id: 2, title: "Movie 2",  isDone: false, rating: 8 },
    // //     { id: 3, title: "Movie 3", isDone: false, rating: 9 }
    // // ]
    //
    //
    // function removeTask(id: number) {
    //     let resultTasks: Array<TaskType> = tasks1.filter(t=>t.id !==id)
    //     // let resultTasks = tasks1.filter(()=>{return true})
    //     console.log('resultTasks',resultTasks)
    // }
//-------------------------------------------------------------------------
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true, rating: 7},
        {id: v1(), title: "JS", isDone: false, rating: 8},
        {id: v1(), title: "React", isDone: true, rating: 8.5},
        {id: v1(), title: "Redux", isDone: false, rating: 9}
    ]);

    // console.log(tasks1);
    let [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTask = (id: string) => {
        let filterTask = tasks.filter((t) => t.id !== id)
        setTasks(filterTask);
    };

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false,
            rating: 1
        }
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value;
            setTodolist([...todolists])
        }
        // setFilter(value)
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            //------------------------------------------------------
            // setTasks((tasks1) =>
            //     tasks1.map((t) =>
            //         t.id === taskId ? {...t, isDone: !isDone} : t
            //     )
            // );
            //------------------------------------------------------
            task.isDone = isDone
        }
        setTasks([...tasks])

    }


// ------------------------------------------------------------------------

    let [todolists, setTodolist] = useState<Array<TodoListType>>([
        {id: v1(), title: "What to learn", filter: "active"},
        {id: v1(), title: "What to boy", filter: "complited"},
        {id: v1(), title: "What to read", filter: "all"},


    ])
    return (
        <div className="App App-header">
            {
                todolists.map((tl) => {

                    let tasksForTodolist = tasks;
                    if (tl.filter === "complited") {
                        tasksForTodolist = tasks.filter(t => t.isDone)
                    }
                    if (tl.filter === "active") {
                        tasksForTodolist = tasks.filter(t => !t.isDone)
                    }


                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}

                    />
                })
            }

            {/*<Todolist title='Movies' tasks={tasks2}/>*/}

            {/*<input className="input-checkbox" type="checkbox"/>*/}
            {/*<input className="input-date" type="date"/>*/}
            {/*<input className="input-date" placeholder={"text"}/>*/}
        </div>
    );
}


export default App;
