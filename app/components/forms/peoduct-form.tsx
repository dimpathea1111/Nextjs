

"use client"

import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"

import { Field, FieldLabel, FieldError } from "@/components/ui/field"


import { CategoryType } from "../type/category-res"
import { UploadImage } from "../lib/data/upload"
import { InsertProduct } from "../lib/data/products"

type Props = {
  categories?: CategoryType[]
}

const formSchema = z.object({
  title: z.string().min(5),
  price: z.string().min(1),
  description: z.string().min(5),
  categoryId: z.string().min(1),
  image: z.any().refine((file) => file?.length > 0, "Image required"),
})

export default function ProductForm({ categories = [] }: Props) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: "",
      description: "",
      categoryId: "",
      image: undefined,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {

      // upload image
      const formData = new FormData()
      formData.append("file", values.image[0])

      const uploaded = await UploadImage(formData)

      const location = uploaded?.location

      if (!location) throw new Error("Image upload failed")

      // insert product
      await InsertProduct({
        title: values.title,
        price: Number(values.price),
        description: values.description,
        categoryId: Number(values.categoryId),
        images: [location],
      })

      alert("Product added successfully")

      form.reset()

    } catch (error) {
      console.error(error)
      alert("Failed to add product")
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >

      {/* title */}

      <Controller
        control={form.control}
        name="title"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Title</FieldLabel>
            <Input {...field} />
            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* price */}

      <Controller
        control={form.control}
        name="price"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Price</FieldLabel>
            <Input type="number" {...field} />
            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* description */}

      <Controller
        control={form.control}
        name="description"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Description</FieldLabel>
            <Input {...field} />
            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* category */}

      <Controller
        control={form.control}
        name="categoryId"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Category</FieldLabel>

            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>

              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem
                    key={cat.id}
                    value={String(cat.id)}
                  >
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>

            </Select>

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}

          </Field>
        )}
      />

      {/* image */}

      <Controller
        control={form.control}
        name="image"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Image</FieldLabel>

            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                field.onChange(e.target.files)
              }
            />

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}

          </Field>
        )}
      />

      <Button type="submit" className="w-full">
        Submit
      </Button>

    </form>
  )
}




