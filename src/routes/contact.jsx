import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required('This field is required').min(3, 'Name must be at least 3 characters long'),
  subject: yup.string().required('This field is required').min(3, 'Subject must be at least 3 characters long'),
  email: yup.string().required('This field is required').email('Email must be a valid email address'),
  body: yup.string().required('This field is required').min(3, 'Body must be at least 3 characters long'),
});

export function Contact() {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = data => {
    console.log('Form submission is successful.', data);
    setIsSubmittedSuccessfully(true);
    reset({
      name: '',
      subject: '',
      email: '',
      body: '',
    });  
  };

  return (
      <div>
        <div>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Full name:</label>
            <input
              type="text"
              className='border'
              {...register('name')}
            />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              className='border '
              {...register('subject')}
            />
            {errors.subject && <p className='text-red-500'>{errors.subject.message}</p>}

            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              className='border'
              {...register('email')}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

            <label htmlFor="body">Body:</label>
            <textarea 
              className='border'
              {...register('body')}
            />
            {errors.body && <p className='text-red-500'>{errors.body.message}</p>}

            {isSubmittedSuccessfully && <p>Form submitted successfully!</p>}

            <button 
              type="submit"
              className='border hover:bg-black hover:text-white'
            >Submit</button>
          </form>
        </div>
      </div>
  );
}