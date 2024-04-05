import React,{useState} from 'react';
import '../styles/Form.css';
import axios from 'axios';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
const sId = process.env.REACT_APP_SERVICEID;
const tId = process.env.REACT_APP_TEMPLATEID;
const pK = process.env.REACT_APP_PUBLICKEY;

const EmailRestApi = () => {
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

    const {register, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const serviceId = sId;
         const templateId = tId;
         const publicKey = pK;

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_name: name,
            from_email: email,
            to_name: 'Benjamin',
            message: message,
        }
    };

    try{
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data);
        console.log(res.data);
        setName('');
        setEmail('');
        setMessage('');

    } catch (error){
        console.error(error);
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit} id='contact-form'>
    <label htmlFor='name'>Full Name</label>
     <input
     name='name'
     type="text"
     placeholder='Your Full Name'
     {...register("name")}
     value={name}
     onChange={(e) => setName(e.target.value)}
     />
     {errors.name && <p>{errors.name?.message}</p>}
     <label htmlFor='email'>Email</label>
      <input
     name='email'
     type="email"
     placeholder='Your Email'
     {...register("email")}
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
     {errors.email && <p>{errors.email?.message}</p>}
     <label htmlFor='message'>Message</label>
     <textarea
     name='message'
     cols="30"
     rows="10"
     value={message}
     {...register("message")}
     onChange={(e) => setMessage(e.target.value)}
     >
   </textarea>
   {errors.message && <p>{errors.message?.message}</p>}
   <button type="submit">Send Email</button>
   </form>
    </div>
  );
}

export default EmailRestApi;
