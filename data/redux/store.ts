import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/slice";
import modalReducer from "./modalSlice/slice";
import tokenReducer from "./tokenSlice/slice";
import coursesReducer from "./courseSlice/slice";
import withdrawalsReducer from "./withdrawalSlice/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    token: tokenReducer,
    course: coursesReducer,
    withdrawal: withdrawalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
