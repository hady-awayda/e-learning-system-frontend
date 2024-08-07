import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // course: coursesReducer,
    // withdrawal: withdrawalsReducer,
    // cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
