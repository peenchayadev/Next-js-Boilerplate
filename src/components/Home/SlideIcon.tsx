import classNames from 'classnames'
import React from 'react'

interface MenuButtonProps {
  icon: string
  title: string
}

export const SlideIcon = (props: MenuButtonProps) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center transition-all duration-100 hover:text-black">
      <div className="flex size-[60px] items-center justify-center rounded-full">
        <i className={classNames(props.icon, 'text-[23px] text-slate-700 transition-all duration-100 group-hover:text-black')} />
      </div>
      <p className="titleSS text-center">{props.title}</p>
    </div>
  )
}
