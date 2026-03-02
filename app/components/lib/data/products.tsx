//fetch data from api 
// NEXT_PUBLIC_API  =https://api.escuelajs.co


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
