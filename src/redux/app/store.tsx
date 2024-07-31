import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../baseApi/baseApi";
import fillterSlice from "../features/fillter/fillterSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filter: fillterSlice,
    cart: cartSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
