import React from 'react'
import { NavLink } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({data}) => {

  let title = data.title;
  let desc = data.content;

  let shortDescription = desc.length > 145 ? desc.substr(0,145)+'....' : desc;
  let shortTitle = title.length > 30 ? title.substr(0,30)+'...' : title;


  return (

    <div className= 'lg:w-[100%] w-[100%] shadow-sm shadow-black hover:shadow-md hover:shadow-black mx-auto bg-white p-4 pb-8 transition-all duration-300 rounded-md'>

      <div>
        <img 
         className='w-full h-64 mx-auto mb-2 rounded-md'
        src={data.image} alt={data.title} />
      </div>

      <div className=' mt-6 mx-auto'>

        <NavLink to={`/blog/${data.id}`}>
          <h3 className='text-[20px] font-bold mx-0 my-4 hover:text-blue-500'>{shortTitle}</h3>
        </NavLink>


        <p className='text-[16px]'>{shortDescription}</p>

        <div className='w-full flex justify-between items-center'>
          <PostAuthor data={data} />

          <NavLink 
        className= ' bg-primary text-white px-3 py-1 mt-[13px] rounded-lg flex  hover:bg-gray-600 transition-all duration-300'
          to={`/blogs/${data.category}`}>{data.category}
        
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default PostItem