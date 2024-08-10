import React, { useState } from 'react'
import classNames from 'classnames';


interface LoginButtonProps {
  onClick: () => void
  icon : string
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
    <div className={classNames('bg-white rounded-3xl px-[8px] py-[5px] border border-[#DDDDDD] w-[90px] h-fit cursor-pointer transition-all',
      {'hover:bg-slate-300' : isOpen === false})

    }>
      {isOpen && <LoginModal />}
      <div onClick={() => setIsOpen(!isOpen)} onKeyDown={() => setIsOpen(!isOpen)} className="flex gap-[5px] justify-center items-center">
        <div>
        <i className={classNames(props.icon)}></i>
        </div>
        <div className="bg-black rounded-full w-[32px] h-[32px] border border-[#DDDDDD]"></div>
      </div>
    </div>
  )
}

export const LoginModal = () => {
  //---------------------
  //   RENDER
  //---------------------

  return <div className="z-[10] fixed bg-white border border-[#DDDDDD] w-[200px] p-[10px] right-[61px] translate-y-[45px] rounded-3xl">
    <div>
      <div className='mb-[5px]  hover:bg-slate-300 transition-all rounded-md px-[5px]'>ลงทะเบียน</div>
      <div className='hover:bg-slate-300 transition-all rounded-md px-[5px]'>เข้าสู่ระบบ</div>
    </div>
  </div>
}
