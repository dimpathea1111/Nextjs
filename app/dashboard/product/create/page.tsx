import ProductForm from "@/app/components/forms/peoduct-form";

async function getCategories() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/categories",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Page() {
  const categories = await getCategories();

  return <ProductForm categories={categories} />;
}