import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from './states.js'
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>,
    document.getElementById('root')
  )};
