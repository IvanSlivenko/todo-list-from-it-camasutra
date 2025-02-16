import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void;
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditmode] = useState(false)
    let [title, setTitle] = useState("")

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }


    function activeEditMode(){
        setEditmode(true);
        setTitle(props.title)

    }

    function activeVievMode(){
        setEditmode(false);
        props.onChange(title);
    }

    return editMode
        ? <input onBlur={activeVievMode} value={title} onChange={onChangeTitleHandler} autoFocus={true}/>
        : <span onDoubleClick={activeEditMode}>{props.title}</span>





}