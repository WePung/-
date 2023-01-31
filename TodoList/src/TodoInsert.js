import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import {TiTrash, TiPencil} from "react-icons/ti"
import "./TodoInsert.css"

const TodoInsert = ({onInsertToggle, onInsertTodo, selectTodo, onRemove, onUpdate}) => {
    
    const [value, SetValue] = useState("");
    
    const onChange = e => {
        SetValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        SetValue("");
        onInsertToggle();
    };

    useEffect(() => {
        if(selectTodo){
            SetValue(selectTodo.text);
        }
    }, [selectTodo])

    return(
        <div>
            <div className="Background"
                onClick={onInsertToggle}>    
            </div>
            <form onSubmit={selectTodo ? () => {onUpdate(selectTodo.id, value)} : onSubmit}>
                <input
                placeholder="내용을 기입해주세요"
                value = {value}
                onChange = {onChange}
                ></input>
                {selectTodo ? (
                <div>
                    <div className="Rewrite">
                    <TiPencil
              onClick={() => {
                onUpdate(selectTodo.id, value);
              }}
            />
                        <TiTrash onClick = {() => {
                            onRemove(selectTodo.id);
                        }}/>
                    </div>
                </div>) : (<button type = "submit">
                    <MdAddCircle />
                </button>)}
            </form>
        </div>
    )
};

export default TodoInsert;