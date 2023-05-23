import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.css'
import { useCart } from './provider/Cartprovider'

const Nav = () => {
  const { cart } = useCart()
  return (
    <div >
        <nav className='navbar navbar-expand-lg bg-light navbar-light'>
            <div className='container'>
                <NavLink to="/" className='navbar-brand'>sandvich</NavLink>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navmenue' type='button'
                >menue</button>
                <div className='collapse navbar-collapse' id='navmenue'>
                    <ul className='navbar-nav ms-auto'> 
                            <li className='nav-item'>
                            <NavLink to="/" className='nav-link'>home</NavLink>
                            </li>
                            <li className='nav-item'>
                            <NavLink to="/cart" className='nav-link'><button type="button" class="btn btn-primary position-relative">
                  cart
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button></NavLink>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav