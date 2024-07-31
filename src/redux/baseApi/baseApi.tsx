import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["products", "order"],
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (data) => ({
        url: "/create-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    getProducts: builder.query({
      query: (query) => {
        // let queryString = "";
        // if (search! == "") {
        //   queryString += `searchTerm=${search}`;
        // }

        const params = new URLSearchParams();

        if (query?.search) {
          params.append("searchTerm", query.search);
        }

        if (query?.category) {
          params.append("category", query.category);
        }
        if (query?.sort) {
          params.append("sort", query.sort);
        }
        if (query?.availability) {
          params.append("availability", query.availability);
        }

        return {
          url: `/products/?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    deleteSingleProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    editProduct: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/product/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),

    addOrder: builder.mutation({
      query: (data) => ({
        url: "/create-order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    getOrders: builder.query({
      query: (query) => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductsMutation,
  useDeleteSingleProductMutation,
  useEditProductMutation,
  useAddOrderMutation,
  useGetOrdersQuery,
} = baseApi;
