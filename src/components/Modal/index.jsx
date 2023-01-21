import React from 'react'

export default function index({closeModal, data}) {
  return (
    <div className='data-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/20'>
      <div className="absolute bottom-44 translate-x-36">
        <div className={`border-0 rounded-2xl shadow-modal relative flex flex-col bg-[#EFEFEF] outline-none focus:outline-none w-[328px] h-[182px]`}>
        <div className='text-center px-5 h-max p-6 bg-[#F8F9FA] rounded-2xl'>
            <h3 className='font-bold text-xl pb-4'>Notif</h3>
            <p className='text-[#151920]/50 font-normal text-sm uppercase'>Berhasil Terkirim</p>
            <button onClick={closeModal} className='bg-[#2B4BF2] py-2 block w-full text-white mt-5 rounded-lg' >Kembali</button>
        </div>
        </div>
      </div>
    </div>
  )
}
