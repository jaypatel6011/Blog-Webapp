import React from 'react'
import { FaCss3 } from 'react-icons/fa'
import image from '../Image/about.png'

const ServiceCard = () => {

    const cardData = [
        {
            img: `${image}`,
            title: "Refreshing Design",
            desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.            "
        },
        {
            img: `${image}`,
            title: "Based on Tailwind CSS",
            desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        },
        {
            img: `${image}`,
            title: "300+ Components",
            desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        },
        {
            img: `${image}`,
            title: "Speed Optimized",
            desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        },
        {
            img: `${image}`,
            title: "Fully Customizable",
            desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        },
        {
            img: `${image}`,
            title: "Regular Updates",
            desc: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
        },
    ]
  return (
    <div className='w-[95%] md:w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
        {
            cardData.map((data) => (
                <div className='space-y-3 shadow-sm hover:shadow-md hover:shadow-black shadow-black px-3 py-3'>
                    <img className=' rounded-lg' src={data.img} alt="" />
                    <h3 className='text-xl font-bold '>{data.title}</h3>
                    <p className='text-[#333]'>{data.desc}</p>
                </div>
            ))
        }

        

    </div>
  )
}

export default ServiceCard