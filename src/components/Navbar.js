import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo1.jpg';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () =>{
  setToggle(!toggle)
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={toggle ? "open" : "close"}>
        <img src={logo} alt={"website logo"}/>
        <div className='hiddenLinks'>
        <Link to="/"> Home </Link>
        <Link to="/services"> Service </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/services"> Service </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

//react-scripts start
