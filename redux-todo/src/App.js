import React, { Component } from 'react';
import TodosList from './components/TodosList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Today's Todo List</h1>
        <TodosList />
      </div>
    );
  }
}

export default App;
