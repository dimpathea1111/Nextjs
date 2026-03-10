

// "use client"

// import CartProductCard from "@/components/cart/CartProductCard"
// import { useState, useEffect } from "react"
// import { Product } from "@/lib/types/product"

// export default function CartPage() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data: Product[]) => {
//         setProducts(data)
//         setLoading(false)
//       })
//       .catch((err) => {
//         console.error("Failed to fetch products:", err)
//         setLoading(false)
//       })
//   }, [])

//   if (loading) return <p className="p-4 text-center">Loading products...</p>

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-4">
//       <h1 className="text-2xl font-bold">Your Cart</h1>

//       {products.map((product) => (
//         <CartProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import CartProductCard from "@/components/cart/CartProductCard"
import { Product } from "@/lib/types/product"

export default function CartPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {products.map(product => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
