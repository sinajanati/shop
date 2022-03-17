import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
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
                            <NavLink to="/cart" className='nav-link'>cart</NavLink>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav