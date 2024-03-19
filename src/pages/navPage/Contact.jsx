import React, { useState } from 'react'
import Title from './Title'
import contact from './contact.png'
import {FaArrowRight} from 'react-icons/fa'



const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  console.log(formData);

  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    }

    )
  }

  return (
    <div>
      <div>
        <Title title={'Contact Page'} subTitle={''} />
      </div>

      <div className='flex flex-col gap-16 mt-16'>
        <div>
          <img className='w-[80%] mx-auto' src={contact} alt="" />
        </div>
        <div>
          <form className='  mx-auto flex flex-col items-center justify-center gap-16 mb-16'>


            <input
              className='md:w-[50%] w-[80%] p-3 rounded-lg shadow-lg border-[1px] border-gray-500 '
              type="text"
              onChange={changeHandler}
              name='name'
              placeholder='Enter Your Name'
              value={formData.name}
              required
            />

            <input
              className='md:w-[50%] w-[80%] p-3 rounded-lg shadow-lg border-[1px] border-gray-500'
              type="tel"
              onChange={changeHandler}
              name='phone'
              placeholder='Enter Your Phone Number'
              value={formData.phone}
              required

            />

            <input
              className='md:w-[50%] w-[80%] p-3 rounded-lg shadow-lg border-[1px] border-gray-500'
              type="email"
              onChange={changeHandler}
              name='email'
              placeholder='Enter Your Email Id'
              value={formData.email}
              required
            />
            <textarea
              className='md:w-[50%] w-[80%] h-[300px] p-3 rounded-lg shadow-lg border-[1px] border-gray-500'
              onChange={changeHandler}
              name='message'
              placeholder='Enter Your Message'
              value={formData.message}
              required
            />




            <button type='submit' className='bg-black text-white px-4 py-2 flex items-center gap-2 
justify-center delay-3000 rounded-full'

            >Submit now
              <FaArrowRight />
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
