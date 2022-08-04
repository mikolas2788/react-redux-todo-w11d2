import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    debugger 
    const newState = {}

    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                newState[todo.id] = todo
            })
            return newState
        case RECEIVE_TODO:
            debugger
            const newTodo = { [action.todo.id]: action.todo}
            let subState = Object.assign(newState, state, newTodo)
            debugger
            return Object.assign(newState, state, newTodo)
        default: 
            return state
    }
}


export default todosReducer;