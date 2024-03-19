import React from 'react'
import Title from './Title'
import ServiceCard from '../../components/ServiceCard'

const Services = () => {
  return (
    <div className='w-full'>
        <div>
            <Title title={'Service Page'} subTitle={''}/>
        </div>
        <div className='w-[80%] md:w-[50%] mx-auto text-center mt-16'>
          <p className='text-orange-500 font-semibold'>Our Services</p>
          <h2 className='text-2xl text-black font-bold'>What We Offer</h2>
          <p className='text-[#333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quidem sint laudantium, omnis excepturi deserunt reiciendis totam blanditiis necessitatibus maxime? </p>
        </div>
        <div className='w-full'><ServiceCard/></div>
    </div>
  )
}

export default Services