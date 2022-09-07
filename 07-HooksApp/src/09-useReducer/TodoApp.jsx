import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todo-reducer'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Recolectar la piedra del alma',
        //     done: false
        // }
    ]

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

    return (
        <>
            <h1>TodoApp 10 <small>pendientes: 2</small></h1>
            <hr />

            <div className='row'>
                <div className='col col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12'>

                    {/* id => es el valor q el evento onDeleteTodo 
                    emite y ese valor le paso a la funcion handleDeleteTodo */}
                    <TodoList todos={todos} 
                    onDeleteTodo={id => handleDeleteTodo(id)}  
                    onToggleTodo={handleToggleTodo}
                    />
                    

                </div>
                <div className='col col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12'>
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* <TodoAdd onNewTodo={e => handleNewTodo(e) } /> */}
                    <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>


        </>
    )
}
