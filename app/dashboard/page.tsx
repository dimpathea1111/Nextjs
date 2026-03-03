// import ProductForm from "@/app/components/forms/product-form";
import ProductForm from "../components/forms/peoduct-form";
// import { CategoryType } from "@/app/type/category-res";
import { CategoryType } from "@/component/lib/type/category-res";

async function getCategories(): Promise<CategoryType[]> {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/categories",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function DashboardPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>
      <ProductForm categories={categories} />
    </div>
  );
}







// import Link from "next/link"
// import ProductForm from "../components/forms/peoduct-form"
// // import ProductForm from "../components/forms/peoduct-form"
// // import ProductListClient from "@/component/i-tect-card/product-list-client"
// export default function DashboardPage(){
//   return(
//     <div>
//       <h1>Dashboard Page</h1>
//       <Link href={"/photos/1"}>Go to photos</Link>
//       {/* <ProductForm/> */}
//       <ProductForm/>
      
//     </div>

   

//   )
// }
