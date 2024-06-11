import React from 'react'
import Title from './Title'
import photos from '../image/about.png'
import author1 from '../image/user-01.png'
import author2 from '../image/user-02.png'
import author3 from '../image/user-03.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full'>
        <div>
            <Title title={'About Page'} subTitle={''}/>
        </div>

        
    < div className = 'max-w-full overflow-hidden' >
      <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:pl-[10%] md:pr-[10%] mt-[60px] justify-center '>
        {/* video */}
        <img
          className='w-full mx-auto rounded-lg border p-3 shadow-sm shadow-black '
          src={photos} alt="..." />
        <div className=' w-[85%] mx-auto my-auto flex flex-col gap-4' >

        <div className='flex flex-col items-center justify-center gap-8 '>
          <p className='text-orange-500 font-semibold'>Who we are</p>
          <h2 className='text-2xl text-black font-bold'>We provide high quality Articles & blogs</h2>
          <p className='text-[#333]'>Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos congue dui nec dui lobortis maximus.</p>
          <p className='text-[#333]'>Curabitur pretium, libero vitae pharetra rhoncus, tellus urna auctor orci, eu dictum diam diam nec neque. Pellentesque. </p>
        </div>
        
        </div>
      </div>
</div >


<div className='mt-16'>
  <h2 className='text-center text-xl font-bold'>Top Authors</h2>
  
<div className='mt-12 w-full md:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>
  <div className=' flex flex-col items-center justify-center gap-5'>
 <Link to={'/blog/user/Natasha%20Lomas'} className=' flex flex-col items-center justify-center gap-5'>
 <img className='w-[200px] aspect-square rounded-full my-auto ' src={author1} alt="" />
  <p className=' font-semibold'>Natasha Lomas</p>
 </Link>
  </div> 
  
 
  <div className=' flex flex-col items-center justify-center gap-5'>
  <Link to={'/blog/user/Ron%20Miller'}className=' flex flex-col items-center justify-center gap-5'>
  <img className='w-[200px] aspect-square rounded-full my-auto ' src={author2} alt="" />
  <p className=' font-semibold'>Ron Miller</p>
    </Link>
  </div>

  <div className=' flex flex-col items-center justify-center gap-5'>
  <Link to={'/blog/user/Carly%20Page'} className=' flex flex-col items-center justify-center gap-5'>
  <img className='w-[200px] aspect-square rounded-full my-auto ' src={author3} alt="" />
  <p className=' font-semibold'>Carly Page</p>
  </Link>
  </div>

</div>
</div>


    </div>
  )
}

export default About