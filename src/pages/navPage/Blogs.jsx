import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import PostItem from '../../components/PostItem'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'



const Blogs = () => {
  const {blogs, fetchAllBlog} = useContext(AppContext)
  const [loading, setLoading] = useState(false)



 useEffect(() => {
  setLoading(true)
  fetchAllBlog()
  setLoading(false)
 },[])
  return (
    <div>
        <div className='mb-16'>
            <Title title={'Blogs Page'} subTitle={''}/>
        </div>
        {
          loading ? (<Loading />): (
            <div>
              {
          blogs.length > 0 ?
        <div  className='  w-[100%] md:w-[95%]  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-y-16 
        lg:px-[10%]'>
          {
            blogs.map((data) =>

              (<PostItem key={data.id} data={data} />)
              )
          }
        </div>:
        <div>
          <h2 className='w-full  text-2xl font-bold flex justify-center'>Data Not Found</h2>
          </div>
       
      }
            </div>
          )
        }
    </div>
  )
}

export default Blogs