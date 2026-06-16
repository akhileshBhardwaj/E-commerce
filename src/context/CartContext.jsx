import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const context=createContext()

const CartContext = ({children}) => {


  return (
    <context.Provider>
        {children}
    </context.Provider>
  )
}

export const  useContext=()=> useContext(context)