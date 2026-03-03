// fetch data from api 
// NEXT_PUBLIC_API  =https://api.escuelajs.co

// import ProductRe from "../../type/product";
import { ProductReques } from "../../type/product";


const baseAPI=process.env.NEXT_PUBLIC_API

//fetch product list
export async  function fetchAllProduct(){

    const data=await fetch(`${baseAPI}/api/v1/products`, {
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    const response=await data.json()
    return response;

}








// export async  function InsertProduct(product:ProductReques){

//     const data=await fetch(`${baseAPI}/api/v1/products`, {
//         method:"POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(product)
//     })
//     const response=await data.json()
//     return response;

// }



// export async function InsertProduct(data: ProductReques) {
//   const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   const resultText = await res.text(); // get raw response
//   console.log("InsertProduct response:", resultText);

//   const result = JSON.parse(resultText);

//   if (!res.ok) throw new Error(result.message || "Failed to create product");

//   return result;
// }


export async function InsertProduct(data: ProductReques) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message || "Failed to create product");

  return result;
}


// export async function InsertProduct(data:any){
//   return await fetch("https://api.escuelajs.co/api/v1/products",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body: JSON.stringify(data)
//   })
// }
