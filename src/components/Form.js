import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import '../styles/Form.css';
const Form = () => {
    const schema = yup.object().shape({
        name: yup.string()
        .required()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
        .test('two-words', 'Please enter both first name and last name', value => {
            const names = value.trim().split(' ');
            return names.length === 2;
        }),
        email: yup.string()
        .email()
        .required(),
        message: yup.string()
        .required()
        .min(10, "Message must be a least 10 characters")
        .max(200, "Message cannot exceed 200 characters")

    });

    const {register, handleSubmit} = useForm({
        resolver:
    });



    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" method='POST'>
    <label htmlFor='name'>Full Name</label>
    <input name="name" placeholder='Enter Full Name...' type='text' {...register("name")}/>
    <label htmlFor='email'>Email</label>
    <input name="email" placeholder='Enter email...' type='email' {...register("email")}/>
    <label htmlFor='message'>Message</label>
    <textarea rows='6'
              placeholder='Enter message...'
              name='message'
              required
              {...register("message")}
              >
     </textarea>
     <button type='submit'>Send Message</button>
 </form>
  );
}

export default Form;
