import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string | null;
  email: string | null;
  role: string | null;
  courses: string[];
}

const initialState: UserState = {
  name: null,
  email: null,
  role: null,
  courses: [],
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
    addCourse: (state, action: PayloadAction<string>) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course !== action.payload
      );
    },
    clearUser: (state) => {
      state.name = null;
      state.email = null;
      state.role = null;
      state.courses = [];
    },
  },
});

export const {
  setName,
  setEmail,
  setRole,
  addCourse,
  removeCourse,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;
