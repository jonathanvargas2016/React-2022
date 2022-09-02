import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todo-reducer'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: 'Recolectar la piedra del poder',
            done: false
        }
    ]

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({todo})
    }

    return (
        <>
            <h1>TodoApp 10 <small>pendientes: 2</small></h1>
            <hr />

            <div className='row'>
                <div className='col col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12'>
                    <TodoList todos={todos} />
                </div>
                <div className='col col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12'>
                    <h4>Agregar TODO</h4>
                    <hr />
                
                    {/* <TodoAdd onNewTodo={e => handleNewTodo(e) } /> */}
                    <TodoAdd onNewTodo={handleNewTodo } />

                </div>
            </div>


        </>
    )
}
