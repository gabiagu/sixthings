import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './list.css';
import List from './list.js';

/* const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const title = (
  <h1>foobar</h1>
); */


class App extends Component {
  render() {
    return (
      /* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      <div className="wrapper">
        <h1>foobar x</h1>
        <List />
      </div>
    );
  }
}

export default App;
