import React from 'react'
import Logo1 from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to='/'>
    <div className='flex items-center cursor-pointer'>
      <img className='w-8 h-8' src={Logo1} alt="logo" />
      <h1 className='font-Muli text-[#A4A6B3] hover:text-white text-[19px] leading-[22px] pl-3'>WEBINAR</h1>
    </div>
    </Link>
  )
}
