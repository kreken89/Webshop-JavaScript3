import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import shoppingCartService from './shoppingCartService';


const initialState = {
    cart: [],
    error: null,
    loading: false,
    totalQuantity: 0,
    totalAmount: 0
}

const getTotalQuantity = (cart) => {
    let total = 0;
    cart.forEach(item => {
        total += item.quantity;
    });
    return total;
}
const getTotalAmount = (cart) => {
    
    let amount = 0
    cart.forEach( item => { amount += item.product.price * item.quantity;});
    return amount;
}



//  export const saveOrderToDatabase = createAsyncThunk("order" , async (order, {getState}) => {
//     try {
//         const state = getState()
//         const userId = state.user.userId

//         const database = firebase.database()
//         await database.ref('user/${userId}/orders').push(order)
//         return order
//     } catch(error){
//         throw new Error("fail to save order to data base")
//         t
//     }
// })

export const addOrder = createAsyncThunk('order/add', async (orderData, thunkAPI) => {
    try {
        return await shoppingCartService.createOrder(orderData)
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})



export const shoppingCartSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemRef = state.cart.find(item => item.product.id === action.payload.id);
            itemRef
            ? itemRef.quantity += 1
            : state.cart = [...state.cart, { product: action.payload, quantity: 1 }];

            state.totalAmount = getTotalAmount(state.cart);
            state.totalQuantity = getTotalQuantity(state.cart);
        },
        removeFromCart: (state, action) => {
            const itemRef = state.cart.find(item => item.product.id === action.payload);
            itemRef.quantity <= 1
            ? state.cart = state.cart.filter(item => item.product.id !== action.payload)
            : itemRef.quantity -= 1;

            state.totalAmount = getTotalAmount(state.cart);
            state.totalQuantity = getTotalQuantity(state.cart);
        },
        deleteAllFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.product.id !== action.payload);

            state.totalAmount = getTotalAmount(state.cart);
            state.totalQuantity = getTotalQuantity(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalAmount = getTotalAmount(state.cart);
            state.totalQuantity = getTotalQuantity(state.cart);
        },
        extraReduers:(builder)=> {
            builder
          .addCase(addOrder.pending, (state) => {
            state.loading = true;
          })
          .addCase(addOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = [...state.cart, action.payload];
          })
          .addCase(addOrder.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          })


          /* .addCase(getProducts.pending, (state) => {
            state.loading = true;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.orders = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          }) */
 
        }
       
        }

})

export const { addToCart, removeFromCart, deleteAllFromCart, clearCart, placeOrder, } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;