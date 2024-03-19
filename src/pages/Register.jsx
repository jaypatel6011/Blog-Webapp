import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  console.log(userData)

  function registerChangeHandler(event) {
    setUserData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    }

    )
  }
  return (
    <div className='w-full text-center mt-20'>
      <div className='w-[80%] md:w-[50%] mx-auto flex flex-col justify-between gap-12'>
        <h2 className='text-2xl font-bold '>Sign Up</h2>
        <form  className='w-full flex flex-col justify-between gap-8'>

          {/* <p className=' bg-red py-2 text-white rounded-lg px-2'>This is an error Message</p> */}
          <input 
          className='py-2 rounded-lg px-2'
          type="text"
            placeholder='Full Name'
            name='name'
            value={userData.name}
            onChange={registerChangeHandler} 
            required />

          <input 
          className='py-2 rounded-lg px-2'
          type="email"
            placeholder='Enter Email ID'
            name='email'
            value={userData.email}
            onChange={registerChangeHandler} 
            required />

          <input 
          className='py-2 rounded-lg px-2'
          type="password"
            placeholder='Enter Password'
            name='password'
            value={userData.password}
            onChange={registerChangeHandler}
            required />

          <input 
          className='py-2 rounded-lg px-2'
          type="password"
            placeholder='Enter Confirm Password'
            name='password2'
            value={userData.password2}
            onChange={registerChangeHandler}
            required />

            <button type='submit'
        className='w-[30%] bg-primary text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-all duration-300'
        >Register</button>

        </form>
        <small className='text-start font-semibold'>Already have an account? <NavLink className='text-primary font-semibold' to={'/login'}>Sign in</NavLink></small>
      </div>
    </div>
  )
}

export default Register