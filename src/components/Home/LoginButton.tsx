import React, { useState } from 'react'
import classNames from 'classnames'

interface LoginButtonProps {
  onClick: () => void
  icon: string
  images: string
}

export const LoginButton = (props: LoginButtonProps) => {
  //---------------------
  //   STATES
  //---------------------
  const [isOpen, setIsOpen] = useState(false)

  //---------------------
  //   RENDER
  //---------------------
  return (
    <div
      className={classNames('bg-white rounded-3xl py-[5px] border border-[#DDDDDD] w-[90px] h-fit cursor-pointer transition-all', {
        'hover:bg-slate-300': isOpen === false,
      })}
    >
      {isOpen && <LoginModal />}
      <div onClick={() => setIsOpen(!isOpen)} onKeyDown={() => setIsOpen(!isOpen)}>
        <div className="flex justify-center items-center">
          <i className={classNames(props.icon)}></i>
          <div className="bg-slate-600 rounded-full w-[32px] h-[32px] border border-[#DDDDDD] ml-[10px] flex items-center justify-center">
            <i className="fa-solid fa-user text-white text-[25px] translate-y-[4px]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LoginModal = () => {
  //---------------------
  //   RENDER
  //---------------------

  return (
    <div className="z-[10] fixed bg-white border border-[#DDDDDD] w-[200px] p-[10px] right-[61px] translate-y-[45px] rounded-3xl">
      <div>
        <div className="mb-[5px]  hover:bg-slate-300 transition-all rounded-md px-[5px]">ลงทะเบียน</div>
        <div className="hover:bg-slate-300 transition-all rounded-md px-[5px]">เข้าสู่ระบบ</div>
      </div>
    </div>
  )
}
