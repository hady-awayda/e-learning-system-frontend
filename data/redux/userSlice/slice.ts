import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  email: string | null;
  role: string | null;
}

const initialState: UserState = {
  name: null,
  email: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    setRole: (state, action: PayloadAction<string | null>) => {
      state.role = action.payload;
    },
    clearUser: (state) => {
      state.name = null;
      state.email = null;
      state.role = null;
    },
  },
});

export const { setName, setEmail, setRole, clearUser } = userSlice.actions;

export default userSlice.reducer;
