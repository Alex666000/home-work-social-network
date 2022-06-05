import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {RootStoreType, store} from './redux/state';

let rerenderThree = (store: RootStoreType) => {
    ReactDOM.render(
        <App
        store={store._state}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
    />, document.getElementById('root'));
}

rerenderThree(store)

store.subscriber(rerenderThree)
