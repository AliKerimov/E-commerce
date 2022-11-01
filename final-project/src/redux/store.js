import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import basketSlice from './basketSlice'
import categSlice from './categSlice'
import filterSlice from './filterSlice'
export const store = configureStore({
  reducer: {
    fetch:productsSlice,
    basket:basketSlice,
    categ:categSlice,
    filter:filterSlice,
  },
})