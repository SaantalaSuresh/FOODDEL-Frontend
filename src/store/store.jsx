import { configureStore } from '@reduxjs/toolkit'
import { FoodItemList } from './FoodList'
import CartItem from './CartSlice'

export const store = configureStore({
  reducer: {
    foodMenuList:FoodItemList,
    CartItems:CartItem,
  },
})