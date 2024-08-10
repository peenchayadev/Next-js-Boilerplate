import React from 'react'

interface LoginButtonProps {
  icon?: string
  images: string
}

export const LoginButton = (props: LoginButtonProps) => {
  return (
    <div className="bg-white rounded-2xl px-[5px] py-[5px] border border-slate-300 w-fit h-fit">
      <div className='flex gap-[5px] '>
        <div>sssssssssss</div>
        <div className="bg-black rounded-full w-[32px] h-[32px]"></div>
      </div>
    </div>
  )
}
