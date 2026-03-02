import Link from "next/link"
// import ProductListClient from "@/component/i-tect-card/product-list-client"
export default function DashboardPage(){
  return(
    <div>
      <h1>Dashboard Page</h1>
      <Link href={"/photos/1"}>Go to photos</Link>
    </div>

   

  )
}
