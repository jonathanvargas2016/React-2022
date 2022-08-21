import React, { useState } from 'react'
import { useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'jonathan@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value // propiedad computada del objeto 
        })
    }

    // useeffect se llama dos veces, eliminar el modo estricto
    // no es recomendable usar el useEffect sin dependencias
    useEffect(() => {
        // console.log('useEffect called')
    }, [])
    // [] significa que el useEffect se dispare una unica vez.


    // es recomendable usar un useEffect  especialidado por cada accion a ejecutar 
    // pendiente de los cambios del formState
    useEffect(() => {
        // console.log('formState change')
    }, [formState])

    // pendiente de los cambios del email
    useEffect(() => {
        // console.log('email change')
    }, [email])


    return (
        <>

            <h1>Formulario Simple</h1>
            <hr />
            <input type="text"
                className='form-control'
                placeholder='Username'
                name="username"
                value={username}
                onChange={onInputChange} />

            <input type="email"
                className='form-control mt-2'
                placeholder='example@hotmail.com'
                name="email"
                value={email}
                onChange={onInputChange} />

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
