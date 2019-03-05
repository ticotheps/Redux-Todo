import React from 'react';

class TodosList extends React.Component {
    state = {
        newTodo: ""
    };

    render () {
        return (
            <div className="todos-list">
                The ACTUAL List of Todos
            </div>
        );
    };
} 

export default TodosList;