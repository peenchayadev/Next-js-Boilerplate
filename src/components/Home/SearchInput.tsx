export const SearchInput = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="z-[20] sticky top-0 bg-white rounded-3xl w-[800px] h-[40px] border border-slate-300 shadow-md translate-y-[-20px] flex items-center">
    <div className="flex flex-grow items-center ml-[20px]">
      <input 
        type="text" 
        className="flex-grow h-[20px] border-none outline-none" 
        placeholder="ค้นหาบน Pantip" 
      />
    </div>
    <div className="bg-orange-400 rounded-3xl w-[60px] h-[40px] flex items-center justify-center text-slate-100 cursor-pointer">
      ค้นหา
    </div>
  </div>
  )
}
