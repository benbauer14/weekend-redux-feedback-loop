import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {logger} from 'redux-logger';
import { combineReducers, createStore, applyMiddleware} from 'redux'

const comments = ( state = [], action ) => {
    return state
}

const store=createStore(
    combineReducers({
        comments: comments,
        // feeling: feeling,
        // review: review,
        // supported: supported,
        // understand: understand
    }), applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
