import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {logger} from 'redux-logger';
import { combineReducers, createStore, applyMiddleware} from 'redux'

const comments = ( state = [], action ) => {
    if(action.type === "comment"){
        return action.payload
    }
    if(action.type === "reset"){
        return state = []
    }
    return state
}

const feeling = ( state = [], action ) => {
    if(action.type === "feeling"){

        return action.payload
    }
    if(action.type === "reset"){
        return state = []
    }
    return state
}

const understand = ( state = [], action ) => {
    if(action.type === "understand"){

        return action.payload
    }
    if(action.type === "reset"){
        return state = []
    }
    return state
}

const supported = ( state = [], action ) => {
    if(action.type === "support"){
        return action.payload
    }
    if(action.type === "reset"){
        return state = []
    }
    return state
}

const store=createStore(
    combineReducers({
        comments: comments,
        feeling: feeling,
        supported: supported,
        understand: understand
    }), applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
