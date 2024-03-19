import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

  const [userData, setUserData] = useState({

    email: '',
    password: ''

  })

  console.log(userData)

  function logInerChangeHandler(event) {
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
        <h2 className='text-2xl font-bold '>Sign In</h2>
        <form className='w-full flex flex-col justify-between gap-8'>

          {/* <p className=' bg-red py-2 text-white rounded-lg px-2'>This is an error Message</p> */}

          <input
            className='py-2 rounded-lg px-2'
            type="text"
            placeholder='Enter Email ID'
            name='email'
            value={userData.email}
            onChange={logInerChangeHandler}
            required />

          <input
            className='py-2 rounded-lg px-2 '
            type="password"
            placeholder='Enter Password'
            name='password'
            value={userData.password}
            onChange={logInerChangeHandler}
            required />



          <button type='submit'
            className='w-[30%] bg-primary text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-all duration-300'
          >Login</button>

        </form>
        <small className='text-start font-semibold'>Don't have an account? <NavLink className='text-primary font-semibold' to={'/register'}>Sign Up</NavLink></small>
      </div>
    </div>
  )
}



export default Login