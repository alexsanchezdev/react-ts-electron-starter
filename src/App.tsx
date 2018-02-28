import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

// Electron ipcRenderer accesible via window. Preloaded using 'preload.js', as Node Integration 
// for Remote Content must be disabled for security reasons. 
// https://electronjs.org/docs/tutorial/security#2-disable-nodejs-integration-for-remote-content

// const ipcRenderer = window.ipcRenderer;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
