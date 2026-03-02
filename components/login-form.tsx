"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

//  1. Validation Schema
const loginRule = z.object({
  email: z.string().email("Please provide a valid email address"),
  password: z
    .string()
    .min(8, "Password at least 8 characters long")
    .regex(/[a-z]/, "Password at least 1 lowercase")
    .regex(/[A-Z]/, "Password at least 1 uppercase")
    .regex(/[0-9]/, "Password at least 1 number")
    .regex(/[^a-zA-Z0-9\s]/, "Password at least 1 special character"),
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  //  2. Setup Form
  const form = useForm<z.infer<typeof loginRule>>({
    resolver: zodResolver(loginRule),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onLoginSubmit(data: z.infer<typeof loginRule>) {
    console.log("login data:", data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onLoginSubmit)}>
            <FieldGroup>

              {/*  Email */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Password */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>

                    <Input
                      {...field}
                      id="password"
                      type="password"
                    />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Buttons */}
              <Field>
                <Button type="submit">Login</Button>

                <Button variant="outline" type="button">
                  Login with Google
                </Button>

                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}












// "use client"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Field,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import *as z from "zod";
// import { Controller, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"

// //1. define login validation rule
// const loginRule=z.object({
//   email:z.email("Please provide a valid email address"),
//   password:z
//   .string()
//   .min(8, "Password at least 8 characters long")
//   .regex(/[a-z]/,"Password at least 1 lowercase")
//   .regex(/[A-Z]/,"Password at least 1 uppercase")
//   .regex(/[0-9]/,"Password at least 1 number")
//   .regex(/[^a-zA-Z0-9\s]/,"Password at least 1 special charecter")
// })

// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"div">) {


//   //2. set form with loginrule
//   const form=useForm<z.infer<typeof loginRule>>({
//     resolver: zodResolver(loginRule),
//     defaultValues:{
//       email: "",
//       password: ""
//     }
//   })

//   function onLoginSubmit(data:z.infer<typeof loginRule>){
//     console.log("login data:", data)

//   }

//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card>
//         <CardHeader>
//           <CardTitle>Login to your account</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={form.handleSubmit(onLoginSubmit)}>
//             <FieldGroup>
//               <Controller

//               name="email"
//               control={form.control}
//               render={(field , fieldState)=>(
//                  <Field data-imvalid={fieldState.invalid}>
//                 <FieldLabel htmlFor="email">Email</FieldLabel>
//                 <Input
//                 {...field}
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                 />
//                 {
//                   fieldState.invalid && (
//                   < FieldError errors={[fieldState.error]} />
//                   )
//                 }
//               </Field>
//               )}
              
//               />
//               {/* <Field>
//                 <FieldLabel htmlFor="email">Email</FieldLabel>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                 />
//               </Field> */}


//               <Controller
//                 name="password"
//                 control={form.control}
//                 render={(field, fieldState)=>(
//                 <Field data-invalid={fieldState.error}>
//                 <div className="flex items-center">
//                   <FieldLabel htmlFor="password">Password</FieldLabel>
//                   <a
//                     href="#"
//                     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//                 <Input 

//                 {...field}
//                 id="password" type="password"
//                 {
//                   fieldState.invalid &&(
//                     <FieldError errors={[fieldState.error]}
//                   )
//                 }  
//                 />
//               </Field>
//                 )}
//                 />

//               {/* <Field>
//                 <div className="flex items-center">
//                   <FieldLabel htmlFor="password">Password</FieldLabel>
//                   <a
//                     href="#"
//                     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//                 <Input id="password" type="password" required />
//               </Field> */}
//               <Field>
//                 <Button type="submit">Login</Button>
//                 <Button variant="outline" type="button">
//                   Login with Google
//                 </Button>
//                 <FieldDescription className="text-center">
//                   Don&apos;t have an account? <a href="#">Sign up</a>
//                 </FieldDescription>
//               </Field>
//             </FieldGroup>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
