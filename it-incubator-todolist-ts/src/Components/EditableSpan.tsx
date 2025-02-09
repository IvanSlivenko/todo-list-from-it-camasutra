import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string

}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditmode] = useState(false)
    let [title, setTitle] = useState(props.title)

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }


    function activeEditMode(){
        setEditmode(true)
    }

    function activeVievMode(){
        setEditmode(false)
    }

    return editMode
        ? <input onBlur={activeVievMode} value={title} onChange={onChangeTitleHandler} autoFocus={true}/>
        : <span onDoubleClick={activeEditMode}>{props.title} +++ </span>





}