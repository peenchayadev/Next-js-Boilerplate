'use client'
import React from 'react'
import { LoginButton } from './LoginButton'

export const Navbar = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="bg-white w-full h-[70px] shadow-sm px-[60px] py-[10px]">
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <a href="/">
            <img src="/logo.png" className="w-[80px] object-cover" />
          </a>
        </div>
        <div className="flex items-center gap-[10px]">
          <div>ตั้งกระทู้</div>
          <div>คอมมูนิตี้</div>
          <div>
          <i className="fa-solid fa-bars"></i>
            <LoginButton images="" icon='fa-solid fa-bars' onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}
