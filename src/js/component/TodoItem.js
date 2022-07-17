import React from "react";
import {RiCloseCircleLine} from "react-icons/ri"
import {AiOutlineCheckCircle} from "react-icons/ai"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
              <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>  
              <AiOutlineCheckCircle onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}