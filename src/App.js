import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store'
import { Provider } from 'react-redux';
import Todo from './Todo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
    
  );
}

export default App;
