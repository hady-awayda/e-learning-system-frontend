import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/slice";
import tokenReducer from "./tokenSlice/slice";
import coursesReducer from "./courseSlice/slice";
import withdrawalsReducer from "./withdrawalSlice/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    course: coursesReducer,
    withdrawal: withdrawalsReducer,
    // cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
