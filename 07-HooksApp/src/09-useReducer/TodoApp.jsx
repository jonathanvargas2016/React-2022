import React from 'react'
import { useTodo } from '../hook'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TodoApp = () => {


    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo([])

    return (
        <>
            <h1>TodoApp {todosCount} <small>pendientes: {pendingTodosCount} </small></h1>
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
