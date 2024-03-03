import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./features/Product/productListSlice"

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})