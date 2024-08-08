import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  token: string | null;
};

const initialState: SliceState = {
  token: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
