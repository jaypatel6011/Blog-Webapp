import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaBars, FaCross, FaCrow, FaGithub, FaNavLinkedin } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
import { navData } from '../Data/useNavData'
import { adminNavData } from '../Data/adminNavData'


const Header = () => {
  const { isAuthenticated, logOut, role, userId } = useContext(AppContext)
  const [manubar, setManubar] = useState(false)
  const [manuToggle, setManuToggle] = useState(true)
  const navigate = useNavigate()

  function manubarHandler() {
    setManuToggle(!manuToggle)
    setManubar(!manubar)
  }
  function logOutHandler() {
    logOut()
    setManuToggle(true)
    setManubar(false)
    navigate("/")

  }
  return (
    <div className='fixed w-full px-[10%] top-0 right-0 left-0 py-4 mx-auto  flex flex-row items-center justify-between bg-black '>
      <div>
        <Link to={'/'} className='text-white text-xl font-bold' >Blog<span className='text-orange-500'>App</span></Link>
      </div>

      {role == "Admin" ?
        (
          <div className='hidden flex-row gap-7 md:flex '>

            {
              adminNavData.map((data, index) => (
                <NavLink key={index}
                  className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
                  to={data.link} >{data.label}</NavLink>
              ))
            }

          </div>
        ) : (
          <div className='hidden flex-row gap-7 md:flex '>

            {
              navData.map((data, index) => (
                <NavLink key={index}
                  className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
                  to={data.link} >{data.label}</NavLink>
              ))
            }

          </div>
        )

      }

      <div className='lg:flex items-center  gap-5 hidden'>

        {!isAuthenticated &&
          <div className='flex sm:flex-row flex-col gap-7 text-center'>
            <Link
              onClick={() => { setManubar(false); setManuToggle(true) }}
              className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-white' to={'/register'}>Register</Link>


            <Link
              onClick={() => { setManubar(false); setManuToggle(true) }}
              className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</Link>

          </div>

        }

        
        {isAuthenticated &&


          <button className='bg-orange-500 px-4 py-2 rounded-full text-white' onClick={logOutHandler}>Logout</button>

        }
        {isAuthenticated &&
              <Link to={`/profile/${userId}`}
              onClick={() => { setManubar(false); setManuToggle(true) }} >
              <i className="ri-user-3-fill rounded-full text-white text-2xl p-1 border-2 border-orange-500 "></i>
              </Link>
            }

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

          {
            role == "Admin" ? 
            (
            <div className='flex flex-col gap-5 '>
              {
                adminNavData.map((data, index) => (
                  <NavLink key={index}
                    className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
                    to={data.link} onClick={() => { setManubar(false); setManuToggle(true) }} >{data.label}</NavLink>
                ))
              }
            </div>) : 
            (<div className='flex flex-col gap-5'>
              {
                navData.map((data, index) => (
                  <NavLink
                    key={index}
                    className='text-xl text-white hover:text-orange-500 hover:border-b-2 border-orange-500'
                    to={data.link} onClick={() => { setManubar(false); setManuToggle(true) }} >{data.label}</NavLink>
                ))
              }
            </div>)
          }

          <div className='flex flex-col items-center  gap-5 md:hidden'>
            {!isAuthenticated &&
              <div className='flex sm:flex-row flex-col gap-7 text-center'>
                <Link
                  onClick={() => { setManubar(false); setManuToggle(true) }}
                  className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-white' to={'/register'}>Register</Link>


                <Link
                  onClick={() => { setManubar(false); setManuToggle(true) }}
                  className='bg-orange-500 px-4 py-2 rounded-lg text-white' to={'/login'}>Login</Link>

              </div>

            }

           


            
            {isAuthenticated &&
              <Link to={`/profile/${userId}`}
              onClick={() => { setManubar(false); setManuToggle(true) }} >
              <i className="ri-user-3-fill rounded-full text-white text-2xl p-1 border-2 border-orange-500 "></i>
              </Link>
            }
            {isAuthenticated &&


<button
  onClick={
    logOutHandler
  }
  className='bg-orange-500 px-4 py-2 rounded-lg text-white'>Logout</button>

}
          </div>

        </div>
      }

    </div>
  )
}

export default Header