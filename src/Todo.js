import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div className="todo">
            <li>{props.text}</li>
        </div>
    )
}

export default Todo

