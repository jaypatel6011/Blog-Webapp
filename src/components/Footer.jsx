import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full mt-16 bg-gray-900'>
      <div className='w-full mx-auto grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-white p-[6rem]'>
        
        <NavLink
        className='bg-gray-700  text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'/blogs/Health'}>Health</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'/blogs/Fintech'}>Fintech</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'/blogs/Startups'}>Startups</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'/blogs/AI'}>AI</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'/blogs/Security'}>Security</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'blogs/Enterprise'}>Enterprise</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
        to={'/blogs/Growth'}>Growth</NavLink>

        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
         to={'/blogs/Apps'}>Apps</NavLink>
        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
         to={'/blogs/Work'}>Work</NavLink>
        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
         to={'/blogs/Gadgets'}>Gadgets</NavLink>
        <NavLink 
        className='bg-gray-700 text-white px-3 py-1 rounded-lg hover:text-black hover:bg-white transition-all duration-300'
         to={'/blogs/Tech'}>Tech</NavLink>
        
      </div>
      <div className='w-full bg-gray-900 text-white flex justify-center py-4 items-center border-t-2 border-gray-400'>
        <small>All Rights Reserved &copy; Copyright, JAY PATEL</small>
      </div>
    </div>
  )
}

export default Footer