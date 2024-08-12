import classNames from 'classnames'
import React from 'react'

interface MenuButtonProps {
  icon: string
  title: string
}

export const SlideIcon = (props: MenuButtonProps) => {
  return (
    <div className="flex flex-col items-center hover:text-black transition-all duration-100 cursor-pointer group">
      <div className="rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <i className={classNames(props.icon, 'text-[23px] text-slate-700 transition-all duration-100 group-hover:text-black')}></i>
      </div>
      <p className="text-center titleSS">{props.title}</p>
    </div>
  )
}
