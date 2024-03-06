import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query() {
                return {
                    url: "/products",
                }
            },
            providesTags: ['product']
        }),
        filterProducts: builder.query({
            query(filters) {
                let queryString = ''
                for(let key in filters) {
                    queryString += `${key}=${filters[key]}&`
                }
                queryString = queryString.replaceAll(" ", "+").substring(0, queryString.length - 1)
                console.log(`http://localhost:3000/products?${queryString}`)
                return {
                    url: `/products?${queryString}`,
                    method: "GET"
                }
            },
            providesTags: ['product']
        }),
    })
})

export const { useGetProductsQuery, useFilterProductsQuery } = apiSlice