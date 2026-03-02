import ProductListClient from "@/component/i-tect-card/product-list-client";
import { fetchAllProduct } from "./components/lib/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iShop - Home",
  description: "iShop provide all electronic devices",
};

export default function Home() {

  const products = fetchAllProduct();

  return (
    <main>
      <ProductListClient fetchProducts={products} />
    </main>
  );
}









// import { Card } from "@/component/i-tect-card/card";
// import { ProductCard } from "@/component/i-tect-card/product-cards";
// import Image from "next/image";
// import ProductListClient from "@/component/i-tect-card/product-list-client";
// import { fetchAllProduct } from "./components/lib/data/products";
// import { title } from "process";
// import { metadata } from "./layout";


// export const matadata:Metadata={
//   title:'iShop -Home',
//   dscription:'iShop provide all electronice devices'

// }
// export default function Home() {
//   const products=metadata

//   const products=fetchAllProduct()
//   return (
//       // <h1 className="text-2xl text-center">Hello word</h1>
//      <main>
//       {/* <h1 className=" text-center">Hello word</h1>
//       <Card
//       source={"/image-1.jpg"}
//       title={"Streamlining your design process today."}
//       desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations"}
//       />
//        <Card
//       source={"/image-1.jpg"}
//       title={"Streamlining your design process today."}
//       desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations"}
//       /> */}

//          {/* <main> */}
//         <ProductListClient fetchProducts={products}/>
        
//       {/* </main> */}

//      </main>
//   );
// }
