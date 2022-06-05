import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from './redux/state';

addPost('hey')


ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root')
);