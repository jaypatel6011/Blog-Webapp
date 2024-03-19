import React, { useState } from 'react'
import data from '../allData'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {


  const [posts, setPosts] = useState(data)



  return (
    <div className='w-full'>
      {
        posts.length > 0 ? (
          <div className='w-full'>
            {
              posts.map((post) => {
                return (
                  <div
                    className='w-[90%] mx-auto flex items-center justify-between mt-6 bg-gray-300 px-3 p-2 rounded-lg'
                    key={post.id}>
                    <div className='flex gap-7 s'>
                      <div>
                        <img
                          className='h-[40px]'
                          src={post.thumbnail} alt="" />
                      </div>
                      <h5 className='font-semibold'>{post.title}</h5>
                    </div>
                    <div className='flex gap-6'>
                      <NavLink
                        className='bg-white font-semibold text-black px-2 py-1 rounded-lg'
                        to={`/posts/${post.id}`} >View</NavLink>

                      <NavLink
                        className='bg-primary font-semibold text-white px-2 py-1 rounded-lg'
                        to={`/posts/${post.id}/edit`} >edit</NavLink>

                      <NavLink to={`/posts/${post.id}/detete`}
                        className=' bg-red font-semibold text-white px-2 py-1 rounded-lg'
                      >Delete</NavLink>
                    </div>
                  </div>
                )
              })
            }
          </div>
        ) : <div>No Posts</div>
      }
    </div>
  )
}

export default Dashboard