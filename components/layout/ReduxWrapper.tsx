"use client";

import request from "@/utils/request";
import { Provider } from "react-redux";
import store from "@/data/redux/store";
import Navbar from "../structural/Navbar";
import Footer from "../structural/Footer";
import { useEffect } from "react";
import { addCourse } from "@/data/redux/courseSlice/slice";
import { openLoginModal } from "@/data/redux/modalSlice/slice";

type Course = {
  id: string;
  name: string;
};

type ReduxWrapperProps = {
  children: React.ReactNode;
  courses: Course[];
};

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children, courses }) => {
  const handle401Error = () => {
    store.dispatch(openLoginModal());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await request("/users", "GET", null, handle401Error);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    store.dispatch(addCourse(courses));
  }, [courses]);

  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
};

export default ReduxWrapper;
