import React, { useState } from 'react'
import allData from '../allData'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PostAuthor from '../components/PostAuthor';
import Title from './navPage/Title';

const AuthorPosts = () => {

  const location = useLocation()
  const authorName = location.pathname.split('/').at(-1).replaceAll('%20', ' ');
  // console.log(authorName);

  return (
    <div>
       <Title title={`${authorName}`}/>
      {

        allData.map((dataName) => (
          <div key={dataName.id} className='bg-pink-300 w-[95%] md:w-[50%] lg:w-[30%] mb-8 mx-auto'>

            {
            dataName.author == authorName && 

              

              <div>
                <div className='lg:w-[100%] w-[100%] shadow-sm shadow-black hover:shadow-md hover:shadow-black mx-auto bg-white p-4 pb-8 transition-all duration-300 rounded-md'>

                  <div >
                    <img
                      className='w-full h-64 mx-auto mb-2 rounded-md'
                      src={dataName.image} alt={dataName.title} />
                  </div>

                  <div className=' mt-6 mx-auto'>

                    <NavLink to={`/blog/${dataName.id}`}>
                      <h3 className='text-[20px] font-bold mx-0 my-4 hover:text-blue-500'>{dataName.title}</h3>
                    </NavLink>

                    <p className='text-[16px]'>{dataName.content}</p>

                    <div className='w-full flex justify-between items-center'>
                      <PostAuthor data={dataName} />

                      <NavLink
                        className=' bg-primary text-white px-3 py-1 mt-[13px] rounded-lg flex  hover:bg-gray-600 transition-all duration-300'
                        to={`/blogs/${dataName.category}`}>{dataName.category}

                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

            }
          </div>
        ))

      }
    </div>

  )
}


export default AuthorPosts