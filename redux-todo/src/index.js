import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import TodosList from './components/TodosList';

import './index.css';
import './App.css';

const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
          <h1 className="title">Today's Todo List</h1>
          <TodosList />
        </div>
    );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);