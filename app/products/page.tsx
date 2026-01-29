import { ProductCard } from "@/component/i-tect-card/product-cards";
const BASE_URL=process.env.NEXT_PUBLIC_API


export default async function ProductPage(){
    const response= await fetch (`${BASE_URL}/api/v1/products/`,{
        method: "GET",
})
const products=await response.json()

   return(
     <main>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

        {
            products.map((product, index)=>
                <ProductCard
                key={index}
                // images={[product.image[0]}
                images={[product.image?.[0]]}
                title={product.title}
                description={product.description}
                price={product.price}
                />
            )
        }
        </section>
    </main>
   )


}