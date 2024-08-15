'use client'

import Image from 'next/image'
import React from 'react'

import { LoginButton } from './LoginButton'

export const Navbar = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="h-[175px] w-full bg-white px-[50px] py-[20px] tablet:px-[40] mobile:px-[20px] shadow-sm mobile:h-[100px] tablet:h-[100px] ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" aria-label="Home">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-cover" />
          </a>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="mr-[25px] flex gap-[20px] mobile:gap-[4px] mobile:mr-[1px] tablet:mr-[1px] tablet:gap-[4px] mobile:hidden">
            <div className="transition-all duration-100 hover:text-slate-400">
              <a href="/community" className="flex items-center" aria-label="Community">
                <i className="fa-solid fa-users mr-2 " />
                <span className="titleM mobile:hidden tablet:hidden">คอมมูนิตี้</span>
              </a>
            </div>
            <div className="transition-all duration-100 hover:text-slate-400">
              <a href="/create-post" className="flex items-center" aria-label="Create Post">
                <i className="fa-regular fa-comment mr-2" />
                <span className="titleM mobile:hidden tablet:hidden">ตั้งกระทู้</span>
              </a>
            </div>
          </div>
          <div className="desktop:hidden">
            <i className="fa-solid fa-magnifying-glass cursor-pointer" />
          </div>
          <div>
            <LoginButton icon="fa-solid fa-bars" />
          </div>
        </div>
      </div>
    </div>
  )
}
