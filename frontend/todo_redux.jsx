import React from "react"
import ReactDOM from 'react-dom';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", (event) => {
    const store = configureStore()
    window.store = store;
    window.getState = store.getState();
    ReactDOM.render(<h1>Todos App</h1>, document.getElementById("content"))
})