"use client";

import store from "@/data/redux/store";
import { Provider } from "react-redux";
import { ReduxWrapperProps } from "../../interfaces/courses";
import useInitialData from "../../hooks/useInitialData";
import Navbar from "../structural/Navbar";
import Footer from "../structural/Footer";

const ReduxWrapper = ({ children, courses }: ReduxWrapperProps) => {
  useInitialData(courses);

  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
};

export default ReduxWrapper;
