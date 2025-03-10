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
    <>
      <div>
        <div className='mx-1 mt-28 lg:mx-28 flex flex-col items-center'>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-72 lg:w-96 rounded-sm p-4'>
            <label 
              htmlFor="name" 
              className='text-sm font-white text-black pt-4 pb-1'
            >Full name:</label>
            <input
              type="text"
              className='rounded-sm px-2 py-1 bg-white'
              {...register('name')}
            />
            {errors.name && <p className='text-xs text-black'>{errors.name.message}</p>}

            <label 
              htmlFor="subject"
              className='text-sm font-white text-black pt-4 pb-1'
            >Subject:</label>
            <input
              type="text"
              className='rounded-sm px-2 py-1 bg-white '
              {...register('subject')}
            />
            {errors.subject && <p className='text-xs text-black'>{errors.subject.message}</p>}

            <label 
              htmlFor="email"
              className='text-sm font-white text-black pt-4 pb-1'
            >Your email:</label>
            <input
              type="email"
              className='rounded-sm px-2 py-1 bg-white'
              {...register('email')}
            />
            {errors.email && <p className='text-xs text-black'>{errors.email.message}</p>}

            <label 
              htmlFor="body"
              className='text-sm font-white text-black pt-4 pb-1'
            >Body:</label>
            <textarea 
              className='rounded-sm px-2 py-1 bg-white'
              {...register('body')}
            />
            {errors.body && <p className='text-xs text-black'>{errors.body.message}</p>}

            {isSubmittedSuccessfully && <p className="text-black mt-2">Form submitted successfully!</p>}

            <button 
              type="submit"
              className='border border-white px-2 py-1.5 hover:bg-white hover:text-black mt-8 rounded-sm'
            >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}