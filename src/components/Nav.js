import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div >
        <nav className='navbar navbar-expand-lg bg-light navbar-light'>
            <div className='container'>
                <a href='#' className='navbar-brand'>sandvich</a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navmenue' type='button'
                >menue</button>
                <div className='collapse navbar-collapse' id='navmenue'>
                    <ul className='navbar-nav ms-auto'> 
                            <li className='nav-item'>
                            <a href='#' className='nav-link'>home</a>
                            </li>
                            <li className='nav-item'>
                            <a href='#' className='nav-link'>cart</a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav