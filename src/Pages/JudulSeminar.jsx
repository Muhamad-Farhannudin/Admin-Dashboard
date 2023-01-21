import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../assets/images/Profile.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

export default function JudulSeminar() {
  const [startDate, setStartDate] = useState("");
  return (
    <>
      <div className="flex font-Mulish bg-white">
        <Sidebar />
        <div className="w-full">
          <div className="flex justify-between px-[30px] my-[30px] items-center w-full h-[44px]  text-primary">
            <h1 className="text-2xl font-bold leading-[30px]">Judul Seminar</h1>
            <div className="flex items-center">
              <h3 className="pr-[14px] text-base font-Muli leading-5 uppercase font-semibold">kurniawan</h3>
              <img src={Profile} className="w-11 h-11" alt="profile" />
            </div>
          </div>
          <div className="w-full px-8 pt-4">
            <h1 className="text-lg pt-8 pl-8 font-bold leading-[30px]">Judul Seminar</h1>
            <div className="w-full pt-[52px]">
              <div className="w-1/2 mx-auto flex flex-col">
                <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Judul Seminar</label>
                <input type="text" placeholder="Judul Seminar" className="bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
              </div>
              <div className="w-1/2 mx-auto flex flex-col pt-10">
                <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Waktu Pelaksanaan</label>
                <div className="relative">
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Waktu Pelaksanaan" className="w-full bg-transparent border-input cursor-pointer rounded-lg p-3 relative z-20" />
                  <svg className="absolute top-3 right-3 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 2H8C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V4H14V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V4C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V18C20 18.7956 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7956 21 17 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2ZM15 4H16V3H15V4ZM8 4V3H7V4H8ZM6 5C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V8H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H6ZM4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V9H4V18ZM12 13H17V18H12V13ZM13 14V17H16V14H13Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-1/2 mx-auto flex flex-col pt-10">
                <label className="font-inter mb-2 text-sm font-normal text-[#828282]">Nama Pembicara</label>
                <input type="text" placeholder="Nama Pembicara" className="bg-[#F2F2F2]/40 border-input rounded-lg p-3" />
              </div>
            </div>
            <div className="w-1/2 mx-auto flex justify-between pt-12 ">
              <Link to='/'>
                <button className="w-[40px] h-[40px] bg-green text-white rounded-xl right-0 text-3xl content-center text-center">
                  <div className="pl-1">
                    <MdOutlineArrowBack />
                  </div>
                </button>
              </Link>
              <Link to='/aplikasiSeminar'>
                <button className='text-white py-2 px-3 rounded-[4px] bg-[#2B4BF2] uppercase'>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
