import React from 'react'
import { Link } from 'react-router-dom'



const PostAuthor = ({data}) => {
  return (
    <div>
      <Link to={`/blogs/author`}>
        <div className=' flex flex-row justify-start gap-4 items-center mt-4 '>
          <div>
            <img
              className=' w-16 h-16 rounded-full item-center'
              src={data.authorPic} alt="Avatar" />
          </div>
          <div className='flex flex-col items-start'>
            <h5 className=' font-bold '>By: {data.author}</h5>
            <small className='text-gray-600 '>posted by {data.published_date} </small>
          </div>
        </div>

      </Link>
    </div>
  )
}

export default PostAuthor