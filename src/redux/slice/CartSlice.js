import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            const itemIdToRemove = action.payload;
            return state.filter(item => item.id !== itemIdToRemove);
        }
    }
})

export const {add, remove} = CartSlice.actions

export default CartSlice.reducer