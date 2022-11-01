import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: localStorage.getItem("allproducts")
  ? JSON.parse(localStorage.getItem("allproducts"))
  : [],
  categs:{},
}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCateg: (state,action) => {
       return {...state,categs:action.payload}
    },
    
  },
})
export const {  filterByCateg,setCateg } = filterSlice.actions;
export default filterSlice.reducer