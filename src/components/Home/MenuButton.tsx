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
    <div className="bg-red-400 rounded-full w-[60px] h-[60px] cursor-pointer flex items-center justify-center">
      <i className={classNames(props.icon)}></i>
    </div>
    <p className="text-center">{props.title}</p>
  </div>
  )
}
