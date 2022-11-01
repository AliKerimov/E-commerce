import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  api  from "../API/api";
export const fetchcateg = createAsyncThunk("categ/fetchcateg", async (categ) => {
  try {
    const response = await api.get(categ);
    // console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
});
// Define the initial state using that  
const initialState= {
  categ: [],
  loading: false,
  error: "",
};

export const categSlice = createSlice({
  name: "categ",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcateg.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchcateg.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      categ: action.payload,
    }));
    builder.addCase(
      fetchcateg.rejected,
      (state) =>
        (state = {
          ...state,
          loading: false,
          error: "Error fetching categ",
        })
    );
  },
});

export default categSlice.reducer;
export const selectAllcateg = (state) => state.categ;
