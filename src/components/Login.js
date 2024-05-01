import React from 'react'
import Header from './Header'

const Login = () => {

  return (
    <div>
      <Header/>
      <div className='absolute bg-gradient-to-b to-black'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg' alt=''/>
      </div> 
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className=' font-bold text-3xl py-4 '>Sign In</h1>
        <input type='text' placeholder='Email or mobile number' className='p-2 m-2'/>
        <input type='text' placeholder='Email or mobile number' className='p-2 m-2'/>
        <button className='p-4 m-4'>Sign In</button>
      </form>
    </div>
  )
}

export default Login
