"use client"

import Image from "next/image"
import { Product } from "@/lib/types/product"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import { addToCart, removeFromCart } from "@/app/features/cart/cartSlice"

type Props = { product: Product }

export default function CartProductCard({ product }: Props) {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(state => state.cart)
  const quantity = cart?.[product.id] ?? 0

  return (
    <div className="flex gap-4 items-center border p-4 rounded-lg shadow-sm">
      <div className="w-24 h-24 relative">
        <Image src={product.image} alt={product.title} fill className="object-cover rounded" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => dispatch(removeFromCart({ id: product.id }))}
          >
            -
          </button>

          <span className="px-2">{quantity}</span>

          <button
            className="px-2 py-1 bg-green-500 text-white rounded"
            onClick={() => dispatch(addToCart({ id: product.id }))}
          >
            +
          </button>
        </div>

        <span className="text-sm font-semibold">
          Total: ${quantity * product.price}
        </span>
      </div>
    </div>
  )
}