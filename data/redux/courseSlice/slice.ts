// slices/coursesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  id: string;
  name: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },
    clearCourses: (state) => {
      state.courses = [];
    },
  },
});

export const { addCourse, removeCourse, clearCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
