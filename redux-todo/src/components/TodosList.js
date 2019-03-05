import React from 'react';
import { connect } from 'react-redux';

class TodosList extends React.Component {

    toggleCheckmark = completed => {
        this.props.toggleCheckmark(completed);
    };

    render() {
        return (
            <div className="todos-list-container">
                <input 
                    className="todos-list-input" 
                    type="text"
                    placeholder="New Todo Item"
                />
                <button className="todos-list-button">Add Todo</button>
                <div className="todos-list">
                    {this.props.todoList.map(todo => (
                        <h3 
                            key={todo.id} 
                            className="todo-item" 
                            onClick={() => this.toggleCheckmark(todo.completed)}
                        >
                            {todo.task}
                            {todo.completed && <i className="fas fa-check" />}
                        </h3>
                    ))}
                </div>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    todoList: state.items
});

export default connect(
    mapStateToProps, {}
)(TodosList);