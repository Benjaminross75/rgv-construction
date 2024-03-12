import React from 'react';
import logo from '../assets/logo1.jpg'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={logo} alt={"website logo"}/>
      </div>
      <div className='rightSide'></div>
    </div>
  );
}

export default Navbar;
