import React, {useState} from 'react'
import Sidebar from "../components/Sidebar";
import Profile from "../assets/images/Profile.png";
import { MdOutlineArrowBack } from "react-icons/md";
import Modal from '../components/Modal'
import { Link } from 'react-router-dom';

export default function PembuatanSertifikat() {
const [modal, setModal] = useState(false);
  return (
    <>
    {modal && <Modal 
        closeModal={() => setModal(false)}
    />}
    <div className="flex font-Mulish bg-white">
        <Sidebar />
        <div className="w-full">
        <div className="flex justify-between px-[30px] my-[30px] items-center w-full h-[44px]  text-primary">
            <h1 className="text-2xl font-bold leading-[30px]">Pembuatan Sertifikat</h1>
            <div className="flex items-center">
            <h3 className="pr-[14px] text-base font-Muli leading-5 uppercase font-semibold">kurniawan</h3>
            <img src={Profile} className="w-11 h-11" alt="profile" />
            </div>
        </div>
        <div className="w-full px-8 pt-4">
            <div className="w-full pt-[52px]">
            <div className="w-1/2 mx-auto flex flex-col">
                <label className="font-inter mb-2 text-sm font-normal text-[#828282]">List Peserta</label>
                <input type="text" placeholder="No" className="bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
            </div>
            <div className="w-1/2 mx-auto flex flex-col pt-10">
                <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Nama dan Tanda Tangan</label>
                <div className='flex items-center justify-between'>
                    <input type="text" placeholder="Nama dan Tanda Tangan" className="w-full bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
                    <div className='ml-4 cursor-pointer'>
                        <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1667 0.333496H5.66668C2.98418 0.333496 0.833344 1.96516 0.833344 4.00016V26.0002C0.833344 26.9726 1.34257 27.9052 2.24899 28.5929C3.15542 29.2805 4.3848 29.6668 5.66668 29.6668H44.3333C45.6152 29.6668 46.8446 29.2805 47.751 28.5929C48.6575 27.9052 49.1667 26.9726 49.1667 26.0002V7.66683C49.1667 6.69437 48.6575 5.76174 47.751 5.0741C46.8446 4.38647 45.6152 4.00016 44.3333 4.00016H25L20.1667 0.333496Z" fill="#2D9CDB"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto flex flex-col pt-10">
                <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Tampilan Desain Sertifikat</label>
                <button onClick={() => setModal(true)} className='w-full bg-[#0074DB] py-3 text-left pl-[10px] font-normal text-base leading-4 text-white rounded'>Desain Sertifikat</button>
            </div>
            </div>
            <div className="w-1/2 mx-auto flex justify-between pt-12 ">
            <Link to='/share'>
                <button className="w-[40px] h-[40px] bg-green text-white rounded-xl right-0 text-3xl content-center text-center">
                    <div className="pl-1">
                    <MdOutlineArrowBack />
                    </div>
                </button>
            </Link>
            <Link to='/'>
                <button className="text-white py-2 px-3 rounded-[4px] bg-[#2B4BF2] uppercase">Next</button>
            </Link>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
