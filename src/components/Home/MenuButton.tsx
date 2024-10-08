import classNames from 'classnames'
import React from 'react'

interface MenuButtonProps {
  icon: string
  title: string
}

export const MenuButton = (props: MenuButtonProps) => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="flex size-[60px] cursor-pointer items-center justify-center  rounded-full bg-red-400 transition-all duration-100 hover:bg-red-600">
        <i className={classNames(props.icon, 'text-white text-[23px]')} />
      </div>
      <p className="titleS mt-[4px] text-center text-nowrap">{props.title}</p>
    </div>
  )
}
