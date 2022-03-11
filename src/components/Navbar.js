import React from 'react'
import Nav from './Nav'


const Navbar = ({children}) => {
  return (
    <div>
<Nav />
{children}
    </div>
    
  )
}

export default Navbar