import './app.component.css';

import React, { Component } from 'react';

import logo from './../assets/images/logo.svg';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <p>
                        Edit <code>src/app.component.tsx</code> and save to reload.
                    </p>
                    <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    <p>Node Env: {process.env.NODE_ENV}</p>
                    <p>Version: {process.env.REACT_APP_VERSION}</p>
                </header>
            </div>
        );
    }
}

export default App;
