// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice  from '../features/count/counterSlice'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//         counter:counterSlice
//     },
//   })
// }

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "@/app/features/count/counterSlice"
import cardReducer from "@/app/features/cart/cartSlice"  // ✅ ADD THIS
import { productApi } from "@/lib/features/product/productApi"

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      card: cardReducer, // now it works
      [productApi.reducerPath]:[productApi.reducer]
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]