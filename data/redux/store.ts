import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    course: coursesReducer,
    withdrawal: withdrawalsReducer,
    // cart: cartReducer,
  },
});

export default store;
