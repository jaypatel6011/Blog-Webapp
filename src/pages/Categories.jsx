import React from 'react'
import { useLocation } from 'react-router-dom'
import allData from '../allData'
import PostAuthor from '../components/PostAuthor'
import { NavLink } from 'react-router-dom'
import Title from './navPage/Title'


const Categories = () => {
  const location = useLocation()
  const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');

  

  return (
    <div className='w-full'>
                <Title title={`${category}`}/>


      {

        allData.map((dataCategory) => (
          <div key={dataCategory.id} className=' w-[95%] md:w-[30%] mb-8 mx-auto'>

            {dataCategory.category === category &&


              <div>
                <div className='lg:w-[100%] w-[100%]  shadow-sm shadow-black hover:shadow-md hover:shadow-black mx-auto bg-white p-4 pb-8 transition-all duration-300 rounded-md'>

                  <div >
                    <img
                      className='w-full h-64 mx-auto mb-2 rounded-md'
                      src={dataCategory.image} alt={dataCategory.title} />
                  </div>

                  <div className=' mt-6 mx-auto'>

                    <NavLink to={`/blog/${dataCategory.id}`}>
                      <h3 className='text-[20px] font-bold mx-0 my-4 hover:text-blue-500'>{dataCategory.title}</h3>
                    </NavLink>

                    <p className='text-[16px]'>{dataCategory.content}</p>

                    <div className='w-full flex justify-between items-center'>
                      <PostAuthor data={dataCategory} />

                      <NavLink
                        className=' bg-primary text-white px-3 py-1 mt-[13px] rounded-lg flex  hover:bg-gray-600 transition-all duration-300'
                        to={`/blogs/${dataCategory.category}`}>{dataCategory.category}

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

export default Categories