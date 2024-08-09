"use client";

import { addCourse } from "@/data/redux/courseSlice/slice";
import store from "@/data/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import ReduxProvider from "./ReduxProvider";
import { ReduxWrapperProps } from "../../interfaces/courses";

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children, courses }) => {
  useEffect(() => {
    store.dispatch(addCourse(courses));
  }, [courses]);

  return (
    <Provider store={store}>
      <ReduxProvider>{children}</ReduxProvider>
    </Provider>
  );
};

export default ReduxWrapper;
