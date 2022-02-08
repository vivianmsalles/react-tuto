import React, { createContext, useState } from 'react'

const LoginContext = createContext ({ loggedIn: false, setLoggedIn: () => {} })

export const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  return <LoginContext.Provider value={{ loggedIn, setLoggedIn }} >{children}</LoginContext.Provider>
} 

export default LoginContext