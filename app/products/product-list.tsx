





import { ProductCard } from "@/component/i-tect-card/product-cards";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_API;

export default async function ProductList() {
  // Fetch data
  const response = await fetch(`${BASE_URL}/api/v1/products/`, {
    method: "GET",
    cache: "no-store", // optional for fresh data
  });

  const products = await response.json();

  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product: any, index: number) => (
          <Link href={`/products/${product.id}`} key={index}>
            <ProductCard
              images={[product.images[0]]}
              title={product.title}
              description={product.description}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
