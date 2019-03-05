import React from 'react';

class TodosList extends React.Component {
    state = {
        newTodo: ""
    };

    render () {
        return (
            <div className="todos-list-container">
                <input 
                    className="todos-list-input" 
                    type="text"
                    placeholder="New Todo Item"
                />
                <button className="todos-list-button">Add Todo</button>
                <div className="todos-list">
                    The ACTUAL List of Todos
                </div>
            </div>
        );
    };
} 

export default TodosList;