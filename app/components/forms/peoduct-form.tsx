
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



  async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const formData = new FormData();
    formData.append("file", values.image[0]);

    const uploaded = await UploadImage(formData);

    if (!uploaded?.location) {
      throw new Error("Image upload failed");
    }

    const productData = {
      title: values.title,
      price: Number(values.price),
      description: values.description,
      categoryId: Number(values.categoryId),
      images: [uploaded.location],
    };

    console.log("Sending:", productData);

    const response = await InsertProduct(productData);

    alert("Successfull");
  } catch (error) {
    console.error(error);
    alert("Failed ");
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
            <Input type="number" {...field} />
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










// //2
// "use client";

// import { z } from "zod";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { Field, FieldLabel, FieldError } from "@/components/ui/field";

// import { CategoryType } from "@/component/lib/type/category-res";
// import { ProductReques } from "../type/product";
// import { UploadImage } from "../lib/data/upload";
// import { InsertProduct } from "../lib/data/products";

// type Props = {
//   categories?: CategoryType[];
// };

// const formSchema = z.object({
//   title: z.string().min(5, "Title must be at least 5 characters"),
//   price: z.string().min(1, "Price required"),
//   description: z.string().min(5, "Description must be at least 5 characters"),
//   categoryId: z.string().min(1, "Select category"),
//   image: z.any().refine((file) => file?.length === 1, "Image required"),
// });

// export default function ProductForm({ categories = [] }: Props) {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     try {
//       const formData = new FormData();
//       formData.append("file", values.image[0]);

//       const uploaded = await UploadImage(formData);

//       const productData: ProductReques = {
//         title: values.title,
//         price: Number(values.price),
//         description: values.description,
//         categoryId: Number(values.categoryId),
//         images: [uploaded.location],
//       };

//       const response = await InsertProduct(productData);

//       if (response?.id) {
//         alert("Product created successfully ✅");
//         form.reset();
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong ❌");
//     }
//   }

//   return (
//     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

//       {/* Title */}
//       <Controller
//         control={form.control}
//         name="title"
//         render={({ field, fieldState }) => (
//           <Field data-invalid={fieldState.invalid}>
//             <FieldLabel>Title</FieldLabel>
//             <Input {...field} />
//             {fieldState.error && (
//               <FieldError errors={[fieldState.error]} />
//             )}
//           </Field>
//         )}
//       />

//       {/* Price */}
//       <Controller
//         control={form.control}
//         name="price"
//         render={({ field, fieldState }) => (
//           <Field data-invalid={fieldState.invalid}>
//             <FieldLabel>Price</FieldLabel>
//             <Input type="number" {...field} />
//             {fieldState.error && (
//               <FieldError errors={[fieldState.error]} />
//             )}
//           </Field>
//         )}
//       />

//       {/* Description */}
//       <Controller
//         control={form.control}
//         name="description"
//         render={({ field, fieldState }) => (
//           <Field data-invalid={fieldState.invalid}>
//             <FieldLabel>Description</FieldLabel>
//             <Input {...field} />
//             {fieldState.error && (
//               <FieldError errors={[fieldState.error]} />
//             )}
//           </Field>
//         )}
//       />

//       {/* Category */}
//       <Controller
//         control={form.control}
//         name="categoryId"
//         render={({ field, fieldState }) => (
//           <Field data-invalid={fieldState.invalid}>
//             <FieldLabel>Category</FieldLabel>

//             <Select
//               value={field.value}
//               onValueChange={field.onChange}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select category" />
//               </SelectTrigger>

//               <SelectContent>
//                 {categories.map((cat) => (
//                   <SelectItem
//                     key={cat.id}
//                     value={String(cat.id)}
//                   >
//                     {cat.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {fieldState.error && (
//               <FieldError errors={[fieldState.error]} />
//             )}
//           </Field>
//         )}
//       />

//       {/* Image */}
//       <Controller
//         control={form.control}
//         name="image"
//         render={({ field, fieldState }) => (
//           <Field data-invalid={fieldState.invalid}>
//             <FieldLabel>Image</FieldLabel>
//             <Input
//               type="file"
//               onChange={(e) => field.onChange(e.target.files)}
//             />
//             {fieldState.error && (
//               <FieldError errors={[fieldState.error]} />
//             )}
//           </Field>
//         )}
//       />

//       <Button type="submit" className="w-full">
//         Submit
//       </Button>
//     </form>
//   );
// }



















// "use client";
// import {
//   Field,
//   FieldDescription,
//   FieldLabel,
//   FieldError,
// } from "@/components/ui/field";
// import {
//   InputGroup,
//   InputGroupInput,
//   InputGroupAddon,
// } from "@/components/ui/input-group";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { minLength, z } from "zod";
// import { useForm, Controller } from "react-hook-form";
// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { InsertProduct } from "../lib/data/products";
// import { CategoryType } from "../type/category-res";
// import { ProductReques } from "../type/product";

// export default function ProductForm(
//   {
//     categories
//   }:{categories:Promise<any>}

// ) {

//   const formSchema = z.object({
//     title: z.string().min(5, ""),
//     price: z.string()
//     .min(5, "Product titel at least 5 character long"),
//     description: z
//     .string()
//     .min(5, "Product titel at least 5 character long"),
//     categoryId: z.string(),
//     image: z.string(),
//     // submit: z.string().optional(),
//     // reset: z.string().optional(),
//   });



//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//       price: "",
//       description: "",
//       categoryId: "",
//       image: "",
//     },
//   });

// //  async function onSubmit(values: z.infer<typeof formSchema>) {
// //     // console.log(values);
// //     //real data 
// //     const mockProduct={
// //       title:"Mac mini",
// //       price:900,
// //       description:"Mac mini",
// //       categoryId:38,
// //       image:["https://api.escelajs.co/js/v1/files/401c.png"] //chang url new api
// //     }
// //     //call insert product to api function
// //     const resp=await InsertProduct(mockProduct)
// //     console.log("after insert product:- - -0, resp")
// //   }


//   const category:CategoryType[]=use(categories);
//   async function onSubmit (value:z.infer<typeof formSchema>){
//     console.log(value);
//     const imageFormData=new FormData();
//     imageFormData.append("file",value.image[0]);
//     const updoadProduct=await UploadImage(imageFormData);
//      console.log(updoadProduct);

//     const productData:ProductReques={
//       title: value.title,
//       price:value.price,
//       description: value.categoryId,
//       images: [updoadProduct.location]
//     };

//     const resData=await InsertProduct(productData);
//     if(!resData || resData.id){
//       form.reset();
//       alert("success");
//     }else{
//       alert("error")
//     }
//   }

//   function onReset() {
//     form.reset();
//     form.clearErrors();
//   }

//   return (
//     <form
//       onSubmit={form.handleSubmit(onSubmit)}
//       onReset={onReset}
//       className="space-y-8 @container"
//     >
//       <div className="grid grid-cols-12 gap-4">
//         <Controller
//           control={form.control}
//           name="title"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="flex w-auto!">Product Title</FieldLabel>

//               <Input
//                 key="text-input-0"
//                 placeholder="Macbook Pro 16 inch"
//                 type="text"
//                 className=""
//                 {...field}
//               />

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//         <Controller
//           control={form.control}
//           name="price"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="flex w-auto!">Price</FieldLabel>

//               <Input
//                 key="text-input-1"
//                 placeholder="2000USD"
//                 type="text"
//                 className=""
//                 {...field}
//               />

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//         <Controller
//           control={form.control}
//           name="description"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="flex w-auto!">
//                 Product Description
//               </FieldLabel>

//               <Input
//                 key="text-input-2"
//                 placeholder="Product Description here..."
//                 type="text"
//                 className=""
//                 {...field}
//               />

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//         <Controller
//           control={form.control}
//           name="categoryId"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="flex w-auto!">Category</FieldLabel>




//               <Select
//                 key="select-0"
//                 value={field.value}
//                 name={field.name}
//                 onValueChange={field.onChange}
//               >
//                 <SelectTrigger className="w-full ">
//                   <SelectValue placeholder="" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem key="Computer" value="Computer">
//                     Electronic
//                   </SelectItem>

//                   <SelectItem key="option2" value="option2"></SelectItem>
//                 </SelectContent>
//               </Select>

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//         <Controller
//           control={form.control}
//           name="image"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="flex w-auto!">Image upload</FieldLabel>

//               <Input
//                 key="file-input-0"
//                 placeholder=""
//                 type="file"
//                 className=""
//                 {...field}
//               />

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//         <Controller
//           control={form.control}
//           name="submit"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="hidden w-auto!">Submit</FieldLabel>

//               <Button
//                 key="submit-button-0"
//                 id="submit"
//                 name=""
//                 className="w-full"
//                 type="submit"
//                 variant="default"
//               >
//                 Submit
//               </Button>

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//         <Controller
//           control={form.control}
//           name="reset"
//           render={({ field, fieldState }) => (
//             <Field
//               className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
//               data-invalid={fieldState.invalid}
//             >
//               <FieldLabel className="hidden w-auto!">Reset</FieldLabel>

//               <Button
//                 key="reset-button-0"
//                 id="reset"
//                 name=""
//                 className="w-full"
//                 type="reset"
//                 variant="outline"
//               >
//                 Reset
//               </Button>

//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
//           )}
//         />
//       </div>
//     </form>
//   );
// }