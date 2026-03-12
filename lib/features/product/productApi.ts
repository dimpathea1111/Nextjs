import { fakeStoreApi } from "../counter/api/api";
import { ProductRespone } from "@/app/components/type/product";

export const productApi = fakeStoreApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductRespone[], void>({
      query: () => `/api/v1/products`,
    }),
  }),
});

// Export hooks for UI usage
export const { useGetProductsQuery } = productApi;