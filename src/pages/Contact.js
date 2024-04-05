import React from 'react';
import contactImg from '../assets/contactimg.jpg';
import '../styles/Contact.css';
import Form from '../components/Form';
import EmailForm from '../components/EmailForm';
import EmailRestApi from '../components/EmailRestApi';
import EmailRestApiTwo from '../components/2EmailRestApi';
import EmailRestApiThree from '../components/3EmailRestApi'
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
