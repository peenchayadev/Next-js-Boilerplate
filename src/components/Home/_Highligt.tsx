import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { HighlightCard } from './Highligt-card'

interface HighlightData {
  id: string
  name: string
  image_url: string[]
}

export const Highlight = () => {
  const [highlights, setHighlights] = useState<HighlightData[]>([])

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const config = {
          method: 'get',
          url: 'https://pantip.com/api/forum-service/home/get_highlight',
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-language': 'th-TH,th;q=0.9',
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
            referer: 'https://pantip.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
          },
        }

        const response: AxiosResponse<HighlightData[]> = await axios.request(config)
        setHighlights(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchHighlights()
  }, [])

  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="w-full max-w-[1200px] px-[50px] mt-[30px] rounded-2xl overflow-hidden">
      <div className="py-4 px-6 flex items-center justify-between">
        <p className="text-xl titleH">Highlight</p>
      </div>
      <div className="py-4">
        {highlights.map((item, i) => (
          <div key={`highlight${i}`} className="px-[20px] flex gap-[30px]">
            <HighlightCard image={item.image_url} title={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}