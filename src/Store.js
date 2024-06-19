import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../src/feature/cart/counterSlice'
import cartModal from '../src/feature/cart/modalSlice'
 export const store = configureStore({
  reducer: {
    'carts': cartReducer,
    'modal':cartModal
    
  },
});

