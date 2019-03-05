import React, { Component } from 'react';
import TodosList from './components/TodosList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">To-Do List</h1>
        <TodosList />
      </div>
    );
  }
}

export default App;
