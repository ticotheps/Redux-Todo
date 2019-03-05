import React from 'react';
import { connect } from 'react-redux';
import { toggleCheckmark } from '../actions';

class TodosList extends React.Component {
    state = {
        newTodo: ""
    };

    addTodo = e => {
        console.log("The addTodo() function was triggered!");
        e.preventDefault();
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({ newTodo: e.target.value });
    }

    toggleCheckmark = completed => {
        this.props.toggleCheckmark(completed);
    };

    render() {
        return (
            <div className="todos-list-container">
                <input 
                    className="todos-list-input" 
                    type="text"
                    name="newTodo"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder="New Todo Item"
                />
                <button className="todos-list-button" onClick={this.addTodo}>Add Todo</button>
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
    mapStateToProps, 
    { toggleCheckmark }
)(TodosList);