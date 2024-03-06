import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const apiSlice = createApi({
    reducerPath: '/',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    tagTypes: ['product'],
    endpoints: (builder) => {
        getProducts: builder.query({
            query: () => ({url: "/products"}),
            providesTags: ['product']
        })
    }
})

export const { useGetProductsQuery } = apiSlice