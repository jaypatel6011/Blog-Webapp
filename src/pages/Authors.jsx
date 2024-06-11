import React, { useContext, useState } from 'react'
import robot from '../Image/robot.jpg'
import { Link } from 'react-router-dom'
import Title from './navPage/Title'
import { AppContext } from '../context/AppContext'



const Authors = () => {

  const {blogs} = useContext(AppContext)

  return (
    <div className='my-14'>
       <Title title={'Authors'}/>
      <div>
        {blogs.length > 0 ?
          <div className='grid grid-cols-1 w-[90%] mt-11 mx-auto md:grid-cols-3 lg:grid-cols-4 gap-12'>
            {
              blogs.map((authorsData,index) => {
                return (
                <div key={index}>
                  <Link 
                  className='bg-white p-4 rounded-lg flex transition-all duration-300 hover:shadow-lg gap-6 items-center'
                  to={`/blog/user/${authorsData.author}`}>

                    <div>
                      <img 
                      className='w-[5rem] aspect-square rounded-full border border-bg_color overflow-hidden'
                      src={authorsData.authorPic} alt="" />
                    </div>

                    <div>
                      <h4 className='font-bold '>{authorsData.author}</h4>
                      <p className=' mt-1 '>{authorsData.category}</p>
                    </div>
                    
                  </Link>
                </div>
                )
              })
            }
          </div> : <h2 className='text-center font-bold text-2xl '>No user/author found.</h2>
        }
      </div>
    </div>
  )
}

export default Authors