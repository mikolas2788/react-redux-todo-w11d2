import React from "react"
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { receiveTodo, receiveTodos } from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", (event) => {
    const store = configureStore()
    window.store = store
    window.getState = store.getState()
    window.receiveTodo = receiveTodo
    window.dispatch = store.dispatch
    ReactDOM.render(<h1>Todos App</h1>, document.getElementById("content"))
})