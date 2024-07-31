import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const fillterSlice = createSlice({
  name: "fillter",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload?.toLowerCase() || "";
    },
  },
});

export const { searched } = fillterSlice.actions;

export default fillterSlice.reducer;
