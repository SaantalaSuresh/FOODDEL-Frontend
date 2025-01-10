import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
           
            const itemExists = state.some(each => each._id === action.payload._id);

            if (!itemExists) {
               
                state.push({ ...action.payload, quantity: 1 });
            } else {
                
                const index = state.findIndex(item => item._id === action.payload._id);
                state[index].quantity += 1;
            }
        },
        removeFromCart(state, action) {
            const itemExists = state.some(each => each._id === action.payload._id);
            if(!itemExists){


            }else{
                const index = state.findIndex(item => item._id === action.payload._id);
                const quantity = state[index].quantity
                if(quantity === 1){
                    state.splice(index, 1)

                }else{
                    state[index].quantity -= 1
                }
            }
            
        },
        removeItemFromCart(state,action){
             return state.filter(item => item._id !== action.payload)
        }
    },
});

export const { addToCart,removeFromCart,removeItemFromCart } = CartSlice.actions;
export default CartSlice.reducer;
