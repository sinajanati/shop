import React, { createContext, useContext, useReducer } from 'react'
import cartreduser from './cartreduser'

const Cartcontext=createContext()
const Cartcontextdispacher=createContext()

const initialstate ={
    cart:[],
    total:0
}
const Cartprovider = ({children}) => {
    const [cart,dispatch]=useReducer(cartreduser,initialstate)
  return (
    <div>
        <Cartcontext.Provider value={cart}>
            <Cartcontextdispacher.Provider value={dispatch}>
                {children}
            </Cartcontextdispacher.Provider >
        </Cartcontext.Provider>
    </div>
  )
}

export default Cartprovider

export const useCart =()=> useContext(Cartcontext)
export const useCartaction =()=> useContext(Cartcontextdispacher)