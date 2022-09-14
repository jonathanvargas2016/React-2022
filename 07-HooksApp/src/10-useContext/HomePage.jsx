import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {

    //*comentario: se debe especificar el contexto anadiendolo en el useContext
    const {user} =  useContext(UserContext)
    return (
        <>
            <h1>HomePage <small> {user?.name} </small></h1>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
