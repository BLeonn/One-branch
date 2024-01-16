import React from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
    <div className='leftSide'>
        <img src={Logo}/>
    </div>
    <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/pages'>Pages</Link>
        <Link to='/services'>Services</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/Block'>Block</Link>
        <Link to='/shop'>Shop</Link>
        
    </div>
    </div>

  )
}

export default Navbar





