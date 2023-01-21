import React from 'react'
import Vector from '../assets/images/Vectors.png'
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='w-full h-full'>
      <div className='w-[323px] h-[359px] my-[160px] mx-auto items-center'>
        <h1 className='text-white text-[64px] font-normal leading-[80px] text-center font-LexendDeca'>Login</h1>
        <form>
          <input type="text" className='w-full h-[45px] mt-12 text-sm text-white font-normal pl-5 bg-from rounded-[10px] placeholder:text-white placeholder:font-normal placeholder:text-sm focus:outline-none' placeholder='Username' />
          <input type="password" className='w-full h-[45px] mt-8 text-sm text-white font-normal pl-5 bg-from rounded-[10px] placeholder:text-white placeholder:font-normal placeholder:text-sm focus:outline-none' placeholder='Password' />
          <div className='mt-[23px] flex items-center relative'>
            <input type="checkbox"  /> <label className='pl-3 text-white font-medium text-sm leading-[17px]'>Remember me</label>
            <h3 className='absolute right-0 text-green font-medium text-sm leading-[17px] cursor-pointer'>Forgot Password ?</h3>
          </div>
          <div className='relative'>
            <Link to='/judulSeminar'>
            <button className='shadow-3xl w-full h-11 rounded-[10px] text-white mt-6 bg-green text-base leading-5 font-normal'>Login</button>
            </Link>
            <Link to='/'>
              <button className='w-[40px] h-[40px] bg-green mt-20 absolute rounded-xl right-0 text-3xl content-center text-center'>
              <div className='pl-1'><MdOutlineArrowBack /></div>
              </button>
            </Link>
          </div>
        </form>
      </div>
      <img src={Vector} alt="vector" className='w-full h-[111px] absolute bottom-0 -z-20' />
    </div>
  )
}
