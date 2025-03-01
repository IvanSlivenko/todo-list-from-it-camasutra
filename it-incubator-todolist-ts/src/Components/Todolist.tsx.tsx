import React, {ChangeEvent} from "react";
import {FilterValuesType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
    rating: number

}

type PropsType = {
    id: string
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
    changeTaskTitle: (taskId: string, newTitle: string,  todolistId: string) => void;
    filter: FilterValuesType;
    removeTodolist:(todolistId: string) => void;
    changeTodolistTitle: (id: string, newTitle: string) => void;


}

export function Todolist(props: PropsType) {
    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }

    const onAllActiveHandler = () => {
        props.changeFilter("active", props.id)
    }

    const onAllComplitedHandler = () => {
        props.changeFilter("complited", props.id)
    }

    const removeTodolist =() => {
        props.removeTodolist(props.id)}

    const changeTodolistTitle =(newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }


    const addTask = (title: string) =>{
        props.addTask(title, props.id)
    }

    return (
        <div>
            <h3>  <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                <button
                    className={'delete-todolist'}
                    onClick={removeTodolist}

                >X</button>
            </h3>
            <AddItemForm  addItem={addTask}/>
            <ul>

                {
                    props.tasks.map(t => {

                        const onRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }

                        const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
                        }

                        const onChangeTitleHandler = (newValue: string) => {
                            props.changeTaskTitle(t.id, newValue, props.id);

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
                            <EditableSpan
                                title={t.title}
                                onChange={onChangeTitleHandler}
                            />
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

