import React from 'react';
import '../styles/Form.css';
const Form = () => {
  return (
    <form id="contact-form" method='POST'>
    <label htmlFor='name'>Full Name</label>
    <input name="name" placeholder='Enter Full Name...' type='text'/>
    <label htmlFor='email'>Email</label>
    <input name="email" placeholder='Enter email...' type='email'/>
    <label htmlFor='message'>Message</label>
    <textarea rows='6'
              placeholder='Enter message...'
              name='message'
              required
              >
     </textarea>
     <button type='submit'>Send Message</button>
 </form>
  );
}

export default Form;
