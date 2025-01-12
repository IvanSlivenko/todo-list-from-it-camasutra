import React, {ChangeEvent, useState, KeyboardEvent} from "react";
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
    changeStatus: (taskId: string, isDone: boolean) => void;


}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("")

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === "Enter" && newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    };

    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
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
                />
                <button onClick={addTask}>+</button>

            </div>
            <ul>

                {
                    props.tasks.map(t => {

                        const onRemoveHandler =() => {
                            props.removeTask(t.id)
                        }

                        const onStatusChangeHandler = () => props.changeStatus(t.id, t.isDone);


                        return <li key={t.id}>
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
        <button onClick={onAllClickHandler}>All
        </button>
        <button onClick={onAllActiveHandler}>Active
        </button>
        <button onClick={onAllComplitedHandler}>Completed
        </button>
    </div>
</div>
)
}