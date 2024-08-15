'use client'

import _ from 'lodash'
import React from 'react'

import { HighlightCard } from '@/components/Home/Highligt-card'
import { MenuButton } from '@/components/Home/MenuButton'
import { Navbar } from '@/components/Home/Navbar'
import { SearchInput } from '@/components/Home/SearchInput'
import { SlideIcon } from '@/components/Home/SlideIcon'

export default function Home() {
  //---------------------
  //   CONST
  //---------------------
  const titleName = [
    { tile: 'หน้าแรก', icon: 'fa-solid fa-house' },
    { tile: 'My Feed', icon: 'fa-solid fa-comments' },
    { tile: 'Pantip Pick', icon: 'fa-solid fa-thumbs-up' },
    { tile: 'Pantip Hitz', icon: 'fa-solid fa-star' },
    { tile: 'Explore', icon: 'fa-regular fa-compass' },
    { tile: 'แลกพอยต์', icon: 'fa-regular fa-star' },
    { tile: 'กิจกรรมพันทิป', icon: 'fa-solid fa-gift' },
  ]

  const IconName = [
    { tile: 'ซิลิคอนวัลเลย์', icon: 'fa-solid fa-house' },
    { tile: 'กรีนโซน', icon: 'fa-solid fa-comments' },
    { tile: 'กล้อง', icon: 'fa-solid fa-thumbs-up' },
    { tile: 'แก็ดเจ็ด', icon: 'fa-solid fa-star' },
    { tile: 'ไกลบ้าน', icon: 'fa-regular fa-compass' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
    { tile: 'เฉลิมกรุง', icon: 'fa-regular fa-star' },
  ]

  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className=" w-full mx-auto mb-[50px]">
      <div>
        <Navbar />
        <div className="flex justify-center w-full tablet:hidden mobile:hidden">
          <SearchInput />
        </div>
      </div>
      <div className="px-[60px] overflow-hidden mobile:px-[5px]">
        <div className="mt-[30px] flex items-center justify-center mobile:justify-start mobile:overflow-x-scroll tablet:overflow-x-scroll tablet:justify-start ">
          {_.map(titleName, (item, i) => (
            <div key={`menu${i}`} className="ml-[50px] mobile:ml-[26px]">
              <MenuButton icon={item.icon} title={item.tile} />
            </div>
          ))}
        </div>
        <div className="mt-[30px] border border-slate-100" />
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center mobile:justify-start mobile:overflow-x-scroll tablet:overflow-x-scroll tablet:justify-start overflow-y-hidden h-[80px]">
            {_.map(IconName, (item, i) => (
              <div key={`menu${i}`} className="ml-[30px] mt-[10px] mobile:ml-[10px]">
                <SlideIcon icon={item.icon} title={item.tile} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[30px] border border-slate-100" />
      </div>

      <div className="mt-[30px] flex gap-4 ">
        <HighlightCard />
      </div>
    </div>
  )
}
