import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo1.jpg';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={logo} alt={"website logo"}/>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/services"> Service </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;

//react-scripts start
