import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaCross, FaCrow, FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  const [manubar, setManubar] = useState(false)
  const [manuToggle, setManuToggle] = useState(true)



  function manubarHandler() {
    setManuToggle(!manuToggle)
    setManubar(!manubar)
  }
  return (
    <div className='fixed w-full px-[10%] top-0 right-0 left-0 py-4 mx-auto  flex flex-row items-center justify-between bg-black '>
      <div>
        <NavLink to={'/'} className='text-white text-xl font-bold' >Blog<span className='text-orange-500'>App</span></NavLink>
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

        {/* 
        {(signIn === false) &&
          <NavLink
          className='text-xl text-primary font-semibold '
          to={'/blogs'} >Blogs</NavLink>
}
        {signIn &&
          <NavLink
          className='text-xl text-primary font-semibold '
          to={'/logout'} >Logout</NavLink>
          } */}

      </div>

      <div className='lg:flex items-center  gap-5 hidden'>
        <a className='text-white hover:text-orange-500 text-xl' href="https://github.com/jaypatel6011#"><FaGithub /></a>
        <a className='text-white hover:text-orange-500 text-xl' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHSVvpOYMozuQAAAY5W-3GYe2-m82920hhUR0J4rdd7t4IH2D5EJFAolqLbheI6m2yEwzaC9nPF1ZvrGZEi9x627Mz5MVc_UjBO8k6xVHreXe4ETLxt9uvTW3-S9qYHqEBanwo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjay-patel-350a87258"><FaLinkedin /></a>
        <NavLink className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</NavLink>
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

        <div className='fixed h-[100%]  w-[30%] bg-black flex flex-col items-center justify-center  gap-7 top-0 bottom-0 right-0 md:hidden '>
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


          <div className='flex flex-col items-center  gap-5 md:hidden'>
            <a className='text-white hover:text-orange-500 text-xl' href="https://github.com/jaypatel6011#"><FaGithub /></a>
            <a className='text-white hover:text-orange-500 text-xl' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHSVvpOYMozuQAAAY5W-3GYe2-m82920hhUR0J4rdd7t4IH2D5EJFAolqLbheI6m2yEwzaC9nPF1ZvrGZEi9x627Mz5MVc_UjBO8k6xVHreXe4ETLxt9uvTW3-S9qYHqEBanwo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjay-patel-350a87258"><FaLinkedin /></a>
            <NavLink className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</NavLink>
          </div>

        </div>
      }

    </div>
  )
}

export default Header