import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPostCallback={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

