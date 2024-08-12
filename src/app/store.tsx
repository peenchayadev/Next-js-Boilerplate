import { configureStore } from '@reduxjs/toolkit'

import highlightReducer from './highlightSlice'

const store = configureStore({
  reducer: {
    highlights: highlightReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
