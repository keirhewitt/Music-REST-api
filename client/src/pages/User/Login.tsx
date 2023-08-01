import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";

/* Login form validation schema */
import { loginSchema } from '../../config/form.validation';

const Login = () => {

  const { register, handleSubmit, reset, formState: {errors}, } = useForm({ 
    resolver: yupResolver(loginSchema)
  });

  /* TODO: Implement Login functionality */
  async function onSubmit (data: any) {
    console.log(JSON.stringify(data));
  }

  return (
    <div className='w-5/6 flex m-auto h-screen'>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='w-[300px] m-auto flex flex-col justify-around px-3 py-6 bg-slate-50 rounded-lg'>
        
        {/* Email Input */}
        <div className='relative mb-1'>
          <label htmlFor='emailInput'>Email</label>
          <input
            type='text' 
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}/>
            <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        {/* Password Input */}
        <div className='relative mb-1'>
          <label htmlFor='password'>Password</label>
          <input 
            type='password' 
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}     
            {...register("password")} 
            id='password'/>
            <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        {/* Submit Button */}
        <input className='btn btn-primary mt-3' type='submit' value='Login' />

      </form>
    </div>
  )
}

export default Login