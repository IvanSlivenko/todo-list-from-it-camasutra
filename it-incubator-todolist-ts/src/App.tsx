import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist.tsx";

function App() {

    return (
        <div className="App App-header">
            <Todolist title="What to lern "/>
            <Todolist title='Movies'/>
            <Todolist title='Songs'/>


                <input className="input-checkbox" type="checkbox"/>
                <input className="input-date" type="date"/>
                <input className="input-date" placeholder={"text"}/>



        </div>
    );
}

export default App;
