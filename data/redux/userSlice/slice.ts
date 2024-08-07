import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  role: null,
  courses: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setName, setEmail, setRole } = userSlice.actions;

export default userSlice.reducer;
