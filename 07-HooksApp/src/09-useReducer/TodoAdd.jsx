import React from 'react'
import { useForm } from '../hook/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm(
        {
            description: ''
        }
    )

    const onHandleSubmit = e => {
        e.preventDefault()
        if (description.trim().length > 0) {

            onNewTodo({
                id: new Date().getTime(),
                description,
                done: false
            })
            onResetForm()
        }
    }

    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text"
                className='form-control'
                placeholder='Que hay que hacer ?'
                value={description}
                name="description"
                onChange={onInputChange} />

            <button className='btn btn-primary mt-2' type='submit'>
                Agregar
            </button>
        </form>
    )
}
