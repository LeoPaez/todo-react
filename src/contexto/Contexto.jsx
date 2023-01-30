import {React, createContext, useState} from 'react'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [tareas, setTareas] = useState([])
  
  return (
    <TodoContext.Provider
      value={{ tareas, setTareas }}
    >
     {children}
    </TodoContext.Provider>
  )
}
