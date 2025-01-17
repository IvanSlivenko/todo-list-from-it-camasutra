import React, {ChangeEvent, useState, KeyboardEvent, ChangeEventHandler} from "react";
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
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void;
    filter: FilterValuesType;


}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.ctrlKey && e.key === "Enter" && newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    };

    const addTask = () => {
        if (newTaskTitle.trim() === "херня") {
            console.log("Ви написали слово - Херня -")
            return
        }

        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
            setError(null)
        } else {
            setError("Title is required")
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }

    const onAllActiveHandler = () => {
        props.changeFilter("active")
    }

    const onAllComplitedHandler = () => {
        props.changeFilter("complited")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandler}
                    onKeyDown={onKeyDownHandler}
                    className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}


            </div>
            <ul>

                {
                    props.tasks.map(t => {

                        const onRemoveHandler = () => {
                            props.removeTask(t.id)
                        }

                        const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            // console.log(t.id + " "+ e.currentTarget.checked)
                            props.changeTaskStatus(t.id, e.currentTarget.checked);
                        }

                        return <li key={t.id}
                                className={t.isDone ?"is-done" : ""}
                            >
                            <input
                                type="checkbox"
                                checked={t.isDone}
                                onChange={onStatusChangeHandler}

                                readOnly
                            />
                            <span>{t.title}</span>
                            <span> rating : {t.rating} points</span>

                            <button
                                onClick={onRemoveHandler}
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

                    })
                }


            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                        onClick={onAllActiveHandler}>Active
                </button>
                <button className={props.filter === "complited" ? "active-filter" : ""}
                        onClick={onAllComplitedHandler}>Completed
                </button>
            </div>
        </div>
    )
}