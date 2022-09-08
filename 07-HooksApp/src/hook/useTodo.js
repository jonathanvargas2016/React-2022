import { useEffect, useReducer } from "react"
import { todoReducer } from "../09-useReducer/todo-reducer"

export const useTodo = (initialState = []) => {

    const init = () => { // funcion para los datos iniciales
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    const handleDeleteTodo = id => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }

    const handleToggleTodo = id => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const pendingTodosCount = todos.filter((todo) => {
        return !todo.done
    }).length

    return {
        todos,
        dispatch,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount
    }
}
