import classNames from 'classnames'
import React, { useState } from 'react'

interface LoginButtonProps {
  icon: string
}

const LoginModal = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="absolute right-[50px] mobile:right-[20px] z-10 w-[200px] translate-y-[45px] rounded-3xl border border-[#DDDDDD] bg-white p-[10px]">
      <div>
        <div className="mb-[5px] rounded-md px-[5px] transition-all hover:bg-slate-300">ลงทะเบียน</div>
        <div className="border border-b-slate-100"></div>
        <div className="rounded-md px-[5px] transition-all hover:bg-slate-300">เข้าสู่ระบบ</div>
      </div>
    </div>
  )
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen)
          }
        }}
        type="button"
        aria-label="Login Button"
        className="size-full bg-transparent border-none p-0"
      >
        <div className="flex items-center justify-center">
          <i className={classNames(props.icon)} />
          <div className="ml-[10px] size-[32px] flex items-center justify-center rounded-full border border-[#DDDDDD] bg-slate-600 overflow-hidden">
            <i className="fa-solid fa-user translate-y-[4px] text-[25px] text-white" />
          </div>
        </div>
      </button>
    </div>
  )
}
