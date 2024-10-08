import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface HighlightItem {
  name: string
  message: string
  weight: number
  image_url: string[]
  post_url: string
}

interface HighlightState {
  data: HighlightItem[]
  loading: boolean
  error: string | null
}

const initialState: HighlightState = {
  data: [],
  loading: false,
  error: null,
}

// กำหนด async thunk สำหรับการดึงข้อมูล
export const fetchHighlightData = createAsyncThunk('highlights/fetchHighlightData', async () => {
  const timestamp = new Date().getTime() // Timestamp ปัจจุบันเพื่อบังคับให้แคชถูกข้าม
  const response = await axios.get(`https://pantip.com/api/forum-service/home/get_highlight?cache_bust=${timestamp}`, {
    method: 'get',
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'th-TH,th;q=0.9',
      cookie:
        'pantip_visitc=scgim02391u71f770h6wJ; ka_iid=BNNyPCwuRVtVhtQUfFs4T1; iUUID=89dd25022303e8e4331788c825d9d3ce; _cc_id=7d415a4f09e072b5f11e7bcdc8056d60; FCNEC=%5B%5B%22AKsRol8FJ8QtRjR_nnSedgQlbog2RlrRljIVwlDoI4SOvRbi3C-xEfc7Eg7dXx04UxdBHrP7rLq9AcSmXRBVRqu8rMj6R9TWD_xxHPcY0_bIazhJfxgJqP4BLpeEf_t4mMY7OHCCwdMdvJoP1SzoVu-ZVovky4lu0A%3D%3D%22%5D%5D; _gid=GA1.2.996316026.1723280792; panoramaId_expiry=1723889991091; panoramaId=cbdadc07fde86e6ca7b8af337dbf16d539380ce9dbecba92cc7514780a659626; panoramaIdType=panoIndiv; ptpolicy=1; real_referer=%3A%2F%2Fpantip.com%2Fs%2FtkQmv; rlr=42876364; pantip_ha=20240811201511; cto_bundle=n5mbC19sNkxZamIzamNEbjJBMmZoOGpOb2ZNaDFHV3ZGdDlENnJkN3NBV1h5Q2ltdThvQkRFSmZudkFodzBETWIlMkJWbm5zQXpUb1BQSU9weEdOWGclMkZGbjhNdW5yJTJGd3pwTlpHR2ZQVkk2bmdGRXJReVpTVndoSVBmRDdYOU5mZzROZmJHTkx5MFduRWNsUlV1NDgxOXF3YjBBbVJEUnk4eDAwaXlSQkhyNkJnY2UzVEVWcE5wVVdLTWI3a2JFQVQlMkJJNkZZMHVEQmJzODRrUDdxWkF5TEFuS0xQY3clM0QlM0Q; __gads=ID=a766883e53da4203:T=1713978938:RT=1723382111:S=ALNI_MYCo0_vH6oKCKyaE3P1EZhXZbuvzg; __gpi=UID=00000df95e62cb0a:T=1713978938:RT=1723382111:S=ALNI_Mb054D4f3teb2jP7IczblD-Ki2xDA; __eoi=ID=7a5a54b939e65552:T=1713978938:RT=1723382111:S=AA-AfjZ7rcQvnEegEJjC-gvEfLZM; _ga=GA1.1.633748368.1713978933; _ga_ZMC2WGXL4Z=GS1.1.1723461405.16.0.1723461405.60.0.0; ka_sid=',
      'if-none-match': 'W/"da9-arnzH0izEfokcUAUKy3MMm5yWWw"',
      priority: 'u=1, i',
      ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
      referer: 'https://pantip.com/',
      'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    },
  })
  return response.data
})

const highlightSlice = createSlice({
  name: 'highlights',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlightData.pending, (state) => {
        // ใช้การสร้าง state ใหม่แทนการเปลี่ยนแปลง state เดิม
        return { ...state, loading: true }
      })
      .addCase(fetchHighlightData.fulfilled, (state, action) => {
        return { ...state, loading: false, data: action.payload }
      })
      .addCase(fetchHighlightData.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message || 'Failed to fetch highlights' }
      })
  },
})

export default highlightSlice.reducer
