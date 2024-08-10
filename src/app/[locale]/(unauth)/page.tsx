import _ from 'lodash'
import React from 'react'

import { Navbar } from '@/components/Home/Navbar'
import { SearchInput } from '@/components/Home/SearchInput'
import { MenuButton } from '@/components/Home/MenuButton'
import { Announce } from '@/components/Home/Announce'

export default function Home() {
  //---------------------
  //   CONST
  //---------------------
  const titleName = [
    { tile: 'หน้าแรก', icon: '' },
    { tile: 'My Feed', icon: '' },
    { tile: 'Pantip Pick', icon: '' },
    { tile: 'Pantip Hitz', icon: '' },
    { tile: 'Explore', icon: '' },
    { tile: 'แลกพอยต์', icon: '' },
    { tile: 'กิจกรรมพันทิป', icon: '' },
  ]
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="w-full h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <img src="https://ptcdn.info/doodle/2024/66b5c85bcaac0a8b5c20c8c4_lw5pwzhspq.png" className="w-full object-cover" />
      </div>
      <div className="flex justify-center">
        <SearchInput />
      </div>
      <div className="px-[60px]">
        <div className="mt-[60px] flex justify-center items-center">
          {_.map(titleName, (item, i) => (
            <div key={`menu${i}`} className='ml-[50px]'>
              <MenuButton icon={item.icon} title={item.tile} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Announce/>
      </div>
    </div>
  )
}
