"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, User, Package } from "lucide-react"
import { useAppSelector } from "@/app/lib/hooks"

export default function Navbar() {


  // const cart = useAppSelector((state) => state.cart ?? {})

  // const totalItems = Object.values(cart).reduce(
  //   (sum, qty) => sum + qty,
  //   0
  // )

  const cart = useAppSelector((state) => state.card)

const totalItems = cart
  ? Object.values(cart).reduce((a, b) => a + b, 0)
  : 0

  return (
 <nav className="w-full border-b bg-gray-300 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        <Link href="/" className="text-xl font-bold text-red-600">
          MyShop 
        </Link>
         
        <div className="flex gap-6 items-center">

          <Link
            href="/products"
            className="flex items-center gap-2 hover:text-red-500  font-bold text-gray-800"
          >
            <Package size={18} />
            Products
          </Link>

          <Link
            href="/users"
            className="flex items-center gap-2 hover:text-red-500 font-bold text-gray-800"
          >
            <User size={18} />
            Users
          </Link>

           <Link
      href="/cart"
      className="flex items-center gap-2 relative hover:text-red-500 font-bold text-gray-800"
    >
      <ShoppingCart size={18} />
      Cart

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 rounded">
          {totalItems}
        </span>
      )}
      </Link>

      {/* <Link href="/cart" className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {totalItems}
            </span>
          )}
        </Link>  */}

        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  )
}