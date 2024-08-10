import React from 'react'
import classNames from 'classnames'

interface LoginButtonProps {
  icon?: string
  images: string
}

export const LoginButton = (props: LoginButtonProps) => {
  return (
    <div className="bg-white rounded-2xl px-[5px] py-[5px] border border-slate-400 w-fit h-fit">
      <div className="flex gap-[5px] justify-center items-center">
      <FontAwesomeIcon icon="fa-solid fa-bars" />
        <div className="bg-white rounded-full w-[32px] h-[32px] border border-slate-400"></div>
      </div>
    </div>
  )
}
