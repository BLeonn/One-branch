import React, { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import DarkLogo from '../assets/Dark-logo.png';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
       <img src={Logo} alt="Logo" id='logo'/>
       <img src={DarkLogo} alt='Logo' id='dark-logo'/>
      <div className='navbar' ref={navRef}>  
        {/* <div className='leftSide'>
            <img src={Logo} alt="Logo"/>
        </div> */}

        <div className='rightSide'>
          <Link to='/'>Home</Link>
          <Link to='/pages'>Pages</Link>
          <Link to='/services'>Services</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/Block'>Block</Link>
          <Link to='/shop'>Shop</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
          </button>
        </div>
      </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
    </header>
  );
}

export default Navbar;
