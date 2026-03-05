
"use client";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

// import { CategoryType } from "@/app/type/category-res";
import { CategoryType } from "@/component/lib/type/category-res";
import { ProductReques } from "@/component/lib/type/product-reques";
import { UploadImage } from "../lib/data/upload";
import { InsertProduct } from "../lib/data/products";


type Props = {
  categories?: CategoryType[];
};

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  price: z.string().min(1, "Price required"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  categoryId: z.string().min(1, "Select category"),
  image: z
    .any()
    .refine((file) => file && file.length > 0, "Image required"),
});

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
  });



//   async function onSubmit(values: z.infer<typeof formSchema>) {
//   try {
//     const formData = new FormData();
//     formData.append("file", values.image[0]);

//     const uploaded = await UploadImage(formData);

//     if (!uploaded?.location) {
//       throw new Error("Image upload failed");
//     }

//     const productData = {
//       title: values.title,
//       price: Number(values.price),
//       description: values.description,
//       categoryId: Number(values.categoryId),
//       images: [uploaded.location],
//     };

//     console.log("Sending:", productData);

//     const response = await InsertProduct(productData);

//     alert("Successfull");
//   } catch (error) {
//     console.error(error);
//     alert("Failed ");
//   }

// }

async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const formData = new FormData();
    formData.append("file", values.image[0]);

    const { location } = await UploadImage(formData);

    if (!location) throw new Error("Upload failed");

    await InsertProduct({
      ...values,
      price: Number(values.price),
      categoryId: Number(values.categoryId),
      images: [location],
    });

    alert("Success");
  } catch (error) {
    console.error(error);
  }
}



  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}
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

      {/* Price */}
      <Controller
        control={form.control}
        name="price"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Price</FieldLabel>
            <Input type="number" {...field} placeholder="3000$" />
            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* Description */}
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

      {/* Category */}
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
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                {categories.length === 0 ? (
                  <SelectItem value="0" disabled>
                    No categories found
                  </SelectItem>
                ) : (
                  categories.map((cat) => (
                    <SelectItem
                      key={cat.id}
                      value={String(cat.id)}
                    >
                      {cat.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>

            {fieldState.error && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      {/* Image */}
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

      <Button type="submit" className="w-full hover:bg-color-gray-500">
        Submit
      </Button>
    </form>
  );
}





