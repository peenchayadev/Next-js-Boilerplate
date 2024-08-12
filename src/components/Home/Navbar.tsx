'use client'
import React from 'react'
import { LoginButton } from './LoginButton'

export const Navbar = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="bg-white w-full h-[175px] shadow-sm px-[90px] py-[20px]">
      <div className="flex items-center justify-between">
        <div className='flex items-center'>
          <a href="/">
            <img src="/logo.png" className="w-[80px] object-cover" />
          </a>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="mr-[25px] flex gap-[20px]">
            <div className='hover:text-slate-400 transition-all duration-100'>
              <a href="#" className="flex items-center">
                <i className="fa-regular fa-comment mr-2"></i>
                <span className="titleM">ตั้งกระทู้</span>
              </a>
            </div>
            <div className='hover:text-slate-400 transition-all duration-100'>
              <a href="#" className="flex items-center">
                <i className="fa-solid fa-users mr-2"></i> 
                <span className="titleM">คอมมูนิตี้ </span>
              </a>
            </div>
          </div>
          <div>
            <LoginButton images="" icon="fa-solid fa-bars" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}
