import React from 'react';
import { connect } from 'react-redux';

const TodosList = props => {
    return (
        <div className="todos-list-container">
            <input 
                className="todos-list-input" 
                type="text"
                placeholder="New Todo Item"
            />
            <button className="todos-list-button">Add Todo</button>
            <div className="todos-list">
                This is the ACTUAL todo list.
            </div>
        </div>
    );
};

export default connect()(TodosList);