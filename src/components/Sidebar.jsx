import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Beranda from '../assets/images/SideBar/Beranda.png'
import AplikasiSeminar from '../assets/images/SideBar/AplikasiSeminar.png'
import JudulSeminar from '../assets/images/SideBar/JudulSeminar.png'
import PembuatanSertifikat from '../assets/images/SideBar/PembuatanSertifikat.png'
import Share from '../assets/images/SideBar/Share.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation();
  const [nav, setNav] = useState('Judul Seminar');
  console.log(location.pathname)
  useEffect(() => {
    if(location.pathname.includes('judulSeminar') ) {
      setNav('Judul Seminar')
    } else if (location.pathname.includes('aplikasiSeminar')) {
      setNav('Aplikasi Seminar')
    } else if (location.pathname.includes('share')) {
      setNav('Share')
    } else if (location.pathname.includes('pembuatanSertifikat')) {
      setNav('Pembuatan Sertifikat')
    }
    console.log('run') 
  },[]);

  
  // const [show, setShow] = useState(false);

  const changeNav = (e) => {
    setNav(e)
  }
  return (
        <div className='max-w-[255px] w-full h-[693px] bg-[#093545]'>
          <div className='pt-[41px] pl-8'>
            <Logo />
          </div>
          <ul className='pt-[81px]'>
            <li className='pl-8 h-[56px] flex items-center cursor-pointer'>
              <img src={Beranda} alt="beranda" className='w-4 h-4' />
              <h3 className='font-normal text-base leading-5 text-[#DDE2FF] font-Mulish pl-6'>Beranda</h3>
            </li>
            {/* {show ? <li onClick={() => setShow(false)} className='relative pl-8 w-full h-[56px] flex items-center cursor-pointer bg-[#9FA2B4]/[0.08]'>
              <span className='bg-white w-[3px] h-full absolute left-0'></span>
              <img src={JudulSeminar} alt="JudulSeminar" className='w-4 h-4' />
              <h3 className='font-normal text-base leading-5 text-[#A4A6B3] font-Mulish pl-6'>Judul Seminar</h3>
            </li> 
            : 
            } */}
            <Link to='/judulSeminar'>
            <li className={'relative pl-8 h-[56px] flex items-center cursor-pointer ' + (nav === 'Judul Seminar' ? 'bg-[#9FA2B4]/[0.08]' : '' )}> 
              {nav === 'Judul Seminar' ? <span className='bg-white w-[3px] h-full absolute left-0'></span> : ''}
              <img src={JudulSeminar} alt="JudulSeminar" className='w-4 h-4' />
              <h3 className='font-normal text-base leading-5 text-[#A4A6B3] font-Mulish pl-6'>Judul Seminar</h3>
            </li> </Link>
            <Link to='/aplikasiSeminar' className={'relative pl-8 h-[56px] flex items-center cursor-pointer ' + (nav === 'Aplikasi Seminar' ? 'bg-[#9FA2B4]/[0.08]' : '' )}>
              {nav === 'Aplikasi Seminar' ? <span className='bg-white w-[3px] h-full absolute left-0'></span> : ''}
              <img src={AplikasiSeminar} alt="AplikasiSeminar" className='w-4 h-4' />
              <h3 className='font-normal text-base leading-5 text-[#A4A6B3] font-Mulish pl-6'>Aplikasi Seminar</h3>
            </Link>
            <Link to='/share' className={'relative pl-8 h-[56px] flex items-center cursor-pointer ' + (nav === 'Share' ? 'bg-[#9FA2B4]/[0.08]' : '' )}>
              {nav === 'Share' ? <span className='bg-white w-[3px] h-full absolute left-0'></span> : ''} 
              <img src={Share} alt="Share" className='w-4 h-4' />
              <h3 className='font-normal text-base leading-5 text-[#A4A6B3] font-Mulish pl-6'>Share</h3>
            </Link>
            <Link to='/pembuatanSertifikat' className={'relative pl-8 h-[56px] flex items-center cursor-pointer ' + (nav === 'Pembuatan Sertifikat' ? 'bg-[#9FA2B4]/[0.08]' : '' )}>
              {nav === 'Pembuatan Sertifikat' ? <span className='bg-white w-[3px] h-full absolute left-0'></span> : ''} 
              <img src={PembuatanSertifikat} alt="PembuatanSertifikat" className='w-4 h-4' />
              <h3 className='font-normal text-base leading-5 text-[#A4A6B3] font-Mulish pl-6'>Pembuatan Sertifikat</h3>
            </Link>
          </ul>
        </div>
  )
}