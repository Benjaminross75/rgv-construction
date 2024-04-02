import React from 'react';
import contactImg from '../assets/contactimg.jpg';
import '../styles/Contact.css';
import Form from '../components/Form'
function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'
       style={{backgroundImage: `url(${contactImg})`}}
      ></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
         <div><Form/></div>
      </div>
    </div>
  );
}

export default Contact;
