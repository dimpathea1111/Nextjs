// import { createSlice } from "@reduxjs/toolkit";
// import { initialize } from "next/dist/server/lib/render-server"

// //step to  create reducer
// // 1. define initiaState 
// export interface CounterState{
//     value:number;
// }

// const initialState:CounterState={
//     value:0
// }

// // 2. define reducer that contain login(action) of reducer
// export const counterSlice=createSlice({
//     name: "counter",
//     initialState,
//     reducers:{
//         // increment:(state, action)=>{
//         increment:(state)=>{
//             state.value+=1
//         },
//          decrement:(state)=>{
//             state.value -=1
//         }
//     }
// })

// // 3. export action of reducer 
// export const {increment}=counterSlice.actions

// // 4. export reducer 
// export default counterSlice.reducer


import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer