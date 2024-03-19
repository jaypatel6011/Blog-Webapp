import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <div className='w-full flex flex-col text-center items-center justify-center gap-8 bg-black h-[300px] my-14'>
        <div className='text-white text-5xl font-bold '>{title}</div>
        <div className='w-[80%] mx-auto text-white '>{subTitle}</div>

    </div>
  )
}

export default Title