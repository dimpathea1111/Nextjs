
import ProductForm from "@/app/components/forms/peoduct-form"
import { GetCategories } from "@/app/components/lib/data/categories"

export default async function Page() {

  const categories = await GetCategories()

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Create Product
      </h1>

      <ProductForm categories={categories} />

    </div>
  )
}