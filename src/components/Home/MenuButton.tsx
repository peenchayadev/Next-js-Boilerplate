import classNames from 'classnames'
import React from 'react'

interface MenuButtonProps {
  icon: string
  title: string
}

export const MenuButton = (props: MenuButtonProps) => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="flex flex-col items-center ">
    <div className="bg-red-400 rounded-full w-[60px] h-[60px] cursor-pointer flex items-center justify-center  hover:bg-red-600 transition-all duration-100">
      <i className={classNames(props.icon,'text-white text-[23px]')}></i>
    </div>
    <p className="text-center titleS mt-[4px]">{props.title}</p>
  </div>
  )
}
