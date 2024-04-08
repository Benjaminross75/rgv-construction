import React, { useState, useEffect } from 'react';
import '../styles/Form.css';
import axios from 'axios';
import * as yup from 'yup';

const sId = process.env.REACT_APP_SERVICEID;
const tId = process.env.REACT_APP_TEMPLATEID;
const pK = process.env.REACT_APP_PUBLICKEY;

const err = {
    name:  'Your name is required',
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name cannot exceed 50 characters',
    email:'Your email is required',
    message: 'A message is required',
    messageMin: 'Message must be at least 10 characters',
    messageMax: 'Message cannot exceed 200 characters',
}
const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Your name is required')
      .trim()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name cannot exceed 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .test('two-words', 'Please enter both first name and last name', (value) => {
        const names = value.trim().split(' ');
        return names.length === 2 || names.length === 3;
      }),
    email: yup.string().email().required('Your email is required'),
    message: yup
    .string()
    .required('A message is required')
    .min(8, 'Message must be at least 10 characters')
    .max(200, 'Message cannot exceed 200 characters'),
  });

  const getInitialValues = () => ({
    fullName: '',
    email: '',
    message: '',
  });

  const getInitialErrors = () => ({
    fullName: '',
    email: '',
    message: '',
  });


const EmailRestApi = () => {

   const [values, setValues] = useState(getInitialValues());
   const [errors, setErrors] = useState(getInitialErrors())
   //const [serverSuccess, setServerSuccess] = useState();
   //const [serverFailure, setServerFailure] = useState();
   const [formEnabled, setFormEnabled] = useState(false);

   useEffect(()=>{
    schema.isValid(values).then(setFormEnabled)
   },[values])

 const onChange = evt => {
   const {name, value} = evt.target

   setValues({...values, [name]: value})
   yup.reach(schema, name).validate(value)
   .then(()=> setErrors({ ...errors, [name]: ''}))
   .catch((err) => setErrors({ ...errors, [name]: err.errors[0]}))
 }


  const onSubmit = async evt => {
    evt.preventDefault();
    const serviceId = sId;
    const templateId = tId;
    const publicKey = pK;

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_name: values.fullName,
            from_email: values.email,
            to_name: 'Benjamin',
            message: values.message,
        }
    };
    try{
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data);
        console.log(res.data);
        setValues(getInitialValues)

    } catch (error){
        console.error(error);
    }
  }


  return (
    <div>
        <h1>Inquiry Form</h1>
           <form onSubmit={onSubmit}>
               <label htmlFor='fullName'>Full Name</label>
               <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder='Your full name'
                value={values.fullName}
                onChange={onChange}
                />
               {errors.fullName && <div className='validation'>{errors.fullName}</div> }
            <label htmlFor='email'>Email</label>
               <input
                id='email'
                name='email'
                type='email'
                placeholder='Enter email'
                value={values.email}
                onChange={onChange}
                />
               {errors.email && <div className='validation'>{errors.email}</div> }
            <label htmlFor='message'>Message</label>
              <textarea
                  rows='6'
                  placeholder='Enter message...'
                  name='message'
                  required
                  value={values.message}
                  onChange={onChange}
              >
            </textarea>
           {errors.message && <div className='validation'>{errors.message}</div>}
           <button id={formEnabled ? "formOn" : "formOff"} disabled={!formEnabled} type='submit'>Submit</button>
           </form>
    </div>
  );
};

export default EmailRestApi;
