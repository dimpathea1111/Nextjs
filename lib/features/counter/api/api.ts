// import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const fakeStoreApi=createApi({
//     reducerPath:"productApi",
//     baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API}),
//     endpoint:()=>({

//     })

// })


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = fakeStoreApi;