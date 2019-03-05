import React from 'react';

class TodosList extends React.Component {
    state = {
        newTodo: ""
    };

    render () {
        return (
            <div className="todos-list-container">
                I am the CONTAINER for the LIST
                <div className="todos-list">
                    The ACTUAL List of Todos
                </div>
                <input className="todos-list-input" type="text"/>
                <button className="todos-list-button">Add Todo</button>
            </div>
        );
    };
} 

export default TodosList;