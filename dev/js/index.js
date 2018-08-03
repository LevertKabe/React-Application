import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './components/App';

const logger = createLogger();

ReactDOM.render(    
            <App />
    ,
    document.getElementById('root')
);
