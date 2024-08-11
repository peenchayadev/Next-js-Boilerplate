import _ from 'lodash'
import React from 'react'

import { HightlightCard } from './Highligt-card'

export const Highlight = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="bg-white border border-[#DDDDDD] w-full max-w-[1200px] mx-auto mt-[50px] rounded-2xl shadow-md overflow-hidden">
      <div className="py-4 px-6 flex items-center justify-between border-b border-[#DDDDDD]">
        <p className="text-xl font-semibold">Highlight</p>
      </div>
      <div className="py-4">
        <div className="px-[20px] flex gap-[30px] ">
          <HightlightCard />
          <HightlightCard />
          <HightlightCard />
          <HightlightCard />
        </div>
      </div>
    </div>
  )
}
