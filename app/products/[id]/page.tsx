
// function to get product by id 

import { ProductRespone } from "@/component/lib/type/products";


// NEXT_PUBLIC_API yk pi -> env
async function getProductById(id:string){
    const data=await fetch( `${process.env.NEXT_PUBLIC_API}/api/v1/products/${id}`
)
    const product=await data.json()
    return product;
}



export default async function ProductDetailPage(
    {params}
    :
    {params:Promise<{id:string}>}
) {

    // handle data form promise 
    const {id}=await params;

    const product:ProductRespone=await getProductById(id);
    console.log("product",product)
  return (
    // <h1>Product details : {params.id}</h1>
    <main>
        <section>
            <h1 className="text-center">Product Detail Page: {id}</h1>
           <h2>{product.title}</h2>
           <h2>{product.description}</h2>

        </section>
    </main>
  )
}
