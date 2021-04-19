import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(!isAuth)
      window.sessionStorage.setItem('token', token)
    }
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider >
  )
}
