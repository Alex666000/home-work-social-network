import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {RootStoreType, StateType, store} from './redux/state';


let rerenderThree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root'));
}

rerenderThree(store.getState())

store.subscriber(rerenderThree)
