import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between pt-14 px-[90px] w-[1440px] mx-auto'>
      <Link to='/'>
        <h1 className='text-secondary text-lg cursor-pointer uppercase'>Webinar</h1>
      </Link>
      <div>
      <Link to='/Login'>
        <button className='text-secondary text-lg uppercase pr-4'>Login</button>
      </Link>
      <Link to='/Daftar'>
        <button className='text-white text-lg bg-btn-home px-10 py-2 rounded-3xl cursor-pointer uppercase'>Daftar</button>
      </Link>
      </div>
    </div>
  )
}
