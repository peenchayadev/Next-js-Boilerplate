'use client'

import React from 'react'

import { LoginButton } from './LoginButton'

export const Navbar = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="h-[175px] w-full bg-white px-[90px] py-[20px] shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" className="w-[80px] object-cover" />
          </a>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="mr-[25px] flex gap-[20px]">
            <div className="transition-all duration-100 hover:text-slate-400">
              <a href="#" className="flex items-center">
                <i className="fa-regular fa-comment mr-2" />
                <span className="titleM">ตั้งกระทู้</span>
              </a>
            </div>
            <div className="transition-all duration-100 hover:text-slate-400">
              <a href="#" className="flex items-center">
                <i className="fa-solid fa-users mr-2" />
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
