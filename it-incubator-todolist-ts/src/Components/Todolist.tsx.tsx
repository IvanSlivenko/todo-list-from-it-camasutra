import React from "react";

export function Todolist(props: any) {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>CSS&HTML</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/>
                    <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/>
                    <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}