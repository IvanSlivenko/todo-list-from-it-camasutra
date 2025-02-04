import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void

}

export function AddItemForm(props: AddItemFormPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (newTaskTitle.trim() === "херня") {
            console.log("Ви написали слово - Херня -")
            return
        }

        if (newTaskTitle.trim() !== "") {
            props.addItem(newTaskTitle);
            setNewTaskTitle("");
            setError(null)
        } else {
            setError("Title is required")
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.ctrlKey && e.key === "Enter" && newTaskTitle.trim() !== "") {
            props.addItem(newTaskTitle);
            setNewTaskTitle("");
        }
    };


    return <div>
        <input
            value={newTaskTitle}
            onChange={onNewTitleChangeHandler}
            onKeyDown={onKeyDownHandler}
            className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
    </div>
}