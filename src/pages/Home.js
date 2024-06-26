import React from 'react';
import {Link}  from 'react-router-dom';
import bannerImage from '../assets/home-porch.jpg';
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bannerImage})` }}>
      <div className='headerContainer'>
        <h1>RGV Construction</h1>
        <p>Building premium decks and fences</p>
        <Link to="/services">
        <button>Our services</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
