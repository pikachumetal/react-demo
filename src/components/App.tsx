import './App.scss';

import * as React from 'react';

import logo from '../assets/images/logo.svg';

class App extends React.PureComponent {
    render(): JSX.Element {
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
                    <p>Node Env: {process.env.NODE_ENV} </p>
                    <p>Version: {process.env.REACT_APP_VERSION} </p>
                </header>
            </div>
        );
    }
}

export default App;
