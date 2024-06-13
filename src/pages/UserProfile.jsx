import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaEdit, FaCheck } from 'react-icons/fa'
import Title from './navPage/Title';
import { AppContext } from '../context/AppContext';

// const avatarUrl = "https://cdn.thec zodehelp.in/Jaipur.jpeg";


const UserProfile = () => {
  const location = useLocation()
  const id = location.pathname.split('/').at(-1).replaceAll('-', ' ');
  console.log(id);
  const navigate = useNavigate()


  const { fetchUserById, updateUserById } = useContext(AppContext)


  const [userData, setUserData] = useState('')

  useEffect(() => {
    async function fetched() {
      const result = await fetchUserById(id)
      setUserData(result.data.data)
      console.log(result)

    }
    fetched()
  }, [])

  function formChangeHandler(event) {
    setUserData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    }
    )
  }

  async function submitHandler(event){
    event.preventDefault()
    const result = await updateUserById({
      name:userData.name, 
      email:userData.email, 
      password:userData.password, 
      newPassword:userData.newPassword, 
      id
      })
      
    // .then(() => navigate("/"))
  }
  return (
    <div className='w-full'>
      
      <Title title={"Profile"} />
      <div className='w-full flex flex-col items-center justify-between gap-y-10'>
        <Link
          className=' bg-primary font-bold text-white  px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'

          to={'/admin/myposts'} >My Posts</Link>

        <div className='w-full flex flex-col items-center justify-between'>
          <div className='w-full flex flex-col items-center justify-between space-y-5'>
            {/* <form className='w-[50%] mx-auto' >
              <input
                className=' hidden'
                type="file" name='avatar' id='avatar' onChange={(e) => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label
                className='hidden'
                htmlFor="avatar"><FaEdit /></label>
            </form> */}
          </div>
          <h1 className='text-2xl font-bold mt-10 mb-5'>{userData.name}</h1>

          <form onClick={submitHandler} className='w-full flex flex-col justify-between gap-8'>

            {/* <p className=' w-[80%] md:w-[50%]  mx-auto  bg-red py-2 text-white rounded-lg px-2'>This is an error Message</p> */}
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
              value={userData.newPassword}
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