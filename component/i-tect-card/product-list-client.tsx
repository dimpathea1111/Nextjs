
// "use client"
// import React, { use } from 'react'
// import { ProductRespone } from '../lib/type/products'
// import { Link } from 'lucide-react';
// import { ProductCard } from './product-cards';

// export default function ProductListClient(fetchProducts:{fetchProducts:Promise<ProductRespone[]>}) {
// //receved data from server to client component
// const products=use(fetchProducts)
// console.log('product in client', products)

//   return (
//     // <div>list-client</div>
//     <main className='container mx-auto'>
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//             {
//                 products.map((product, index)=>(
//                     <Link 
//                     href={'/products/${product.id}'}
//                     key={index}
//                     >
//                         <ProductCard
//                         key={index}
//                         images={[product.image]}
//                         title={product.title}
//                         description={product.description}
//                         price={product.price}
//                         />
//                     </Link>
//                 ))
//             }
//         </section>
//     </main>
//   )
// }

"use client"
import React, { use } from "react"
import Link from "next/link"
import { ProductCard } from "./product-cards"
import { ProductRespone } from "../lib/type/products"

export default function ProductListClient({
  fetchProducts,
}: {
  fetchProducts: Promise<ProductRespone>
}) {
  const products = use(fetchProducts)

  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard
              images={product.images} 
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}