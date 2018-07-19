import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import LoginScreen from './components/App';
import Login from './components/Login'

// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById('root')
);
