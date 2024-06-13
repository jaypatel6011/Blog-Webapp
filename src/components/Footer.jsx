import React from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../Data/footer.data'

const Footer = () => {
  return (
    <div className='w-full mt-16 bg-gray-900'>
      <div className=' grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-white p-[6rem]'>
        
        {
          footerData.map((data, index) => (
            <Link key={index}
              className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300 '
              to={data.link}>{data.label}</Link>
          ))
        }

      </div>
      <div className='w-full bg-gray-900 text-white flex justify-center py-4 items-center border-t-2 border-gray-400'>
        <small>All Rights Reserved &copy; Copyright, JAY PATEL</small>
      </div>
    </div>
  )
}

export default Footer