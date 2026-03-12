"use client"


import { useGetProductsQuery } from "@/lib/features/product/productApi";

export default function ProductCard(){
    const {data, isLoading}=useGetProductsQuery()
    console.log('data RTK', data)
    return(
        <section>
            isLoading ? <p>Is loading ....</p> : <p>Data is ready</p>
        </section>
    )
}