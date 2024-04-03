import React from 'react';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/Form.css';
const Form = () => {
    const schema = yup.object().shape({
        name: yup.string()
        .required("Your name is required")
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
        .required("Your email is required"),
        message: yup.string()
        .required("A message is required")
        .min(10, "Message must be a least 10 characters")
        .max(200, "Message cannot exceed 200 characters")

    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });



    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" method='POST'>
    <label htmlFor='name'>Full Name</label>
    <input name="name" placeholder='Enter Full Name...' type='text' {...register("name")}/>
    {errors.name && <p>{errors.name?.message}</p>}
    <label htmlFor='email'>Email</label>
    <input name="email" placeholder='Enter email...' type='email' {...register("email")}/>
    {errors.email && <p>{errors.email?.message}</p>}
    <label htmlFor='message'>Message</label>
    <textarea rows='6'
              placeholder='Enter message...'
              name='message'
              required
              {...register("message")}
              >
     </textarea>
     {errors.message && <p>{errors.message?.message}</p>}
     <button type='submit'>Send Message</button>
 </form>
  );
}

export default Form;
