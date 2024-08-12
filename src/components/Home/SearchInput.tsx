import React from 'react'

export const SearchInput = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute top-0 translate-y-[80px] bg-white rounded-3xl w-full max-w-[800px] h-[57px] border border-slate-300 shadow-md flex items-center">
        <div className="flex flex-grow items-center ml-[20px]">
          <input type="text" className="flex-grow h-[20px] border-none outline-none" placeholder="ค้นหาบน Pantip" />
        </div>
        <div className="bg-orange-400 rounded-full w-[48px] h-[48px] flex items-center justify-center text-slate-100 cursor-pointer mr-[5px] hover:bg-orange-600 transition-all duration-100">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}
