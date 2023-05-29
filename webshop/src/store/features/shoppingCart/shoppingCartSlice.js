import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import shoppingCartService from './shoppingCartService';
import shoppingCartService from'./shoppingCartService'




 export const initialState = {
    orders: [],
    order:[],
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

// export const addOrder = createAsyncThunk('order/add', async (orderData, thunkAPI) => {
//     try {
//         return await shoppingCartService.createOrder(orderData)
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.message)
//     }
// })
export const addOrder = createAsyncThunk('order/add', async (orderData, thunkAPI) => {
  try {
    const order = await shoppingCartService.createOrder(orderData);
    await shoppingCartService.saveOrderToDatabase(order); // Save the order to the database

    return order;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getOrders = createAsyncThunk('product-list/getAll', async (uid, thunkAPI) => {
  try {
      return await shoppingCartService.getOrderAsync('orders', uid)
      
  } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
  }
})


export const shoppingCartSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           console.log(action.payload)
            const itemRef = state.cart.find(item => item.product.id === action.payload.id);
            const itemSize = state.cart.find(item => item.product.selectedSize === action.payload.selectedSize)
            itemRef && itemSize ? itemRef.quantity += action.payload.quantity
            : state.cart = [...state.cart, { product: action.payload, quantity: action.payload.quantity}];
            console.log(state.cart)
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

          placeOrder: (state, action) => {
          const order =  state.cart.map(item => { 
            return {id: item.product.id === action.product.id, quantity: quantity.id === action.payload.id}
          })
           return order
          },
        extraReducers:(builder)=> {
            builder
          .addCase(addOrder.pending, (state) => {
            state.loading = true;
          })
          .addCase(addOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = [...state.cart, action.payload];
            state.cart = [],
            state.order = action.payload
            state.totalAmount = 0; // Reset total amount and quantity
            state.totalQuantity = 0;
          })
          .addCase(addOrder.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
          })
          .addCase(getOrders.pending, (state) => {
            state.loading = true
          })
          .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.orders = action.payload
          })
          .addCase(getOrders.rejected, (state, action) => {
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

export const { addToCart, removeFromCart, deleteAllFromCart, clearCart, placeOrder } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
