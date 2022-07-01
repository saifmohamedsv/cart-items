import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems, count: 1, total: 0, isLoading: true
}
const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.count = 0
        },
        removeItem: (state, action) => {
            const itemID = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemID)
        },
        incrementItem: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            item.amount = item.amount + 1
        },
        decrementItem: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            item.amount = item.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.count = amount
            state.total = total
        }
    }
})

export const {clearCart, calculateTotals, decrementItem, incrementItem, removeItem} = cartSlice.actions
export default cartSlice.reducer