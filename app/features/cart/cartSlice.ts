// // app/features/cart/cartSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { Cart } from "@/app/lib/types"

// const initialState: Cart = {}

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<{ id: number }>) => {
//       const id = action.payload.id
//       state[id] = (state[id] || 0) + 1
//     },
//     removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
//       const id = action.payload.id
//       if (state[id] && state[id] > 1) state[id] -= 1
//       else delete state[id]
//     },
//   },
// })

// export const { addToCart, removeFromCart } = cartSlice.actions


import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartState = Record<number, number> // productId -> quantity

const initialState: CartState = {}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id
      state[id] = (state[id] || 0) + 1
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id
      if (state[id] && state[id] > 1) state[id] -= 1
      else delete state[id]
    },
  },
})


export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer