import React from 'react'
import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//   id: 123,
//   name: 'Jonathan Vargas',
//   email: 'example@gmail.com'
// }

export const UserProvider = ({ children }) => {


  const [user, setUser] = useState()

  return (
    //*comentario: hola es la info que cualquier hijo del provider obtendra
    // <UserContext.Provider value={{ hola: "Mundo", user: user }}>
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
