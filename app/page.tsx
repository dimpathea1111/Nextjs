import { Card } from "@/component/cards/card";
import { ProductCard } from "@/component/cards/product-cards";
import Image from "next/image";

export default function Home() {
  return (
      // <h1 className="text-2xl text-center">Hello word</h1>
     <main>
      <h1 className=" text-center">Hello word</h1>
      <Card
      source={"/image-1.jpg"}
      title={"Streamlining your design process today."}
      desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations"}
      />
       <Card
      source={"/image-1.jpg"}
      title={"Streamlining your design process today."}
      desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations"}
      />

      <ProductCard/>
     </main>
  );
}
