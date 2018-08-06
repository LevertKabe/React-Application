import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import createLogger from 'redux-logger';
import App from './components/App';

const logger = createLogger();

ReactDOM.render(    
            <App />
    ,
    document.getElementById('root')
);
