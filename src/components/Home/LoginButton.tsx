import classNames from 'classnames'
import React, { useState } from 'react'

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
        <div className="flex items-center justify-center">
          <i className={classNames(props.icon)} />
          <div className="ml-[10px] flex size-[32px] items-center justify-center rounded-full border border-[#DDDDDD] bg-slate-600">
            <i className="fa-solid fa-user translate-y-[4px] text-[25px] text-white" />
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
    <div className="fixed right-[61px] z-10 w-[200px] translate-y-[45px] rounded-3xl border border-[#DDDDDD] bg-white p-[10px]">
      <div>
        <div className="mb-[5px]  rounded-md px-[5px] transition-all hover:bg-slate-300">ลงทะเบียน</div>
        <div className="rounded-md px-[5px] transition-all hover:bg-slate-300">เข้าสู่ระบบ</div>
      </div>
    </div>
  )
}
