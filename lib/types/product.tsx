// app/lib/types.ts

export type Product = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

// Cart type: mapping product ID to quantity
export type Cart = Record<number, number>