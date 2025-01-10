// FoodList.js
import { createSlice } from '@reduxjs/toolkit';
import { food_list } from '../assets/frontend_assets/assets';

const foodItemSlice = createSlice({
  name: 'foodMenuList',
  initialState: food_list, // Set an initial state (empty array)
  reducers: {
    addFoodItem: (state, action) => {
      state.push(action.payload); 
    },
    removeFoodItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id); 
    },
    
  },
});


export const { addFoodItem, removeFoodItem } = foodItemSlice.actions;

export const FoodItemList = foodItemSlice.reducer;