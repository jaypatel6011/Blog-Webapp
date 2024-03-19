import React from 'react'
import Title from './Title'
import allData from '../../allData'
import PostItem from '../../components/PostItem'



const Blogs = () => {
  return (
    <div>
        <div className='mb-16'>
            <Title title={'Blogs Page'} subTitle={''}/>
        </div>
        {
          allData.length > 0 ?
        <div  className='  w-[100%]  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-y-16 
        lg:px-[10%]'>
          {
            allData.map((data) =>

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

export default Blogs