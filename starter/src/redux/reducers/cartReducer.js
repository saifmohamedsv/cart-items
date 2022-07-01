import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    count: 1,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: () => {

        }
    }
})
export default cartSlice.reducer