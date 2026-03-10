
// 'use client'
// import { useAppSelector } from "@/app/lib/hooks"


// export default function TextCard() {
//   return (
//     <div>TextCard</div>
//   )
// }

"use client"

import { useAppSelector, useAppDispatch } from "@/app/lib/hooks"
import { increment } from "@/app/features/count/counterSlice"

export default function TextCard() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <p className="text-center">Global state in TextCard: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
