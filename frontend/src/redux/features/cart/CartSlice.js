import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

const initialState = {
    cartItems: [],
    totalPrice: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if (existingItem) {
                // existingItem.quantity++;
                Swal.fire({
                    title: "Already Added to the Cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    
                  });
            } else {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item has been added to cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        },
        removeFromCart: (state, action) => {
            const index = state.cartItems.findIndex(item => item._id === action.payload._id);
            if (index >= 0) {
                state.cartItems.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
        

    }

})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;