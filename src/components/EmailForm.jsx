// import React from 'react';
// import emailjs from '@emailjs/browser';
// import '../styles/Form.css';
// import {useState} from 'react'


// const sId = process.env.REACT_APP_SERVICEID;
// const tId = process.env.REACT_APP_TEMPLATEID;
// const pK = process.env.REACT_APP_PUBLICKEY;

// console.log(`heeerrre is sId ${sId}`)
// const EmailForm = () => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//        // const serviceId = 'service_33ahxpt';
//        // const templateId = 'template_gaebt8t';
//       //  const publicKey = 'vN-wqwbIwlphHFh7U';
//          const serviceId = sId;
//          const templateId = tId;
//          const publicKey = pK;

//         const templateParams = {
//             from_name: name,
//             from_email: email,
//             to_name: 'Benjamin',
//             message: message,
//         };

//         emailjs.send(serviceId, templateId, templateParams,publicKey)
//         .then((response) => {
//             console.log('Email sent successfully', response);
//             setName('');
//             setEmail('');
//             setMessage('')
//         })
//         .catch((error) =>{
//             console.error('Error sending email', error);
//         });
//     }

//   return (
//    <form onSubmit={handleSubmit} id='contact-form'>
//     <label htmlFor='name'>Full Name</label>
//      <input
//      name='name'
//      type="text"
//      placeholder='Your Full Name'
//      value={name}
//      onChange={(e) => setName(e.target.value)}
//      />
//      <label htmlFor='email'>Email</label>
//       <input
//      name='email'
//      type="email"
//      placeholder='Your Email'
//      value={email}
//      onChange={(e) => setEmail(e.target.value)}
//      />
//      <label htmlFor='message'>Message</label>
//      <textarea
//      name='message'
//      cols="30"
//      rows="10"
//      value={message}
//      onChange={(e) => setMessage(e.target.value)}

//      >
//    </textarea>
//    <button type="submit">Send Email</button>
//    </form>
//   );
// }

// export default EmailForm;
