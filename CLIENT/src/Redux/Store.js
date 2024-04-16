import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "./Slices/ModeSlice"

export const store = configureStore({
  reducer: {
    global : globalReducer,
  },
})