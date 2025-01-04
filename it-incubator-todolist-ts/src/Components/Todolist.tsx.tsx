import React from "react";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
    rating: number

}

type PropsType = {
    title: string,
    tasks: Array<TaskType>


}

export function Todolist(props: PropsType) {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {
                    props.tasks.map((t) => {
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone} readOnly />
                                <span>{t.title}</span>
                                <span> rating : {t.rating} points</span>
                            </li>
                        );
                    })
                }


            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}