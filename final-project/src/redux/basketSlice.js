import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: localStorage.getItem("value")
    ? JSON.parse(localStorage.getItem("value"))
    : 1,
  count: localStorage.getItem("count")
    ? JSON.parse(localStorage.getItem("count"))
    : 0,
  products: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  amount: localStorage.getItem("amount")
    ? JSON.parse(localStorage.getItem("amount"))
    : 0,
  singleAmount: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
      state.singleAmount +=
        action.payload.product?.price?.raw +
        action.payload.product?.variant_groups[action.payload.imgindex]
          ?.options?.[0]?.price.raw +
        action.payload.product?.variant_groups[action.payload.sizeindex]
          ?.options?.[0]?.price.raw;
      state.amount += state.singleAmount;
      state.singleAmount = 0;
      
    },
    decrement: (state, action) => {
      state.value -= 1;
      state.singleAmount +=
        action.payload.product?.price?.raw +
        action.payload.product?.variant_groups[action.payload.imgindex]
          ?.options?.[0]?.price.raw +
        action.payload.product?.variant_groups[action.payload.sizeindex]
          ?.options?.[0]?.price.raw;
      state.amount -= state.singleAmount;
      state.singleAmount = 0;
    },
    incrementCardQuan: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.imgindex === action.payload.imgindex &&
          item.sizeindex === action.payload.sizeindex
      );
      state.products[itemIndex].cartQuantity += state.value;
      state.singleAmount +=
        action.payload.product?.price?.raw +
        action.payload.product?.variant_groups[action.payload.imgindex]
          ?.options?.[0]?.price.raw +
        action.payload.product?.variant_groups[action.payload.sizeindex]
          ?.options?.[0]?.price.raw;
      state.amount += state.singleAmount;
      state.singleAmount = 0;
      state.count++;
    },
    decrementcardQuan: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.imgindex === action.payload.imgindex &&
          item.sizeindex === action.payload.sizeindex
      );
      state.products[itemIndex].cartQuantity -= state.value;
      state.singleAmount +=
        action.payload.product?.price?.raw +
        action.payload.product?.variant_groups[action.payload.imgindex]
          ?.options?.[0]?.price.raw +
        action.payload.product?.variant_groups[action.payload.sizeindex]
          ?.options?.[0]?.price.raw;
      state.amount -= state.singleAmount;
      state.singleAmount = 0;
      state.count--;
    },
    addBasket: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.imgindex === action.payload.imgindex &&
          item.sizeindex === action.payload.sizeindex
      );
      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += state.value;
        state.cartQuantity = state.products[itemIndex].cartQuantity;
        state.singleAmount +=
          (state.products[itemIndex].product?.price?.raw +
            state.products[itemIndex].product?.variant_groups?.[
              action.payload.imgindex
            ]?.options?.[0]?.price.raw +
            state.products[itemIndex].product?.variant_groups?.[
              action.payload.sizeindex
            ]?.options?.[0]?.price.raw) *
          state.value;
      } else {
        const product = { ...action.payload, cartQuantity: state.value };
        state.products.push(product);
        state.singleAmount +=
          action.payload.product?.price?.raw +
          action.payload.product?.variant_groups[action.payload.imgindex]
            ?.options?.[0]?.price.raw +
          action.payload.product?.variant_groups[action.payload.sizeindex]
            ?.options?.[0]?.price.raw;
      }
      state.amount += state.singleAmount;
      state.count += state.value;
      state.singleAmount = 0;
      state.value = 1;
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      localStorage.setItem("value", JSON.stringify(state.value));
      localStorage.setItem("count", JSON.stringify(state.count));
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    removeBasket: (state, action) => {
      return {
        ...state,
        products: state.products.filter((product) => {
          if (product.product.id !== action.payload.product.id) {
            state.count--;
            state.singleAmount +=
          (state.products.product?.price?.raw +
            state.products.product?.variant_groups?.[
              action.payload.imgindex
            ]?.options?.[0]?.price.raw +
            state.products.product?.variant_groups?.[
              action.payload.sizeindex
            ]?.options?.[0]?.price.raw) *
          state.value;
            state.singleAmount = 0;
            localStorage.setItem("cartItems", JSON.stringify(state.products));
            localStorage.setItem("value", JSON.stringify(state.value));
            localStorage.setItem("count", JSON.stringify(state.count));
            localStorage.setItem("amount", JSON.stringify(state.amount));
            return { ...state, products: [state.product] };
          }
        }),
      };
    },
  },
});

export const {
  increment,
  decrement,
  addBasket,
  removeBasket,
  incrementCardQuan,
  decrementcardQuan,
} = counterSlice.actions;

export default counterSlice.reducer;
