import React, { useState, useCallback} from 'react'
import Image from '../assets/images/image-1.png'
import Sertifikat from '../assets/images/sertifikat.png'
import BgImage from '../assets/images/bg-image-1.png'
import { MdArrowBackIos } from "react-icons/md";
import { useRef } from 'react';
// import Pagination from './Pagination';
import '../index.css'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Main() {
  
  const [show, setShow] = useState(false);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  return (
    
    <>
      <div  className="flex w-[1440px] mx-auto scrollbar-hide">
      <img className='w-[1400px] absolute translate-y-12 right-0 -z-20' src={BgImage} alt="bg-1" />
        <div className='w-1/2 pt-[77px] px-5 relative'>
            <img className='w-[477px] h-[586px] absolute top-0 right-0 mt-[77px]' src={Image} alt="bg-2" />
        </div>
        <div className='px-10 w-2/3 relative'>
          <div className='mt-[174px]'>
            <h1 className='text-[64px] text-white font-semibold leading-[72px]'>Selamat <span className='block'>Datang</span></h1>
            <Link to='/login'>
              <button className='mt-8 text-white text-lg bg-btn-home px-10 py-2 rounded-3xl cursor-pointer uppercase'>Login</button>
            </Link>
            {show ? 
            <div className='w-[328px] h-[399px] mb-4 bg-white absolute -translate-x-40 translate-y-14 rounded-2xl top-0 right-0'>
              <div className='w-full h-[163px] mx-auto mt-4'>
                <Swiper
                  ref={sliderRef}
                  spaceBetween={30}
                  navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                  }}
                  pagination={{
                    el: ".swiper-custom-pagination",
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  >
                  <SwiperSlide><img src={Sertifikat} alt="Sertifikat" /></SwiperSlide>
                  <SwiperSlide><img src={Sertifikat} alt="Sertifikat" /></SwiperSlide>
                  <SwiperSlide><img src={Sertifikat} alt="Sertifikat" /></SwiperSlide>
                  <SwiperSlide><img src={Sertifikat} alt="Sertifikat" /></SwiperSlide>
                </Swiper>
              </div>
              <div className='h-[56px] mt-6 px-6 flex items-center'>
                <p className='text-[19px] font-bold leading-6'>Desain E-Sertifikat</p>
              </div>
              <div className='h-[36px] mt-2 px-6'>
                <p className='text-sm font-normal text-[#151920]/50 leading-5'>pilih yang anda sukai </p>
                <div className='w-1/4 mx-auto pt-4'>
                  <div className='swiper-custom-pagination flex justify-between' />
                </div>
              </div>
              <div className='flex justify-between px-4 pt-8'>
                <button onClick={handlePrev} className='.review-swiper-button-prev text-151920/50 px-8 rounded-lg py-3 border-[#151920]/50 border-2 bg-white flex items-center justify-center'>
                  <MdArrowBackIos />Previous</button>
                <button onClick={handleNext} className='.review-swiper-button-next text-white px-12 rounded-lg py-3 bg-[#2B4BF2]'>Next</button>
              </div>
            </div>
            
            : <button onClick={() => setShow(true)} className='mt-8 text-white text-lg bg-btn-orange px-8 py-2 rounded-3xl cursor-pointer uppercase ml-[90px] z-40'>Desain E-Sertifikat</button>}
            
          </div>
        </div>
      </div>
    </>
  )
}
