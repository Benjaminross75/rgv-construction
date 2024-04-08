import React from 'react';
import contactImg from '../assets/contactimg.jpg';
import '../styles/Contact.css';
import EmailRestApiTwo from '../components/2EmailRestApi';

function Contact() {

  return (
    <div className='contact'>
      <div className='leftSide'
       style={{backgroundImage: `url(${contactImg})`}}
      ></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
         <div><EmailRestApiTwo/></div>
      </div>
    </div>
  );
}

export default Contact;
