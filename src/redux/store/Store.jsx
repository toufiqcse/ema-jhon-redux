import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from '../../redux/cart/CartSlice';
import counterReducer from '../../redux/Counter/CounterSlice'
import productReducer from '../../redux/store/productSlice'
const store = configureStore({
    reducer: {
        cart: cartReducer,
        count: counterReducer,
        product: productReducer
    }
})
export default store;