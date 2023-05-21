import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './features/products/productListSlice'
<<<<<<< HEAD
import shoppingCartSlice  from './features/shoppingCart/shoppingCartSlice'
=======
import authSlice from './features/auth/authSlice'
>>>>>>> a7a6b45ce1978660894944f815b1f3a6f343d4f2

export const store = configureStore({
    reducer: {
        productList: productListSlice,
<<<<<<< HEAD
        shoppingCart: shoppingCartSlice,
=======
        auth: authSlice,
>>>>>>> a7a6b45ce1978660894944f815b1f3a6f343d4f2
    }
})

