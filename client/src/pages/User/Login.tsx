import React from 'react'

const textBoxStyle = 
`peer block min-h-[auto] w-full rounded border bg-transparent 
px-3 py-[0.32rem] leading-[1.6] outline-none transition-all 
duration-200 ease-linear focus:placeholder:opacity-100 
peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
motion-reduce:transition-none dark:text-neutral-200 
dark:placeholder:text-neutral-200 dark:peer-focus:text-primary 
[&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`
const submitButtonStyle = 
`rounded-sm bg-lime-500 hover:bg-lime-400 py-2 px-4 transition duration-100`
const labelStyle = 
`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] 
truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all 
duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
dark:text-neutral-200 dark:peer-focus:text-primary`

const Login = () => {

  const handleSubmit = (e: Event) => {

  }

  return (
    <div className='w-5/6 flex m-auto h-screen'>
      <form className='w-[300px] h-[300px] m-auto flex flex-col justify-around p-3 bg-dark rounded-lg' action='' method='POST'>
        <div className='relative mb-3' data-te-input-wrapper-init>
          <input className={textBoxStyle} type="text" id='emailInput' placeholder='Email'/>
          <label htmlFor='emailInput' className={labelStyle}>Email</label>
        </div>
        <div className='relative mb-3' data-te-input-wrapper-init>
          <input className={textBoxStyle} type='password' id='password' placeholder='Password'/>
          <label htmlFor='password' className={labelStyle}>Password</label>
        </div>
        <input className={submitButtonStyle} type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login