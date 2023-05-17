import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './features/products/productListSlice'

export const store = configureStore({
    reducer: {
        productList: productListSlice
        
    }
})