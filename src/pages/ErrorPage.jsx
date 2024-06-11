import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center space-y-5 '>
        <h2 className=' font-bold text-2xl'>Page Not Found</h2>
        <Link 
        className='text-white bg-primary py-1 px-3 rounded-lg'
        to={'/'} >
          <button>Go Back Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage