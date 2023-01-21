import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../assets/images/Profile.png";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Share() {
    return (
        <>
        <div className="flex font-Mulish bg-white">
            <Sidebar />
            <div className="w-full">
            <div className="flex justify-between px-[30px] my-[30px] items-center w-full h-[44px]  text-primary">
                <h1 className="text-2xl font-bold leading-[30px]">Share</h1>
                <div className="flex items-center">
                <h3 className="pr-[14px] text-base font-Muli leading-5 uppercase font-semibold">kurniawan</h3>
                <img src={Profile} className="w-11 h-11" alt="profile" />
                </div>
            </div>
            <div className="w-full px-8 pt-4">
                <div className="w-full pt-[52px]">
                <div className="w-1/2 mx-auto flex flex-col">
                    <label className="font-inter mb-2 text-sm font-normal text-[#828282]">No Peserta</label>
                    <input type="text" placeholder="No" className="bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
                </div>
                <div className="w-1/2 mx-auto flex flex-col pt-10">
                    <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Massage</label>
                    <input type="text" placeholder="Massage" className="bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
                </div>
                <div className="w-1/2 mx-auto flex flex-col pt-10">
                    <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Nomor Anda</label>
                    <input type="text" placeholder="Nomor" className="bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
                </div>
                </div>
                <div className="w-1/2 mx-auto flex justify-between pt-12 ">
                <Link to='/pembuatanSertifikat'>
                    <button className="w-[40px] h-[40px] bg-green text-white rounded-xl right-0 text-3xl content-center text-center">
                        <div className="pl-1">
                        <MdOutlineArrowBack />
                        </div>
                    </button>
                </Link>
                <Link to='/pembuatanSertifikat'>
                    <button className="text-white py-2 px-3 rounded-[4px] bg-[#2B4BF2] uppercase">Next</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
