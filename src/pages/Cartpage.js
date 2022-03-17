import React from 'react'

import { useCart } from '../components/provider/Cartprovider'
import "./cartPage.css"
import { useCartaction } from './../components/provider/Cartprovider';
const Cartpage = () => {
    const {cart} = useCart()
    const dispatch=useCartaction()
    if (!cart.length)
    return (
      
        <main>
          <h2>cart id empty !</h2>
        </main>
      
    );
    const inchandler=(cartitem)=>{
      dispatch({type:"ADD-TO-CART",payload:cartitem})
    }
    const dechandler=(cartitem)=>{
      dispatch({type:"REMOVE-PRODUCT",payload:cartitem})
    }
  return (
    <main className="container">
    <section className="cartCenter">
      <section className="cartItemList">
        {cart.map((item) => {
          return (
            <div className="cartItem" key={item.id}>
              <div className="itemImg">
                <img src={item.image} alt={item.name}></img>
              </div>
              <div>{item.name}</div>
              <div>{item.price*item.quantity}</div>

              
              <div className="btnGroup">
                <button className='btn btn-danger' onClick={()=>dechandler(item)} >-</button>
                <button className='btn btn-danger'>{item.quantity}</button>
                <button className='btn btn-danger' onClick={()=>inchandler(item)}>+</button>
              </div>
            </div>
          );
        })}
      </section>
    
    </section>
  </main>
  
  

  )
}

export default Cartpage


