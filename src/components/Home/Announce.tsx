import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface AnnounceItem {
  announce_id: string
  category_name: string
  type: string
  display_message: string
  created_time: string
}

interface AnnounceResponse {
  data: AnnounceItem[]
}

export const Announce = () => {
  const [announceData, setAnnounceData] = useState<AnnounceItem[]>([])

  // Fetch announcement data
  const fetchAnnounceData = async () => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3',
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'th-TH,th;q=0.9',
        cookie:
          'pantip_visitc=scgim02391u71f770h6wJ; ka_iid=BNNyPCwuRVtVhtQUfFs4T1; iUUID=89dd25022303e8e4331788c825d9d3ce; *cc*id=7d415a4f09e072b5f11e7bcdc8056d60; FCNEC=%5B%5B%22AKsRol8FJ8QtRjR_nnSedgQlbog2RlrRljIVwlDoI4SOvRbi3C-xEfc7Eg7dXx04UxdBHrP7rLq9AcSmXRBVRqu8rMj6R9TWD_xxHPcY0_bIazhJfxgJqP4BLpeEf_t4mMY7OHCCwdMdvJoP1SzoVu-ZVovky4lu0A%3D%3D%22%5D%5D; *gid=GA1.2.996316026.1723280792; panoramaId*expiry=1723889991091; panoramaId=cbdadc07fde86e6ca7b8af337dbf16d539380ce9dbecba92cc7514780a659626; panoramaIdType=panoIndiv; ptpolicy=1; freq.5f73e63e47e7040e00000000=1; innity.dmp.cks.innity=1; PHPSESSID=md1gtsm64ckfe3esnt3igcl446; real_referer=%3A%2F%2Fpantip.com%2Fs%2FtkQmv; rlr=42876364; pantip_sessions=rHP54Aag4qjv0%2Fk7E5sKJhmAC5InDevuUNhz4trIW9MtBOdzneMgi7lbl3CwWS54c029W0wS9GngdsKaqDVU5ROUaE2bHQQtoj2szCGsCRafGLg9CzoV%2Bp9i838KY8LTl%2Bgut%2Fax3mKOplMO3zeP9nediyC91DvTLwlTJ%2Fmus5h%2FbcJIwSu%2BG6nugKQIzNma9whSMq5afYtDKP1WzE6PV9eb3EMsVSJuACR4v9aJtI1psfWoD0%2ByPL4BYCBVRVw7MLpIyynhgw9E5xfFJTYDyBXSGkGs3NUfLtNeWM3xXNZig0ns1T91gu7jvoG4D82rnxFgbHvw5ZWJakzAADlQbA%3D%3D; innity.dmp.254.sess=1.1723382109339.1723382109339.1723382109339; innity.dmp.254.sess.id=22292210.254.1723382109339; pantip_ha=20240811201511; *dc*gtm_UA-10478864-2=1; *ga=GA1.1.633748368.1713978933; ka*sid=E2trvQ7yAcyWTNe4xB3P2N; cto_bundle=n5mbC19sNkxZamIzamNEbjJBMmZoOGpOb2ZNaDFHV3ZGdDlENnJkN3NBV1h5Q2ltdThvQkRFSmZudkFodzBETWIlMkJWbm5zQXpUb1BQSU9weEdOWGclMkZGbjhNdW5yJTJGd3pwTlpHR2ZQVkk2bmdGRXJReVpTVndoSVBmRDdYOU5mZzROZmJHTkx5MFduRWNsUlV1NDgxOXF3YjBBbVJEUnk4eDAwaXlSQkhyNkJnY2UzVEVWcE5wVVdLTWI3a2JFQVQlMkJJNkZZMHVEQmJzODRrUDdxWkF5TEFuS0xQY3clM0QlM0Q; __gads=ID=a766883e53da4203:T=1713978938:RT=1723382111:S=ALNI_MYCo0_vH6oKCKyaE3P1EZhXZbuvzg; __gpi=UID=00000df95e62cb0a:T=1713978938:RT=1723382111:S=ALNI_Mb054D4f3teb2jP7IczblD-Ki2xDA; __eoi=ID=7a5a54b939e65552:T=1713978938:RT=1723382111:S=AA-AfjZ7rcQvnEegEJjC-gvEfLZM; innity.dmp.1.sess=1.1723382110265.1723382110265.1723382110265; innity.dmp.1.sess.id=22292210.1.1723382110265; *ga*ZMC2WGXL4Z=GS1.1.1723382108.13.1.1723382114.54.0.0',
        'if-none-match': 'W/"473-l5DJoghgLW2Jtkbey6SZMik6CBE"',
        priority: 'u=1, i',
        ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        referer: 'https://pantip.com/',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36',
      },
    }

    try {
      const response = await axios.request<AnnounceResponse>(config)
      console.log('API Response:', response.data)
      setAnnounceData(response.data.data || [])
    } catch (error) {
      console.error('Error fetching announce data:', error)
    }
  }

  useEffect(() => {
    fetchAnnounceData()
  }, [])

  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="mx-auto mt-[50px] w-full max-w-[1200px] overflow-hidden rounded-2xl border border-[#DDDDDD] bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-[#DDDDDD] px-6 py-4">
        <p className="text-xl font-semibold">Announce</p>
      </div>
      <div onClick={() => {}} className="py-4">
        {announceData.length > 0 ? (
          announceData.map((item) => (
            <div key={item.announce_id} className="py-4">
              <div className="pl-[20px]">
                <p>
                  <div dangerouslySetInnerHTML={{ __html: item.display_message }} />
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No announcements available.</p>
        )}
      </div>
    </div>
  )
}
