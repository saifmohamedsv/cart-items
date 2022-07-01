import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartReducer";
import modalSlice from "./reducers/modalReducer";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        modal: modalSlice
    }
})