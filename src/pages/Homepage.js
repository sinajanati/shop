import React from 'react'
import { useCartaction } from '../components/provider/Cartprovider'
import * as data from '../data'

const Homepage = () => {
    const dispatch=useCartaction()
    const addproducthandler =(product)=>{
        dispatch({type:"ADD-TO-CART",payload:product})
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
                {data.products.map(product =>{
                    return (
                        <div key={product.id} className='col-md-4 mt-4'> 
                                                        <div className="card" style={{width: "18rem"}}>
                            <img src={product.image} className="card-img-top"style={{height: "18rem"}} alt={product.image}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                            <button onClick={()=>addproducthandler(product)} className='btn btn-danger'>add-to-card</button>
                            </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Homepage