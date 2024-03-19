import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaEdit, FaCheck } from 'react-icons/fa'

const avatarUrl = "https://cdn.thecodehelp.in/Jaipur.jpeg";

const UserProfile = () => {


  const [avatar, setAvatar] = useState('')

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  console.log(userData)

  function formChangeHandler(event) {
    setUserData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    }
    )
  }
  return (
    <div className='w-full'>
      <div className='w-full flex flex-col items-center justify-between gap-y-10'>
        <NavLink
          className=' bg-primary font-bold text-white  px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'

          to={'/myposts/sdfsdf'} >My Posts</NavLink>

        <div className='w-full flex flex-col items-center justify-between'>
          <div className='w-full flex flex-col items-center justify-between space-y-5'>
            <div className='relative  rounded-full w-[200px] h-[200px] bg-cover'>
              <img
                className=' [15rem] aspect-square rounded-full border-8 border-white overflow-hidden'
                src={avatarUrl} alt="" />
              <button className='p-3 text-white bottom-[1.4rem] right-[1rem] absolute rounded-full bg-primary'><FaCheck /></button>

            </div>
            <form className='w-[50%] mx-auto' >
              <input
                className=' hidden'
                type="file" name='avatar' id='avatar' onChange={(e) => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label
                className='hidden'
                htmlFor="avatar"><FaEdit /></label>
            </form>
          </div>
          <h1 className='text-2xl font-bold mt-10 mb-5'>Jay Patel</h1>

          <form className='w-full flex flex-col justify-between gap-8'>

            <p className=' w-[80%] md:w-[50%]  mx-auto  bg-red py-2 text-white rounded-lg px-2'>This is an error Message</p>
            <input
              className=' w-[80%] md:w-[50%]  mx-auto py-2 rounded-lg px-2'
              type="text"
              placeholder='Full Name'
              name='name'
              value={userData.name}
              onChange={formChangeHandler} />

            <input
              className=' w-[80%] md:w-[50%] mx-auto py-2 rounded-lg px-2'
              type="email"
              placeholder='Enter Email ID'
              name='email'
              value={userData.email}
              onChange={formChangeHandler} />

            <input
              className=' w-[80%] md:w-[50%]  mx-auto py-2 rounded-lg px-2'
              type="password"
              placeholder='Enter Current Password'
              name='password'
              value={userData.password}
              onChange={formChangeHandler} />

            <input
              className=' w-[80%] md:w-[50%] mx-auto py-2 rounded-lg px-2'
              type="password"
              placeholder='Enter New Password'
              name='password2'
              value={userData.password2}
              onChange={formChangeHandler} />

            <button type='submit'
              className='w-[30%] mx-auto bg-primary text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-all duration-300'
            >Update Details</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default UserProfile