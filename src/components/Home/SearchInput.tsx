import React from 'react'

export const SearchInput = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute top-0 flex h-[57px] w-full max-w-[800px] translate-y-[80px] items-center rounded-3xl border border-slate-300 bg-white shadow-md">
        <div className="ml-[20px] flex grow items-center">
          <input type="text" className="h-[20px] grow border-none outline-none" placeholder="ค้นหาบน Pantip" />
        </div>
        <div className="mr-[5px] flex size-[48px] cursor-pointer items-center justify-center rounded-full bg-orange-400 text-slate-100 transition-all duration-100 hover:bg-orange-600">
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
    </div>
  )
}
