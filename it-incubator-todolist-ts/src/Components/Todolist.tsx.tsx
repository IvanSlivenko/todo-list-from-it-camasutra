import React, {useState} from "react";
import {FilterValuesType} from "../App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
    rating: number

}

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value:FilterValuesType) => void
    addTask:(title: string) => void




}

export function Todolist(props: PropsType) {

    const [newTaskTitle,setNewTaskTitle]=useState("")

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={(e)=>{setNewTaskTitle(e.currentTarget.value)}}

                />
                <button onClick={()=> {props.addTask(newTaskTitle)}}>+</button>
        </div>
            <ul>

                {
                    props.tasks.map(t =>

                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} readOnly/>
                            <span>{t.title}</span>
                            <span> rating : {t.rating} points</span>

                            <button
                                onClick={() => props.removeTask(t.id)}
                                style={{marginLeft: "5px"}}
                            >
                                delete
                            </button>

                            <button
                                onClick={() => {
                                    alert(`Буде змінено ${t.title.toString()}  по id ${t.id}`)
                                }}
                                style={{marginLeft: "5px"}}
                            >
                                remove
                            </button>
                        </li>
                    )
                }


            </ul>
            <div>
                <button onClick={() => {props.changeFilter("all")}}>All</button>
                <button onClick={() => {props.changeFilter("active")}}>Active</button>
                <button onClick={() => {props.changeFilter("complited")}}>Completed</button>
            </div>
        </div>
    )
}