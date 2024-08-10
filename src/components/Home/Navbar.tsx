import React from 'react'

import { LoginButton } from './LoginButton'

export const Navbar = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="bg-white w-full h-[70px] shadow-sm px-[60px] py-[10px]">
      <div className="flex items-center">
        <div>
          <img src="/logo.png" className="w-[80px] object-cover" />
        </div>
        <div>
          <LoginButton icon='fa-solid fa-bars' images=''/>
        </div>
      </div>
    </div>
  )
}
