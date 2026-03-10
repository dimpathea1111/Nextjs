// import { increment } from "@/app/features/count/counterSlice";
// import { useAppSelector } from "@/app/lib/hooks";
// import { decrement } from "next/dist/server/lib/incremental-cache";

// export default function ICard(){
//     const count =useAppSelector ((state)=>state.counter.value);


//     return(
//       <section>
//           <p>Globle state in ICArd: {count}</p>
//           {/* <button onClick={()=>{}}>+</button> */}
//           <button onClick={()=>dispatch(increment)} >+</button>
//           <button
//           variant="destuctive" 
//           onClick={()=>dispatch(decrement)} >-</button>
//       </section>
//     )
// }



"use client"

import { increment, decrement } from "@/app/features/count/counterSlice"
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks"
import { Button } from "@/components/ui/button"

export default function ICard() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <section className="text-center">

      <p  className="text-center">Global state in ICard: {count}</p>

      <Button  className="text-center" onClick={() => dispatch(increment())}>
        +
      </Button>

      <Button  className="text-center"
        variant="destructive"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>

    </section>
  )
}