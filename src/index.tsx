import React from 'react';
import './index.css';
import {addPost, RootStateType, state, subscriber, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderThree = (state: RootStateType) => {
    ReactDOM.render(
        <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
    />, document.getElementById('root'));
}

rerenderThree(state)
// передаем колбек в стейт rerenderThree тоесть его содержимое (state: RootStateType) => {
//      (state: RootStateType) => {
//     ReactDOM.render(
//         <App
//         state={state}
//         addPost={addPost}
//         updateNewPostText={updateNewPostText}
//     />, document.getElementById('root')); окажется в state как параметр "observer"
subscriber(rerenderThree)
