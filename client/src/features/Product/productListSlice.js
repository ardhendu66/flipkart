import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProducts, fetchProductsByFilter } from "./productListAPI"

const initialState = {
    product: [],
    status: 'idle',
}

export const fetchProductsAsync = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await fetchProducts()
        return response
    }
    catch(err) {
        console.error("error: ", err.message)
        return err.message
    }
})

export const fetchProductsByFilterAsync = createAsyncThunk('products/fetchProductsByFilter', async (filter) => {
    try {
        console.log("filter: ", filter)
        const response = await fetchProductsByFilter(filter)
        console.log("Slice: ", response)
        return response
    }
    catch(err) {
        console.error("error: ", err.message)
        return err.message
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsByFilterAsync.fulfilled, function(state, actions) {
            state.product = []
            console.log("actions: ", actions.payload)
            state.product.push(actions.payload)
        })
        .addCase(fetchProductsAsync.pending, function(state) {
            state.status = 'loading'
        })
        .addCase(fetchProductsAsync.fulfilled, function(state, actions) {
            state.status = 'success'
            state.product.push(actions.payload)
        })
        .addCase(fetchProductsAsync.rejected, function(state, actions) {
            state.status = 'failed'
        })
    }
})

export const selectAllProducts = (state => state.products.product)
export const getProductsStatus = (state => state.products.status)

export default productSlice.reducer