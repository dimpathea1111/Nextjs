import { CategoryType } from "@/component/lib/type/category-res"

export async function GetCategories(): Promise<CategoryType[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories")

  if (!res.ok) throw new Error("Failed to fetch categories")

  return res.json()
}