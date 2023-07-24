import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import swal from 'sweetalert'
import axios from 'axios'

/** Tailwind styles */
const textBoxStyle = 
`peer block min-h-[auto] w-full rounded border bg-transparent 
px-3 py-[0.32rem] leading-[1.6] outline-none transition-all 
duration-200 ease-linear focus:placeholder:opacity-100 
peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
motion-reduce:transition-none dark:text-neutral-200 
dark:placeholder:text-neutral-200 dark:peer-focus:text-primary 
[&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`
const submitButtonStyle = 
`rounded-sm bg-lime-400 hover:bg-lime-500 py-2 px-4 transition duration-100`
const labelStyle = 
`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] 
truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all 
duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
dark:text-neutral-200 dark:peer-focus:text-primary`

/** Register a User */
const Register = () => {

  const { register, handleSubmit, formState: {errors}, } = useForm()

  /* JSONify credentials, create POST request and send to url */
  const registerUser = async (creds) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/swordfishtrombone/api/v1/user/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(creds)
    };

    const response = await axios.request(config)
    return response.data;
  }

  const onSubmit = async (data) => {
    const response = await registerUser({
      email: data.email,
      password: data.password
    });
    if ('token' in response) {
      swal("Success", "Account registered.", "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', JSON.stringify(response));
        window.location.reload();
      });
    } else {
      swal("Failed", "Account failed to register.", "error");
    }
  }

  return (
    <div className='w-5/6 flex m-auto h-screen'>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='w-[300px] h-[300px] m-auto flex flex-col justify-around p-3 bg-dark rounded-lg'>
        <div className='relative mb-3' data-te-input-wrapper-init>
          <input
            type='text' 
            className={textBoxStyle} 
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}/>
          <label 
            for='emailInput' 
            className={labelStyle}>Email</label>
        </div>
        <div className='relative mb-3' data-te-input-wrapper-init>
          <input 
            type='password' 
            className={textBoxStyle} 
            {...register("password", { required: true })} 
            id='password'/>
          <label for='password' className={labelStyle}>Password</label>
        </div>
        <div className='relative mb-3' data-te-input-wrapper-init>
          <input 
            type='password' 
            className={textBoxStyle}
            {...register("confirmpassword", { required: true })}  
            id='confirm-password'/>
          <label 
            for='confirm-password' 
            className={labelStyle}>Confirm Password</label>
        </div>
        <input className={submitButtonStyle} type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register