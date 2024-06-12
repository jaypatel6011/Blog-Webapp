import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaCross, FaCrow, FaGithub, FaNavLinkedin } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'


const Header = () => {
  const { isAuthenticated, logOut, role } = useContext(AppContext)
  const [manubar, setManubar] = useState(false)
  const [manuToggle, setManuToggle] = useState(true)

  function manubarHandler() {
    setManuToggle(!manuToggle)
    setManubar(!manubar)
  }
  function logOutHandler(){
    logOut()
    setManuToggle(true)
    setManubar(false)

  }
  return (
    <div className='fixed w-full px-[10%] top-0 right-0 left-0 py-4 mx-auto  flex flex-row items-center justify-between bg-black '>
      <div>
        <Link to={'/'} className='text-white text-xl font-bold' >Blog<span className='text-orange-500'>App</span></Link>
      </div>

      <div className='hidden flex-row gap-7 md:flex '>
        <NavLink
          className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
          to={'/'} >Home</NavLink>

        <NavLink
          className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
          to={'/services'} >Services</NavLink>

        <NavLink
          className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
          to={'/about'} >About</NavLink>

        <NavLink
          className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
          to={'/blogs'} >Blogs</NavLink>

        <NavLink
          className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
          to={'/contact'} >Contact</NavLink>


        {/* {token &&
          <NavLink
            className='text-xl text-primary font-semibold '
            to={'/blogs'} >Blogs</NavLink>
        } */}


      </div>

      <div className='lg:flex items-center  gap-5 hidden'>
        {/* <a className='text-white hover:text-orange-500 text-xl' href="https://github.com/jaypatel6011#"><FaGithub /></a>
        <a className='text-white hover:text-orange-500 text-xl' href="https://www.NavLinkedin.com/authwall?trk=bf&trkInfo=AQHSVvpOYMozuQAAAY5W-3GYe2-m82920hhUR0J4rdd7t4IH2D5EJFAolqLbheI6m2yEwzaC9nPF1ZvrGZEi9x627Mz5MVc_UjBO8k6xVHreXe4ETLxt9uvTW3-S9qYHqEBanwo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.NavLinkedin.com%2Fin%2Fjay-patel-350a87258"><FaNavLinkedin /></a> */}

        {!isAuthenticated &&
          <Link className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-white' to={'/register'}>Register</Link>

          // <NavLink
          // className='text-xl text-primary font-semibold '
          // to={'/logout'} >Logout</NavLink>
        }

        {!isAuthenticated &&
          <Link className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</Link>

          // <NavLink
          // className='text-xl text-primary font-semibold '
          // to={'/logout'} >Logout</NavLink>
        }

        {role == "Admin" &&


          <Link className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/admin/addBlog'}>Add Blog</Link>

          // <NavLink
          // className='text-xl text-primary font-semibold '
          // to={'/logout'} >Logout</NavLink>
        }
        {isAuthenticated &&


          <button className='bg-orange-500 px-4 py-2 rounded-lg text-white' onClick={logOut}>Logout</button>

          // <NavLink
          // className='text-xl text-primary font-semibold '
          // to={'/logout'} >Logout</NavLink>
        }

        {/* {role &&
          <NavLink className='bg-pink-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</NavLink>

          // <NavLink
          // className='text-xl text-primary font-semibold '
          // to={'/logout'} >Logout</NavLink>
        } */}
      </div>

      {
        manuToggle ?
          <div className='text-white z-50 text-xl relative hover:text-orange-500 flex md:hidden' onClick={manubarHandler}>
            <FaBars />
          </div> :
          <div className='text-white z-50 text-xl relative skew-x-12 hover:text-orange-500 flex md:hidden' onClick={manubarHandler}>
            <FaBars />
          </div>
      }

      {manubar &&

        <div className='fixed h-[100%]  w-[50%] bg-black flex flex-col items-center justify-center  gap-7 top-0 bottom-0 right-0 md:hidden '>
          <NavLink
            className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
            to={'/'} onClick={() =>{ setManubar(false); setManuToggle(true) }} >Home</NavLink>

          <NavLink
            className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
            to={'/services'} onClick={() =>{ setManubar(false); setManuToggle(true) }} >Services</NavLink>

          <NavLink
            className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
            to={'/about'} onClick={() =>{ setManubar(false); setManuToggle(true) }} >About</NavLink>

          <NavLink
            className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
            to={'/blogs'} onClick={() =>{ setManubar(false); setManuToggle(true) }} >Blogs</NavLink>

          <NavLink
            className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
            to={'/contact'} onClick={() =>{ setManubar(false); setManuToggle(true) }} >Contact</NavLink>


          <div className='flex flex-col items-center  gap-5 md:hidden'>
            {/* <a className='text-white hover:text-orange-500 text-xl' href="https://github.com/jaypatel6011#"><FaGithub /></a>
            <a className='text-white hover:text-orange-500 text-xl' href="https://www.NavLinkedin.com/authwall?trk=bf&trkInfo=AQHSVvpOYMozuQAAAY5W-3GYe2-m82920hhUR0J4rdd7t4IH2D5EJFAolqLbheI6m2yEwzaC9nPF1ZvrGZEi9x627Mz5MVc_UjBO8k6xVHreXe4ETLxt9uvTW3-S9qYHqEBanwo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.NavLinkedin.com%2Fin%2Fjay-patel-350a87258"><FaNavLinkedin /></a> */}
            {/* <NavLink className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</NavLink> */}
            {!isAuthenticated &&
          <Link  
          onClick={() =>{ setManubar(false); setManuToggle(true) }} 
          className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-white' to={'/register'}>Register</Link>

        }

        {!isAuthenticated &&
          <Link
          onClick={() =>{ setManubar(false); setManuToggle(true) }}
          className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</Link>

          
        }

        {role == "Admin" &&


          <Link 
          onClick={() =>{ setManubar(false); setManuToggle(true) }}
          className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/admin/addBlog'}>Add Blog</Link>

         
        }
        {isAuthenticated &&


          <button 
          onClick={
            logOutHandler
          }
          className='bg-orange-500 px-4 py-2 rounded-lg text-white'>Logout</button>

          // <NavLink
          // className='text-xl text-primary font-semibold '
          // to={'/logout'} >Logout</NavLink>
        }
          </div>

        </div>
      }

    </div>
  )
}

export default Header