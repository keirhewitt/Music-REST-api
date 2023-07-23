import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import swal from 'sweetalert'

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

const Register = () => {

  const { register, handleSubmit, formState: {errors}, } = useForm()

  const registerUser = async (creds) => {
    return axios.post('http://localhost:8000/swordfishtrombone/api/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(data => data.json())
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.reload;
      });
    } else {
      swal("Failed", response.message, "error");
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